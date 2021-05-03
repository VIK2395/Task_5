const Publisher = require('../models/sequelize/Publisher');

// sequelized
const publisher_get_all = async (req, res) => {
  try {
    const publishers = await Publisher.findAll();
    res.json(publishers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const publisher_get_one = async (req, res) => {
  try {
    const publisher = await Publisher.findById(req.params.id); // null

    if (!publisher) {
      return res.status(404).json({ message: 'Publisher with such an id not found' });
    }
    res.json({ publisher });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// sequelized
const publisher_post = async (req, res) => {
  try {
    const publisher = await Publisher.create({
      name: req.body.name,
      dateFounded: req.body.dateFounded,
      parantCompany: req.body.parantCompany,
      countryOfOrigin: req.body.countryOfOrigin,
    });

    res.status(201).json({ publisher });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const publisher_put = async (req, res) => {
  try {
    const publisher = await Publisher.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        dateFounded: req.body.dateFounded,
        parantCompany: req.body.parantCompany,
        countryOfOrigin: req.body.countryOfOrigin,
      },
      { new: true }
    );

    if (!publisher) {
      return res.status(404).json({ message: 'Publisher with such an id not found' });
    }

    res.json({ publisher });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const publisher_delete = async (req, res) => {
  try {
    const publisher = await Publisher.findByIdAndDelete(req.params.id);

    if (!publisher) {
      return res.status(404).json({ message: 'Publisher with such an id not found' });
    }
    res.json({ message: 'Publisher deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  publisher_get_all,
  publisher_get_one,
  publisher_post,
  publisher_put,
  publisher_delete,
};
