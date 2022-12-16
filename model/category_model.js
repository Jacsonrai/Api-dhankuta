
import mongoose from "mongoose";
const Schema=mongoose.Schema;
const categorySchema=new Schema({
    category:{
        type:String,
        required:true
    },
    category_type:{
        type:String,
        required:true

    }
    
  
    
})
export default mongoose.model("Category",categorySchema)

