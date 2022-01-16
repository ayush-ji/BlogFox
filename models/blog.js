const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var BlogSchema = new Schema({
    title : {
        required : true,
        lowercase : true,
        type : String
    },
    text : {
        required : true,
        lowercase : true,
        type : String,
    },
    imageUrls : [String],
    publishDate : {
        required: true,
        type : DateTime,
    },
});

const DateTime = new Schema({
    date : {
        year : Number,
        month : String,
        day : String,
        monthDay : Number
    },
    time : {
        hour : Number,
        min : Number,
        sec : Number
    }
})

module.exports = mongoose.model('Blog', BlogSchema);