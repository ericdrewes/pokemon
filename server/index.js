const express = require('express');
const massive = require('massive');
const {json} = require('body-parser');
const cors = require('cors');
require("dotenv").config();
const port = process.env.PORT || 3001;
const app = express();
const mainCtrl = require('./controllers/mainCtrl');

massive(process.env.CONNECTION_STRING)
    .then(db => app.set("db", db))
    .catch(console.log);

app.use(express.static(`${__dirname}/../build`))

app.use(json());
app.use(cors());

