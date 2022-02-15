const express = require("express");
const cors = require('cors');
const PORT = process.env.PORT || 6969
const app = express();
const snacksController = require('./controllers/snackController')

app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send('Welcome to our Snack database!')
});

app.use('/snacks', snacksController)

module.exports = app;