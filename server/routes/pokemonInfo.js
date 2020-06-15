const express = require('express')
const router = express.Router()
const request = require('superagent')


router.get('/', (req,res) => {
    request.get('https://pokeapi.co/api/v2/pokemon/?limit=151')
    .then(pokemon => {
        res.json(pokemon.body.results)
    })
})

router.get('/:url', (req,res) => {
    request.get(url)
    .then(pokeName => {
        
        res.json({
            name: pokeName
        })
    })
})

module.exports = router