import User from "../model/User.model.js";
import bcryptjs from "bcryptjs";

export const signup= async(req,res)=>{
    
    try{
        const {name,email,password,}=req.body;
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({message:"User already exist"});


        }
        const hashPassword = await bcryptjs.hash(password,10);
        const createUser=new User({
            name:name,
            email:email,
            password:hashPassword,
        })
       await  createUser.save();
        res.status(201).json({message:"store success ",user:{
            _id:createUser._id,
            name:createUser.name,
            email:createUser.email,
        }})
    }catch(error){
        console.log("Error: "+error.message);
        res.status(500).json({message:"server error"});

    }

};


export const login = async (req,res)=>{
    try{
    const {email,password}=req.body;
    const user = await User.findOne({email});
    const ismatch = await bcryptjs.compare(password,user.password)
    if(!user||!ismatch){
       return  res.status(400).json({message:"invalide pass or email"});


    }
    else{
        res.status(200).json({message:"login successful",user:{
            _id:user._id,
            name:user.name,
            email:user.email,
        }
        })

    }
}catch(error){
    console.log("Error:"+error.message)

}
}