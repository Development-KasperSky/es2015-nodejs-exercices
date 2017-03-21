const model = require('../models');

module.exports = function(req, res) {
  res.render('pages/index', {
    users: model.userList.list
  });
};
