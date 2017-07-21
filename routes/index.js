var express = require('express');
var router = express.Router();
var Category = require('../controller/category');

router.get('/category', Category.getAllCalagory);
router.get('/category/:categorySlug', Category.getAllSubCategory);

module.exports = router;
