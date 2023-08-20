import React, { useEffect,useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";
import Container from "@mui/material/Container";
import {View, Text,StyleSheet} from 'react-native';


import logo from "./../img/logo.png";
import useMediaQuery from '@mui/material/useMediaQuery';


export default function FooterInforsystem() {
    const isExtraSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));
    const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.between('md', 'lg'));
    const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.between('lg', 'xl'));
    const isExtraLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('xl'));

  return (
    <Box sx={{background: "#1A65A4"}}
    component="footer">
    <Container  sx={{...styles.container,
    ...(isExtraLargeScreen && styles.containerlarge),
    ...(isLargeScreen && styles.containerlarge), 
    ...(isMediumScreen && styles.containermedium), 
    ...(isSmallScreen && styles.containersmall), 
    ...(isExtraSmallScreen && styles.containerextrasmall) }}>
        <Box sx={{maxWidth:"190px" }}>
                <img
                    src={logo}
                    width={110}
                    style={styles.imgcontainer} 
                    alt="profile picture"
                ></img>
                <p style={styles.textdefault} >
                    NEWSLETTER
                </p> 
                <p style={styles.textdefault2} >
                    Recebe no seu email novas novidades/promoções
                </p> 
                <input
                type="email"
                placeholder="Insira o email"
                style={styles.inputtext}
                />
                <p style={styles.textdefault2} >
                    Ao submeteres o teu email estás a concordar subscrever à newsletter da nossa loja e a aceitar os nossos <span ><Link  style={{textDecorationLine:"none"}} to ='#' id='afooter'>Termos e Condições.</Link></span>
                </p> 
        </Box>
        <Box sx={{maxWidth:"190px",marginTop:"45px" }}>          
                <p style={styles.textdefault} >
                    INFORMAÇÕES
                </p>  
                <Link style={styles.acontainer} id="afooter" to="/termoseserviços" >
                   Termos e condições
                </Link>
                <Link style={styles.acontainer} id="afooter" to="/políticadeprivacidade" >
                    Política de Privacidade
                </Link>
                <Link style={styles.acontainer} id="afooter" to="/políticadecookies" >
                    Política de Cookies
                </Link>   
        </Box> 
        <Box sx={{maxWidth:"190px",marginTop:"45px" }}>          
            <p style={styles.textdefault} >
                CONTACTOS
            </p> 
            <p style={styles.textdefault2} >
                Segunda a Sábado:
            </p> 
            <p style={styles.textdefault2} >
                08h00 - 13h00
            </p>
            <p style={styles.textdefault2} >
                14h00 - 18h00
            </p>
            <Link style={styles.acontainer} id="afooter"  to="mailto:loja2@inforsystem.net">
                <i className="fa fa-envelope" style={{marginRight:"0.5rem",marginTop:"0.2rem"}} ></i>
                loja2@inforsystem.net
            </Link>
            <Link style={styles.acontainer} id="afooter" to="https://www.facebook.com/people/INFORSYSTEM-LDA/100063788280384/?paipv=0&eav=AfZl0QeQ6W5KhN9QuRNoDiv7k5IxzIqLsXdD16S5GpwssNuXM9GBYl77DQfk54QzAHI&_rdr">
                <i className="fa fa-facebook" style={{marginRight:"0.5rem",marginTop:"0.2rem"}} ></i>
                Inforsystem Lda
            </Link>   
            <Link style={styles.acontainer} id="afooter" to="https://wa.me/351967687915">
                <i className="fa fa-whatsapp" style={{marginRight:"0.5rem",marginTop:"0.2rem"}} ></i>
                (+351) 966218628
            </Link>  
        </Box> 
        <Box sx={{maxWidth:"190px",marginTop:"45px" }}>          
            <p style={styles.textdefault} >
                SOBRE A EMPRESA
            </p> 
            <p style={styles.textdefault2} >
                <i className="fa fa-map-marker" style={{marginRight:"0.5rem",marginTop:"0.3rem"}} ></i>
                Localização - R. dos Mareantes, 4480-778 Vila do Conde
            </p>  
              
           
           
            <Link style={styles.acontainer} id="afooter" to="/sobrenós">
                Sobre nós
            </Link> 
        </Box> 
    </Container>
    </Box>
  );
}

const styles = StyleSheet.create({
    container:{
        display: "grid",
    },
    containerlarge:{
        gap:"60px",
        gridTemplateColumns: "auto auto auto auto"
    },
    containermedium:{
        gridColumnGap:"20px",
        gridTemplateRows: "auto auto auto",
        gridTemplateColumns:"auto auto auto",
    },
    containersmall:{
        gridColumnGap:"60px",
        gridTemplateRows: "auto auto",
        gridTemplateColumns:"auto auto ",
    },
    containerextrasmall:{
        display:"flex",
        flexDirection:"column",
        textAlign:"left" 
    },

    imgcontainer:{
        marginTop:"14px",
    },
      textdefault:{
        fontSize:"16px",
        fontFamily:"K2D",
        color:"white",
      },
      textdefault2:{
        fontSize:"14px",
        fontFamily:"K2D",
        color:"white",
        marginBottom:"10px",
        textAlign:"left",
      },
      inputtext:{
        borderRadius:"4px",
        paddingLeft:"0.3rem",
        border:"0.5px solid #98A2B3",
        fontFamily: 'Montserrat',
        fontSize:"12px",
      },

      acontainer: {
        display: "flex",
        fontSize:"14px",
        textDecorationLine:"none",
        marginTop:"0.8rem",
        marginBottom:"0.8rem",
      },
});
