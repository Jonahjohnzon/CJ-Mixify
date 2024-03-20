const mongoose = require('mongoose')

const user = mongoose.Schema({
    user_name:{
        type:String
    },
    email:{
        type:String
    }
    ,
    password:{
        type:String
    },
    favorite: [{
        name: { type: String, required: true },
        music: { type: String, required: true },
        link: { type: String, required: true }
    }]
},{timestamps:true})
module.exports.user = mongoose.model('user', user)