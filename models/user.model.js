class UserModel {

  constructor({id, firstName, lastName}) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName() {
    const first = this.firstName.charAt(0).toUpperCase() + this.firstName.substring(1);
    const last = this.lastName.charAt(0).toUpperCase() + this.lastName.substring(1);
    return `${first} ${last}`;
  }

}

module.exports = UserModel;
