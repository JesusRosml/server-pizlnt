require('../connection_database'); 
const bcrypt = require("bcrypt");
const User = require("./user");

const insertUser = async() => {
    try {
        const hashedPassword = await bcrypt.hash("jesusperez", 10);

        const newUser = new User({
            name: "Angel Ricardo",
            surname: "Miss",
            secondSurname: "Blanco",
            email: "angelricardomiss@gmail.com",
            password: hashedPassword, 
            career: "Ingenieria en informática",
            admin: true,
            typeUser: "Profesor"
        });
        console.log("Usuario creado, intentando guardar...");

        await newUser.save();
        console.log("Usuario guardado");
    } catch (error) {
        console.error("Error al insertar usuario:", error.message);
    }
}

insertUser();