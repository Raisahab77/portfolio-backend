const mongoose = require("mongoose");
const validators = require("validators");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email ID already presented"]
    }
})


const User = new mongoose.model('User',userSchema);

module.exports = User;
