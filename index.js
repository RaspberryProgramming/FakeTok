var express = require('express');

var app = express();

app.use(express.static('app/build'))

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}
