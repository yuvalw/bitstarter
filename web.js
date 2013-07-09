var express = require('express'),
    fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(readIndexHtml());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

function readIndexHtml(){
    var file = fs.readFileSync('index.html', {encoding:'ascii'});
    return file;
}