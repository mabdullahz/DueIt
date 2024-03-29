const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');


const User = mongoose.model('users');
const UserInfo = mongoose.model('userInfo')
passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(
	user => {
		done(null, user);
	});
});

passport.use(
	new GoogleStrategy({
		clientID: keys.googleClientID,
		clientSecret: keys.googleClientSecret,
		callbackURL: '/auth/google/callback',
		proxy: true
	},
	async (accessToken, refreshToken, profile, done) => {
		const existingUser = await User.findOne({googleId: profile.id})
		if(existingUser){
			return done(null,existingUser);
		}
		var resizedPic = profile._json.image.url;
		resizedPic = resizedPic.slice(0,-5);
		console.log(resizedPic)
		const user = await new User({username: profile.displayName, googleId: profile.id, pictureURL: resizedPic}).save()
		const userInfo = await new UserInfo({
			googleId: profile.id,
			firstName: profile.displayName,
			lastName: "",
			followTable: [],
			eventIDs: [],
			requests: [],
			requestSent: [],
			picurl: resizedPic

		}).save()
		done(null, user);
	})
);
