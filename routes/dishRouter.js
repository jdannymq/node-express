const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();
dishRouter.use(bodyParser.json());
dishRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        console.log('Estoy en get');
        res.end('Will send all the dishes to you!');
    })
    .post((req, res, next) => {
        console.log('Estoy en Post');
        res.end('Will add the dish: ' + req.body.name + ' this details: ' + req.body.description);
    })
    .put((req, res, next) => {
        console.log('Estoy en put');
        res.statusCode = 403;
        res.end('PUT operation not supported on /dishes');
    })
    .delete((req, res, next) => {
        console.log('Estoy en delete');
        res.end('Deleting all thes dishes!');
    })

dishRouter.route('/:dishId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        console.log('Estoy en get con parametros');
        res.end('Will send details dof the dish: ' + req.params.dishId + ' to you!');
    })
    .post((req, res, next) => {
        console.log('Estoy en Post con parametros');
        res.statusCode = 403;
        res.end('POST operation not supported on /dishes/' + req.params.dishId);
    })
    .put((req, res, next) => {
        console.log('Estoy en put con parametros');
        res.write('Updating the dish: ' + req.params.dishId);
        res.end('Will update the dish: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .delete((req, res, next) => {
        console.log('Estoy en delete con parametros');
        res.end('Deleting dish: ' + req.params.dishId);
    });
module.exports = dishRouter;