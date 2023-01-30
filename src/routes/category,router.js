const express = require('express');
const { categoryController } = require('../controllers');
const authorizationUser = require('../middlewares/authorizationUser');
const validateName = require('../middlewares/validateName');

const router = express.Router();

router.get('/', authorizationUser, categoryController.getAllCategories);
router.post('/', authorizationUser, validateName, categoryController.createCategory);

module.exports = router;
