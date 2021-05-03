class User {
  constructor({
    userId = 'Not provided',
    name = 'Not provided',
    lastName = 'Not povided',
    image = 'Not provided',
  }) {
    this.userId = userId;
    this.name = name;
    this.lastName = lastName;
    this.image = image;
  }
}

module.exports = User;
