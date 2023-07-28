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

export default function ForgotPassword() {
    const navigate = useNavigate();
    const [errMsg, setErrMsg] = useState('');
    const errRef = useRef();
    const [email,setemail] = useState('');

    function login(){
        navigate("/login");
    }

    const handleforgorpassword = (event) => {
        event.preventDefault();
        setErrMsg('');
        if(!email)
        {
            setErrMsg("É obrigatório o preenchimento do campo email",);
        }
        else if(email){
            axios.post('http://localhost:8080/forgotpassword',{email})
            .then(res =>{
                console.log(res);
                if(res.status === 200){
                    setErrMsg('Foi enviado um email de recuperação. Verifica o email para recuperares a password');
                    //navigate('/login')
                }
                else{
                    setErrMsg(res.data.message);
                }
            }).catch(err => console.log(err));
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
                    <Box>
                        <Text style={styles.textdefault} >
                            Recuperar a palavra passe
                        </Text>
                    </Box>
                    <Box>
                        <Text style={styles.textdefault1} >
                            Introduz o e-mail associado à tua conta para te enviar
                            um link para a recuperação de password
                        </Text>
                    </Box>
                    <Box sx={styles.viewcontainer}>
                        <Box sx={styles.containerfeaturesmain}>     
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
                                <Button sx={styles.buttoncontainer} onClick={handleforgorpassword}>Enviar email</Button>
                            </Box>
                            <Box sx = {[styles.boxcontainer,{alignItems:"center"}]}> 
                                <Text style={styles.textdefault4} >
                                        Conseguiste recuperar?<span><a style={styles.textdefaultblue1}  onClick={login}> Volta a iniciar sessão</a></span>        
                                </Text>  
                            </Box>
                            {errMsg!=="Foi enviado um email de recuperação. Verifica o email para recuperares a password" && errMsg ? (
                                <Box sx = {[styles.boxcontainer,{backgroundColor:"rgb(254,242,242)",borderRadius:"4px",padding:"0.5rem"}]}> 
                                    <Box style={{display:"flex",gap:"5px"}}>
                                        <FontAwesomeIcon icon={faExclamation} style={{color: "#ac4343",}} />
                                        <Text style={[styles.errmsg,{color:"rgb(172,67,67)"}]}>Foi encontrado 1 erro de validação:</Text>
                                    </Box>    
                                    <Divider style={{border:0, borderTop:'1px solid rgb(211,109,109)'}}/>
                                    <Text  ref={errRef}
                                        style={errMsg ? styles.errmsg : styles.offscreen}
                                        aria-live="assertive" >{`\u2022 ${errMsg}`}
                                    </Text>     
                              
                                </Box>       
                            ):(
                                <Box sx = {[styles.boxcontainer]}> 
                                    <Text style={errMsg ? [styles.errmsg,{color:"#344054"}]: styles.offscreen}
                                        aria-live="assertive"
                                    >{errMsg}</Text> 
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
    buttoncontainer:{
        backgroundColor:"#1B64A7",
        color:"white",
        fontFamily: 'K2D',
        fontSize:"13px",
        paddingTop:"0.2rem",
        paddingBottom:"0.2rem",
        borderRadius:"6px",
        '&:hover': {
            backgroundColor: '#134b7c',
          },
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
        WebkitTextStrokeWidth: '0.1px', 

      },

      textdefault4:{
        fontSize:"13px",
        fontFamily: 'Montserrat',
        fontWeight:"900",
        color:"black",
        WebkitTextStrokeWidth: '0.1px', 
      },
 
      textdefault1:{
        fontSize:"14px",
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
        textAlign:"left",
        gap:"5px",
        width:"60%"
    },
    inputtext:{
        borderRadius:"4px",
        paddingLeft:"0.5rem",
        border:"1px solid #98A2B3", 
        height:"3ch",
        width:"auto",
        fontFamily: 'Montserrat',
        fontSize:"12px",
      },
});