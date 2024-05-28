let express = require('express');
let router = express.Router();
let stuModel = require('../models/student')

router.get('/', async function(req, res, next) {
  res.send({
    data: await stuModel.find({})
  });
});

module.exports = router;
