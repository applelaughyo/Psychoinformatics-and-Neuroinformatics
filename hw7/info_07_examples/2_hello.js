var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());
const { execSync } = require('child_process');

app.get('/', function(req, res){
  res.send(`Hi ${req.query.name}`);
  stdout=execSync(`python 1_py_backend.py ${req.query.name}`).toString();
  console.log(stdout);
  execSync(`echo ${req.query.name} >> data.txt`);
});

app.get('/ajax', function(req, res){
  res.sendFile(__dirname + '/4_ajax.html');
});

app.listen(8000);

