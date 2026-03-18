const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.render('index', {
    lista: [
      "Sintaxe simples",
      "Separação de lógica e visual",
      "Uso de helpers",
      "Muito usado com Express",
      "Código mais limpo"
    ]
  });
  });

  module.exports = router;