const UserModel = require('./user.model');

class SmartUserModel extends UserModel {

  constructor(user) {
    super(user);
    this.role = user.role;
    this.birthYear = user.birthYear;
  }

  getSmartSentence() {
    return `I am smart and I am ${this.role}. My name is ${this.getName()}.`;
  }

  getBirthSentence() {
    return `I was born ${2017 - this.birthYear} years ago.`;
  }

  getRole() {
    return this.role.charAt(0).toUpperCase() + this.role.substring(1);
  }

}

module.exports = SmartUserModel;
