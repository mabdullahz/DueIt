const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
	username: String,
	googleId: String,
	pictureURL: String
});

mongoose.model('users', userSchema);
