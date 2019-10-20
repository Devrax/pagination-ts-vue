const express = require('express'),
    cors = require('cors'),
    morgan = require('morgan'),
    app = express(),
    port = 3000,
    db = require('./database'), //Import the code from database.js
    routes = require('./routes/index'); //import the code from routes/index.js

db; //This represent the whole code block of database.js

app
    .use(morgan('combined'))

    .use(cors())

    .use('/', routes/*same here*/)

    .listen(port, () => {
        console.log('Listen on port:', port)
    });