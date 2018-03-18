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
    var Team = this;

    return Team.findOne({
        userId: id
    });
};

TeamSchema.statics.newTeam = function(id){
    var Team = this;

    var team = Team.findOneAndUpdate({
        userId:"-1"
    },{userId: id });

};


TeamSchema.statics.createNewTeam = function(){
    var Team = this;

    return Team.add({
        teamName:"new Team",
        userId:"-1"
    });

};

var Team = mongoose.model('Team', TeamSchema);

module.exports = {Team};