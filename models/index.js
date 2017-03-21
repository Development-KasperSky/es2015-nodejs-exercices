const UserList = require('../models/user.list');
const data = require('../data/users.mock');

const userList = new UserList(data.users);

module.exports = {
  userList
};
