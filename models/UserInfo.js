const mongoose = require('mongoose');
const { Schema } = mongoose;

const userInfoSchema = new Schema({
    googleId: String,
    firstName : String,
    lastName : String,
    followTable : [],
    eventIDs : [],
    requests : [],
    requestSent : [],
    picurl:String
});

mongoose.model('userInfo', userInfoSchema);