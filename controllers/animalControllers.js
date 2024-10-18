const mysql = require("mysql");
const dbConfig = require('../models/database');

let conexion = mysql.createConnection(dbConfig);

exports.showRegistro = (req, res) => {
    res.render('registro');
};

exports.showRegistroAdopt = (req, res) => {
    res.render('registro_adopt');
};

exports.showCatalogo = (req, res) => {
    res.render('catalogo');
};

exports.showDonaciones = (req, res) => {
    res.render('donaciones');
};

exports.validarDatos = (req, res) => {
    const datos = req.body;
    
    let id = datos.idt;
    let nombre_adoptant = datos.nombre_adoptant;
    let ubicacion = datos.ubic;
    let vulnerab = datos.vulner;
    let ayuda = datos.ayud;

    const nuevoregistro = "INSERT INTO categorias (id, nombre_animal, ubicacion, vulnerabilidad, ayuda) VALUES (NULL, ?, ?, ?, ?)";
    conexion.query(nuevoregistro, [nombre_animal, ubicacion, vulnerab, ayuda], (error, rows) => {
        if (error) {
            console.error(error);
            return res.status(500).send("Error al insertar datos.");
        } else {
            console.log("Datos ingresados correctamente");
            return res.redirect('/catalogo'); // Redirigir a otra página después de insertar
            
        }
    });
};

exports.adoptarDatos = (req, res) => {
    const datos = req.body;
    
    let id = datos.ida;
    let nombre_adoptant = datos.nombre_adopt;
    let email = datos.email;
    let cel = datos.cel;
    let ubicacion = datos.ubic;

    const nuevoregistroa = "INSERT INTO adoptante (id, nombre_adoptant, email, celular, ubicacion) VALUES (NULL, ?, ?, ?, ?)";
    conexion.query(nuevoregistroa, [nombre_adoptant, email, cel, ubicacion], (error, rows) => {
        if (error) {
            console.error(error);
            return res.status(500).send("Error al insertar datos.");
        } else {
            console.log("Datos ingresados correctamente");
            return res.redirect('/catalogo'); // Redirigir a otra página después de insertar
            
        }
    });
};

exports.donacionesDatos = (req, res) => {
    const datos = req.body;
    
    let id = datos.idd;
    let nombre_donante = datos.nombre_donador;
    let donacion = datos.donacion;
    

    const nuevoregistrod = "INSERT INTO donaciones (id, nombre_donador, donacion) VALUES (NULL, ?, ?)";
    conexion.query(nuevoregistrod, [nombre_donante, donacion], (error, rows) => {
        if (error) {
            console.error(error);
            return res.status(500).send("Error al insertar datos.");
        } else {
            console.log("Datos ingresados correctamente");
            return res.redirect('/catalogo'); // Redirigir a otra página después de insertar
            
        }
    });
};