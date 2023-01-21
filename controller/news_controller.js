import News from "../model/news_model";

export const get_all_news = async (req, res, next) => {
  try {
    const result_data = await News.find({});
    res
      .status(200)
      .json({
        success: true,
        data: result_data,
        msg: "all news fetched succesfully",
      });
  } catch (err) {
    res.status(400).json({
      success: false,
      msg: err.message,
    });
  }
};
export const create_news=async(req,res,next)=>{
    try{

        

    }
    catch(err){
        res.status(400).json({
            success: false,
            msg: err.message,
          });
    }
}
