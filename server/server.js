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
           return res.status(203).json({message:"Utilizador não encontrado"})
        }
      
        if(await bcrypt.compare(password,user.password)){
            const token = jwt.sign(
                { id: user._id},
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            );
            return res.status(200).json({ message: "Sucesso", token: token });
        }
        else{
            return res.status(203).json({message:"Password errada"})
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
        return res.status(203).json({message:"Username ou email já estão a ser usados!"})
      }
      else{
        await User.create({
            nome,username,email,password: encryptedPassword
        })

        return res.status(201).json({message:"Utilizador criado"});
      }

    }catch(error){
        return res.status(500).json(error); 
    }
})

app.listen(8080, ()=>{
    console.log("Listening...");
})