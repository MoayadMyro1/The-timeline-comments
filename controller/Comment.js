
const commentModel = require('../models/Comment');
const messageModel = require('../models/Message');
//const homePage = async (req, res) => {
//    await commentModel.find()
//            .then( result => {
//                res.render('index', {
//                    allcomments: result,
//                    result: ''
//                });
//            })
//            .catch( err => {
//                console.log(err)
//            })
//}

const users = ["commenter1", "commenter2", "commenter3", "commenter4", "rttou", "mallo", "vacoum", "fjidf3"];
const addcomment = (req, res) => {
    let msg = new messageModel(req.body);
    var rand = Math.floor(Math.random() * 7);
    let comment = new commentModel(req.body);
    comment.userName = users[rand];
    comment.save();
        messageModel.findById(req.query.msg_id, function (err, result) {
            if (err) {
             
                console.log(err)
            }
            else {

                result.Comments.push(comment);
                result.save();
            }
            res.redirect('/')
        })

         
}


module.exports = {
    addcomment
}