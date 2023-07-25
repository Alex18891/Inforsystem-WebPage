const express = require('express');
const cors = require('cors');
const bcrypt=require("bcryptjs");
const jwt = require('jsonwebtoken');
require('dotenv').config();
const nodemailer = require("nodemailer");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors());
app.set("view engine","ejs");
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

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
    const {nome,email,password}= req.body;
    const encryptedPassword = await bcrypt.hash(password,10);
    try{
      const olduseremail = await User.findOne({email});  
      if(olduseremail)
      {
        return res.status(203).json({message:"Username ou email já estão a ser usados!"})
      }
      else{
        await User.create({
            nome,email,password: encryptedPassword
        })

        return res.status(201).json({message:"Utilizador criado"});
      }

    }catch(error){
        return res.status(500).json(error); 
    }
})

const sendResetPasswordMail = async(email,link)=>{
    try{
        const transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:'noreplyloginapp18881@gmail.com',
                pass: 'kppunrkqttoonjjh'
            }
        });
        const mailOptions = {
            from: 'noreplyloginapp18881@gmail.com',
            to:email,
            subject:'For Reset Password',
            html: '<p> Hi,Please enter the link and reset your password: <br/> <a href="'+link+'">'+link+'</a>'
        }
        transporter.sendMail(mailOptions,function(error,information){
            if(error)
            {
                console.log(error);
            }
            else
            {
                console.log("Mail has been sent ",information.response);
            }
        });
    }catch(error){
        return res.status(500).json(error); 
    }
}

app.post("/forgotpassword", async(req,res,next)=>{
    const {email} = req.body;
    try{
        const user = await User.findOne({email});
        if(!user)
        {
            return res.status(203).json({message:"Utilizador não encontrado"})
        }
        else
        {
            const token = jwt.sign(
                {email:user.email, id: user._id},
                process.env.JWT_SECRET,
                { expiresIn: '5m'}
            );
            const link = `http://localhost:8080/resetpassword/${user._id}/${token}`;
            sendResetPasswordMail(user.email,link);
            console.log(link);
            res.status(200).json("Verifica o teu email");
        }
    }catch(error){
        return res.status(500).json(error); 
    }
})

app.get("/resetpassword/:id/:token",async(req,res)=>{
    const {id,token} = req.params;
    try{
        const user = await User.findOne({_id:id});
        if(!user)
        {
            return res.render("index",{message:"Utilizador não encontrado"});
        }   
        const verify = jwt.verify(token,process.env.JWT_SECRET);
        return res.render("index",{email:verify.email,message:"Não verificado"});

    }catch(error){
        return res.render("index",{message:error}); 
    }
})

app.post("/resetpassword/:id/:token",async(req,res)=>{
    const {id,token} = req.params;
    const {password} = req.body;
    try{
        const user = await User.findOne({_id:id});
        if(!user)
        {
            res.render("index",{message:"Utilizador não encontrado"});
        }   
        const verify = jwt.verify(token,process.env.JWT_SECRET);
        const encryptedPassword = await bcrypt.hash(password,10);
        await User.updateOne(
            {
                _id:id,
            },
           { $set: {
                password: encryptedPassword,
            },
            } 
        );
        res.render("index",{email:verify.email,message:"Verificado"});
    }catch(error){
        res.render("index",{message:error}); 
    }
})

app.listen(8080, ()=>{
    console.log("Listening...");
})