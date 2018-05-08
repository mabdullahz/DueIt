const mongoose = require('mongoose');
const urllib = require('url')
const User = mongoose.model('users');
const UserInfo = mongoose.model('userInfo')

module.exports =  (app) =>{
    app.get('/api/userinfo', async (req, res) => {
            let id = req.user['googleId']
            let userid = await User.findOne({googleId:id});
            let user = await UserInfo.findOne({googleId:id});
            let arrayToSend =[]
            let gId = user['googleId']
            let followtable = user['followTable']
            let eventIDs = user ['eventIDs']
            let requests = user ['requests']
            let requestSent = user['requestSent']
            let followers = await User.find( {googleId: { $in : followtable }})
            user['firstName'] = userid['username']
            user['eventIDs'] = [
                                    [
                                        {eventKey:1,Title:"Talal ka viyah",Description:'Kabhi nahi hona',status:'Going'},
                                        {eventKey:2,Title:"Sonu ki titu ki sweety",Description:'Ki maa ka *****',status:'Going'},
                                        {eventKey:3,Title:"Team Lead ki neend",Description:'Kabhi nahi poori honi',status:'Going'}
                                    ]
                                ,
                                    [
                                        {eventKey:1,Title:"Saaim ka viyah",Description:'Kabhi nahi hona',status:'Going'},
                                        {eventKey:2,Title:"Kuch bhi ",Description:'Ki maa ka *****',status:'Going'},
                                        {eventKey:3,Title:"Okaray ki noor kay baray me khwahish",Description:'Kabhi nahi poori honi',status:'Going'}
                                    ]
                            ]
            user['lastName'] = userid['pictureURL']
            // user['eventIDs']=[]
            console.log(user)
            res.send(user)
        })
        app.get('/api/searchuser', async (req, res) => {
            const myreq = req['url'];
            let params = myreq.split('?')
            if(params.length > 1){
                let searchQueries = params[1].split('%20')
                console.log(searchQueries)
                let searchResults =[]
                let count = searchQueries.length
                searchQueries.forEach(async element => {
                    let result = await UserInfo.find({firstName:{$regex : `.*${element}.*`}})
                    searchResults.push(result)
                    if(--count == 0){
                        res.send(searchResults)
                    }
                });
                // console.log(searchResults)
            }
        })

        app.get('/api/newEventCreated', async (req, res) => {
            console.log("here")
            console.log(req)
        })
};
