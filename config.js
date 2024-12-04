const mongoose = require("mongoose");
require("dotenv").config();  // Asegúrate de cargar las variables de entorno

// Verifica si la URI está definida
if (!process.env.MONGODB_URI) {
    console.error("Error: La variable de entorno MONGODB_URI no está definida");
    process.exit(1);  // Detener el proceso si no hay URI
}

console.log('MongoDB URI:', process.env.MONGODB_URI); 

const dbconnect = () => {
    mongoose.set("strictQuery", true);
    
    mongoose.connect(process.env.MONGODB_URI)  // Eliminamos las opciones deprecated
        .then(() => console.log("Conexión exitosa a MongoDB"))
        .catch((err) => console.error("Error de conexión:", err.message));
};

module.exports = dbconnect;