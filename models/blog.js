const mongoose = require('mongoose');
const Schema = mongoose.Schema;


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

const ImageSchema = new Schema({
    url : {
        type : String,
        required : true
    },
    altText : {
        type : String,
        default : 'image'
    }
});

const CommentSchema = new Schema({
    author : {
        type : String,
        default : 'anonymous'
    },
    comment : {
        required : true,
        type : String,
        maxlength : 160,
    },
});

var BlogSchema = new Schema({
    title : {
        required : true,
        lowercase : true,
        type : String
    },
    subTitle : {
        require : true,
        lowercase: true,
        type : String,
    },
    text : {
        required : true,
        type : String,
    },
    imageUrls : {
        type : [ImageSchema],
    },
    publishDate : {
        //required: true,
        type : DateTime,
    },
    likes : Number,
    comment : [CommentSchema]
});

module.exports = mongoose.model('Blog', BlogSchema);