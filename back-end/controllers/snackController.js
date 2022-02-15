const express = require('express');
const { getSnacksAll, createSnack, getSnack, deleteSnack, updateSnack } = require('../queries/snacks');
const snacks = express.Router();

/* get snack */
snacks.get('/', async (req, res) => {
    let snacks = await getSnacksAll();
    console.log(snacks)
    res.status(200).json(snacks)
});

/* create snack */
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

/* delete snack*/

snacks.get('/:index', async (request, response) => { 
    let {index} = request.params; 
    let snacky = await getSnack(index);
    response.status(200).json(snacky);
  })
  snacks.delete('/:id', async (request, response) => {
  let {id} = request.params;
  let snackity = await deleteSnack(id);
  response.status(200).json(snackity);    
  })
  
/* update snack */
  snacks.put("/:id", async (request, response) => {
    try {
      let snackUpdated = await updateSnack(request.params.id, request.body);
      response.status(200).json(snackUpdated);
    } catch (error) {
      console.log(error);
      response.status(404).json({ error: "Snack not found" });
    }
  });

module.exports = snacks;