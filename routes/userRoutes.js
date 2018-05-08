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
            let followResults = await UserInfo.find({googleId:{$in:followtable}})
            let eventIDs = user ['eventIDs']
            let requests = user ['requests']
            let requestResults = await UserInfo.find({googleId:{$in:requests}})
            let requestSent = user['requestSent']
            let sentRequestsResult = await UserInfo.find({googleId:{$in:requestSent}})
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
            user['followTable']=followResults
            user['requests']= requestResults
            user['requestSent'] = sentRequestsResult  
            console.log(user)
            res.send(user)
        })
        app.get('/api/searchuser', async (req, res) => {
            const myreq = req['url'];
            let id = req.user['googleId']
            let params = myreq.split('?')
            if(params.length > 1){
                let searchQueries = params[1].split('%20')
                console.log(searchQueries)
                let searchResults =[]
                let count = searchQueries.length
                searchQueries.forEach(async element => {
                    let result = await UserInfo.find({firstName:{$regex : `.*${element}.*`}})
                    let array = []
                    for (let i=0;i<result.length;i++){
                        if(result[i].googleId==id){
                            continue
                        }
                        array.push(result[i])
                    }
                    searchResults.push(array)
                    if(--count == 0){
                        res.send(searchResults)
                    }
                });
                // console.log(searchResults)
            }
        })
        app.get('/api/addfriend', async (req, res) => {
            let userid = req.user['googleId']
            const myreq = req['url'];
            let params = myreq.split('?')
            if(params.length > 1){
                let requester_id = params[1]
                console.log(typeof(userid),typeof(requester_id))
                let requestsReceived =[]
                let sentRequests = []
                let mainuserInfo = await UserInfo.findOne({googleId:userid})
                sentRequests = mainuserInfo['requestSent']
                let requesteruserInfo = await UserInfo.findOne({googleId:requester_id})
                requestsReceived = requesteruserInfo['requests']
                let alreadyReceived  = sentRequests.includes(requester_id)
                let alreadySent = requestsReceived.includes(userid)
                if(alreadyReceived && alreadySent){
                    res.send("0")
                }else{
                    requestsReceived.push(userid)
                    sentRequests.push(requester_id)
                    let q1 = await UserInfo.findOneAndUpdate({googleId:userid},{$set:{requestSent:sentRequests}}).exec()
                    let q2 = await UserInfo.findOneAndUpdate({googleId:requester_id},{$set:{requests:requestsReceived}}).exec()
                    console.log(q1,q2)
                    res.send("1")
                }
            }else{
                res.send("0")
            }
        })
};