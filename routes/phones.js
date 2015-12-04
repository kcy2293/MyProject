/******************************
 * DECLARE MODULES
 ******************************/
var router = require('express').Router();
var fs = require('fs');

/******************************
 * "/phones" router info
 ******************************/
// GET "/phones/" : get all data
router.get('/', function(req, res, next) {
	res.json(JSON.parse(fs.readFileSync('./routes/phones/phones.json', 'utf8')));
});

module.exports = router;
