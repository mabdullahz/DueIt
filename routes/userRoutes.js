const mongoose = require('mongoose');
const User = mongoose.model('users');
const UserInfo = mongoose.model('userInfo')

module.exports =  (app) =>{
    app.get('/api/userinfo', async (req, res) => {
            let id = req.user['googleId']
            let userid = await User.findOne({googleId:id});
            let user = await UserInfo.findOne({googleId:id});
            //res.send(user)
            let arrayToSend =[]
            let gId = user['googleId']
            let followtable = user['followTable']
            let eventIDs = user ['eventIDs']
            let requests = user ['requests']
            let requestSent = user['requestSent']
            let followers = await User.find( {googleId: { $in : followtable }})
            user['firstName'] = userid['username']
            console.log(user)
            res.send(user)
        })
};