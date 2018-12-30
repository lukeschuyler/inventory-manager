const express = require('express');
const { json, urlencoded } = require('body-parser');
const routes = require('./app/routes/');
const cors = require('cors')

const app = express();
