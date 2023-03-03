//Dependencias
const express = require("express")
require("dotenv").config()
const bodyParser = require("body-parser")
const routeCitas = require("../API_citas_medicas/router/citas")

//Variables
const app = express()

//Configuraciones
const port = process.env.PORT

app.use(
    bodyParser.json({
        limit: "50mb"
    })
)

app.use(
    bodyParser.urlencoded({
        limit: "50mb",
        extended: "true"
    })
)

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});

app.use(routeCitas)

app.listen(port, () => {
    console.log(`La aplicación esta en linea por el puerto ${port}`)
})