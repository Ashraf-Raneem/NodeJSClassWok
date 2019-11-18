var http = require('http');
var express = require('express');
var app = express();
var server = http.Server(app);
var bodyParser = require('body-parser')

//var mongo = require('mongodb')
var mongoose = require('mongoose');
var db, url  = "mongodb+srv://Ashraf:daredevils@cluster0-h5imv.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(url,
  {useNewUrlParser: true, useUnifiedTopology: true})
  mongoose.connection.on('error',function(err){
    console.log("could not connect to mongoose"); 
  })
/*
mongo.MongoClient.connect(url, 
  {useNewUrlParser: true, useUnifiedTopology: true},
  function(err,client){
    if(err){
      console.log("could not connect")
    }
    else {
      db = client.db('node-cw9')
    }
  }
)

var save = function(form_data){
  db.createCollection('articles',function(err,collection){
  var collection = db.collection('articles')
  collection.save(form_data); 
  })
}
*/

var Schema = mongoose.Schema
var articleSchema = new Schema (
    {
      title: {
          type: String,
          required: "must require title"
      },
      content: {
        type: String, 
        required: "must require content"
      }
    }
)

var Article = mongoose.model('Article',articleSchema)
app.use(bodyParser.urlencoded({extended:true}))
var articles = [];

app.post('/submit', function(request,response){
  let article = new Article (request.body)
  article.save(function(err,data){
    if(err){
      return response.status(400).json({msg: "All fields must be filled"})
    }
    return response.status(400).json({article:data});
  })

  
  //save(request.body)
 // articles.push(request.body)
 // console.log(articles)
 // response.json({msg: "successfully received"})
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