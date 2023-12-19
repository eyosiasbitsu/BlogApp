
const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    time_stamp : Date,
    content : String,
    post : ObjectId,
    user : ObjectId,
});

const commentModel = mongoose.model('Comment', commentSchema);

module.exports = commentModel;
