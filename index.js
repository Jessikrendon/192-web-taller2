'use strict'

//Estas variables llaman las extenciones que instalé
const express = require ('express');
const bodyParser = require ('body-parser')

const app = express ()

//para ponerle una variable al puerto
const port = process.env.PORT || 5000

//Esto siempre se pide en la documentación
app.use (bodyParser.urlencoded({extended: false}))
app.use (bodyParser.json())

app.listen (port, function ()  {
    console.log (`API REST corriendo en http://localhost:${port}`)
})


//En package.json = Nodemon se pudo instalar de forma global, sin embargo una forma más limpia y elegante es usar los scripts de npm. Entonces hay que escribir lo que viene a continuación:
// "start":"nodemon index.js",
//Con esto uno escribe en la terminal "nmp start" y así corre el cod