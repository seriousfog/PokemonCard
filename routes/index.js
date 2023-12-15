var express = require('express');
var router = express.Router();
const pokemonCardController = require('../controllers/pokemonCardController')

/* GET home page. */
router.get('/', pokemonCardController.viewAll);
router.get('/edit/:id', pokemonCardController.renderEditForm);
router.post('/edit/:id', pokemonCardController.updatePokemonCard);
router.get('/delete/:id', pokemonCardController.deletePokemonCard)
router.get('/add', pokemonCardController.renderAddForm)
router.post('/add', pokemonCardController.addPokemonCard)
module.exports = router;

