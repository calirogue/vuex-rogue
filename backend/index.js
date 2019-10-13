const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
// require("dotenv").config();
require('dotenv').config({
  path: './.env',
});

// cookie parser for auth token
app.use(cookieParser())
// routes
app.use(cors());
const { apiRoutes } = require('./routes/index');

const mongoose = require('mongoose');
const {
  PORT,
  NODE_ENV,
  MONGO_DB_URI,
  DB_NAME,
  DB_NAME_TEST,
} = process.env;

const dbName = NODE_ENV === 'test' ? DB_NAME_TEST : DB_NAME;
mongoose
  .connect(`${MONGO_DB_URI}/${dbName}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log('Connection Successful'))
  .catch(err => console.log(err));

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use('/api', apiRoutes);

const staticFileMiddleware = express.static(path.join(__dirname));

app.use(staticFileMiddleware);

app.get('/', function(req, res) {
  res.render(path.join(__dirname + '/index.html'));
});

app.use(
  '/public',
  express.static(path.join(__dirname, '..', 'public')),
);
if (NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, '..', 'dist')));
}

if (NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

module.exports = app;
