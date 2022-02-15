const express = require('express');
const { getSnacksAll, createSnack, getSnack, deleteSnack, updateSnack } = require('../queries/snacks');
const snacks = express.Router();

snacks.get('/', async (req, res) => {
    let snacks = await getSnacksAll();
    console.log(snacks)
    res.status(200).json(snacks)
});

snacks.get("/", async (req, res) => {
    let getTheSnacks = await getSnacksAll();
    if (getTheSnacks[0]) {
      res.status(200).json(getSnacksAll);
    } else {
      res.status(500).json({ error: "server error" });
    }
  });

  snacks.post('/', async (request, response) => {
    let snacksNew = await createSnack(request.body);
    response.status(200).json(snacksNew);
})


module.exports = snacks;