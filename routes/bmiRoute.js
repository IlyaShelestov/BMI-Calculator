const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'bmiCalculator.html'));
});

router.post('/', (req, res) => {
    console.log(req.body);
})

module.exports = router;