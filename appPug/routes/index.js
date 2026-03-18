const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    lista: [
      "Sintaxe limpa",
      "Menos código",
      "Indentação estruturada",
      "Boa legibilidade",
      "Alta produtividade"
    ]
  });
});

module.exports = router;