var http = require('http');
var fs = require('fs')
var server = http.createServer(function(req, res){

  //res.end("Hello World\n");
  fs.readFile('index.html',function(err,data){
    if(err){
        res.statusCode=404;
        res.setHeader('Content-Type','text/plain'); 
        res.end('File not Found')
    }
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.end(data)
  })
});
server.listen(3000, 'localhost', function(){
  console.log('Server running');
});
