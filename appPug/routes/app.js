const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('app');
});

router.get('/resumo', (req, res) => {
    res.render('resumo');
});

module.exports = router;