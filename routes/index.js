var express = require('express');
var router = express.Router();
var Category = require('../controller/category');
var Product = require('../controller/productList');

//Category API
router.get('/category', Category.getAllCalagory);
router.get('/category/:categorySlug', Category.getAllSubCategory);

//Product List
router.post('/productList', Product.getProductList);

module.exports = router;
