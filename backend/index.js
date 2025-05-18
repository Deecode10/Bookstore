import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
const app = express()

dotenv.config();
const PORT=process.env.PORT||4000;
const URI=process.env.mongoDB;

app.use(cors());
app.use(express.json());

( async ()=>{
    try{
 await mongoose.connect(`${URI}`) ;
console.log("connect to the database")
}catch(error){
console.log("error",error);
}
})()


//defining routes


app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`)
})
app.use("/book",bookRoute);
app.use("/user",userRoute);