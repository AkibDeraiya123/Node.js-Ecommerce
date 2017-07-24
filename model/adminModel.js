const db = require('../db/db');
var slug = require('slug')

exports.logInAdmin = (email, password, callback) => {
  return db.query('select * from admin where isdelete = ? AND isactive = ? AND email = ? AND password = ?', ['0', '0', email, password], (error, rows) => {
    if (error) {
      const response = {
        status: 0,
        message: 'Something went wrong',
      };
      callback(response, null);
    } else if (rows.length === 1) {
      const response = {
        status: 1,
        message: 'Successfully Login',
      };
      callback(response, null);
    } else {
      const response = {
        status: 0,
        message: 'Email/Password Wrong',
      };
      callback(response, null);
    }
  });
}

exports.addCategory = (name, callback) => {
  const slug_name = slug(name);
  return db.query('select * from main_category where isdelete = ? AND name = ?', ['0', name], (error, rows) => {
    if (error) {
      const response = {
        status: 0,
        message: 'Something went wrong',
      };
      callback(response, null);
    } else if (rows.length === 1) {
      const response = {
        status: 0,
        message: 'Allready Added',
      };
      callback(response, null);
    } else {
      console.log(rows);
      return db.query('insert into main_category (name, slug) VALUES (?, ?)', [name, slug_name], (error, rows) => {
        if (error) {
          const response = {
            status: 0,
            message: 'Something went wrong',
          };
          callback(response, null);
        } else {
          const response = {
            status: 0,
            message: 'Successfully Added',
          };
          callback(null, response);
        }
      });
    }
  });
}

exports.editCategory = (name, id, callback) => {
  const slug_name = slug(name);
  return db.query('select * from main_category where isdelete = ? AND name = ? AND id != ?', ['0', '0', name, id], (error, rows) => {
    if (error) {
      const response = {
        status: 0,
        message: 'Something went wrong',
      };
      callback(response, null);
    } else if (rows.length === 1) {
      const response = {
        status: 0,
        message: 'Allready Added',
      };
      callback(response, null);
    } else {
      return db.query('update main_category SET name = ?, slug = ? where id = ?', [name, slug_name, id], (error, rows) => {
        if (error) {
          const response = {
            status: 0,
            message: 'Something went wrong',
          };
          callback(response, null);
        } else {
          const response = {
            status: 0,
            message: 'Successfully Update',
          };
          callback(null, response);
        }
      });
    }
  });
}

exports.addSubCategory = (name, mainCatId ,callback) => {
  return db.query('select * from sub_category where isdelete = ? AND name = ? AND main_cat_id', ['0', name, mainCatId], (error, rows) => {
    if (error) {
      const response = {
        status: 0,
        message: 'Something went wrong',
      };
      callback(response, null);
    } else if (rows.length === 1) {
      const response = {
        status: 0,
        message: 'Allready Added',
      };
      callback(response, null);
    } else {
      return db.query('insert into sub_category (name, main_cat_id) VALUES (?, ?)', [name, mainCatId], (error, rows) => {
        if (error) {
          const response = {
            status: 0,
            message: 'Something went wrong',
          };
          callback(response, null);
        } else {
          const response = {
            status: 1,
            message: 'Successfully Added',
          };
          callback(null, response);
        }
      });
    }
  });
}

exports.editSubCategory = (name, mainCatId, id, callback) => {
  const slug_name = slug(name);
  return db.query('select * from sub_category where isdelete = ? AND name = ? AND main_cat_id = ? AND id != ?', ['0', '0', name, mainCatId, id], (error, rows) => {
    if (error) {
      const response = {
        status: 10,
        message: 'Something went wrong',
      };
      callback(response, null);
    } else if (rows.length === 1) {
      const response = {
        status: 0,
        message: 'Allready Added',
      };
      callback(response, null);
    } else {
      return db.query('update sub_category SET name = ?, main_cat_id = ?, slug = ? where id = ?', [name, mainCatId, slug_name, id], (error, rows) => {
        if (error) {
          const response = {
            status: 0,
            message: 'Something went wrong',
          };
          callback(response, null);
        } else {
          const response = {
            status: 1,
            message: 'Successfully Updated',
          };
          callback(null, response);
        }
      });
    }
  });
}

