import mongoose from "mongoose";

const userschema=mongoose.Schema({
    fullname:{
        type:String,
        requied:true
    },
    email:{
        type:String,
        requied:true,
        unique:true 
    },
    password:{
        type:String,
        requied:true
    }
       
})
    const User=mongoose.model("User",userschema)
    export default User;