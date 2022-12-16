import { json } from "express";
import Notice from "../model/notice_model";

export const getAllNotice = async (req, res, next) => {
  try {
    let notices = await Notice.find({});
    if (!notices) {
      res.status(400).json({ message: "No user Found" });
    }
    return res.status(200).json({ notices });
  } catch (error) {
    res.status(401).json({ success: false, msg: error.message });
  }
};
export const createNotice = async (req, res, next) => {
  const { title, description, category } = req.body;
  try {
    const notice = new Notice({
      title: title,
      description: description,
      category: category,
    });
    const notices = await notice.save();
    res.status(200).json({
      success: true,
      msg: "data added sucessfully",
      data: notices,
    });
  } catch (error) {
    console.log(error);
  }
};
export const deleteNotice=async(req,res,next)=>{
    try{
     let delete_item=await Notice.deleteOne({
            _id:req.params.id
        })
    res.status(200).json({success:true,message:"Data deleteded successfully",data:delete_item})
    }
    catch(error){
        console.log(error)
    }
}

export const updateNotice=async(req,res,next)=>{
    try{
      const result=await  Notice.updateOne({_id:req.params.id},{
            $set:{
                "title":req.body.title,
                "description":req.body.description,
                "category":req.body.category
            }
        })
        return res.status(200).json({success:true,data:result})


    }catch(err){

        console.log(err)
    }
}