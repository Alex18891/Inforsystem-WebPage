import { useState, useEffect ,useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import {Text,StyleSheet} from 'react-native';
import Toolbar from "@mui/material/Toolbar";
import { Divider } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faExclamation} from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Box from "@mui/material/Box";
import axios from 'axios'
import { PopupContext } from './popupcontext';

import logo from "./../img/logo.png";

export default function Login() {
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const [errMsg, setErrMsg] = useState([]);
    const errRef = useRef();
    const { setIsOpenLogin, setIsOpenRegister,setIsOpenForgotpassword} = useContext(PopupContext);

    function register(){
        setIsOpenLogin(false);
        setIsOpenRegister(true);
    }
    function forgotpassword(){
        setIsOpenLogin(false);
        setIsOpenForgotpassword(true)
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
                    setIsOpenLogin(false);
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
                <Box  sx={styles.container}>
                    <Box sx={{width:"65%"}}>    
                        <Box sx={[styles.containerfeaturesmain,{gap:"9px"}]}>  
                            <Text style={styles.textdefault} >
                                Iniciar sessão
                            </Text>   
                            <Divider style={{border:0, borderTop:'1px solid rgba(52, 64, 84, 0.3)',width:"100%"}}/>
                            <Box sx = {styles.boxcontainer}> 
                                <Text style={[styles.textdefault1,{fontSize:"13px"}]} >
                                    Inicia sessão na sua conta inforsystem
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
                                    onChange={(e) => setpassword(e.target.value)}
                                    value={password}
                                    required
                                    />
                            </Box>
                            <Box sx = {styles.boxcontainer}> 
                                <Text style={styles.textdefault3} >
                                        Esqueçeu da palavra passe? Recupera<span><a style={styles.textdefaultblue}  onClick={forgotpassword}> aqui</a></span>        
                                </Text>  
                            </Box>
                            <Box sx = {styles.boxcontainer}> 
                                <Button sx={styles.buttoncontainer} onClick={handlelogin}>Iniciar sessão</Button>
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
                    <Box sx={{width:"50%"}}> 
                        <Box sx={[styles.containerfeaturesmain,{gap:"9px"}]}> 
                            <Text  Text style={styles.textdefault} >
                                Não tem conta inforsystem?
                            </Text>     
                            <Divider style={{border:0, borderTop:'1px solid rgba(52, 64, 84, 0.3)',width:"100%"}}/>
                            <Box sx = {styles.boxcontainer}> 
                                <Text style={[styles.textdefault1,{fontSize:"13px"}]} >
                                    Registe-se agora mesmo e beneficie de inúmeras vantagens!
                                </Text> 
                            </Box>
                        </Box>
                        <Box sx={styles.containerfeaturesmain}>        
                            
                            <Box sx = {[styles.boxcontainer,{flexDirection: "row"}]}> 
                                <FontAwesomeIcon icon={faCheck} style={{color: "#1b64a7"}} />
                                <Text style={[styles.textdefault1,{fontSize:"13px"}]} >
                                    Reparação<span style={{fontWeight:"bold", WebkitTextStrokeWidth: '0.1px'}}> rápida</span> 
                                </Text>
                            </Box>
                            <Box sx = {[styles.boxcontainer,{flexDirection: "row"}]}> 
                                <FontAwesomeIcon icon={faCheck} style={{color: "#1b64a7"}} />
                                <Text style={[styles.textdefault1,{fontSize:"13px"}]} >
                                    Qualidade <span style={{fontWeight:"bold", WebkitTextStrokeWidth: '0.1px'}}> garantida</span> 
                                </Text>
                            </Box>
                            <Box sx = {[styles.boxcontainer,{flexDirection: "row"}]}>   
                                <FontAwesomeIcon icon={faCheck} style={{color: "#1b64a7"}} />
                                <Text style={[styles.textdefault1,{fontSize:"13px"}]} >
                                    Todo o tipo de <span style={{fontWeight:"bold", WebkitTextStrokeWidth: '0.1px'}}> produto</span> 
                                </Text>
                            </Box>
                            <Box sx = {[styles.boxcontainer,{flexDirection: "row"}]}>   
                                <FontAwesomeIcon icon={faCheck} style={{color: "#1b64a7"}} />
                                <Text style={[styles.textdefault1,{fontSize:"13px"}]} >
                                    Nada <span style={{fontWeight:"bold", WebkitTextStrokeWidth: '0.1px'}}> igual</span> 
                                </Text>
                            </Box>
                
                            <Box sx = {[styles.boxcontainer,{flexDirection: "row"}]}> 
                                <FontAwesomeIcon icon={faCheck} style={{color: "#1b64a7"}} />
                                <Text style={[styles.textdefault1,{fontSize:"13px"}]} >
                                    Mais barato <span style={{fontWeight:"bold", WebkitTextStrokeWidth: '0.1px'}}> impossível</span> 
                                </Text>
                            </Box>
                            </Box>   
                            <Box sx = {[styles.boxcontainer,{width:"100%"}]}> 
                                <Button sx={styles.buttoncontainer} onClick={register}>Criar conta</Button>
                            </Box>
                        </Box>        
                </Box>
          
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        margin:"auto",
        marginTop:"5rem",
        textAlign: 'left',
        maxWidth:"1000px",
        display:"flex",
        flexDirection:"row",
        gap:"80px",
        paddingLeft:"4rem",
        paddingRight:"4rem"
    },
      toolbarcontainer:{
        flexGrow: 1, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        marginTop:"2rem",
        marginBottom:"2rem"
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
        fontSize:"13px",
        paddingTop:"0.2rem",
        paddingBottom:"0.2rem",
        borderRadius:"6px",
        '&:hover': {
            backgroundColor: '#134b7c',
          },
    },

    textdefault:{
        fontSize:"20px",
        fontFamily: 'K2D',
        color:"#344054",
        WebkitTextStrokeWidth: '0.1px', 
      },
      textblue:{
        fontSize:"20px",
        fontFamily: 'K2D',
        color:"#1B64A7",
        WebkitTextStrokeWidth: '0.1px', 
      },
      textdefaultblue:{
        fontSize:"13px",
        fontFamily: 'Montserrat',
        color:"#1B64A7",
        fontWeight:"900",
        cursor: "pointer"
      },

      textdefault3:{
        fontSize:"13px",
        fontFamily: 'Montserrat',
        fontWeight:"900",
        color:"#344054",
        WebkitTextStrokeWidth: '0.1px', 
      },    
      textdefault1:{
        fontSize:"17px",
        fontFamily: 'Montserrat',
        color:"#344054"
      },

    containerfeaturesmain:{
        background: "white",
        gap:"20px",
        display:"flex",
        flexDirection:"column",
        paddingTop:"1rem",
        alignItems:"flex-start",
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
        borderRadius:"6px",
        paddingLeft:"0.5rem",
        border:"1px solid #98A2B3", 
        height:"3.7ch",
        width:"auto",
        fontFamily: 'Montserrat',
        fontSize:"12px",
      },
});