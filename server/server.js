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
            res.render("indexverify", { message: "Link expirou", token: token});
        }
        else{
            const user = await User.findOne({_id: decoded.id, email: decoded.email, verificationToken: token});
            if (!user ) {
                res.render("indexverify", { message: "Link expirou", token: token });
            }
            else{
                user.isVerified = true;
                user.verificationToken = undefined;
                await user.save();
                res.render("indexverify", { message: "Obrigado", token: token });
            }
        }    
        });
    } catch (error) {
        res.render("indexverify", { message: error,token: ''});
    }

})

app.get('/resend-verification-email', async (req, res) => {
    const {token} = req.query;
    if(!token) {
        return res.status(203).json({message: "Token não existe"});
    }
     try{
        const decoded = jwt.decode(token);
        const user = await User.findOne({email: decoded.email});
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
        res.status(200).json({ message: 'Foi enviado um email de verificação. Verifica o email para validares a conta' });
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
            html: `
            <html>
            <head>
            <style type="text/css">
                body, p, div, span, a {
                    font-family: 'Cera Round Pro',' Proxima Nova Soft',' Proxima Nova',' Helvetica Neue',Helvetica,Arial,sans-serif;  /* Using a web-safe font as default */
                    color: #344054; 
                    text-decoration: none;
                }
            </style>
            </head>
            <body>
                <div>
                    <div style="background: #1A65A4; text-align: center; padding: 4rem 0;">
                        <img src="https://tagdetect.s3.eu-west-2.amazonaws.com/logo.png" alt="Profile picture">
                    </div>    
                    <div style="background: #F0F1F3; padding: 3rem 0;">
                        <div style="border-radius: 6px; margin: auto; background: white; width: 60%; max-width: 370px; padding: 2rem;">
                            <h1 style="font-size: 20px; margin-bottom: 1rem;text-align: center;">
                                Verifica a tua conta
                            </h1>
                            
                            <p style="font-size: 13px; text-align: left; margin-bottom: 1rem;">
                                Olá ${nome}, para ser possível aceder aos produtos disponíveis na loja, por favor, confirma o teu email para completar o processo de verificação da tua conta.
                            </p>
                            
                            <div style="margin-bottom: 1.5rem;text-align: center;">
                                <a href="${link}" style="display: inline-block; padding: 0.5rem 2rem; background-color: #1B64A7; border-radius: 6px; color: white; font-size: 13px;font-family: 'K2D', sans-serif;">VERIFICAR CONTA</a>
                            </div>
                            <hr style="border:1;width:100%;"/>
                            <p style="font-size: 13px;">
                                Precisas de ajuda? <span><a style="font-size: 13px; color: #1B64A7; font-weight: 700;" href="mailto:loja2@inforsystem.net"> Contacte-nos</a></span>
                            </p>
                            <p style="font-size: 13px;">
                                Para mais informações por favor lê os <span><a style="font-size: 13px; color: #1B64A7;font-weight: 700;" href="#"> termos e serviços</a></span> e a<span><a style="font-size: 13px; color: #1B64A7;font-weight: 700;" href="#"> política de privacidade</a></span> 
                            </p>
                        </div>
                    </div>
                </div>
            </body>
            </html>`            
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

const sendResetPasswordMail = async(nome,email,link)=>{
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
            subject:'Recuperar palavra passe',
            html: `
            <html>
            <head>
            <style type="text/css">
                body, p, div, span, a {
                    font-family: 'Cera Round Pro',' Proxima Nova Soft',' Proxima Nova',' Helvetica Neue',Helvetica,Arial,sans-serif;  /* Using a web-safe font as default */
                    color: #344054; 
                    text-decoration: none;
                }
            </style>
            </head>
            <body>
                <div>
                    <div style="background: #1A65A4; text-align: center; padding: 4rem 0;">
                        <img src="https://tagdetect.s3.eu-west-2.amazonaws.com/logo.png" alt="Profile picture">
                    </div>    
                    <div style="background: #F0F1F3; padding: 3rem 0;">
                        <div style="border-radius: 6px; margin: auto; background: white; width: 60%; max-width: 370px; padding: 2rem;">
                            <h1 style="font-size: 20px; margin-bottom: 1rem;text-align: center;">
                                Recuperar a palavra passe
                            </h1>
                            
                            <p style="font-size: 13px; text-align: left; margin-bottom: 1rem;">
                                Olá ${nome}, para ser possível recuperar a palavra passe, por favor, clica no link e digite uma nova palavra passe.
                            </p>
                            
                            <div style="margin-bottom: 1.5rem;text-align: center;">
                                <a href="${link}" style="display: inline-block; padding: 0.5rem 2rem; background-color: #1B64A7; border-radius: 6px; color: white; font-size: 13px;font-family: 'K2D', sans-serif;">RECUPERAR PALAVRA PASSE</a>
                            </div>
                            <hr style="border:1;width:100%;"/>
                            <p style="font-size: 13px;">
                                Precisas de ajuda? <span><a style="font-size: 13px; color: #1B64A7; font-weight: 700;" href="mailto:loja2@inforsystem.net"> Contacte-nos</a></span>
                            </p>
                            <p style="font-size: 13px;">
                                Para mais informações por favor lê os <span><a style="font-size: 13px; color: #1B64A7;font-weight: 700;" href="#"> termos e serviços</a></span> e a<span><a style="font-size: 13px; color: #1B64A7;font-weight: 700;" href="#"> política de privacidade</a></span> 
                            </p>
                        </div>
                    </div>
                </div>
            </body>
            </html>`            
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
     
        const token = jwt.sign(
            {email:user.email, id: user._id},
            process.env.JWT_SECRET,
            { expiresIn: '2m'}
        );
        const link = `http://localhost:8080/resetpassword/${token}`;
        sendResetPasswordMail(user.nome,user.email,link);
        console.log(link);
        return res.status(200).json({message:"Foi enviado um email de recuperação. Verifica o email para recuperares a password"});
        
    }catch(error){
        return res.status(500).json(error); 
    }
})

app.get("/resetpassword/:token",async(req,res)=>{
    const {token} = req.params;
    try{
        jwt.verify(token, process.env.JWT_SECRET, async function (err, decoded) {
            if (err) {   
                res.render("index", { message: "Link expirou", token: token});
            }
            else{
                const user = await User.findOne({_id: decoded.id, email: decoded.email});
                if(!user)
                {
                    res.render("index",{message:"Link expirou", token: token});
                }  
                else{
                    res.render("index",{token:token,message:""}); 
                }         
            }
        })
    }catch(error){
        res.render("index",{message:error, token: '' }); 
    }
})

app.get('/resend-resetpassword/:token', async (req, res) => {
    const {token} = req.params;
    if(!token) {
        return res.status(203).json({message: "Token não existe"});
    }
     try{
        const decoded = jwt.decode(token);
        const user = await User.findOne({email: decoded.email});
        if (!user) {
            return res.status(203).json({ message: "Link expirou" });
        }
        const verificationToken = jwt.sign(
            {email:user.email, id: user._id},
            process.env.JWT_SECRET,
            { expiresIn: '2m'}
        );
        const link = `http://localhost:8080/resetpassword/${verificationToken}`;
        sendResetPasswordMail(user.email,link);
        return res.status(200).json({message:"Foi enviado um email de recuperação. Verifica o email para recuperares a password"});
     }catch (error) {
         return res.status(500).json(error); 
     }
 
 });

app.post("/resetpassword/:token",async(req,res)=>{
    const {token} = req.params;
    const {password} = req.body;
    try{
        jwt.verify(token, process.env.JWT_SECRET, async function (err, decoded) {
            if (err) {   
               return res.status(203).json({ message: "Link expirou. Volta a abrir o link para reenviar um email."});
            }
            else{ 
                const user = await User.findOne({_id: decoded.id, email: decoded.email});
                if(!user)
                {
                    return res.status(203).json({message:"Utilizador não encontrado"});
                }   
                const encryptedPassword = await bcrypt.hash(password,10);
                await User.updateOne(
                {
                    _id:decoded.id,
                },
                { $set: {
                        password: encryptedPassword,
                    },
                } 
                );
               return res.status(200).json({message:"Palavra passe alterada com sucesso"});
        }
    })
    }catch(error){
        res.status(500).json({message:error.message});
    }
})

app.listen(8080, ()=>{
    console.log("Listening...");
})