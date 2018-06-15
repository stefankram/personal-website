const express = require('express');
const { getUsers } = require('./users');

const apiRouter = express.Router();

apiRouter.get('/users', getUsers);

module.exports = apiRouter;
