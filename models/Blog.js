
const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title : String,
    content : String,
    image : String,
    published_date : Date,
    last_updated : Date,
    slug : String,
    status : String,
    category : ObjectId,
    author : ObjectId,
});

const blogModel = mongoose.model('Blog', blogSchema);

module.exports = blogModel;