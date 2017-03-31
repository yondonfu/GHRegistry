process.env.PWD = process.cwd();

const path = require('path');

const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('*', function(req, res) {
  res.sendFile(path.resolve(process.env.PWD, 'public/index.html'));
});

app.listen(process.env.PORT || 3000, function() {
  console.log('App launched');
});
