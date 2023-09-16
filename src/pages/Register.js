import { useState, useEffect,useRef,useContext } from "react";
import { useNavigate,Link } from "react-router-dom";
import Button from '@mui/material/Button';
import {Text,StyleSheet} from 'react-native';
import Toolbar from "@mui/material/Toolbar";
import Checkbox from '@mui/material/Checkbox';
import Box from "@mui/material/Box";
import { Divider } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faExclamation} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { PopupContext } from './popupcontext';
import logo from "./../img/logo.png";

export default function Register() {
    const [nome,setnome] = useState('');
    const errRef = useRef();
    const userRef = useRef();
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const [confirmpassword,setconfirmpassword] = useState('');
    const [checkbox,setcheckbox] = useState(false);
    const [errMsg, setErrMsg] = useState([]);
    const {setIsOpenLogin, setIsOpenRegister} = useContext(PopupContext);
    

    const validatePassword = (password) => 
    {  
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        console.log(regex.test(password));
        return regex.test(password);
    }

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    function login(){
        setIsOpenRegister(false);
        setIsOpenLogin(true);
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
                "Palavra passe deve conter pelo menos 8 carateres, uma letra mínuscula, uma letra maiúscula, um símbolo e um número",
              ]);
        }
        else if(validatePassword(password) && isValidEmail(email) && nome && password === confirmpassword){
            setErrMsg([]);
            axios.post('http://localhost:8080/register',{nome,email,password})
            .then(res =>{
                console.log(res)
                if(res.status === 201){
                    setErrMsg([]);
                    setIsOpenRegister(false);
                    setIsOpenLogin(true);
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
           <Box  sx={styles.container}>
                <Box sx={[styles.containerfeaturesmain,{gap:"9px"}]}>  
                    <Text style={styles.textdefault} >
                        Novo registo
                    </Text>   
                    <Box sx = {styles.boxcontainer}> 
                        <Text style={[styles.textdefault1,{fontSize:"13px"}]} >
                            Cria a tua conta inforsystem
                        </Text> 
                    </Box>
                </Box>
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
                        <Box sx = {[styles.boxcontainer,{flexDirection:'row',alignItems:"center",marginLeft:"-0.6rem"}]}> 
                                <Checkbox />
                                <Text style={styles.textdefault4} >
                                    SUBSCREVER NEWSLETTER<span><Text style={{fontSize:"12px", color:"#344054",fontFamily: 'Montserrat',}}> (quero receber notificação de novos produtos)</Text></span>        
                                </Text>  
                        </Box>
                        <Box sx = {[styles.boxcontainer,{flexDirection:'row',alignItems:"center",marginLeft:"-0.6rem"}]}> 
                                <Checkbox required value={checkbox} onChange={(e) => setcheckbox(e.target.checked)}/>
                                <Text style={styles.textdefault4} >
                                    LI E ACEITO OS <span><Link to="/termoseserviços" style={{color:"#1B64A7",fontFamily: 'Montserrat',cursor:"pointer", textDecorationLine:"none"}}>TERMOS E CONDIÇÕES</Link> </span>E CONFIRMO QUE COMPREENDO A <span><Link to="/políticadeprivacidade" style={{color:"#1B64A7",fontFamily: 'Montserrat',cursor:"pointer", textDecorationLine:"none"}}>POLÍTICA DE PRIVACIDADE</Link> </span>        
                                </Text>  
                        </Box>
                        <Box sx = {[styles.boxcontainer,{flexDirection:"row"}]}> 
                            <Button sx={styles.buttoncomeback} onClick={login}>Voltar a iniciar sessão</Button>
                            <Button sx={styles.buttoncontainer} onClick={handleregister}  disabled={!checkbox}>Criar conta</Button>
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
        WebkitTextStrokeWidth: '0.1px', // Stroke width
      },

      textdefault4:{
        fontSize:"13px",
        fontFamily: 'Montserrat',
        fontWeight:"900",
      },   
      textdefault1:{
        fontSize:"17px",
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
        gap:"5px",
        width:"100%"
    },
    inputtext:{
        borderRadius:"4px",
        paddingLeft:"0.5rem",
        border:"1px solid #98A2B3", // Change the border color here
        height:"3.7ch",
        width:"auto",
        fontFamily: 'Montserrat',
        fontSize:"12px",
      },
});