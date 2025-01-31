import mongoose from "mongoose"


import { data } from "./data.js";
import Property from "./Schema.js";


//Connection to MongoDB 
mongoose.connect("mongodb+srv://rahulsharmachd25:rarashna5@cluster420.i55hr.mongodb.net/real-estate");


const initDb=async()=>{
   await Property.insertMany(data);
}

initDb();