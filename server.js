'use strict';

// const pg = require('pg');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 4242;
// const conString = process.env.DATABASE_URL || 'postgres://localhost:5432';

app.use(express.static('./public'));

app.get('index.html', function(request, response) {
  response.sendFile('index.html', {root: './public'});
});

app.get('/about', function(request, response) {
  response.sendFile('index.html', {root: './public'});
})

app.get('*', function(request, response) {
  response.status(404).sendFile('404.html', {root: './public'});
});

app.listen(PORT, function() {
  console.log('Server is up and running on port ' + PORT + ' and can be accessed at localhost:' + PORT);
});
