var express = require('express');
var router = express.Router();

const data = {
  title: "LOONA yyxy",
  description: "Subunit composta por Yves, Chuu, Go Won e Olivia Hye.",
  year: new Date().getFullYear(),
  members: [
    {
      name: "Yves",
      animal: "Cisne",
      color: "Borgonha",
      image: "https://i.pinimg.com/736x/dd/bb/18/ddbb189cd01332852d0e7f4d94f2d920.jpg"
    },
    {
      name: "Chuu",
      animal: "Pinguim",
      color: "Pêssego",
      image: "https://i.pinimg.com/736x/db/72/75/db72750b7766c9a2abdcb00bd26c26bb.jpg"
    },
    {
      name: "Go Won",
      animal: "Borboleta",
      color: "Eden Green",
      image: "https://i.pinimg.com/736x/e7/e4/fb/e7e4fb894d11e98fd70d3c37abb0f9db.jpg"
    },
    {
      name: "Olivia Hye",
      animal: "Lobo",
      color: "Prata",
      image: "https://i.pinimg.com/736x/d0/9a/1d/d09a1d07703e6c0934f6028f0820c421.jpg"
    }
  ]
};


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { data: data });
});

module.exports = router;
