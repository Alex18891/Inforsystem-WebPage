const express = require('express');
const cors = require('cors');
const bcrypt=require("bcryptjs");
const jwt = require('jsonwebtoken');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const nodemailer = require("nodemailer");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors());
app.set("view engine","ejs");
app.use(cookieParser());
const path = require('path');
const crypto = require('crypto');
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
        console.log(user);
        if(!user)
        {
           return res.status(203).json({message:"Utilizador não encontrado"})
        }
        console.log(user.isVerified)
        if(!user.isVerified)
        {
            return res.status(203).json({message:"Por favor verifica o email para fazer login"});
        }
        else{
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
        const user = await User.create({
            nome,email,password: encryptedPassword,isVerified:false
        })

        const verificationToken = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '2m' } // This token will expire in 5 minutes
          );
        console.log(verificationToken);
        const verificationLink = `http://localhost:8080/verify-email?token=${verificationToken}`;
        user.verificationToken = verificationToken;
        await user.save();
        sendVerificationlink(nome,email,verificationLink);
        return res.status(201).json({message:"Utilizador criado"});
      }

    }catch(error){
        return res.status(500).json(error); 
    }
})

app.get('/verify-email',async(req,res)=>{
    const {token} = req.query;
    try {
            jwt.verify(token, process.env.JWT_SECRET, async function (err, decoded) {
            if (err) { 
                 res.render("indexverify", { message: "Link expirou" });
            }
            else{
                const user = await User.findOne({_id: decoded.id, email: decoded.email, verificationToken: token});
                console.log(user);
                if (!user ) {
                    res.render("indexverify", { message: "Link expirou" });
                }
                else{
                    user.isVerified = true;
                    user.verificationToken = undefined;
                    await user.save();
                    res.cookie('email', user.email, { httpOnly: true, maxAge: 900000 });
                    res.render("indexverify", { message: "Obrigado" });
                }
            }    
        });
    } catch (error) {
        res.render("indexverify", { message: error });
    }

})

app.get('/resend-verification-email', async (req, res) => {
    const email = req.cookies.email;
     try{
         const user = await User.findOne({email});
        if (!user) {
            return res.status(203).json({ message: "Link expirou" });
        }
        if (user.isVerified) {
            return res.status(203).json({ message: 'Utilizador já está verificado' });
        }

            const verificationToken = jwt.sign(
                { id: user._id, email: user.email },
                process.env.JWT_SECRET,
                { expiresIn: '2m' } // This token will expire in 5 minutes
            );
       
           user.verificationToken = verificationToken;
           await user.save();
       
           const verificationLink = `http://localhost:8080/verify-email?token=${verificationToken}`;
           sendVerificationlink(user.nome, user.email, verificationLink);
       
           res.status(200).json({ message: 'Email de verificação enviado' });
     }catch (error) {
         return res.status(500).json(error); 
     }
 
 });
 

const sendVerificationlink = async(nome,email,link)=>{
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
            subject:'Verifica a tua conta',
            html: `<b>Olá ${nome},</b><br><br>Por favor verifica a tua conta através do link:<br><br><a href="${link}">${link}</a>`,
        }
        transporter.sendMail(mailOptions,function(error,information){
            if(error)
            {
                console.log(error);
            }
            else
            {
                console.log("Email foi enviado ",information.response);
            }
        });
    }catch(error){
        return res.status(500).json(error); 
    }
}



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
            html: '<p>Olá, por favor clica no link para recuperar a password: <br/> <a href="'+link+'">'+link+'</a>'
        }
        transporter.sendMail(mailOptions,function(error,information){
            if(error)
            {
                console.log(error);
            }
            else
            {
                console.log("Email foi enviado ",information.response);
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
            res.render("index",{message:"Utilizador não encontrado"});
        }   
        jwt.verify(token,process.env.JWT_SECRET);
        res.render("index",{id:id,token:token,message:""});

    }catch(error){
        res.render("index",{message:error,id: '', token: '' }); 
    }
})

app.post("/resetpassword/:id/:token",async(req,res)=>{
    const {id,token} = req.params;
    const {password} = req.body;
    try{
        const user = await User.findOne({_id:id});
        if(!user)
        {
            res.status(404).json({message:"Utilizador não encontrado"});
        }   
        jwt.verify(token,process.env.JWT_SECRET);
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
        res.status(200).json({message:"Palavra passe alterada com sucesso"});
    }catch(error){
        res.status(500).json({message:error.message});
    }
})

app.listen(8080, ()=>{
    console.log("Listening...");
})