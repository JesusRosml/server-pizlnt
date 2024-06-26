const bcrypt = require('bcrypt');
const User = require('../schemas_database/user'); 

const userAuthentication = async ( email, password ) => {
    try {
        const user = await User.findOne({ email }).select('password');
        
        if ( !user ) return { message: 'Usuario no encontrado', authentication: false};

        const passwordMatch = await bcrypt.compare( password, user.password );

        if ( passwordMatch ) {
            const user = await User.findOne({ email }).select('-password');

            return { message: 'Usuario autenticado', authentication: true, user };
        } 

        return { message: 'Contraseña incorrecta', authentication: false };
    } catch (error) {
        console.error('Error al autenticar el usuario:', error);
        return false;
    }
};

module.exports = { userAuthentication };