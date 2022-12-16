import mongoose, { Schema } from "mongoose";

const vendorSchema=new Schema({
    vendorName:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }

})
export default mongoose.model("Vendor",vendorSchema)