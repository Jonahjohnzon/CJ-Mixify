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
    favourite:{
        type: [String] 
    }
},{timestamps:true})
module.exports.user = mongoose.model('user', user)