const express = require('express')
const route = require('./route')
const path = require('path')

const server = express() //O "express()" executa o express

server.set('view engine', 'ejs')

server.set('views', path.join(__dirname, 'views'))

server.use(express.static("public"))

server.use(express.urlencoded({extended: true})) //Intermédio entre o formulário e o banco de dados

server.use(route)

server.listen(3000, () => console.log("rodando port")) 