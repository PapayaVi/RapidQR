const express = require('express'),
router = express.Router(),
_googlechartQR = require('../controller/googlechartQR')


router.get('/',_googlechartQR.createQR);

module.exports = router;