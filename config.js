const mongoose = require("mongoose");
require ("dotenv").config()

const dbconnect =()=> {
    mongoose.set("strictQuery", true)
    mongoose.connect(process.env.MONGODB_URL)
    .then((succes) => console.log("Conexion exitosa"))
    .catch((err) => console.log(err.message));
}

module.exports = dbconnect;
