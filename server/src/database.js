const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fake-data', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then(db => console.log('Established connection with the database'))
    .catch(err => console.log(`DB error: ${err.message}`));