const mongoose = require('mongoose');
const User = mongoose.model('users');
const UserInfo = mongoose.model('userInfo')

module.exports = (app) =>{
    app.get('/api/userinfo', (req, res) => {
        let id = req.user['googleId']
        UserInfo.findOne({ googleId: id }).then(user =>{
            if(user)
            {
                //console.log(user)
                res.send(user)
            }
        })
    });
}