const express = require('express');
const UserDomain = require('../domains/user');

module.exports = express.Router()
  .get('/', (req, res) => {
    res.json(UserDomain.getUsers());
  })
  .get('/:id', (req, res) => {
    res.json(UserDomain.getUserById(req.params.id));
  });