var express = require('express');

var router = express.Router();

var db = require('../models');

router.get('/', (req, res) => {
  db.burgers.findAll({}).then(data => {
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
  }).then(data => {
    res.json(data);
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

