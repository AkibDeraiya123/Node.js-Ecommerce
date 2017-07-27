const Admin = require('../model/adminModel');


exports.logIn = function(req, res, next) {
  const email = req.body.email ? req.body.email : '';
  const password = req.body.password ? req.body.password : '';

  if (email.trim() !== '' && password.trim() !== '')  {
    Admin.logInAdmin(email, password, (error, response) => {
      if (error) {
        res.json(error);
      } else {
        res.status(200).json(response);
      }
    });
  } else {
    const response = {
      status: 0,
      message: 'All Fields are require or Not null'
    };
    res.json(response);
  }
};

exports.addCategory = function(req, res, next) {
  const name = req.body.name ? req.body.name : '';

  if (name.trim() !== '')  {
    Admin.addCategory(name, (error, response) => {
      if (error) {
        res.json(error);
      } else {
        res.status(200).json(response);
      }
    });
  } else {
    const response = {
      status: 0,
      message: 'All Fields are require or Not null'
    };
    res.json(response);
  }
}

exports.deleteCategory = function(req, res, next) {
  const id = req.params.id ? req.params.id : '';

  if (id > 0 && id !== '') {
    Admin.deleteMainCat(id, (error, response) => {
      if (error) {
        res.json(error);
      } else {
        res.status(200).json(response);
      }
    });
  } else {
    const response = {
      status: 0,
      message: 'All Fields are require or Not null'
    };
    res.json(response);
  }
}

exports.deleteSubCategory = function(req, res, next) {
  const id = req.params.id ? req.params.id : '';

  if (id > 0 && id !== '') {
    Admin.deleteSubCat(id, (error, response) => {
      if (error) {
        res.json(error);
      } else {
        res.status(200).json(response);
      }
    });
  } else {
    const response = {
      status: 0,
      message: 'All Fields are require or Not null'
    };
    res.json(response);
  }
}

exports.editCategory = function(req, res, next) {
  const name = req.body.name ? req.body.name : '';
  const id = req.params.categoryId ? req.params.categoryId : '';

  if (name.trim() !== '' && (id > 0 && id !== ''))  {
    Admin.editCategory(name, id, (error, response) => {
      if (error) {
        res.json(error);
      } else {
        res.status(200).json(response);
      }
    });
  } else {
    const response = {
      status: 0,
      message: 'All Fields are require or Not null'
    };
    res.json(response);
  }
}

exports.addSubCategory = function(req, res, next) {
  const name = req.body.name ? req.body.name : '';
  const mainCatId = req.body.main_cat_id ? req.body.main_cat_id : '';

  if (name.trim() !== '' && mainCatId > 0 && mainCatId !== '')  {
    Admin.addSubCategory(name, mainCatId, (error, response) => {
      if (error) {
        res.json(error);
      } else {
        res.json(response);
      }
    });
  } else {
    const response = {
      status: 0,
      message: 'All Fields are require or Not null/ main category id is numeric (> 0)'
    };
    res.json(response);
  }
}

exports.editSubCategory = function(req, res, next) {
  const name = req.body.name ? req.body.name : '';
  const mainCatId = req.body.main_cat_id ? req.body.main_cat_id : '';
  const id = req.params.subCategoryId ? req.params.subCategoryId : '';

  if (name.trim() !== '' && (id > 0 && id !== ''))  {
    Admin.editSubCategory(name, mainCatId, id, (error, response) => {
      if (error) {
        res.json(error);
      } else {
        res.status(200).json(response);
      }
    });
  } else {
    const response = {
      status: 0,
      message: 'All Fields are require or Not null'
    };
    res.json(response);
  }
}

exports.changeUserStatus = function(req, res, next) {
  const id = req.body.id ? req.body.id : '';
  const status = req.body.status ? req.body.status : '';

  if (status.trim() !== '' && (id > 0 && id !== ''))  {
    Admin.changeUserStatus(id, status, (error, response) => {
      if (error) {
        res.json(error);
      } else {
        res.status(200).json(response);
      }
    });
  } else {
    const response = {
      status: 0,
      message: 'All Fields are require or Not null'
    };
    res.json(response);
  }
}

exports.removeUser = function(req, res, next) {
  const id = req.params.id ? req.params.id : '';

  if (id > 0 && id !== '') {
    Admin.removeUser(id, (error, response) => {
      if (error) {
        res.json(error);
      } else {
        res.status(200).json(response);
      }
    });
  } else {
    const response = {
      status: 0,
      message: 'All Fields are require or Not null'
    };
    res.json(response);
  }
}

exports.categoryList = function(req, res, next) {
  Admin.categoryList((error, success) => {
    if (error) {
      res.json(error);
    } else {
      res.json(success);
    }
  })
};

exports.subCategoryList = function(req, res, next) {
  Admin.subCategoryList((error, success) => {
    if (error) {
      res.json(error);
    } else {
      res.json(success);
    }
  })
};

exports.userList = function(req, res, next) {
  Admin.userList((error, success) => {
    if (error) {
      res.json(error);
    } else {
      res.json(success);
    }
  })
};

