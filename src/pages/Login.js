import { useState, useEffect ,useRef} from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import {Text,StyleSheet} from 'react-native';
import Toolbar from "@mui/material/Toolbar";
import { Divider } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faExclamation} from '@fortawesome/free-solid-svg-icons'
import Box from "@mui/material/Box";
import axios from 'axios'

import logo from "./../img/logo.png";

export default function Login() {
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const [errMsg, setErrMsg] = useState([]);
    const errRef = useRef();
    const navigate = useNavigate();
    function register(){
        navigate("/register");
    }
    function forgotpassword(){
        navigate("/forgotpassword");
    }
    function handlelogin(event){
        event.preventDefault();
        setErrMsg([]);
        if (!email) {
            setErrMsg((prevArray) => [
                ...prevArray,
                "É obrigatório o preenchimento do campo email",
              ]);
          }
          if (!password) {
            setErrMsg((prevArray) => [
                ...prevArray,
                "É obrigatório o preenchimento do campo password",
              ]);
          }
          else if(password && email)
          {
            axios.post('http://localhost:8080/login',{email,password})
            .then(res =>{
                console.log(res)
                if(res.status === 200){
                    setErrMsg([]);
                    const token = res.data.token;
                    document.cookie = `token=${token}`;
                    navigate("/");
                }
                else{
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
                        Iniciar sessão
                    </Text> 
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
                                <Text style={styles.textdefault3} >
                                        Esqueçi-me da password? Recupera<span><a style={styles.textdefaultblue}  onClick={forgotpassword}> aqui</a></span>        
                                </Text>  
                            </Box>
                            <Box sx = {styles.boxcontainer}> 
                                <Button sx={styles.buttoncontainer} onClick={handlelogin}>Iniciar sessão</Button>
                            </Box>
                            <Box sx = {[styles.boxcontainer,{alignItems:"center"}]}> 
                                <Text style={styles.textdefault4} >
                                        És novo cliente?<span><a style={styles.textdefaultblue1} onClick={register}> Cria a tua conta</a></span>        
                                </Text>  
                            </Box>
                            {errMsg.length>0 && (
                                <Box sx = {[styles.boxcontainer,{backgroundColor:"rgb(254,242,242)",borderRadius:"4px",padding:"0.5rem"}]}> 
                                    <Box style={{display:"flex",gap:"5px"}}>
                                        <FontAwesomeIcon icon={faExclamation} style={{color: "#ac4343",}} />
                                        <Text style={[styles.errmsg,{color:"rgb(172,67,67)"}]}>Foram encontrados {errMsg.length} erro(s) de validação:</Text>
                                    </Box>    
                                    <Divider style={{ backgroundColor: 'rgb(211,109,109)', height: 1 }}/>
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
        // Other styles...
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
        textAlign:"left",
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