var express = require('express');

var router = express.Router();

var db = require('../models');

router.get('/', (req, res) => {
  db.burgers.findAll({
    order: [
      ['burger_name', 'ASC']
    ] 
  }).then(data => {
    var hbsObject = {
      burgers: data
    };
    res.render('index', hbsObject);        
    });
});

router.post('/api/burgers', (req, res) => {
  db.burgers.create({
    burger_name: req.body.name,
    devoured: false
  }).catch(err => {
    res.status(400).end(); 
  }).then(data => {
    res.status(200).json(data); 
  });
});

router.put('/api/burgers/:id', (req, res) => {
  db.burgers.update({
    devoured: true
  }, {
    where: {
      id: req.body.id
    }
  }).then(data => {
    res.json(data);
  });
});

module.exports = router;

