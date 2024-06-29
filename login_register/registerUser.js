const bcrypt = require('bcrypt');
const User = require('../schemas_database/user');

const registerUser = async ( name, surname, secondSurname, email, password, career, admin, typeUser ) => {
    try {
        const hashedPassword = await bcrypt.hash( password, 10 );
        const newUser = new User({ name, surname, secondSurname, email, password: hashedPassword, career, admin, typeUser });

        await newUser.save();

        return ({ register: true, message: 'Usuario registrado correctamente' });
    } catch (error) {
        console.error('Error al registrar el usuario:', error);
        return { register: false, message: 'Error interno del servidor' };
    }
}

module.exports = { registerUser };