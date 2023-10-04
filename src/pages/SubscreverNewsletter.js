import { useState,useEffect,useContext} from "react";
import React from 'react'
import { useNavigate,useLocation,Link } from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";
import {View, Text,StyleSheet} from 'react-native';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import useMediaQuery from '@mui/material/useMediaQuery';
import Checkbox from '@mui/material/Checkbox';
import { Divider } from '@mui/material';
import logoutimg from "./../img/logout.png";
import pfpsmall from "./../img/usersmallblack.png";
import settings from "./../img/settings.png";
import newsletter from "./../img/newsletter.png"
import { PopupContext } from './popupcontext';
import * as XLSX from 'xlsx';
import '../index.css';
import { useUser } from '../UserProvider';
import address from "./../img/address.png"
import ajuda from "./../img/ajuda.png"

export default function SubscreverNewsletter() {
    const isExtraSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));
    const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.between('md', 'lg'));
    const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.between('lg', 'xl'));
    const isExtraLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('xl'));
    const { setUserId,setEmail,setname,name,userid} = useUser();
    const navigate = useNavigate();

    const commonContainer1 = (
        <Box sx={styles.containerflexinfo}>
            <Box  sx={styles.container1}>
                <Box sx={[styles.viewcontainer,{paddingLeft:"0"}]}>      
                    <Box sx={styles.containerfeaturesmainproduct}> 
                    <Box sx={styles.containermenu}>
                    <Box sx={styles.titlemenu}>
                        <Box sx={styles.seconditemfirsttoolbar}>
                            <img
                                src={settings}
                                width="25px"
                                height="25px"
                                alt="profile picture"
                                style={{}}></img>
                            <Text style={styles.textdefault2}>
                                <span style={{color:"black",fontSize:"20px"}}>Painel da conta</span> 
                            </Text>
                        </Box> 
                    </Box>
                    <Divider style={{border:0, borderTop:'1px solid rgba(52, 64, 84, 0.3)',width:"100%",marginBottom:"0.5rem"}}/>
                    <Box sx={styles.containerfeatures}>
                        <Link style={styles.seconditemfirsttoolbar} id='aheader' to='/dadospessoais'>
                            <img
                                src={pfpsmall}
                                width="25px"
                                height="25px"
                                alt="profile picture"
                                style={{}}></img>
                            <p style={{margin:"0",fontSize:"18px"}}>
                                Dados Pessoais
                            </p>
                        </Link> 
                        <Link style={styles.seconditemfirsttoolbar} id='aheader' to='/subscrevernewsletter'>
                            <img
                                src={newsletter}
                                width="25px"
                                height="25px"
                                alt="profile picture"
                                style={{}}></img>
                            <p style={{margin:"0",fontSize:"18px"}}>
                                Subscrever Newsletter
                            </p>
                        </Link>
                        <Link style={styles.seconditemfirsttoolbar} id='aheader' to='/configuraçõesdeentrega'>
                            <img
                                src={address}
                                width="25px"
                                height="25px"
                                alt="profile picture"
                                style={{}}></img>
                            <p style={{margin:"0",fontSize:"18px"}}>
                                Configurações de entrega
                            </p>
                        </Link>                                                                                                                                         
                    </Box>     
                    </Box> 
                    </Box>        
                </Box> 
            </Box>
            <Box  sx={styles.container1}>
            <Box sx={[styles.viewcontainer,{paddingLeft:"0"}]}>      
                <Box sx={styles.containerfeaturesmainproduct}> 
                <Box sx={styles.containermenu}>
                <Box sx={styles.titlemenu}>
                    <Box sx={styles.seconditemfirsttoolbar}>
                        <img
                            src={ajuda}
                            width="20px"
                            height="20px"
                            alt="profile picture"
                            style={{}}></img>
                        <Text style={styles.textdefault2}>
                            <span style={{color:"black",fontSize:"20px"}}>Precisas de Ajuda?</span> 
                        </Text>
                    </Box> 
                </Box>
                <Divider style={{border:0, borderTop:'1px solid rgba(52, 64, 84, 0.3)',width:"100%",marginBottom:"0.5rem"}}/>
                <Box sx={styles.containerfeatures}>
                    <Link style={styles.seconditemfirsttoolbar} id='aheader' to="mailto:loja2@inforsystem.net">
                        <i style={{marginTop:"0.2rem"}} className="fas fa-envelope" width="29px" height="27px"   ></i>
                        <p style={{margin:"0",fontSize:"18px"}}>
                            loja2@inforsystem.net
                        </p>   
                    </Link> 
                    <Link style={styles.seconditemfirsttoolbar} id='aheader' to="https://wa.me/351967687915">
                        <i style={{marginTop:"0.2rem"}} className="fas fa-phone" width="29px" height="27px"  ></i>
                        <p style={{margin:"0",fontSize:"18px"}}>
                            (+351) 966218628
                        </p>
                    </Link>                                                                                                                                        
                </Box>     
                </Box> 
                </Box>        
            </Box> 
            </Box>
         </Box>
    )

    const logoutaccount = () =>{
        document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "userid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        localStorage.removeItem('userinfo');
        setUserId(null)
        setEmail(null)
        setname(null)
        navigate('/')
      }


    return (
        <>
            {userid && (
                <>
                <Header></Header> 
                <Box sx={{maxWidth:"1800px",  margin:"auto",paddingLeft:"0.5rem",paddingRight:"0.5rem"}}>
                    <Box sx={{...styles.container,
                    ...(isSmallScreen && styles.containersmall), 
                    ...(isExtraSmallScreen && styles.containerextrasmall),
                    }} >    
                        
                        <Text style={{
                            ...styles.textdefault3,
                            ...(isSmallScreen ? styles.textdefault3small : {}),
                            ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                        }}>
                            <span style={{fontWeight:"bold"}}>Olá {name}</span>
                        </Text>
                        <Box sx={styles.seconditemfirsttoolbar}>
                            <img
                                src={logoutimg}
                                width="20px"
                                height="20px"
                                alt="profile picture"
                                style={{}}></img>
                            <Link  id='aheader' to='/' onClick={logoutaccount} style={{alignItems:"flex-start"}}>Sair da conta</Link> 
                        </Box>
                    </Box>
                    <Box sx={{...styles.containermain, 
                            ...(isSmallScreen && styles.containermainsmall), 
                            ...(isExtraSmallScreen && styles.containermainextrasmall),}}>
                                {commonContainer1}    
                        <Box sx={{...styles.containerflexinfo,flex:1}}>         
                            <Box  sx={styles.container1}>
                                <Box sx={styles.viewcontainer} >   
                                    <Box sx={styles.containerfeaturesmainproduct}> 
                                        <Box sx={styles.containerfeaturesproduts}> 
                                            <Text style={{...styles.textdefault2,margin:0}}>
                                                <span style={{color:"black",fontSize:"20px"}}>Subscrever Newsletter</span> 
                                            </Text>
                                        </Box>
                                        <Box sx={styles.containerfeaturesproduts}> 
                                            <Box sx={{...styles.pesquisarow,
                                                marginLeft:"-0.6rem"}}>
                                                    <Checkbox />
                                                    <Text style={[styles.textdefault,{fontSize:"15px",margin:0, flex: "none"}]}>
                                                            Subscrever Newsletter
                                                    </Text>   
                                            </Box>
                                            <Text style={[styles.textdefault,{fontSize:"15px",margin:0,maxWidth:"auto"}]}>
                                                Ao submeteres o teu email estás a concordar subscrever à newsletter da nossa loja e a aceitar os nossos Termos e Condições.
                                            </Text>  
                                        </Box>
                                        <Box sx={{...styles.containerfeaturesproduts,flexDirection:"row"}}> 
                                                <Button sx={[styles.buttoncontainer,{flex:"none"}]}>GUARDAR DADOS</Button>
                                        </Box>
                                    </Box>
                                </Box> 
                            </Box>    
                        </Box>               
                    </Box>        
                </Box> 
                <Footer></Footer>
                </>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    titlemenu:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    containermain:{
        display:"flex",
        flexDirection:"row",
        gap:"15px",
    },
    containermainsmall:{
        flexDirection:"column",
        gap:0
    },
    pesquisarow:{
        display:"flex",flexDirection:"row",gap:"0px",alignItems:"center", flex:1
    },
    containermainextrasmall:{
        flexDirection:"column",
        gap:0
    },
    container:{
        display:'flex',
        flexDirection:'column',
        marginTop:"2rem",
        marginBottom:"2rem",
    },   
    containersmall:{
       alignItems:"center",
    },
    containerextrasmall:{
        alignItems:"center",
    },
    containermenu:{
        margin:"1.5rem",
    },
    containerfeatures:{
        display:"flex",
        flexDirection:"column",
        gap:"10px",
        textAlign:"left",   
    },
    containerfeaturesproduts:{       
        display:"flex",flexDirection:"column",gap:"10px"
    },
    viewcontainer:{ 
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)', 
        padding:"0.5rem",
    },
    containerfeaturesmainproduct:
    {
        background: "white",
        justifyContent:"center",
        padding:"2rem",
        display:"flex",
        gap:"15px",
        flexDirection:"column"
    },
    container1:{
        display:"block",
    },
    containerflexinfo:{
        display:"flex",
        flexDirection:"column",
        gap:"20px",
        marginBottom:"2rem"
    },
    container1small:{
        display:"flex",
        flexDirection:"column",
    },
    container1extrasmall:{
        display:"flex",
        flexDirection:"column",
    },
    seconditemfirsttoolbar:{
        display: "flex", alignItems: "center",gap:"10px"
    },
    textdefault:{
    fontSize:"22px",
    fontFamily: 'Montserrat',
    marginBottom:"0.5rem",
    maxWidth:"420px",
    zIndex:-1
    },
    textdefaultsmall:{
      textAlign:"center"
     },
    textdefaultextrasmall:{
        textAlign:"center"
     },
    textdefault2:{
    fontSize:"15px",
    fontFamily:"K2D",
    marginBottom:"0.5rem",
    marginTop:"0.5rem",
    maxWidth:"420px",
    fontWeight:"bold",
    },
    textdefault2small:{
    textAlign:"center"
    },
    textdefault2extrasmall:{
        textAlign:"center"
    },
    textdefault3:{
    fontSize:"37px",
    fontFamily:"K2D",
    marginBottom:"0.5rem",
    zIndex:-1
    },
    textdefault3small:{
    textAlign:"center"
    },
    textdefault3extrasmall:{
        textAlign:"center"
    }, 
    buttoncontainer:{
        backgroundColor:"#1B64A7",
        color:"white",
        fontFamily: 'K2D',
        fontSize:"13px",
        paddingTop:"0.2rem",
        paddingBottom:"0.2rem",
        paddingLeft:"23px",
        paddingRight:"23px",
        borderRadius:"6px",
        '&:hover': {
            backgroundColor: '#134b7c',
          },
    },
});