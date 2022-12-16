
import Category from "../model/category_model.js";

export const get_all_vendor_category = async (req, res, next) => {
  try {
    let category = await Category.find({});
    return res.status(200).json({ category });
  } catch (err) {
    res.status(400).send({ success: false, msg: err.message });
  }
};

export const add_vendor_category = async (req, res, next) => {
  const { category } = req.body;
  let exgistingCategory;
  try {
    exgistingCategory = await Category.findOne({ category });
  } catch (error) {
    res.status(400).json({ success: false, msg: error.message });
  }
  if (exgistingCategory) {
    return res.status(401).json({ message: "category already existed" });
  }
  const categories = new Category({
    category,
  });
  try {
    await categories.save();
    return res.status(200).json({ sucess: true, message: "category is saved" });
  } catch (err) {
    return res.status(201).json({ success: false, msg: err.message });
  }
};
export const delete_category = async (req, res, next) => {
  try {
    const result = await Category.deleteOne({ _id: req.params.id });
    return res
      .status(200)
      .json({ success: true, msg: "data deleted sucessfully", data: result });
  } catch (err) {
    res.status(400).json({ sucess: false, msg: err.message });
  }
};
export const update_vendor_category=async(req,res,next)=>{
    try{
        const result=await Category.updateOne({_id:req.params.id},{
          $set:{
            "category":req.body.category
          }
        })
        return res.status(200).json({success:true,data:result})
    }
    catch(err){
        res.status(400).json({success:false,msg:err.message})
    }
}
