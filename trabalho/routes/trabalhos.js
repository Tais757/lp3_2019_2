const express = require('express');
const trabalhosController = require('../controllers/TrabalhosController');

const router = express.Router();

router.get('/', trabalhosController.recuperarTodas);

router.post('/', trabalhosController.salvar);

router.get('/itens', trabalhosController.recuperarItensPorDescricao);

module.exports = router;