var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('users', {title:'Users', users:['Alice','Beta', 'Smegma']});
});

module.exports = router;
