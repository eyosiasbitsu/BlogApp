
const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
    post : ObjectId,
    user : ObjectId,
});

const likeModel = mongoose.model('Like', likeSchema);

module.exports = likeModel;