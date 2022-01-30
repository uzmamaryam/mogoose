const mongoose =require('mongoose')
const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:Number,
    auther:String

});
const Books = mongoose.model('Book' ,bookSchema)
module.exports =Books