const express = require('express');
const route = express.Router()

const messageController = require('../controller/Message');
const userController = require('../controller/User');
const commentController = require('../controller/Comment');


route.get('/', messageController.homePage)
route.post('/', messageController.addmessage)
route.get('/*', messageController.notFound)

/*route.get('/', commentController.homePage)*/
route.post('/addcomment', commentController.addcomment)


route.get('/', userController.homePage)
route.post('/', userController.adduser)


module.exports = route;