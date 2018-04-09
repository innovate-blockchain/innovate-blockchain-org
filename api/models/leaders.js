const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const LeaderSchema = new Schema({
        name :{
            type: String
        },
        roles:[{type:String}]
    },
    {
        timestamps:true
    });
module.exports = mongoose.model('Leader',LeaderSchema);