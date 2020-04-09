var express = require('express');
var router = express.Router();
let welcome_messages = [
  'In raclette we trust',
  'There is no such thing as too much cheese',
  'We love cheese 🧀'
]

/* GET home page. */
router.get('/', function(req, res, next) {
  let mes_id = Math.round(Math.random()*(welcome_messages.length-1))
  console.log(mes_id);
  
  res.render('index', 
  { title: 'NodeJS Raclette Sandbox', welcome_message: welcome_messages[mes_id] });
});


/* POST suggest */
router.get('/suggest', (req, res, next) => {
  console.log(req.query.quote)
  res.redirect('/')
})


module.exports = router;
