import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";
import {View, Text,StyleSheet} from 'react-native';
import Box from "@mui/material/Box";
import {Link } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import '../index.css';


export default function Sobrenos() {
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
                        <Link id='aheader' style={{fontSize: "20px",zIndex:-1}} to='/'>Página Inicial</Link>    
                        <Text style={{fontSize: "20px",zIndex:-1}}>   \  Sobre nós  </Text>  
                        </Box>
                    </Box> 
                    <Text style={{
                        ...styles.textdefault3,
                        ...(isSmallScreen ? styles.textdefault3small : {}),
                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                    }}>
                        <span style={{fontWeight:"bold"}}>Sobre</span> nós
                    </Text>
               
                    <Text style={{fontSize: "16px",lineHeight:"2rem",zIndex:-1,}}>
                    A Inforsystem, localizada em Vila do Conde, é um ponto de venda de tecnologia com soluções eletrónicas. A diversidade dos produtos, que vai desde computadores a impressoras e outros dispositivos, foi selecionada para responder às necessidades em constante evolução dos nossos clientes. 
                    <br />Além disso, é possivel fazer uma reparação dos seus equipamentos e instalação de softwares nos dispositivos. O nosso serviço de assistência  garante que o seu equipamento tenha um desempenho otimizado, prolongando a sua vida útil. 
                    <br />Os serviços de faturação que oferecemos são desenhados para proporcionar um controle financeiro mais eficiente, facilitando a gestão e otimização de recursos nas diferentes áreas de negócio. 
                    <br />Na Inforsystem, a tecnologia e a inovação , garantem sempre que a sua experiência seja a mais eficiente e gratificante possível. Estamos sempre à procura de novas formas de superar as suas expectativas e garantir que cada interação com a nossa marca seja memorável.
                    <br />Em caso de ajuda, é possivel nos contactar através do email ou do número de telemóvel. Para mais informações, relativamente às posturas e termos da nossa loja, pode aceder à janela dos Termos e Serviços, Política de privacidade e Política de Cookies.
                    </Text> 
                    <Box sx={{marginTop:"10px"}} >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191633.00394252004!2d-9.063306905468743!3d41.36831200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd244698175ac0b1%3A0xc60a579215b37112!2sInfor%20System!5e0!3m2!1spt-PT!2spt!4v1692360916209!5m2!1spt-PT!2spt" width="100%" height="350"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Box>
                  
                 
                   
                   
                   
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