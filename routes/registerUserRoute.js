const express = require('express');
const { registerUser } = require('../login_register/registerUser');
const router = express.Router();
const User = require('../schemas_database/user');

router.post('/register', async( req, res ) => {
    const { name, surname, secondSurname, email, password, career, admin, typeUser } = req.body;
    const allEmails = await User.find({}, 'email');

    if( allEmails.find( user => user.email === email ) ) {
        res.status(401).json({ message: 'El correo ya está registrado' });

        return;
    }

    if( !name || !surname || !secondSurname || !email || !password || !career || !typeUser ) {
        res.status(401).json({ message: 'Faltan campos por llenar' });

        return;
    }

    try {
        const result = await registerUser( name, surname, secondSurname, email, password, career, admin, typeUser );

        if( result.register ) {
            console.log( result );

            res.json( result );
            return;
        }

        console.log( result );
        res.status(401).json( result );
    } catch ( error ) {
        console.error('Error al registrar el usuario:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
})

module.exports = router;