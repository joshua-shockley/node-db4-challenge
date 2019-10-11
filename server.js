const express = require('express');
const helmet = require('helmet');

const db = require('./data/db-config.js');
const DataB = require('./data/data-access.js');
const server = express();

server.use(helmet());
server.use(express.json());

//test end point
server.get('/', (req, res) => {
    res.send('<h2>yo my chefs...! how is it cooking?</h2>');
});

server.get('/api/recipes', (req, res) => {
    DataB.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json(error);
        });
});

server.get('/api/recipes/:id', (req, res) => {
    DataB.getARecipe(req.params.id)
        .then(one => {
            res.status(200).json(one);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json(error);
        });
});

server.get('/api/recipes/:id/instructions', (req, res) => {
    DataB.getInstructions(req.params.id)
        .then(instruct => {
            res.status(200).json(instruct);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json(error);
        });
});

server.get('/api/recipes/:id/shoppingList', (req, res) => {
    DataB.getShoppingList(req.params.id)
        .then(shopping => {
            res.status(200).json(shopping);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});



//endpoint would go here

module.exports = server;