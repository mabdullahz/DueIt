const mongoose = require('mongoose');
const { Schema } = mongoose;

const EventsSchema = new Schema({
    googleId: String,
    eventID : String,
    location : String,
    description : [],
    startTime : String,
    endTime : String,
    accessKind : String
});

mongoose.model('Events', EventsSchema);