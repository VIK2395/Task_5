class Publisher {
  constructor({
    publisherId = 'Not provided',
    name = 'Not provided',
    dateFounded = 'Not provided',
    parantCompany = 'Not provided',
    countryOfOrigin = 'Not provided',
  }) {
    this.publisherId = publisherId;
    this.name = name;
    this.dateFounded = dateFounded;
    this.parantCompany = parantCompany;
    this.countryOfOrigin = countryOfOrigin;
  }
}

module.exports = Publisher;
