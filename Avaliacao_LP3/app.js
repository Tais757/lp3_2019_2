const express = require('express');

const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const rotasUsuarios = require('./routes/usuarios');
require('./databases/db');

const app = express();

app.use(logger('dev'));

app.use(cors());

app.use(bodyParser.json());

app.use('/usuarios', rotasUsuarios);

module.exports = app;