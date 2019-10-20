const express = require('express');

require('./database');

const app = express(), port = 3000;

app.listen(port, () => {
    console.log('Listen on port:', port)
})