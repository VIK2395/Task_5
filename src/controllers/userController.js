const User = require('../models/User');
const users = require('../database/Database').getData.users;

const user_get_all = (req, res) => {
  res.json(users);
};

const user_get_one = (req, res) => {
  const index = users.findIndex((item) => item.userId === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'User with such an id not found' });
  }
  res.json(users[index]);
};

const user_post = (req, res) => {
  const user = new User(req.body);
  users.push(user);
  res.status(201).json(user);
};

// PUT - fully overwrite a model, PATCH - just modifies a field of a model
const user_put = (req, res) => {
  const index = users.findIndex((item) => item.userId === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'User with such an id not found' });
  }
  users[index] = new User(req.body);
  res.json(users[index]);
};

const user_delete = (req, res) => {
  const index = users.findIndex((item) => item.userId === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'User with such an id not found' });
  }
  users.splice(index, 1);
  res.json({ message: 'User deleted' });
};

module.exports = {
  user_get_all,
  user_get_one,
  user_post,
  user_put,
  user_delete,
};
