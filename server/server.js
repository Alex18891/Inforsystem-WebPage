const express = require('express');
const cors = require('cors');
const bcrypt=require("bcryptjs");
const jwt = require('jsonwebtoken');
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors());

const mongoose = require("mongoose")
const mongoUrl = "mongodb+srv://mongo:asr232000@cluster0.uahgiie.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoUrl,{
    useNewUrlParser:true
}).then(()=>{console.log("Conected to database");
})
require("./mongo");
const User = mongoose.model("UserInfoinforsystem");


app.post('/login',async(req,res)=>{
   const {email,password}=req.body;
   try{
        const user = await User.findOne({email});
        if(!user)
        {
           return res.status(203).json({message:"User not found"})
        }
      
        if(await bcrypt.compare(password,user.password)){
            const token = jwt.sign(
                { id: user._id},
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            );
            return res.status(200).json({ message: "Login Successful", token: token });
        }
        else{
            return res.status(203).json({message:"Invalid Password"})
        }
        
    }catch(error){
        return res.status(500).json(error); 
    }
});

app.post('/register',async(req,res)=>{
    const {nome,username,email,password}= req.body;
    const encryptedPassword = await bcrypt.hash(password,10);
    try{
      const olduseremail = await User.findOne({email});  
      const oldusername = await User.findOne({username}); 
      if(olduseremail || oldusername)
      {
        return res.status(203).json({message:"Username or email is already used!"})
      }
      else{
        await User.create({
            nome,username,email,password: encryptedPassword
        })

        return res.status(201).json({message:"User created successful"});
      }

    }catch(error){
        return res.status(500).json(error); 
    }
})

app.listen(8080, ()=>{
    console.log("Listening...");
})