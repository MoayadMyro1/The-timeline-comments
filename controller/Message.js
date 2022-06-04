
const messageModel = require('../models/Message');

const homePage = async (req, res) => {
    await messageModel.find().populate("Comments")
        .then(msgdata => {
            console.log(msgdata[0].Comments);
                res.render('index', {
                    allmessages: msgdata,
                    msgdata: ''
                });
            })
            .catch( err => {
                console.log(err)
            })
}
const users = ["moayad", "mathojh", "sona", "sammer", "Ali", "Rajab", "sammer", "saaad"];
const addmessage = (req, res) => {
    let msg = new messageModel(req.body);
    var rand = Math.floor(Math.random() * 7);
    msg.userName = users[rand];
    msg.save()
        .then( () => {
            res.redirect('/')
        })
        .catch(err => {
            console.log(err)
        })
}

const notFound =  (req, res) => {
    res.render('notFound')
}

module.exports = {
    homePage,
    notFound,
    addmessage
}