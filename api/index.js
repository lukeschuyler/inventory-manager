const express = require('express');
const cors = require('cors');
const { json, urlencoded } = require('body-parser');

// index.js is the entry file for routes
const routes = require('./app/routes/');

const app = express();

app.use(cors({
  // default for now, as devlopment continues will configure
}));

// use body-parser to parse request body into json
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

// OTHER ERROR STATUSES
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
