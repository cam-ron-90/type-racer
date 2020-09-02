const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    currentWordIndex : {
        type: Number,
        default : 0
    },
    socketID : {type : String},
    isPartyLeader : {type : Boolean,default: false},
    WPM : {type : Number, default: -1},
    nickName : {type : String}
});

const GameSchema = new mongoose.Schema({
    words : [{type : String}],
    isOpen : {type : Boolean,deadult : true},
    isOver : {type : Boolean,deadult : false},
    players : [playerSchema],
    startTime : {type : Number}
});

module.exports = mongoose.model('Game',GameSchema);
