const express = require ('express');
const AppRouter = express.Router();
const {AppController} = require('../controllers/appController');

AppRouter
    .get ('/authors', AppController.getIndex);

AppRouter
    .get ('/authors/:id', AppController.display);

AppRouter
    .post ('/authors', AppController.add);

AppRouter
    .put ('/authors/:id', AppController.edit);

AppRouter
    .delete ('/authors/:id', AppController.delete);

module.exports={AppRouter};