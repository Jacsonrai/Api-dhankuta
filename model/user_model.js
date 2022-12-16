
import mongoose from "mongoose";
const Schema=mongoose.Schema;
const userSchema=new Schema({
   firstName:{
    type:String,
    required:true
   },
   lastName:{
    type:String,
    required:true
   },
   userName:{
    type:String,
    required:true
   },
   contactName:{
    type:Number,
    required:true
   },
   password:{
    type:String,
    required:true
   },
   email:{
    type:String,
    required:true,
    unique:true
   }
    
})
export default mongoose.model("User",userSchema)

