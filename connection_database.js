require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conexión exitosa con la base de datos"))
  .catch((error) =>
    console.error("Error al conectar con la base de datos:", error)
  );

mongoose.connection.on("error", (error) =>
  console.error("Error de conexión con la base de datos:", error)
);

module.exports = mongoose.connection;