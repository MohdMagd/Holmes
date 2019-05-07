const express = require('express');
const router = express.Router();
const models = require('../models/index');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Get all devices
router.get('/all', (req, res) => models.device.findAll()
  .then(result => {
    res.json(result);
  })
  .catch(err => console.log(err))
);

// Get a device by id
router.get('/:id', (req, res) => {
  models.device.findAll({
    where: {
      id: {[Op.and] : [req.params.id]}
    }
  })
  .then((result) => {
    res.json(result);
  })
  .catch(err => console.log(err));
});

// Add a new device
router.post('/new', (req, res) => {
  models.device.create({make: req.body.make, modelName: req.body.modelName})
  .then((result) => {
    res.json(result);
  })
  .catch(err => console.log(err))
});

// Update an entry
router.put('/:id', (req, res) => {
  models.device.update({
    make: req.body.make
  }, {
    where: {
      id: {[Op.and] : [req.params.id]}
    }
  })
  .then((result) => {
    res.json(result);
  })
  .catch(err => console.log(err));
});

// Delete an entry
router.delete('/:id', (req, res) => {
  models.device.destroy({
    where: {
      id: {[Op.and] : [req.params.id]}
    }
  }).then(result => {
    res.json(result);
  });
});

module.exports = router;