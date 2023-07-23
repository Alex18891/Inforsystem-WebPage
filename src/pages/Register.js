import { useState, useEffect,useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import {Text,StyleSheet} from 'react-native';
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import axios from 'axios'

import logo from "./../img/logo.png";

export default function Register() {
    const [username,setusername] = useState('');
    const [nome,setnome] = useState('');
    const errRef = useRef();
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const [confirmpassword,setconfirmpassword] = useState('');
    const [errMsg, setErrMsg] = useState("");
    const navigate = useNavigate();

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
      }
    function login(){
        navigate("/login");
    }
    function handleregister(event){
        event.preventDefault();
        setErrMsg("");
        if (!username || !password || !nome || !email || !confirmpassword) {
            setErrMsg("Fill in all fields");
            return;
        }
        if (!isValidEmail(email)) {
            setErrMsg("Please enter a valid email");
            return;
          }
        if(confirmpassword !== password)
        {
            setErrMsg("Passwords don't match");
            return;
        }
        else{
            axios.post('http://localhost:8080/register',{nome,username,email,password})
            .then(res =>{
                console.log(res)
                if(res.status === 201){
                    setErrMsg("");
                    navigate("/login");
                }
                else if(res.status === 203)
                {
                    setErrMsg(res.data.message);
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
                            <Text
                                ref={errRef}
                                style={errMsg ? styles.errmsg : styles.offscreen}
                                aria-live="assertive"
                                >
                                {errMsg}
                            </Text>  
                            <Box sx = {styles.boxcontainer}> 
                                <label style={styles.textdefault1} >
                                    Nome
                                </label>
                                <input
                                    type="text"
                                    placeholder="Qual é o teu nome*"
                                    style={styles.inputtext}
                                    autoComplete="off"
                                    onChange={(e) => setnome(e.target.value)}
                                    value={nome}
                                    />
                            </Box>
                            <Box sx = {styles.boxcontainer}> 
                                <label style={styles.textdefault1} >
                                    Username
                                </label>
                                <input
                                    type="text"
                                    placeholder="Username*"
                                    style={styles.inputtext}
                                    autoComplete="off"
                                    onChange={(e) => setusername(e.target.value)}
                                    value={username}
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
                                    />
                            </Box>
                            <Box sx = {styles.boxcontainer}> 
                                <label style={styles.textdefault1} >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="Password*"
                                    style={styles.inputtext}
                                    autoComplete="off"
                                    onChange={(e) => setpassword(e.target.value)}
                                    value={password}
                                    />
                            </Box>
                            <Box sx = {styles.boxcontainer}> 
                                <label style={styles.textdefault1} >
                                    Confirmar password
                                </label>
                                <input
                                    type="password"
                                    placeholder="Password*"
                                    style={styles.inputtext}
                                    onChange={(e) => setconfirmpassword(e.target.value)}
                                    value={confirmpassword}
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
        // Other styles...
      },
    errmsg: {
        marginBottom: 0,
        paddingBottom:0,
        fontFamily: 'Montserrat',
        fontWeight: "bold",
        fontSize:"13px"
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
            // Remove hover effect by setting hover styles the same as default styles
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
      textdefaultblue:{
        fontSize:"10px",
        fontFamily: 'Montserrat',
        color:"#1B64A7",
        fontWeight:"900",
      },
      textdefaultblue1:{
        fontSize:"13px",
        fontFamily: 'Montserrat',
        color:"#1B64A7",
        fontWeight:"900",
        
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