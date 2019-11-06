var http = require('http');
var express = require('express');
var app = express();
var server = http.Server(app);

app.get('/',function(request,response){
  response.sendFile(__dirname+'/index.html')
})
app.get('/second',function(request,response){
  response.sendFile(__dirname+'/index_2.html')
})

server.listen(3000, 'localhost', function(){
  console.log('Server running');
});
