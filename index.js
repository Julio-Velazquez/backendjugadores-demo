const express = require('express')
const app = express()
const port = 4000

//Vamos hacer algunas importaciones npm i cors _______________

const cors = require("cors");

//_____________________________________________________________

//Importaremos Dotenv para la base de datos que creeamos con Mongo

require('dotenv').config()

//Importamos mongoose
const {dbConnection} = require("./src/database/config");

// Invocamos a la funcion para la base de datos 

dbConnection();

//__________________________________

//Middlewers

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.status(200).json({
    mensaje: "Bienvenido a la API",
    autor: "Julio Velazquez",
    version: "1.0.0",
  });

});

//rutas de la API
app.use("/api/jugadores", require("./src/routes/jugadores.routes"));
app.use("/api/jugadores", require("./src/routes/jugadores.routes"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})


//Para verificar que jale el .env
//console.log(process.env.MONGODB_URI)

