const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');
var mongoose = require('mongoose');
const {ObjectID} = require('mongodb');


var TeamSchema = new mongoose.Schema({
    teamName: {
        type: String,
        trim: true
    },
    userId: {
        type: String,
        trim: true
    }
});


    

TeamSchema.statics.findById = function(id){
    console.log("find by id server");
    console.log(id);
    var Team = this;

    return Team.findOne({
        userId: id
    });
};

var Team = mongoose.model('Team', TeamSchema);

module.exports = {Team};