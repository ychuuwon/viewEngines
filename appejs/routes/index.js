const express = require('express');
const router = express.Router();

// rota principal /
router.get('/', (req, res) => {
  res.render('index', {
    vantagens: [
      "Fácil de aprender",
      "Permite usar JavaScript diretamente",
      "Boa integração com Express",
      "Renderização dinâmica",
      "Organização de código"
    ]
  });
});

module.exports = router;