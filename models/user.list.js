const UserModel = require('./user.model');

class UserList {

  constructor(data) {
    this.list = data.map(item => new UserModel(item));
  }

  getItemById(id) {
    return this.list.find(item => item.id === Number(id));
  }

  getNextId() {
    return this.list.reduce((acc, item) => {
      return (acc > item.id) ? acc : item.id;
    }, 0);
  }

  add(data) {
    console.log('data : ', JSON.stringify(data));
    //const dataWithId = {...data, id: this.getNextId()+1 };
    data.id = this.getNextId()+1;
    const user = new UserModel(data);
    if(user) {
      this.list = [...this.list, user];
    }
    return user;
  }

}

module.exports = UserList;
