var express = require('express');
var router = express.Router();


/* GET shared skateboard list available now. */
router.get('/shared/list', function(req, res, next) {
  res.send('GET shared skateboard list available now.' + " API version:" + req.api_version);
});

/* Get list of skateboards. Including owned by me and borrowed. */
router.get('/list', function(req, res, next) {
  res.send('Get list of skateboard owned by me or borrowed by me.' + " API version:" + req.api_version);
});

module.exports = router;
