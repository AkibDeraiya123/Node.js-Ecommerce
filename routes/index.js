var express = require('express');
var router = express.Router();
var Category = require('../controller/category');
var Product = require('../controller/productList');
var User = require('../controller/user');
var Admin = require('../controller/admin');

/******** FrontEnd API ********/

//Category API
router.get('/category', Category.getAllCalagory);
router.get('/category/:categorySlug', Category.getAllSubCategory);

//Product List
router.post('/productList', Product.getProductList);

//User
router.post('/signUp', User.signUp);
router.post('/logIn', User.logIn);
/******** BackEnd API ********/

//admin
router.post('/admin/logIn', Admin.logIn);
// router.get('/admin/dashboard', Admin.dashboard);

router.get('/admin/userList', Admin.userList);
router.post('/admin/userList/status', Admin.changeUserStatus); // For Approve/Disapprove User
router.delete('/admin/removeUser/:id', Admin.removeUser);


router.get('/admin/categoryList', Admin.categoryList);
router.post('/admin/addCategory', Admin.addCategory);
router.post('/admin/editCategory/:categoryId', Admin.editCategory);
router.delete('/admin/category/:id', Admin.deleteCategory);

router.get('/admin/subCategoryList', Admin.subCategoryList);
router.post('/admin/addSubCategory', Admin.addSubCategory);
router.post('/admin/editSubCategory/:subCategoryId', Admin.editSubCategory);
router.delete('/admin/Subcategory/:id', Admin.deleteSubCategory);



module.exports = router;
