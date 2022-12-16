import subCategory from "../model/sub_category_model";

export const create_sub_category = async (req, res, next) => {
  try {
    const check_sub = await subCategory.find({
      category_id: req.body.category_id,
    });
    if (check_sub.length > 0) {
      let checking = false;
      for (let i = 0; i < check_sub.length; i++) {
        if (
          check_sub[i]["sub_category"].toLowerCase() ===
          req.body.sub_category.toLowerCase()
        ) {
          checking = true;
          break;
        }
      }
      if (checking == false) {
        const sub_categories = new subCategory({
          category_id: req.body.category_id,
          sub_category: req.body.sub_category,
        });
        const sub_cat = await sub_categories.save();
        res.status(200).json({
          success: true,
          msg: "data added sucessfully",
          data: sub_cat,
        });
      } else {
        res.status(300).json({
          success: false,
          msg: "sub category is already exist",
        });
      }
    } else {
      const sub_categories = new subCategory({
        category_id: req.body.category_id,
        sub_category: req.body.sub_category,
      });
      const sub_cat = await sub_categories.save();
      res.status(200).json({
        success: true,
        msg: "data added sucessfully",
        data: sub_cat,
      });
    }
  } catch (error) {
    res.status(200).json({ success: false, msg: error.message });
  }
};

export const get_all_sub_category = async (req, res, next) => {
  try {
    const sub_category = await subCategory.find({});
    if (sub_category.length > 0) {
      res
        .status(200)
        .json({
          success: true,
          msg: "data fetch successfully",
          data: sub_category,
        });
    } else {
      res.status(200).json({ success: true, msg: "No data found" });
    }
  } catch (error) {
    res.status(400).json({ success: false, msg: error.message });
  }
};

export const delete_sub_category = async (req, res, next) => {
  try {
    const sub_categories = await subCategory.deleteOne({ _id: req.params.id });
    return res.status(200).json({
      success: true,
      msg: "data deleted sucessfully",
      data: sub_categories,
    });
  } catch (error) {
    res.status(400).json({ sucess: false, msg: err.message });
  }
};
export const update_sub_category=async(req,res,next)=>{
  try{
   const sub_categories=await subCategory.updateOne({_id:req.params.id},{
      $set:{
        "category_id":req.body.category_id,
        "sub_category":req.body.sub_category
      }
    })
    return res.status(200).json({success:true,data:sub_categories})
  }
  catch(err){
    res.status(400).json({success:false,msg:err.message})
  }

}

