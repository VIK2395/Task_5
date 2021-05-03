class Comics {
  constructor({
    comicsId = 'Not provided',
    title = 'Not provided',
    logo = 'Not provided',
    publisher = 'Not provided',
    author = 'Not provided',
    characters = [],
    rating = null,
  }) {
    this.comicsId = comicsId;
    this.title = title;
    this.logo = logo;
    this.publisher = publisher; // publisherId
    this.author = author;
    this.characters = characters; // [characterId, ..]
    this.rating = rating;
  }
  enrich(database) {
    return {
      ...this,
      publisher: database.publishers.find((item) => item.publisherId === this.publisher),
      characters: this.characters.map((characterId) =>
        database.characters.find((item) => item.characterId === characterId)
      ),
    };
  }
}

module.exports = Comics;
