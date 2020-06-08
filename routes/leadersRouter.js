const express = require('express');
const bodyParser = require('body-parser');

const leadersRouter = express.Router();
leadersRouter.use(bodyParser.json());
leadersRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        console.log('Estoy en get leaders');
        res.end('Will send all the leaders to you!');
    })
    .post((req, res, next) => {
        console.log('Estoy en Post leaders');
        res.end('Will add the leader: ' + req.body.name + ' this details: ' + req.body.description);
    })
    .put((req, res, next) => {
        console.log('Estoy en put');
        res.statusCode = 403;
        res.end('PUT operation not supported on /leaders');
    })
    .delete((req, res, next) => {
        console.log('Estoy en delete');
        res.end('Deleting all thes leaders!');
    })


leadersRouter.route('/:leaderId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        console.log('Estoy en get con leaders');
        res.end('Will send details dof the leader: ' + req.params.leaderId + ' to you!');
    })
    .post((req, res, next) => {
        console.log('Estoy en Post con leaders');
        res.statusCode = 403;
        res.end('POST operation not supported on /leaders/' + req.params.leaderId);
    })
    .put((req, res, next) => {
        console.log('Estoy en put con leaders');
        res.write('Updating the leader: ' + req.params.leaderId);
        res.end('Will update the leader: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .delete((req, res, next) => {
        console.log('Estoy en delete con leaders');
        res.end('Deleting leader: ' + req.params.leaderId);
    });


module.exports = leadersRouter;