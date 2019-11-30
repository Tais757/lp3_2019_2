const express = require('express');
const ArtigoController = require('../controllers/ArtigoController');


const router = express.Router();

/**
 * Rota para serviço: /artigos
 * Verbo HTTP: GET
 */
router.get('/', ArtigoController.recuperarArtigos);

/**
 * Rota para o serviço: /artigos/:id
 * Verbo HTTP: PUT
 */
router.put('/:id', ArtigoController.atualizar);

/**
 * Rota para o serviço: /artigos/:id
 * Verbo HTTP: DELETE
 */
router.delete('/:id', ArtigoController.remover);

/**
 * Rota para o servidor: /artigos
 * Verbo HTTP: POST
 */
router.post('/', ArtigoController.salvar);

/**
 * Rota para serviço: /artigos/itens
 * Verbo HTTP: GET
 */
router.get('/itens', ArtigoController.recuperarItens);

module.exports = router;