const { Schema, model} = require('mongoose'),

    articleSchema = new Schema({
        id: String,
        title: String,
        description: String,
        imgURL: String
    });

module.exports = model('Article', articleSchema);