var express = require('express');
var router = express.Router();
var Category = require('../controller/category');
var Product = require('../controller/productList');
var User = require('../controller/user');

//Category API
router.get('/category', Category.getAllCalagory);
router.get('/category/:categorySlug', Category.getAllSubCategory);

//Product List
router.post('/productList', Product.getProductList);

//User
router.post('/signUp', User.signUp);
router.post('/logIn', User.logIn);


module.exports = router;
