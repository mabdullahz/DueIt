const mongoose = require('mongoose');
const urllib = require('url')
const User = mongoose.model('users');
const UserInfo = mongoose.model('userInfo')
const Event = mongoose.model('Events')


module.exports =  (app) =>{
    app.get('/api/userinfo', async (req, res) => {
            let id = req.user['googleId']
            let userid = await User.findOne({googleId:id});
            let user = await UserInfo.findOne({googleId:id});
            let arrayToSend =[]
            let gId = user['googleId']
            let followtable = user['followTable']
            let followResults = await UserInfo.find({googleId:{$in:followtable}})
            let requests = user ['requests']
            let requestResults = await UserInfo.find({googleId:{$in:requests}})
            let requestSent = user['requestSent']
            let sentRequestsResult = await UserInfo.find({googleId:{$in:requestSent}})
            let eventIDs = user['eventIDs']
            let eventIDsResult = await Event.find({_id:{$in:eventIDs}})
            user['firstName'] = userid['username']
            user['eventIDs'] = eventIDsResult
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
                let alreadyFriends = mainuserInfo['followTable'].includes(requester_id)
                if(alreadyReceived && alreadySent && alreadyFriends){
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
        app.get('/api/approvefriend', async (req, res) => {
            let userid = req.user['googleId']
            const myreq = req['url'];
            let params = myreq.split('?')
            if(params.length > 1){
                let toApprove = params[1]
                let mainuserInfo = await UserInfo.findOne({googleId:userid})
                let toApproveuserInfo = await UserInfo.findOne({googleId:toApprove})
                let toApprovesentRequests = toApproveuserInfo['requestSent']
                let toApprovefollowers = toApproveuserInfo['followTable']
                let mainuserRequests = mainuserInfo['requests']
                let mainuserfollowers = mainuserInfo['followTable']
                // Find and remove item from an array
                let i = toApprovesentRequests.indexOf(userid);
                if(i != -1) {
                    toApprovesentRequests.splice(i, 1);
                    toApprovefollowers.push(userid)
                    let q1 = await UserInfo.findOneAndUpdate({googleId:toApprove},{$set:{requestSent:toApprovesentRequests,followTable:toApprovefollowers}}).exec()
                }
                i = mainuserRequests.indexOf(toApprove);
                if(i != -1) {
                    mainuserRequests.splice(i, 1);
                    mainuserfollowers.push(toApprove)
                    let q1 = await UserInfo.findOneAndUpdate({googleId:userid},{$set:{requests:mainuserRequests,followTable:mainuserfollowers}}).exec()
                }
                res.send("1")
            }else{
                res.send("1")
            }
        })
        app.get('/api/removerequest', async (req, res) => {
            let userid = req.user['googleId']
            const myreq = req['url'];
            let params = myreq.split('?')
            if(params.length > 1){
                let toRemove = params[1]
                let mainuserInfo = await UserInfo.findOne({googleId:userid})
                let toRemoveuserInfo = await UserInfo.findOne({googleId:toRemove})
                let toRemoveRequests = toRemoveuserInfo['requests']
                let mainusersentRequests = mainuserInfo['requestSent']
                // Find and remove item from an array
                let i = toRemoveRequests.indexOf(userid);
                if(i != -1) {
                    toRemoveRequests.splice(i, 1);
                    let q1 = await UserInfo.findOneAndUpdate({googleId:toRemove},{$set:{requests:toRemoveRequests}}).exec()
                }
                i = mainusersentRequests.indexOf(toRemove);
                if(i != -1) {
                    mainusersentRequests.splice(i, 1);
                    let q1 = await UserInfo.findOneAndUpdate({googleId:userid},{$set:{requestSent:mainusersentRequests}}).exec()
                }
                res.send("1")
            }else{
                res.send("1")
            }
        })

        app.get('/api/newEventCreated/:eveName/:eveStart/:eveEnd/:eveLoc/:eveDes/:eveAcc', async (req, res, next) => {
                console.log("SERVER NEW EVE")
                let userid = req.user.googleId
                const Eve = await new Event({
                        googleId: req.user.googleId,
                        location : req.params.eveLoc,
                        eventName: req.params.eveName,
                        description : req.params.eveDes,
                        startTime : req.params.eveStart,
                        endTime : req.params.eveEnd,
                        accessKind : req.params.eveAcc
                    }).save()

                let mainUserInfo = await UserInfo.findOne({googleId:userid})
                let mainUserEvents = mainUserInfo['eventIDs']
                //console.log(Eve['_id'])
                mainUserEvents.push(Eve['_id'])
                let q1 = await UserInfo.findOneAndUpdate({googleId:userid},{$set:{eventIDs:mainUserEvents}}).exec()
                res.send("1")
        })
}
