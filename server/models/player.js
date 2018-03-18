var mongoose = require('mongoose');
const {ObjectId} = require('mongodb'); // or ObjectID 

var PlayerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    age: {
        type: Number,
        trim: true
    },
    hight: {
        type: Number,
        trim: true
    },
    wghite: {
        type: Number,
        trim: true
    },
    defence: {
        type: Number,
        trim: true
    },
    drible: {
        type: Number,
        trim: true
    },
    freeThrow: {
        type: Number,
        trim: true
    },
    twoThrow: {
        type: Number,
        trim: true
    },
    thereThrow: {
        type: Number,
        trim: true
    },
    passing: {
        type: Number,
        trim: true
    },
    speed: {
        type: Number,
        trim: true
    },
    footwork: {
        type: Number,
        trim: true
    },
    rebound: {
        type: Number,
        trim: true
    },
    expirance: {
        type: Number,
        trim: true
    },
    teamName: {
        type: String,
        trim: true
    },
    teamId: {
        type: String,
        trim: true
    }
});


PlayerSchema.statics.findById = function(id){
    var Player = this;

    return Player.findOne({
        userId: id
    });
};

PlayerSchema.statics.getPlayers = function(){
    var Player = this;

    return Player.find({});
};

PlayerSchema.statics.findPlayerByID = function(id){
    console.log("findPlayerByID id:",id);
    var Player = this;

    return Player.findOne(ObjectId(id));
};

PlayerSchema.statics.createNewPlayer = function(id){
    console.log("findPlayerByID id:",id);
    var Player = this;

    return Player.add({
    "firstName" : "Dima",
    "lastNameName" : "Brodski",
    "age" : Math.floor((Math.random() * 20) + 1),
    "hight" : Math.floor((Math.random() * 20) + 1),
    "wghite" : Math.floor((Math.random() * 20) + 1),
    "defence" : Math.floor((Math.random() * 20) + 1),
    "drible" : Math.floor((Math.random() * 20) + 1),
    "freeThrow" : Math.floor((Math.random() * 20) + 1),
    "twoThrow" : Math.floor((Math.random() * 20) + 1),
    "thereThrow" : Math.floor((Math.random() * 20) + 1),
    "passing" : Math.floor((Math.random() * 20) + 1),
    "speed" : Math.floor((Math.random() * 20) + 1),
    "footwork" : Math.floor((Math.random() * 20) + 1),
    "rebound" : Math.floor((Math.random() * 20) + 1),
    "expirance" : Math.floor((Math.random() * 20) + 1),
    "teamId" : id
    });
};

var Player = mongoose.model('Player', PlayerSchema);

module.exports = {Player};