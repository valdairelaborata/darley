var express = require('express');
var router = express.Router();
var controller = require('../controllers/itemMenu');

// Posso colocar só '/' aoinves de '/comarca' porque isso está setado em app.js no use

router.post('/',controller.incluir);
router.get('/',controller.listar);
router.get('/:codigo',controller.buscar);
router.put('/:codigo',controller.atualizar);
router.delete('/:codigo',controller.apagar);

module.exports = router;