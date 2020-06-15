const path = require('path')
const express = require('express')

const pokemon = require('./routes/pokemonInfo')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

// server.use('/api/v1/pokemon', pokemon)

module.exports = server
