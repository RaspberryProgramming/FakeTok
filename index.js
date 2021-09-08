var express = require('express');

var app = express();

var tmpDatabase = {postList: ['ab45c920'], postInfo: {'ab45c920': {title: 'Switch Video', description: 'This is a test post', likes: 1, uploader: 'John Doe'}}}; // TODO: Replace with real database

app.use(express.static('app/build'))

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}

app.get("/api/posts", function(req, res) {
  res.send(tmpDatabase['postList']);
});

app.get("/api/posts/post/:id", function(req, res) {
  const id = req.params.id;
  res.send(tmpDatabase['postInfo'][id]);
});

app.get("/api/posts/video/:id", function(req, res) {
  const id = req.params.id;
  res.sendFile(`${__dirname}/dataDir/videos/${id}`);
});

app.post("/api/posts/upload", function (req, res) {
  console.log(req.body);
  res.send('Success');
});