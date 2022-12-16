import mongoose from "mongoose";

const Schema=mongoose.Schema;
const noticeSchema=new Schema({
   title:{
    type:String,
    require:true
   },
   description:{
    type:String,
    require:true
   },
   category:{
        type:String,
        require:true
   }
})
export default mongoose.model("Notice",noticeSchema)