import {useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import {Text,StyleSheet} from 'react-native';
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { Divider } from '@mui/material';
import logoutimg from "./../img/logout.png";
import usersmallblack from "./../img/usersmallblack.png"
import newsletter from "./../img/newsletter.png"
import address from "./../img/address.png"
import buy from "./../img/returnblack.png"
import hello from "./../img/hello.png"
import { useUser } from '../UserProvider';
import { PopupContext } from './popupcontext';

export default function Conta() {
    const navigate = useNavigate();
    const { setUserId,setEmail,setname,name} = useUser();
    const {setIsOpenconta } = useContext(PopupContext);

    const logoutaccount = () =>{
        document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "userid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        localStorage.removeItem('userinfo');
          setUserId(null)
          setEmail(null)
          setname(null)
          setIsOpenconta(false)
      }
 

    return (
        <>
           <Box sx={{ flexGrow: 1,}}>
           <Box position="static" sx={{background: "#1A65A4"}}>
                <Toolbar>
                    <Box sx={styles.toolbarcontainer}>
                        <Box sx={{...styles.seconditemfirsttoolbar,cursor: "normal"}}>
                            <img
                                src={hello}
                                width="27px"
                                height="27px"
                                alt="profile picture"
                                style={{
                                }}></img>
                            <Text style={{...styles.textdefault,color:"white"}} >
                                Olá {name}
                            </Text>
                        </Box>  
                    </Box>    
            </Toolbar>
            </Box >
           </Box>
           <Box  sx={styles.container}>    
                <Box sx={styles.containerfeaturesmain}> 
                    <Box sx = {styles.boxcontainer}> 
                        <Box sx={styles.seconditemfirsttoolbar}>
                            <img
                                src={usersmallblack}
                                width="20px"
                                height="20px"
                                alt="profile picture"
                                style={{
                                }}></img>
                                <Link  id='aheader' style={{alignItems:"flex-start"}} to='/dadospessoais'>Dados pessoais</Link> 
                            </Box>
                    </Box>
                    <Box sx = {styles.boxcontainer}> 
                        <Box sx={styles.seconditemfirsttoolbar}>
                            <img
                                src={newsletter}
                                width="20px"
                                height="20px"
                                alt="profile picture"
                                style={{
                                }}></img>
                                <Link  id='aheader' style={{alignItems:"flex-start"}} to='/subscrevernewsletter'>Subscrever Newsletter</Link> 
                        </Box>
                    </Box>  
                    <Box sx = {styles.boxcontainer}> 
                        <Box sx={styles.seconditemfirsttoolbar}>
                            <img
                                src={address}
                                width="20px"
                                height="20px"
                                alt="profile picture"
                                style={{
                                }}></img>
                                <Link id='aheader' style={{alignItems:"flex-start"}}>Configurações de entrega</Link> 
                        </Box>
                    </Box>
                    <Box sx = {styles.boxcontainer}> 
                        <Box sx={styles.seconditemfirsttoolbar}>
                            <img
                                src={buy}
                                width="20px"
                                height="20px"
                                alt="profile picture"
                                style={{
                                }}></img>
                                <Link  id='aheader' to="/perdirorçamento" style={{alignItems:"flex-start"}}>Pedir orçamento</Link> 
                        </Box>
                    </Box>
                    <Divider style={{border:0, borderTop:'1px solid rgba(52, 64, 84, 0.3)',width:"100%"}}/>        
                    <Box sx = {styles.boxcontainer}> 
                        <Box sx={styles.seconditemfirsttoolbar}>
                            <img
                                src={logoutimg}
                                width="20px"
                                height="20px"
                                alt="profile picture"
                                style={{
                                }}></img>
                                <Link  id='aheader' to='/' onClick={logoutaccount} style={{alignItems:"flex-start"}}>Sair</Link> 
                            </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        margin:"auto",
        marginTop:"1rem",
        textAlign: 'left',
        maxWidth:"400px",
        paddingLeft:"5rem",
        paddingRight:"5rem",
    },
    toolbarcontainer:{
        flexGrow: 1, 
        display: 'flex', 
        justifyContent: 'center',
        marginTop:"1rem",
        marginBottom:"1rem"
    },
    seconditemfirsttoolbar:{
        display: "flex", alignItems: "center",cursor: "pointer",gap:"10px"
      },
    textdefault:{
        fontSize:"20px",
        fontFamily: 'K2D',
        color:"#344054",
        WebkitTextStrokeWidth: '0.1px', 
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
});