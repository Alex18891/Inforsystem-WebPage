import React, { useEffect,useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {View, Text,StyleSheet} from 'react-native';


import logo from "./../img/logo.png";


export default function FooterInforsystem() {

  return (
    <Box sx={{background: "#1A65A4"}}
    component="footer">
    <Container  sx={{ display: "grid",gap:"60px", gridTemplateColumns: "auto auto auto auto"}}>
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
                    Ao submeteres o teu email estás a concordar subscrever à newsletter da nossa loja e a aceitar os nossos <span ><a  style={{textDecorationLine:"none"}} href ='#' id='afooter'>Termos e Condições.</a></span>
                </p> 
        </Box>
        <Box sx={{maxWidth:"190px",marginTop:"45px" }}>          
                <p style={styles.textdefault} >
                    INFORMAÇÕES
                </p> 
                <a style={styles.acontainer} id="afooter" href="#" >
                    A nossa loja
                </a> 
                <a style={styles.acontainer} id="afooter" href="#" >
                   Termos e condições
                </a>
                <a style={styles.acontainer} id="afooter" href="#" >
                    Política de Privacidade
                </a>
                <a style={styles.acontainer} id="afooter" href="#" >
                    Política de Cookies
                </a>   
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
            <a style={styles.acontainer} id="afooter"  href="mailto:loja2@inforsystem.net">
                <i className="fa fa-envelope" style={{marginRight:"0.5rem",marginTop:"0.2rem"}} ></i>
                loja2@inforsystem.net
            </a>
            <a style={styles.acontainer} id="afooter" href="https://www.facebook.com/people/INFORSYSTEM-LDA/100063788280384/?paipv=0&eav=AfZl0QeQ6W5KhN9QuRNoDiv7k5IxzIqLsXdD16S5GpwssNuXM9GBYl77DQfk54QzAHI&_rdr">
                <i className="fa fa-facebook" style={{marginRight:"0.5rem",marginTop:"0.2rem"}} ></i>
                Inforsystem Lda
            </a>   
            <a style={styles.acontainer} id="afooter"href="https://wa.me/351967687915">
                <i className="fa fa-whatsapp" style={{marginRight:"0.5rem",marginTop:"0.2rem"}} ></i>
                (+351) 935 213 424
            </a>  
        </Box> 
        <Box sx={{maxWidth:"190px",marginTop:"45px" }}>          
            <p style={styles.textdefault} >
                SOBRE A EMPRESA
            </p> 
            <a style={styles.acontainer} id="afooter" href="#" >
                Localização - Vila do Conde, Caxinas, Rua X
            </a> 
            <a style={styles.acontainer} id="afooter" href="#">
                Quem somos?
            </a> 
        </Box> 
      </Container>
    </Box>
  );
}

const styles = StyleSheet.create({
    imgcontainer:{
        marginTop:"20px",
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
        borderRadius:"6px",
        paddingLeft:"0.5rem",
        borderColor: 'black', // Change the border color here
        borderWidth: '1px',
      },

      acontainer: {
        display: "flex",
        fontSize:"14px",
        textDecorationLine:"none",
        marginTop:"0.8rem",
        marginBottom:"0.8rem",
      },
});
