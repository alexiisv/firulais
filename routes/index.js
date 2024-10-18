const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animalControllers');

// Ruta inicial
router.get("/", (req, res) => {
    res.render("inicio");
});

// Rutas de registro y catálogo
router.get('/registro', animalController.showRegistro);
router.get('/registro_adopt', animalController.showRegistroAdopt);
router.get('/catalogo', animalController.showCatalogo);
router.get('/donaciones', animalController.showDonaciones);

// Ruta para validar datos
router.post("/validar", animalController.validarDatos);
router.post("/adoptar", animalController.adoptarDatos);
router.post("/donar", animalController.donacionesDatos);

module.exports = router;
