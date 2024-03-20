const {  user } = require("../Schema/schema.js");
const JWT = require('jsonwebtoken') 
const bcrypt = require('bcrypt');


const userData = async(req, res)=>{
    const pass = req.body.password
    const salt = await bcrypt.genSalt()
    const hash = await bcrypt.hash(pass, salt)
    const email = req.body.email.toUpperCase()
    const useraccount = await user.find({email:email})
    const username = await user.find({user_name:req.body.user_name})
    if(req.body.password !== req.body.comfirmpassword)
    {
        return res.json({create:false, message:"Password Does not Match"})
    }
    if(useraccount.length > 0)
    {
        return res.json({create:false,message:"Email Already Exist"})
    }
    
    if(username.length > 0)
    {
        return res.json({create:false,message:"Username Already Exist"})
    }
    try{    
    const data = await user.create({
            user_name:req.body.user_name,
            email:email,
            password:hash,
            favorite:[]
        })
         await data.save()
         return res.json({create:true, message:"Account created"})
    }
        catch(e)
        {
            
            console.log(e)
        }
    
}

const loginIn = async(req, res) =>{
    try{
    const emailinfo = req.body.email.toUpperCase()
    const info = await user.findOne({email:emailinfo})
    if(info == null){
        return res.json({auth:false,message:"Email Not Found"})
    }
    const result = await bcrypt.compare(req.body.password, info.password)
    if (result)
    {
        if(info?.suspend){
            return res.json({auth:false,message:"Please Verify Email First"})
        }
        const id = info._id
        const token = JWT.sign({id}, process.env.JWTS)
        const userdata = {user_name:info.user_name, _id:info._id, admin:info.admin, group_access:info.group_access, profile_image:info.profile_image, rank:info.rank, notification:info.notification, suspend:info.suspend, ban:info.ban}
        return res.json({auth:true, token:token, data:userdata})
    }
    else{
        return res.json({auth:false, message:'Password Wrong'})
    }
    }
    catch(e)
    {
        console.log(e)
    }
    
}

const findFavor = async(req, res)=>{
    const id = req.params.id
    const data = await user.findOne({_id: id})
    if(!data){
        return
    }
    else{
        return res.json({favourite:data.favorite})
    }
}

const addFavor = async(req, res)=>{
    const id = req.params.id
    const { name, music, link } = req.body.musicname
  
    try {
        const updatedUser = await user.findOneAndUpdate(
            { _id: id },
            { $push: { favorite:  { name, music, link } } },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        return res.json(updatedUser);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
module.exports = {userData, loginIn, findFavor, addFavor}