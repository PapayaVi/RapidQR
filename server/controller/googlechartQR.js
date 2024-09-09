const axios = require('axios');
require('dotenv').config()


exports.createQR = (req, res) => {
        var text = req.query.text
        res.send(`https://qrcode.tec-it.com/API/QRCode?data=${encodeURIComponent(text)}`)
};
