const express = require('express');
const { userAuthentication } = require('../login_register/authentication');
const router = express.Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await userAuthentication(email, password);
        
        if(result.authentication) {
            console.log(result);

            res.json(result);
            return;
        } 

        console.log( result );
        res.status(401).json(result);
    } catch (error) {
        console.error('Error al autenticar el usuario:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

module.exports = router;