const express = require('express')

const route = express.Router()

route.get('/', (req, res) => res.render("index"))
route.get('/rooms', (req, res) => res.render("rooms"))
route.get('/create-pass', (req, res) => res.render("create-pass"))
//route.get('/undership.com', (req, res) => res.render("index"))

module.exports = route