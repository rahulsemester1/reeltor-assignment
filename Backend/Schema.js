import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
   id:{
      type:Number,
      required:true,
   },
   name:{
      type:String,
      required:true,
   },
   price:{
      type:Number,
      required:true,
   },
   location:{
      type:String,
      required:true,
   },
   bedrooms:{
      type:Number,
      required:true,
   },
   square_feet:{
      type:Number,
      required:true,
   },
   bathrooms:{
      type:Number,
      required:true,
   },
   type:{
      type:String,
     required:true,
   },
   available:{
      type:Boolean,
      default:true,
   },
})

const Property=mongoose.model("Property",userSchema)

export default Property;
