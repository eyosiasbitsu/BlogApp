
const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    image : String,
    adress : String,
    user : ObjectId,
});

const profileModel = mongoose.model('Profile', profileSchema);

module.exports = profileModel;