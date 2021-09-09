var express = require('express');
var fs = require('fs');
const { nextTick } = require('process');

var app = express();

var tmpDatabase = {postList: ['ab45c920'], postInfo: {'ab45c920': {title: 'Switch Video', description: 'This is a test post', likes: 1, uploader: 'John Doe'}}}; // TODO: Replace with real database

var dataDirs = {'./dataDir': ['videos']}; // Location where video data will be stored

var logLevel = "Debug"; // Set to "debug" for debug logs, undefined for no logs

for (const dir in dataDirs) {
  if (!fs.existsSync(dir)){ // Check for existance of dataDir
    console.log(`Created datadir at: ${dir}`);
  
    fs.mkdirSync(dir); // Create dataDir
  }

  for (const subDir in dataDirs[dir]) {
    let subDirPath = `${dir}/${subDir}`;
    if (!fs.existsSync(subDirPath)){ // Check for existance of dataDir
      console.log(`Created datadir at: ${subDirPath}`);
    
      fs.mkdirSync(subDirPath); // Create dataDir
    }
  }
}

app.use(express.static('app/build'));

app.use((req, res, next) => { // Log request to terminal if loglevel = debug
  if (logLevel === "Debug") {
    console.log(`${req.method}: ${req.path}`);
  }

  next();
});

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