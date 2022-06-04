const express = require('express');
const router = require('./config/route');

const app = express();
app.use(express.urlencoded({extended: false}))


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());

app.use(router);

require('./config/mongoose')

app.listen('3000', () => {
    console.log('server is running on port 3000')
})