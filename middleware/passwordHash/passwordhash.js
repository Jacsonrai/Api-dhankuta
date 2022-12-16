import bycrypt from 'bcryptjs'
import bcrypt from 'bcryptjs'

export const Hash_Password=async(password)=>{
    const salt=await bycrypt.genSalt(6)
    const hashed= await bycrypt.hash(password,salt)
    return hashed

}
export const Compare_password=async(password,exgistingPassowrd)=>{
    const doesPasswordMatch = bcrypt.compareSync(password, exgistingPassowrd)
    return doesPasswordMatch

}