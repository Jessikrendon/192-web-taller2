'use strict'

//Estas variables llaman las extenciones que instalé
const express = require ('express');
const hbs = require('express-handlebars')
const bodyParser = require ('body-parser')
const app = express ()

//para ponerle una variable al puerto
const port = process.env.PORT || 5000

//para configurar la ruta a los archivos que va a usar  express
app.use(express.static('public'));
//para registrar el motor de render handlebars
app.engine('handlebars',hbs())
//para setear el motor de render a utilizar
app.set('view engine','handlebars')

//Esto siempre se pide en la documentación
app.use (bodyParser.urlencoded({extended: true}))
app.use (bodyParser.json())


app.get('/', (request, response) =>{
    console.log('funciona');
    var context = {
        titulo: 'Hamvorguesah',
        //Porque no estaban organizadas las carpetas de handlebars
        //layout:false
    }
    response.render('home',context);
} );


app.listen (port, function ()  {
    console.log (`API REST corriendo en http://localhost:${port}`)
});


//En package.json = Nodemon se pudo instalar de forma global, sin embargo una forma más limpia y elegante es usar los scripts de npm. Entonces hay que escribir lo que viene a continuación:
// "start":"nodemon index.js",
//Con esto uno escribe en la terminal "nmp start" y así corre el cod