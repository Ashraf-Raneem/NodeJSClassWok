var http = require('http');
var express = require('express');
var app = express();
var server = http.Server(app);
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))

let articles= []

app.post('/submit', function(request,response){
  articles.push(request.body)
  console.log(articles)
  response.json({msg: "successfully received"})
})

app.get('/article/:index', function(request, response){
  if(articles[request.params.index]){
      response.render('article.ejs', {article:articles[request.params.index]})
  }else{
    response.json({msg:"Article not available"})
  }

})



// app.post('/new_article', function(request, response){
  
//   console.log(request.body)
//   response.json({msg: "Successfully received"})

// })

app.get('/', function(request, response){
  response.sendFile(__dirname + '/views/index.html')

})

app.get('/second', function(request, response){
  response.sendFile(__dirname + '/views/second.html')

})

app.get('/new', function(request, response){
  response.sendFile(__dirname + '/views/form.html')

})



  
  server.listen(3000, 'localhost', function(){
    console.log('Server running');
  });