const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express(), port = 3000;


app.listen(port, () => {
    console.log('Listen on port:', port)
})