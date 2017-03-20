const UserModel = require('./user.model');

class UserList {

  constructor(data) {
    this.list = data.map(item => new UserModel(item));
  }

  getItemById(id) {
    return this.list.find(item => item.id === Number(id));
  }

}

module.exports = UserList;
