var express = require('express');
var router = express.Router();
var controller = require('../controllers/evidencias');

router.post('/',controller.incluir);
router.get('/',controller.listar);
router.get('/:codigo',controller.buscar);
router.put('/:codigo',controller.atualizar);
router.delete('/:codigo',controller.apagar);

module.exports = router;