const express = require('express');
const router = express.Router();

// Rota /ejs
router.get('/', (req, res) => {
    res.render('ejs'); // renderiza ejs.ejs
});

// Sub-rota /ejs/rotas
router.get('/rotas', (req, res) => {
    res.render('rotas'); // renderiza rotas.ejs
});

module.exports = router;