import mongoose from 'mongoose';

const UserSchema=new monggose.Schema({
    username:{ type:String,required:true,unique:true},
    password:{ type:String,required:true}
})

export const UserModel=mongoose.model('User',UserSchema);