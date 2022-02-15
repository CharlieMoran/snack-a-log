const express = require('express');
const { getSnacksAll, createSnack, getSnack, deleteSnack, updateSnack } = require('../queries/snacks');
const snacks = express.Router();

snacks.get('/', async (req, res) => {
    let snacks = await getSnacksAll();
    console.log(snacks)
    res.status(200).json(snacks)
});

module.exports = snacks;