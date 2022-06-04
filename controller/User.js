
const userModel = require('../models/User');

const homePage = async (req, res) => {
    await userModel.find()
        .then(userdata => {
                res.render('index', {
                    alluser: userdata,
                    userdata: ''
                });
            })
            .catch( err => {
                console.log(err)
            })
}

const adduser = (req, res) => {
    let user = new userModel(req.body);
    user.save()
        .then( () => {
            // res.render('index', {
            //     userName: 'sam',
            //     isAdmin: false,
            //     allUsers: allUsers,
            //     result: 'user has been added'
            // })
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
    adduser
}