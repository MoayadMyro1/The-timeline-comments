const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://myro:myro123@cluster0.ktpdb.mongodb.net/?retryWrites=true&w=majority')
        .then( () => {
            console.log('DB is connected')
        })
        .catch( err => {
            console.log(err)
        })
