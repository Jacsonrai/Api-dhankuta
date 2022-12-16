
import mongoose from "mongoose";
const Schema=mongoose.Schema;
const subCategorySchema=new Schema({
    category_id:{
        type:String,
        required:true
    },
    sub_category:{
        type:String,
        required:true
    }
    
  
    
})
export default mongoose.model("Sub_Category",subCategorySchema)

