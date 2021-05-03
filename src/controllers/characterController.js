const Character = require('../models/sequelize/Character');
const Superpower = require('../models/sequelize/Superpower');
const { Op } = require('sequelize');

// sequelized
const character_get_all = async (req, res) => {
  try {
    if (req.query.search === 'true' && req.query.nickname) {
      const characters = await Character.findAll({
        where: {
          nickname: {
            [Op.like]: '%' + req.query.nickname + '%',
          },
        },
        include: [Superpower],
      });
      return res.json({ characters });
    }

    if (req.query.sort === 'asc') {
      const characters = await Character.findAll({
        order: [['nickname', 'ASC']],
      });
      return res.json(characters);
    }

    if (req.query.sort === 'desc') {
      const characters = await Character.findAll({
        order: [['nickname', 'DESC']],
      });
      return res.json(characters);
    }

    const characters = await Character.findAll();
    res.json(characters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const character_get_one = async (req, res) => {
  try {
    const character = await Character.findOne({
      // or findByPk
      where: {
        id: req.params.id,
      },
      include: [Superpower],
    });

    if (!character) {
      return res.status(404).json({ message: 'Not found' });
    }
    res.json({ character });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// sequelized
const character_post = async (req, res) => {
  try {
    const character = await Character.create({
      nickname: req.body.nickname,
      image: `http://localhost:5000/${req.file.path}`,
      description: req.body.description,
      role: req.body.role,
    });

    res.status(201).json({ character });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const character_put = async (req, res) => {
  try {
    const character = await Character.findByIdAndUpdate(
      req.params.id,
      {
        nickname: req.body.nickname,
        image: `http://localhost:5000/${req.file.path}`,
        description: req.body.description,
        superpowers: req.body.superpowers,
        role: req.body.role,
      },
      { new: true }
    );

    if (!character) {
      return res.status(404).json({ message: 'Character with such an id not found' });
    }

    res.json({ character });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const character_delete = async (req, res) => {
  try {
    const character = await Character.findByIdAndDelete(req.params.id);

    if (!character) {
      return res.status(404).json({ message: 'Character with such an id not found' });
    }
    res.json({ message: 'Character deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  character_get_all,
  character_get_one,
  character_post,
  character_put,
  character_delete,
};

// const character = characters.find((c) => c.id === parseInt(req.params.id))
// if (!character) res.status(404).json({ message: 'Character with such an id not found' });
// const index = characters.indexOf(character)
// characters.splice(index, 1);
// character = new Character(req.body);
// character.id = 'character_05'
// res.json(character);

// if (!req.body.characterId) {
//   return res.status(400).json({ message: 'characterId is not provided' });
// }
// if (req.params.id !== req.body.characterId) {
//   return res.status(400).json({ message: "characterId doesn't match" });
// }

// PUT - fully overwrite a model, PATCH - just modifies a field of a model

// console.log(req.file);
// console.log(req.body);
