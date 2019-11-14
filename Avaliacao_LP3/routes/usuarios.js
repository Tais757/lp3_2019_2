const express = require('express');
const UsuarioController = require('../controllers/UsuarioController');


const router = express.Router();

router.get('/', UsuarioController.recuperarItens);

router.post('/', UsuarioController.salvar);

module.exports = router;