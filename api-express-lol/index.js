const express = require('express');
const routes = require('./routes/index');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();



app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // Permitir solicitudes desde cualquier origen
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization"); // Permitir los encabezados especificados
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE'); // Permitir los métodos HTTP especificados
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE'); // Permitir los métodos HTTP especificados
    next();
});


app.use('/api/lol',routes());
app.listen(2777);
