import mongoose from "mongoose" 
const Schema=mongoose.Schema
const newsSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    newsImage:{
        type:String,
        required:true
    }
})
export default mongoose.model("News",newsSchema)