const model = require('../models');

module.exports = function(req, res) {
  const user = model.userList.getItemById(req.params.id);
  res.render('pages/user', {
    user
  });
};
