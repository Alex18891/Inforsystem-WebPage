import { useState, useEffect,useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import {Text,StyleSheet} from 'react-native';
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { Divider } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faExclamation} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

import logo from "./../img/logo.png";

export default function Register() {
    const [nome,setnome] = useState('');
    const errRef = useRef();
    const userRef = useRef();
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const [confirmpassword,setconfirmpassword] = useState('');
    const [errMsg, setErrMsg] = useState([]);
    const navigate = useNavigate();

    const validatePassword = (password) => 
    {  
        const regex = /^(?=.*[a-z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        console.log(regex.test(password));
        return regex.test(password);
    }

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    function login(){
        navigate("/login");
    }
    function handleregister(event){
        setErrMsg([]);
        event.preventDefault();
        if (!nome) {
            setErrMsg((prevArray) => [
                ...prevArray,
                "É obrigatório o preenchimento do campo nome",
              ]);
        }
       
        if (!isValidEmail(email)) {
            setErrMsg((prevArray) => [
                ...prevArray,
                "Email inválido",
              ]);
          }
        if (password !== confirmpassword) {
            setErrMsg((prevArray) => [
                ...prevArray,
                "Passwords não coincidem",
                ]);
        }
       if (!validatePassword(password)) {
            setErrMsg((prevArray) => [
                ...prevArray,
                "Palavra passe deve conter pelo menos 8 carateres, uma letra mínuscula e um número",
              ]);
        }
        else if(validatePassword(password) && isValidEmail(email) && nome){
            setErrMsg([]);
            axios.post('http://localhost:8080/register',{nome,email,password})
            .then(res =>{
                console.log(res)
                if(res.status === 201){
                    setErrMsg([]);
                    navigate("/login");
                }
                else if(res.status === 203)
                {
                    setErrMsg((prevArray) => [
                        ...prevArray,
                        res.data.message,
                    ]);
                }
            }) 
            .catch(err => console.log(err));
        } 
    }
    return (
        <>
           <Box sx={{ flexGrow: 1,}}>
           <Box position="static" sx={{background: "#1A65A4"}}>
                <Toolbar >
                    <Box sx={styles.toolbarcontainer}>
                        <img
                        src={logo}
                        alt="profile picture"    
                        ></img>
                    </Box>    
            </Toolbar>
            </Box >
           </Box>
           <Box  sx={{margin:"auto",marginTop:"3rem",textAlign: 'left',maxWidth:"1000px"}}>
                <Box sx={styles.maincontainer}>
                    <Text style={styles.textdefault} >
                        Criar conta
                    </Text> 
                    <Box sx={styles.viewcontainer}>
                        <Box sx={styles.containerfeaturesmain}>   
                           
                            <Box sx = {styles.boxcontainer}> 
                                <label style={styles.textdefault1} >
                                    Nome do utilizador
                                </label>
                                <input
                                    type="text"
                                    placeholder="Qual é o nome de utilizador*"
                                    style={styles.inputtext}
                                    ref={userRef}
                                    autoComplete="off"
                                    onChange={(e) => setnome(e.target.value)}
                                    value={nome}
                                    required
                                    />
                            </Box>
                            <Box sx = {styles.boxcontainer}> 
                                <label style={styles.textdefault1} >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email*"
                                    style={styles.inputtext}
                                    onChange={(e) => setemail(e.target.value)}
                                    value={email}
                                    required
                                    />
                            </Box>
                            <Box sx = {styles.boxcontainer}> 
                                <label style={styles.textdefault1} >
                                    Palavra passe
                                </label>
                                <input
                                    type="password"
                                    placeholder="Palavra passe*"
                                    style={styles.inputtext}
                                    autoComplete="off"
                                    id="password"
                                    onKeyUp={validatePassword}
                                    onChange={(e) => setpassword(e.target.value)}
                                    value={password}
                                    required
                                    />
                            </Box>
                            <Box sx = {styles.boxcontainer}> 
                                <label style={styles.textdefault1} >
                                    Confirmar palavra passe
                                </label>
                                <input
                                    type="password"
                                    placeholder="Palavra passe*"
                                    style={styles.inputtext}
                                    id="confirm_password"
                                    onKeyUp={validatePassword}
                                    onChange={(e) => setconfirmpassword(e.target.value)}
                                    value={confirmpassword}
                                    required
                                    />
                            </Box>
                            <Box sx = {styles.boxcontainer}> 
                                <Button sx={styles.buttoncontainer} onClick={handleregister}>Criar conta</Button>
                            </Box>
                            <Box sx = {[styles.boxcontainer,{alignItems:"center"}]}> 
                                <Text style={styles.textdefault4} >
                                        Já tens conta?<span><a style={styles.textdefaultblue1} onClick={login}> Inicia sessão</a></span>        
                                </Text>  
                            </Box>   
                            {errMsg.length>0 && (
                                <Box sx = {[styles.boxcontainer,{backgroundColor:"rgb(254,242,242)",borderRadius:"4px",padding:"0.5rem"}]}> 
                                    <Box style={{display:"flex",gap:"5px"}}>
                                        <FontAwesomeIcon icon={faExclamation} style={{color: "#ac4343",}} />
                                        <Text style={[styles.errmsg,{color:"rgb(172,67,67)"}]}>Foram encontrados {errMsg.length} erro(s) de validação:</Text>
                                    </Box>    
                                    <Divider style={{border:0, borderTop:'1px solid rgb(211,109,109)'}}/>
                                    {errMsg.map((message, index) =>
                                        <Text key={index}   ref={errRef}
                                            style={errMsg ? styles.errmsg : styles.offscreen}
                                            aria-live="assertive" >{`\u2022 ${message}`}
                                        </Text>     
                                    )}
                                </Box>       
                            )} 
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

const styles = StyleSheet.create({
    toolbarcontainer:{
        flexGrow: 1, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        marginTop:"4rem",
        marginBottom:"4rem"
    },
    offscreen: {
        display: 'none',
      },
      
    errmsg: {
        marginBottom: 0,
        paddingBottom:0,
        fontFamily: 'Montserrat',
        fontWeight: "bold",
        fontSize:"13px",
        color:"rgb(211,109,109)",
        textAlign:"left"
    },
    buttoncontainer:{
        backgroundColor:"#1B64A7",
        color:"white",
        fontFamily: 'K2D',
        marginTop:"0.3rem",
        fontSize:"13px",
        paddingTop:"0.1rem",
        paddingBottom:"0.1rem",
        borderRadius:"8px",
        '&:hover': {
            backgroundColor: '#134b7c',
          },
    },
    maincontainer:{
        margin:"auto",
        width:"65%",
    },

    textdefault:{
        fontSize:"30px",
        fontFamily: 'K2D',
        color:"#344054"
      },
      textdefaultblue1:{
        fontSize:"13px",
        fontFamily: 'Montserrat',
        color:"#1B64A7",
        fontWeight:"900",
        cursor: "pointer"
      },

      textdefault3:{
        fontSize:"10px",
        fontFamily: 'Montserrat',
        fontWeight:"900",
        color:"black",
        WebkitTextStrokeWidth: '0.1px', // Stroke width
      },

      textdefault4:{
        fontSize:"13px",
        fontFamily: 'Montserrat',
        fontWeight:"900",
        color:"black",
        WebkitTextStrokeWidth: '0.1px', 
      },

      
      textdefault1:{
        fontSize:"17px",
        fontFamily: 'Montserrat',
        color:"#344054"
      },
      viewcontainer:{ 
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)', 
        borderRadius: 2,
        marginTop:"1rem"
    },
    containerfeaturesmain:{
        background: "white",
        gap:"10px",
        display:"flex",
        flexDirection:"column",
        paddingTop:"2rem",
        alignItems:"center",
        paddingBottom:"2rem"
    },
    boxcontainer:{
        display:"flex",
        flexDirection:"column",
        gap:"5px",
        width:"60%"
    },
    inputtext:{
        borderRadius:"4px",
        paddingLeft:"0.5rem",
        border:"1px solid #98A2B3", // Change the border color here
        height:"3ch",
        width:"auto",
        fontFamily: 'Montserrat',
        fontSize:"12px",
      },
});