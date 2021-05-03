const Character = require('../models/Character');
const Comics = require('../models/Comics');
const Publisher = require('../models/Publisher');
const Review = require('../models/Review');
const User = require('../models/User');

const charactersData = require('./initDataForCollections/charactersData');
const comicsesData = require('./initDataForCollections/comicsesData');
const publishersData = require('./initDataForCollections/publishersData');
const reviewsData = require('./initDataForCollections/reviewsData');
const usersData = require('./initDataForCollections/usersData');

// init data
const data = {
  characters: [],
  comicses: [],
  publishers: [],
  reviews: [],
  users: [],
};

const characters = charactersData.map((entity) => new Character(entity));
const comicses = comicsesData.map((entity) => new Comics(entity));
const publishers = publishersData.map((entity) => new Publisher(entity));
const reviews = reviewsData.map((entity) => new Review(entity));
const users = usersData.map((entity) => new User(entity));

data.characters = characters;
data.comicses = comicses;
data.publishers = publishers;
data.reviews = reviews;
data.users = users;

class Database {
  constructor() {
    this._data = data;
  }

  get getData() {
    return this._data;
  }

  // other methods to work with db (sort/filter)
}

module.exports = new Database();
