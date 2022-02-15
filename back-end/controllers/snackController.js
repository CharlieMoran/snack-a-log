const express = require('express');
const { getSnack, createSnack, getSnack, deleteSnack, updateSnack} = require('../queries/snacks');
const snacks = express.Router();

module.exports = snacks;