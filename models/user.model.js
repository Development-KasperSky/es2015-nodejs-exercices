class UserModel {

  constructor({id, firstName, lastName, description}) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.description = description;
  }

  getName() {
    if(this.firstName.length < 2 || this.lastName.length < 2) return `${this.firstName} ${this.lastName}`;
    const first = this.firstName.charAt(0).toUpperCase() + this.firstName.substring(1);
    const last = this.lastName.charAt(0).toUpperCase() + this.lastName.substring(1);
    return `${first} ${last}`;
  }

}

module.exports = UserModel;