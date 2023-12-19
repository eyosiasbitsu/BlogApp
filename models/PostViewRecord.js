
const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const postViewRecordSchema = new mongoose.Schema({
    time_stamp : Date,
    user : ObjectId,
    post : ObjectId,
});

const postViewRecordModel = mongoose.model('PostViewRecord', postViewRecordSchema);

module.exports = postViewRecordModel;