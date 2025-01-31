import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Property from "./Schema.js";

const app=express();
const port=4000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))


 
//Connection to MongoDB 
mongoose.connect("mongodb+srv://rahulsharmachd25:rarashna5@cluster420.i55hr.mongodb.net/real-estate");

//show all properties
app.get("/api/v1/properties",async(req,res)=>{
   try{
      let products=await Property.find({})
      if(products){
         res.status(200).json({
             data:products,
             success:true,
         })
      }
   else{
         console.log("No product is available to show!")
      }
   }catch(error){
      res.status(404).json({
         success:false
      })
   }
})
app.get("/api/v1/properties/search/:debounce",async(req,res)=>{
   try{
      let products=await Property.find({location:req.params.debounce})
      if(products){
         res.status(200).json({
             data:products,
             success:true,
         })
      }
   else{
         console.log("No product is available to show!")
      }
   }catch(error){
      res.status(404).json({
         success:false
      })
   }
})
app.get("/api/v1/filter/:price",async(req,res)=>{
   try{
      let products=await Property.find({price:{$gte:req.params.price}})
      if(products){
         res.status(200).json({
             data:products,
             success:true,
         })
      }
   else{
         console.log("No product is available to show!")
      }
   }catch(error){
      res.status(404).json({
         success:false
      })
   }
})

app.listen(port,()=>{
   console.log(`app is listening on port ${port}`);
   
})