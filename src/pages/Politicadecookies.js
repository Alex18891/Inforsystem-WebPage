import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";
import {View, Text,StyleSheet} from 'react-native';
import Box from "@mui/material/Box";
import useMediaQuery from '@mui/material/useMediaQuery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import '../index.css';


export default function Politicadecookies() {
    const isExtraSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));
    const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.between('md', 'lg'));
    const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.between('lg', 'xl'));
    const isExtraLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('xl'));
    const navigate = useNavigate();
    return (
        <>
            <Header></Header>
            <Box sx={{maxWidth:"1800px",  margin:"auto",paddingLeft:"0.5rem",paddingRight:"0.5rem"}}>
                <Box sx={{...styles.container,
                ...(isSmallScreen && styles.containersmall), 
                ...(isExtraSmallScreen && styles.containerextrasmall),
                }} >    
                    <Box>
                        <Box style={{
                            ...styles.textdefault,
                            maxWidth: "1800px",  
                            ...(isSmallScreen ? styles.textdefaultsmall : {}),
                            ...(isExtraSmallScreen ? styles.textdefaultextrasmall : {})
                        }}>
                        <a id='aheader' style={{fontSize: "20px",zIndex:-1}} href='/'>Página Inicial</a>    
                        <Text style={{fontSize: "20px",zIndex:-1}}>   \  Politica de cookies  </Text>  
                        </Box>
                    </Box> 
                    <Text style={{
                        ...styles.textdefault3,
                        ...(isSmallScreen ? styles.textdefault3small : {}),
                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                    }}>
                        <span style={{fontWeight:"bold"}}>Politica</span> de cookies
                    </Text>
                    <Text style={{
                        ...styles.textdefault3,
                        fontSize:"18px",
                        marginTop:"1rem",
                        zIndex:-1,
                        ...(isSmallScreen ? styles.textdefault3small : {}),
                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                    }}>
                        <span style={{fontWeight:"bold"}}>| O que são cookies?</span> 
                    </Text>
                    <Text style={{fontSize: "16px",lineHeight:"2rem",zIndex:-1,}}>Os cookies são pequenas porções de texto que são transferidas para o seu computador ou dispositivo quando visita sites.
                    <br />Eles permitem que os sites guardem e leiam informações sobre os seus padrões de navegação, adaptando a experiência online às suas preferências.
                    </Text> 
                    <Text style={{
                        ...styles.textdefault3,
                        fontSize:"18px",
                        marginTop:"1rem",
                        zIndex:-1,
                        ...(isSmallScreen ? styles.textdefault3small : {}),
                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                    }}>
                        <span style={{fontWeight:"bold"}}>| Que tipo de cookies são utilizados?</span>
                    </Text>
                    <Text style={{fontSize: "16px",lineHeight:"2rem"}}>Cookies de sessão: são cookies temporários, cruciais para o site funcionar corretamente.
                    <br />Eles só persistem enquanto você estiver na página, sendo eliminados assim que fechar o browser.
                    <br />Não deixam registros no seu disco rígido. 
                    <br />Estes cookies ajudam a analisar o comportamento do site, permitindo aprimorar o conteúdo e tornar a navegação mais fácil. 
                    </Text> 
                    <Text style={{
                        ...styles.textdefault3,
                        fontSize:"18px",
                        marginTop:"1rem",
                        zIndex:-1,
                        ...(isSmallScreen ? styles.textdefault3small : {}),
                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                    }}>
                        <span style={{fontWeight:"bold"}}>| O que causa a não autorização do uso de cookies?</span>
                    </Text>
                    <Text style={{fontSize: "16px",lineHeight:"2rem",zIndex:-1,}}>
                        Se preferir não usar cookies, pode desativá-los no seu navegador. No entanto, essa ação pode fazer com que certas páginas da web não sejam carregadas adequadamente.
                    </Text>
                    <Text style={{
                        ...styles.textdefault3,
                        fontSize:"18px",
                        marginTop:"1rem",
                        zIndex:-1,
                        ...(isSmallScreen ? styles.textdefault3small : {}),
                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                    }}>
                        <span style={{fontWeight:"bold"}}>| Como posso gerir as cookies?</span>
                    </Text>
                    <Text style={{fontSize: "16px",lineHeight:"2rem",zIndex:-1,}}>
                        Todos os browsers oferecem opções para gerir cookies. Pode ajustar essas configurações nos menus "opções" ou "preferências". 
                        <br />No entanto, se desativar os cookies, pode comprometer o funcionamento de certos serviços online e afetar a sua experiência no site.
                    </Text>
                   
                   
                   
                </Box>     
            </Box> 
            <Footer></Footer>
        </>
    );
}

const styles = StyleSheet.create({
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
    disponivel:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
    },
    containerfeatures:{
        marginTop:"0.5rem",
        display:"flex",
        flexDirection:"column",
        marginBottom:"0.5rem",
        alignItems:"left",
        textAlign:"center",
    },
    containerfeaturesproduts:{       
        padding:"2rem",
    },
    viewcontainer:{ 
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)', 
        marginBottom:"2rem",
        paddingLeft:"0.5rem",
    },
    containerfeaturesmainproduct:
    {
        background: "white",
        alignItems:"center",
        justifyContent:"center",
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
    color:"#368CD6",
    fontWeight:"bold",
    },
    textdefault2small:{
    textAlign:"center"
    },
    textdefault2extrasmall:{
        textAlign:"center"
    },
    disponiveltext:{
    fontSize:"15px",
    fontFamily:"K2D",
    marginBottom:"0rem",
    color:"#3CA62B",
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
});