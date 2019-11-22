var mongoose = require('mongoose')
var Schema = mongoose.Schema

var articleSchema = new Schema(
    {
       title: {
           type: String,
           required: "Title is required"
       },
       content: {
           type: String,
           required: "Content is required"
       }
    }
)

var Article = mongoose.model('Article', articleSchema)

module.exports = Article