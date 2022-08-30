var express = require('express');
var router = express.Router();
var controller = require('../controllers/tiposdEvidencia');

router.post('/',controller.incluir);
router.get('/',controller.listar);
router.get('/:codigo',controller.buscar);
router.put('/:codigo',controller.atualizar);
router.delete('/:codigo',controller.apagar);
router.get('/:codigo/evidencias',controller.listarEvidenciasTipo);

module.exports = router;