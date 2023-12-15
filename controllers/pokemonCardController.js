const {PokemonCard} = require('../models')
const typeimages = [`/images/Fire.png`, '/images/Water.png', '/images/Grass.png', '/images/Normal.png', '/images/Fighting.png', '/images/Psychic.png', '/images/Dark.png', '/images/Steel.png', '/images/Dark.png'];
const movetypes = [`/images/Fire.png`, '/images/Water.png', '/images/Grass.png', '/images/Normal.png', '/images/Fighting.png', '/images/Psychic.png', '/images/Dark.png', '/images/Steel.png', '/images/Dark.png'];
const resistances = [`/images/Fire.png`, '/images/Water.png', '/images/Grass.png', '/images/Normal.png', '/images/Fighting.png', '/images/Psychic.png', '/images/Dark.png', '/images/Steel.png', '/images/Dark.png'];
const weaknesss = [`/images/Fire.png`, '/images/Water.png', '/images/Grass.png', '/images/Normal.png', '/images/Fighting.png', '/images/Psychic.png', '/images/Dark.png', '/images/Steel.png', '/images/Dark.png'];


module.exports.viewAll = async function(req, res) {
    const pokemonCards = await PokemonCard.findAll();
    res.render('index', {pokemonCards});
}

module.exports.renderEditForm = async function(req, res) {
    const pokemonCard = await PokemonCard.findByPk(
        req.params.id
    );
    res.render('edit', {pokemonCard, typeimages, movetypes, resistances, weaknesss})
}

module.exports.updatePokemonCard = async function(req, res) {
    await PokemonCard.update(
        {
            name: req.body.name,
            hp: req.body.hp,
            typeimage: req.body.typeimage,
            pokemonimage: req.body.pokemonimage,
            movetype: req.body.movetype,
            movename: req.body.movename,
            movepower: req.body.movepower,
            movename2: req.body.movename2,
            movepower2: req.body.movepower2,
            resistance: req.body.resistance,
            weakness: req.body.weakness,
        },
        {
            where:
                {
                    id: req.params.id
                }
        });
    res.redirect('/');
}

module.exports.deletePokemonCard = async function (req, res) {
    await PokemonCard.destroy(
        {
            where:
                {
                    id: req.params.id
                }
        });
    res.redirect('/');
}

module.exports.renderAddForm = function(req, res){
    const pokemonCard = {
        name: "",
        hp: "HP",
        typeimage: typeimages[0],
        pokemonimage: "",
        movetype: movetypes[0],
        movetype2: movetypes[0],
        movename: "",
        movepower: "",
        movename2: "",
        movepower2: "",
        resistance: resistances[0],
        weakness: weaknesss[0],
    };
    res.render('add', {pokemonCard, typeimages, movetypes, resistances, weaknesss})
}

module.exports.addPokemonCard = async function(req, res) {
    await pokemonCard.create(
        {
            name: req.body.name,
            hp: req.body.hp,
            typeimage: req.body.typeimage,
            pokemonimage: req.body.pokemonimage,
            movename: req.body.movename,
            movepower: req.body.movepower,
            movename2: req.body.movename2,
            movepower2: req.body.movepower2,
            resistance: req.body.resistance,
            weakness: req.body.weakness,
        });
    res.redirect('/');
}
