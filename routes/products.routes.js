const express = require('express');
const router = express.Router();
const c = require('../controllers/products.controller');
const { authBearer } = require('../middlewares/auth.middleware');

router.get('/', c.getAll);
router.get('/:id', c.getById);
router.post('/', authBearer, c.create);
router.put('/:id', authBearer, c.update);
router.delete('/:id', authBearer, c.delete);

module.exports = router;
