const express = require("express");
const path = require('path');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Configurar EJS como motor de plantillas
app.set("view engine", "ejs");

// Rutas
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`El servidor es http://localhost:${PORT}`);
});
