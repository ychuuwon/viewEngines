const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('views');
});

router.get('/package', (req, res) => {
    res.render('package');
});

  module.exports = router;