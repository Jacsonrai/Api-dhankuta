import Vendor from "../model/vendor_model.js";


export const add_vendor = async (req, res, next) => {
  try {
    const check_vendor = await Vendor.find({
      vendorName: req.body.vendorName,
    });
    if (check_vendor.length > 0) {
      let checking = false;
      for (let i = 0; i < check_vendor.length; i++) {
        if (
          check_vendor[i]["vendorName"].toLowerCase() ===
          req.body.vendorName.toLowerCase()
        ) {
          checking = true;
          break;
        }
      }
      if (checking == false) {
        const vendor = new Vendor({
          vendorName: req.body.vendorName,
          category: req.body.category,
        });
        const sub_cat = await vendor.save();
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
      const vendor = new Vendor({
        vendorName: req.body.vendorName,
        category: req.body.category,
      });
      const sub_cat = await vendor.save();
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
export const get_all_vendor = async (req, res, next) => {
  try {
    const vendors = await Vendor.find({});
    if (!vendors) {
      res.status(400).json({ success: false, msg: "No data found" });
    }
    res.status(200).json({
      success: true,
      data: vendors,
    });
  } catch (error) {
    res.status(200).json({ success: false, msg: error.message });
  }
};
export const get_single_vendor = async (req, res, next) => {
  try {
    if (!req.query.vendorName && !req.query.category) {
      res.status(400).json({
        success: false,
        msg: "cannot retrive data",
      });
    }

    const result = await Vendor.find(
      {
        $or: [
          { vendorName: req.query.vendorName },
          { category: req.query.category },
        ],
      },
      {
        vendorName: 1,
        _id: 0,
        category: 1,
      }
    );
    if (result.length > 0) {
      res.status(200).json({
        success: true,
        msg: "data retrive",
        data: result,
      });
    } else {
      res.status(400).json({
        success: false,
        msg: "no data retrive",
        data: result,
      });
    }
  } catch (error) {
    res.status(200).json({ success: false, msg: error.message });
  }
};

