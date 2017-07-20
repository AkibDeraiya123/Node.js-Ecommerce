var express = require('express');
var router = express.Router();
var index = require('./controller/index');

router.get('/', index.index);
router.get('/users', index.user);

module.exports = router;
