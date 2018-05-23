const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const LeaderSchema = new Schema({
        name :{
            type: String
        },
        roles:[{type:String}],
        profile_picture: {type:String},
        type:{type:String, enum:['team','advisor']}
    },
    {
        timestamps:true
    });
module.exports = mongoose.model('Leader',LeaderSchema);