exports.categoryList = function (callback) {
  return db.query('select * from main_category WHERE isdelete = ?', ['0'], (error, rows) => {
    if (error) {
      const response = {
        status: 0,
        message: 'Something went wrong',
      };
      callback(response, null);
    } else if (rows.length > 0) {
      const response = {
        status: 1,
        data: [],
      };

      rows.map((title) => {
        return response.data.push({
          id: title.id,
          name: title.name,
          slug: title.slug,
          adddate: title.date,
          isactive: title.isactive,
        });
      });

      callback(null, response);
    } else {
      const response = {
        status: 0,
        message: 'No Data Found',
      };
      callback(response, null);
    }
  })
}

exports.subCategoryList = function (callback) {
  return db.query('select * from sub_category WHERE isdelete = ?', ['0'], (error, rows) => {
    if (error) {
      const response = {
        status: 0,
        message: 'Something went wrong',
      };
      callback(response, null);
    } else if (rows.length > 0) {
      const response = {
        status: 1,
        data: [],
      };

      rows.map((title) => {
        return response.data.push({
          id: title.id,
          name: title.name,
          slug: title.slug,
          mainCatId: title.main_cat_id,
          adddate: title.date,
          isactive: title.isactive,
        });
      });

      callback(null, response);
    } else {
      const response = {
        status: 0,
        message: 'No Data Found',
      };
      callback(response, null);
    }
  })
}

exports.userList = function (callback) {
  return db.query('select * from registration WHERE isdelete = ?', ['0'], (error, rows) => {
    if (error) {
      const response = {
        status: 0,
        message: 'Something went wrong',
      };
      callback(response, null);
    } else if (rows.length > 0) {
      const response = {
        status: 1,
        data: [],
      };

      rows.map((title) => {
        return response.data.push({
          id: title.id,
          name: title.name,
          email: title.email,
          registration_date: title.reg_date,
          emailVerify: title.active,
          isactive: title.isactive,
        });
      });

      callback(null, response);
    } else {
      const response = {
        status: 0,
        message: 'No Data Found',
      };
      callback(response, null);
    }
  })
}

exports.deleteMainCat = (id, callback) => {
  return db.query('select * from main_category WHERE id = ? AND isdelete = ?', [id, '0'], (error, rows) => {
    if (error) {
      const response = {
        status: 0,
        message: 'Something went Wrong'
      };
      callback(response, null);
    } else if (rows.length > 0) {
      return db.query('update main_category SET isdelete = ? where id = ?', ['1', id], (error, rows) => {
        if (error) {
          const response = {
            status: 0,
            message: 'Something went wrong'
          };
          callback(response, null);
        } else {
          const response = {
            status: 1,
            message: 'Successfully Deleted'
          };
          callback(null, response);
        }
      })
    } else {
      const response = {
        status: 0,
        message: 'No resord found/ Allready Deleted'
      };
      callback(response, null);
    }
  });
}

exports.deleteSubCat = (id, callback) => {
  return db.query('select * from sub_category WHERE id = ? AND isdelete = ?', [id, '0'], (error, rows) => {
    if (error) {
      const response = {
        status: 0,
        message: 'Something went Wrong'
      };
      callback(response, null);
    } else if (rows.length > 0) {
      return db.query('update sub_category SET isdelete = ? where id = ?', ['1', id], (error, rows) => {
        if (error) {
          const response = {
            status: 0,
            message: 'Something went wrong'
          };
          callback(response, null);
        } else {
          const response = {
            status: 1,
            message: 'Successfully Deleted'
          };
          callback(null, response);
        }
      })
    } else {
      const response = {
        status: 0,
        message: 'No resord found/ Allready Deleted'
      };
      callback(response, null);
    }
  })
}
