const express = require('express');

const dataRouter = require('./router');

const server = express();

server.use(express.json());
// server.use('/api/recipes', dataRouter);

server.get('/', (req, res, next) => {
  res.status(200).json({ api: 'Get Ready For Yummy Recipes' });
});

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: 'Uh oh! Something went wrong!',
    err,
  });
});

module.exports = server;
