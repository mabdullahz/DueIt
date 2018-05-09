const mongoose = require('mongoose');
const { Schema } = mongoose;

const EventsSchema = new Schema({
    googleId: String,
    location : String,
    eventName: String,
    description : String,
    startTime : String,
    endTime : String,
    accessKind : String
});

mongoose.model('Events', EventsSchema);
