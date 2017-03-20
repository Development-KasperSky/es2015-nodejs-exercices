const UserList = require('../models/user.list');
const data = require('../data/users.mock');

const userList = new UserList(data);

module.exports = function(req, res) {
  const user = userList.getItemById(req.params.id);
  res.render('pages/user', {
    user
  });
};
