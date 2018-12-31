const express = require('express');
const { json, urlencoded } = require('body-parser');
const cors = require('cors')

// look for index.js in routes dir
const routes = require('./app/routes/');
const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));

// ROUTES
app.use('/', routes);

// NOT FOUND
app.use((req, res, next) => {
  const err = new Error('404 Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use( (err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

app.use( (err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
