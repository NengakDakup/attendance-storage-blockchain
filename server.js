const express = require('express');

// configure the dotenv for loading variables from the env file
const dotenv = require("dotenv");
dotenv.config()

// import the contract controller
const contract = require('./controllers/contract.controller');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/storedata', contract.storeData);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
