import User from "../model/user_model.js";
import { Compare_password, Hash_Password } from "../middleware/passwordHash/passwordhash.js";
export const getAllUser = async (req, res, next) => {
  let users;
  try {
    users = await User.find({});
  } catch (err) {
    console.log(err);
  }
  if (!users) {
    return res.status(400).json({ message: "No user found" });
  }
  return res.status(200).json({ users });
};

export const createUser = async (req, res, next) => {
  const {username,email, password } =req.body;
  const hashPassword =await Hash_Password(password);
  let exgistingUser;

  try {
    exgistingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (exgistingUser) {
    return res
      .status(400)
      .json({ message: "Email Already Existed.Login Instead" });
  }
  const users = new User({
   
    username,
    email,
    password: hashPassword,
  });
  try {
    await users.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(201).json({message:"user created successfully",users });
};

export const LoginUser=async(req,res,next)=>{
    const{email,password}=req.body
    let userEmailExist;
    try{
        userEmailExist=await User.findOne({email})
    }
    catch(err){
        return console.log(err)
    }
    if(!userEmailExist){
        return res.status(401).json({message:"Email doesn't exist,Instead do signup"})
    }
   
    let isPasswordMatch=await Compare_password(password,userEmailExist.password)
    if(!isPasswordMatch){
      return res.status(401).json({message:"Password doesnot match"})
    }
    return res.status(200).json({message:"Login successfully"})
    
    

}
