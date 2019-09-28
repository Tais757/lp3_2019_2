const express = require('express');
const TrabalhosController = require('../controllers/TrabalhosController');

const router = express.Router();

/**
 * Rota para serviço: /listas
 * Verbo HTTP: GET
 */
router.get('/trabalhos', TrabalhosController.recuperarTodas);

/**
 * Rota para o servidor: /listas
 * Verbo HTTP: POST
 */
router.post('/trabalhos', TrabalhosController.salvar);

/**
 * Rota para serviço: /listas/itens
 * Verbo HTTP: GET
 */
router.get('/itens', TrabalhosController.recuperarItensPorDescricao);

module.exports = router;