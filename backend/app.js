const express = require('express');

const infoRoutes = require('./routes/info');

const app = express();

app
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Options');
    
    "OPTIONS" == req.method ? res.sendStatus(200) : next();
  })
  .use('/professional', infoRoutes)

app.listen(8080);
