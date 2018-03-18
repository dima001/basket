

const newTeam = function(id){
    var Player = this;

    return Player.findOne({
        userId: id
    });
};