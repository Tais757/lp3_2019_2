const express = require('express');
const UsuarioController = require('../controllers/UsuarioController');

/**
 * Cria o roteador dos web services relacionados a Lista. 
 * Por meio do roteador será possível definir os nossos web services */
const router = express.Router();

/**
 * Rota para serviço: /listas
 * Verbo HTTP: GET
 */
//router.get('/', ListaController.recuperarTodas);

/**
 * Rota para o servidor: /listas
 * Verbo HTTP: POST
 */
router.post('/', UsuarioController.salvar);

/**
 * Rota para serviço: /listas/itens
 * Verbo HTTP: GET
 */
router.get('/itens', UsuarioController.recuperarItens);

module.exports = router;