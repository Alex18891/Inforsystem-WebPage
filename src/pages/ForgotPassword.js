import { useState, useEffect,useRef,useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import {Text,StyleSheet} from 'react-native';
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { Divider } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faExclamation} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { PopupContext } from './popupcontext';

import logo from "./../img/logo.png";

export default function ForgotPassword() {
    const navigate = useNavigate();
    const [errMsg, setErrMsg] = useState('');
    const errRef = useRef();
    const [email,setemail] = useState('');
    const {setIsOpenLogin, setIsOpenForgotpassword} = useContext(PopupContext);

    function login(){
        setIsOpenForgotpassword(false);
        setIsOpenLogin(true);
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
                setErrMsg(res.data.message);
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
           <Box  sx={styles.container}>
                    <Box sx={[styles.containerfeaturesmain,{gap:"9px"}]}>
                        <Text style={styles.textdefault} >
                            Recuperar a palavra passe
                        </Text>
                 
                        <Box sx = {styles.boxcontainer}> 
                            <Text style={[styles.textdefault1,{fontSize:"13px"}]} >
                            Introduz o e-mail associado à tua conta para te enviar
                                um link para a recuperação de password
                            </Text> 
                        </Box>
                    </Box>
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
                            <Box sx = {[styles.boxcontainer,{flexDirection:"row"}]}> 
                                <Button sx={styles.buttoncomeback} onClick={login}>Voltar a iniciar sessão</Button>
                                <Button sx={styles.buttoncontainer} onClick={handleforgorpassword}>Enviar email</Button>
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
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        margin:"auto",
        marginTop:"3rem",
        textAlign: 'left',
        maxWidth:"600px",
        paddingLeft:"5rem",
        paddingRight:"5rem",
    },
    toolbarcontainer:{
        flexGrow: 1, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        marginTop:"2rem",
        marginBottom:"2rem"
    },
    buttoncomeback:{
        color:"white",
        '&:hover': {
            backgroundColor: '#6B7280',
          },
        backgroundColor:"#a7aab0",
        fontFamily: 'K2D',
        marginTop:"0.3rem",
        fontSize:"13px",
        paddingTop:"0.2rem",
        paddingBottom:"0.2rem",
        borderRadius:"6px",
        flex:1
    },
    buttoncontainer:{
        backgroundColor:"#1B64A7",
        color:"white",
        fontFamily: 'K2D',
        marginTop:"0.3rem",
        fontSize:"13px",
        paddingTop:"0.2rem",
        paddingBottom:"0.2rem",
        borderRadius:"6px",
        '&:hover': {
            backgroundColor: '#134b7c',
          },
          '&:disabled': {
            color:"white",
            backgroundColor: '#134b7c',
        },
          flex:1
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
 
    textdefault:{
        fontSize:"20px",
        fontFamily: 'K2D',
        color:"#344054",
        WebkitTextStrokeWidth: '0.1px', 
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
      containerfeaturesmain:{
        background: "white",
        gap:"10px",
        display:"flex",
        flexDirection:"column",
        paddingTop:"1rem",
        paddingBottom:"1rem"
    },
    boxcontainer:{
        display:"flex",
        flexDirection:"column",
        textAlign:"left",
        gap:"5px",
        width:"100%"
    },
    inputtext:{
        borderRadius:"4px",
        paddingLeft:"0.5rem",
        border:"1px solid #98A2B3", 
        height:"3.7ch",
        width:"auto",
        fontFamily: 'Montserrat',
        fontSize:"12px",
      },
});