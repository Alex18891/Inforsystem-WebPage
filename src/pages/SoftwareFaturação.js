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

import xdauto from "./../img/XDauto.png";
import xddisco from "./../img/XDdisco.png";
import xdrest from "./../img/XDrest.png";
import xdspa from "./../img/XDspa.png";
import xdunlimited from "./../img/XDunlimited.png";
import xdpos from "./../img/XDPOS.png";
import sage50cloud from "./../img/sage50Cloud.png";
import disponivel from "./../img/disponivel.png";
import eticdata from "./../img/eticdata.png";

export default function SoftwareFaturação() {
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
                        <Text style={{fontSize: "20px",zIndex:-1}}>    \  Software  \    </Text>  
                        <Text  style={{fontSize: "20px",zIndex:-1}}>Software de Faturação    </Text>   
                        </Box>
                    </Box>

                   
                    <Text style={{
                        ...styles.textdefault3,
                        ...(isSmallScreen ? styles.textdefault3small : {}),
                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                    }}>
                        <span style={{fontWeight:"bold"}}>Serviços</span> de Faturação
                    </Text>
                    <Text style={{
                        ...styles.textdefault,
                        maxWidth: "1800px",
                        ...(isSmallScreen ? styles.textdefaultsmall : {}),
                        ...(isExtraSmallScreen ? styles.textdefaultextrasmall : {})
                    }}>
                        Conheça os serviços de faturação disponíveis na loja
                    </Text>
                </Box>
                <Box  sx={{...styles.container1,
                ...(isExtraLargeScreen && styles.container1extralarge),
                ...(isLargeScreen && styles.container1large), 
                ...(isMediumScreen && styles.container1medium), 
                ...(isSmallScreen && styles.container1small), 
                ...(isExtraSmallScreen && styles.container1extrasmall)}}>
                    <Box sx={styles.viewcontainer}>      
                        <Box sx={styles.containerfeaturesmainproduct}> 
                            <Box sx={styles.containerfeatures}>
                                <Box sx={styles.containerfeaturesproduts}> 
                                    <img
                                        src={xdrest}
                                        style={{maxWidth:"180px"}}
                                    ></img>
                                </Box>
                                <Text style={[styles.textdefault2,{margin:"0"}]}>
                                    <span >XD REST</span> 
                                </Text>
                                <Text style={[styles.textdefault,{fontSize:"15px"}]}>
                                Restauração/Cafeteria/Pizzaria/Fast-Food
                                </Text>
                                <Text style={[styles.textdefault,{fontSize:"15px"}]}>
                                    O software mais abrangente para gestão de Restaurantes, Cafés, Pizzarias e Pastelarias.O XD Rest dispõe de uma utilização intuitiva a uma gestão robusta e eficaz.
                                </Text>
                                <Box sx={[styles.disponivel,{gap:"5px",margin:"auto",cursor:"pointer"}]}  onClick={() => window.location.href = "https://www.xdsoftware.pt/solucoes-xd/ponto-de-venda/xd-rest"}>
                                    <Text style={[styles.textdefault2,{fontWeight:"none",fontFamily: 'Montserrat',fontSize:"13px",color:"#1A65A4"}]}>
                                        <span >Mais informação</span> 
                                    </Text>
                                    <FontAwesomeIcon icon={faArrowRight} style={{ color: "#368cd6" }} />
                                </Box>
                                <Box sx={styles.disponivel}>
                                    <img
                                        src={disponivel}
                                        width={"25px"}
                                        height={"25px"}
                                        style={{marginLeft:"-0.2rem"}}
                                    ></img>
                                    <Text style={styles.disponiveltext}>
                                        <span style={{fontWeight:"bold"}}>Disponível</span> 
                                    </Text>
                                </Box>
                                <Text style={styles.textdefault2}>
                                    <span style={{color:"black"}}>50,5€</span> 
                                </Text>
                            </Box>      
                        </Box>        
                    </Box> 
                    <Box sx={styles.viewcontainer}>      
                        <Box sx={styles.containerfeaturesmainproduct}> 
                            <Box sx={styles.containerfeatures}>
                                <Box sx={styles.containerfeaturesproduts}> 
                                    <img
                                        src={xdpos}
                                        style={{maxWidth:"180px"}}
                                    ></img>
                                </Box>
                                <Text style={[styles.textdefault2,{margin:"0"}]}>
                                    <span >XD POS</span> 
                                </Text>
                                <Text style={[styles.textdefault,{fontSize:"15px"}]}>
                                    Retalho
                                </Text>
                                <Text style={[styles.textdefault,{fontSize:"15px"}]}>
                                    O software mais direto e de fácil compreensão para o sector retalhista. O XD POS molda-se consoante as especificidades do seu comércio. Este inclui módulos para áreas particulares, tais como Supermercados, Bombas de Combustível ou Lavandarias.
                                </Text>
                                <Box sx={[styles.disponivel,{gap:"5px",margin:"auto",cursor:"pointer"}]}  onClick={() => window.location.href = "https://www.xdsoftware.pt/solucoes-xd/ponto-de-venda/xd-pos"}>
                                    <Text style={[styles.textdefault2,{fontWeight:"none",fontFamily: 'Montserrat',fontSize:"13px",color:"#1A65A4"}]}>
                                        <span >Mais informação</span> 
                                    </Text>
                                    <FontAwesomeIcon icon={faArrowRight} style={{ color: "#368cd6" }} />
                                </Box>
                                <Box sx={styles.disponivel}>
                                    <img
                                        src={disponivel}
                                        width={"25px"}
                                        height={"25px"}
                                        style={{marginLeft:"-0.2rem"}}
                                    ></img>
                                    <Text style={styles.disponiveltext}>
                                        <span style={{fontWeight:"bold"}}>Disponível</span> 
                                    </Text>
                                </Box>
                                <Text style={styles.textdefault2}>
                                    <span style={{color:"black"}}>50,5€</span> 
                                </Text>
                            </Box>      
                        </Box>        
                    </Box> 
                    <Box sx={styles.viewcontainer}>      
                        <Box sx={styles.containerfeaturesmainproduct}> 
                            <Box sx={styles.containerfeatures}>
                                <Box sx={styles.containerfeaturesproduts}> 
                                    <img
                                        src={xdspa}
                                        style={{maxWidth:"180px"}}
                                    ></img>
                                </Box>
                                <Text style={[styles.textdefault2,{margin:"0"}]}>
                                    <span >XD SPA</span> 
                                </Text>
                                <Text style={[styles.textdefault,{fontSize:"15px"}]}>
                                    Instituto de Beleza, SPA ou Cabeleireiro.
                                </Text>
                                <Text style={[styles.textdefault,{fontSize:"15px"}]}>
                                    A solução mais abrangente disponível para gerir o seu Instituto de Beleza, SPA ou Salão de Cabeleireiro. O XD SPA foi concebido para espaços de beleza e SPA, tendo ferramentas cruciais para a administração eficaz do seu negócio.
                                </Text>
                                <Box sx={[styles.disponivel,{gap:"5px",margin:"auto",cursor:"pointer"}]}  onClick={() => window.location.href = "https://www.xdsoftware.pt/xdspa/"}>
                                    <Text style={[styles.textdefault2,{fontWeight:"none",fontFamily: 'Montserrat',fontSize:"13px",color:"#1A65A4"}]}>
                                        <span >Mais informação</span> 
                                    </Text>
                                    <FontAwesomeIcon icon={faArrowRight} style={{ color: "#368cd6" }} />
                                </Box>
                                <Box sx={styles.disponivel}>
                                    <img
                                        src={disponivel}
                                        width={"25px"}
                                        height={"25px"}
                                        style={{marginLeft:"-0.2rem"}}
                                    ></img>
                                    <Text style={styles.disponiveltext}>
                                        <span style={{fontWeight:"bold"}}>Disponível</span> 
                                    </Text>
                                </Box>
                                <Text style={styles.textdefault2}>
                                    <span style={{color:"black"}}>50,5€</span> 
                                </Text>
                            </Box>      
                        </Box>        
                    </Box> 
                    <Box sx={styles.viewcontainer}>      
                        <Box sx={styles.containerfeaturesmainproduct}> 
                            <Box sx={styles.containerfeatures}>
                                <Box sx={styles.containerfeaturesproduts}> 
                                    <img
                                        src={xdauto}
                                        style={{maxWidth:"180px"}}
                                    ></img>
                                </Box>
                                <Text style={[styles.textdefault2,{margin:"0"}]}>
                                    <span >XD AUTO</span> 
                                </Text>
                                <Text style={[styles.textdefault,{fontSize:"15px"}]}>
                                    Oficinas
                                </Text>
                                <Text style={[styles.textdefault,{fontSize:"15px"}]}>
                                    A solução mais completa no mercado para gerir a sua Oficina Automóvel. O XD Auto foi projetado para espaços automóveis, oferecendo ferramentas essenciais para uma gestão eficiente do seu negócio.
                                </Text>
                                <Box sx={[styles.disponivel,{gap:"5px",margin:"auto",cursor:"pointer"}]}  onClick={() => window.location.href = "https://www.xdsoftware.pt/solucoes-xd/gestao-comercial/xd-auto"}>
                                    <Text style={[styles.textdefault2,{fontWeight:"none",fontFamily: 'Montserrat',fontSize:"13px",color:"#1A65A4"}]}>
                                        <span >Mais informação</span> 
                                    </Text>
                                    <FontAwesomeIcon icon={faArrowRight} style={{ color: "#368cd6" }} />
                                </Box>
                                <Box sx={styles.disponivel}>
                                    <img
                                        src={disponivel}
                                        width={"25px"}
                                        height={"25px"}
                                        style={{marginLeft:"-0.2rem"}}
                                    ></img>
                                    <Text style={styles.disponiveltext}>
                                        <span style={{fontWeight:"bold"}}>Disponível</span> 
                                    </Text>
                                </Box>
                                <Text style={styles.textdefault2}>
                                    <span style={{color:"black"}}>50,5€</span> 
                                </Text>
                            </Box>      
                        </Box>        
                    </Box> 
                    <Box sx={styles.viewcontainer}>      
                        <Box sx={styles.containerfeaturesmainproduct}> 
                            <Box sx={styles.containerfeatures}>
                                <Box sx={styles.containerfeaturesproduts}> 
                                    <img
                                        src={xdunlimited}
                                        style={{maxWidth:"250px"}}
                                    ></img>
                                </Box>
                                <Text style={[styles.textdefault2,{margin:"0"}]}>
                                    <span >XD UNLIMITED</span> 
                                </Text>
                                <Text style={[styles.textdefault,{fontSize:"15px"}]}>
                                    Alojamento Local ou Cloud/Multi-Base de Dados
                                </Text>
                                <Text style={[styles.textdefault,{fontSize:"15px"}]}>
                                    A solução mais completa no mercado para a gestão do seu Alojamento Local, na Cloud e em Multi-Base de Dados. O XD Unlimited foi  desenvolvido para se ajustar às particularidades do alojamento garantindo ferramentas vitais para uma administração eficiente e inovadora.
                                </Text>
                                <Box sx={[styles.disponivel,{gap:"5px",margin:"auto",cursor:"pointer"}]}  onClick={() => window.location.href = "https://www.xdsoftware.com/xdgc/"}>
                                    <Text style={[styles.textdefault2,{fontWeight:"none",fontFamily: 'Montserrat',fontSize:"13px",color:"#1A65A4"}]}>
                                        <span >Mais informação</span> 
                                    </Text>
                                    <FontAwesomeIcon icon={faArrowRight} style={{ color: "#368cd6" }} />
                                </Box>
                                <Box sx={styles.disponivel}>
                                    <img
                                        src={disponivel}
                                        width={"25px"}
                                        height={"25px"}
                                        style={{marginLeft:"-0.2rem"}}
                                    ></img>
                                    <Text style={styles.disponiveltext}>
                                        <span style={{fontWeight:"bold"}}>Disponível</span> 
                                    </Text>
                                </Box>
                                <Text style={styles.textdefault2}>
                                    <span style={{color:"black"}}>50,5€</span> 
                                </Text>
                            </Box>      
                        </Box>        
                    </Box> 
                    <Box sx={styles.viewcontainer}>      
                        <Box sx={styles.containerfeaturesmainproduct}> 
                            <Box sx={styles.containerfeatures}>
                                <Box sx={styles.containerfeaturesproduts}> 
                                    <img
                                        src={xddisco}
                                        style={{maxWidth:"180px"}}
                                    ></img>
                                </Box>
                                <Text style={[styles.textdefault2,{margin:"0"}]}>
                                    <span >XD DISCO</span> 
                                </Text>
                                <Text style={[styles.textdefault,{fontSize:"15px"}]}>
                                    Discoteca
                                </Text>
                                <Text style={[styles.textdefault,{fontSize:"15px"}]}>
                                    Imagine uma discoteca, com mais de 5000 pessoas a registarem-se e a efetuar pagamentos. O XD Disco destaca-se como a opção mais robusta para discotecas e bares, dispondo de características únicas e especializadas.
                                </Text>
                                <Box sx={[styles.disponivel,{gap:"5px",margin:"auto",cursor:"pointer"}]}  onClick={() => window.location.href = "https://www.xdsoftware.pt/solucoes-xd/ponto-de-venda/xd-disco"}>
                                    <Text style={[styles.textdefault2,{fontWeight:"none",fontFamily: 'Montserrat',fontSize:"13px",color:"#1A65A4"}]}>
                                        <span >Mais informação</span> 
                                    </Text>
                                    <FontAwesomeIcon icon={faArrowRight} style={{ color: "#368cd6" }} />
                                </Box>
                                <Box sx={styles.disponivel}>
                                    <img
                                        src={disponivel}
                                        width={"25px"}
                                        height={"25px"}
                                        style={{marginLeft:"-0.2rem"}}
                                    ></img>
                                    <Text style={styles.disponiveltext}>
                                        <span style={{fontWeight:"bold"}}>Disponível</span> 
                                    </Text>
                                </Box>
                                <Text style={styles.textdefault2}>
                                    <span style={{color:"black"}}>50,5€</span> 
                                </Text>
                            </Box>      
                        </Box>        
                    </Box> 
                    <Box sx={styles.viewcontainer}>      
                        <Box sx={styles.containerfeaturesmainproduct}> 
                            <Box sx={styles.containerfeatures}>
                                <Box sx={styles.containerfeaturesproduts}> 
                                    <img
                                        src={sage50cloud}
                                        style={{maxWidth:"180px"}}
                                    ></img>
                                </Box>
                                <Text style={[styles.textdefault2,{margin:"0"}]}>
                                    <span >SAGE 50CLOUD</span> 
                                </Text>
                                <Text style={[styles.textdefault,{fontSize:"15px"}]}>
                                    Stocks e tesouraria integrados com Microsoft 365
                                </Text>
                                <Text style={[styles.textdefault,{fontSize:"15px"}]}>
                                    O Sage 50cloud é uma ferramenta abrangente para orientar a administração da sua empresa. Seja para faturação eletrónica, vendas online, stocks ou gestão financeira, o Sage 50cloud torna a sua empresa eficiente e produtiva .
                                </Text>
                                <Box sx={[styles.disponivel,{gap:"5px",margin:"auto",cursor:"pointer"}]}  onClick={() => window.location.href = "https://www.sage.com/pt-pt/produtos/sage-50cloud/"}>
                                    <Text style={[styles.textdefault2,{fontWeight:"none",fontFamily: 'Montserrat',fontSize:"13px",color:"#1A65A4"}]}>
                                        <span >Mais informação</span> 
                                    </Text>
                                    <FontAwesomeIcon icon={faArrowRight} style={{ color: "#368cd6" }} />
                                </Box>
                                <Box sx={styles.disponivel}>
                                    <img
                                        src={disponivel}
                                        width={"25px"}
                                        height={"25px"}
                                        style={{marginLeft:"-0.2rem"}}
                                    ></img>
                                    <Text style={styles.disponiveltext}>
                                        <span style={{fontWeight:"bold"}}>Disponível</span> 
                                    </Text>
                                </Box>
                                <Text style={styles.textdefault2}>
                                    <span style={{color:"black"}}>50,5€</span> 
                                </Text>
                            </Box>      
                        </Box>        
                    </Box> 
                    <Box sx={styles.viewcontainer}>      
                        <Box sx={styles.containerfeaturesmainproduct}> 
                            <Box sx={styles.containerfeatures}>
                                <Box sx={styles.containerfeaturesproduts}> 
                                    <img
                                        src={eticdata}
                                        style={{maxWidth:"180px"}}
                                    ></img>
                                </Box>
                                <Text style={[styles.textdefault2,{margin:"0"}]}>
                                    <span >Eticadata</span> 
                                </Text>
                                <Text style={[styles.textdefault,{fontSize:"15px"}]}>
                                    Gestão Comercial
                                </Text>
                                <Text style={[styles.textdefault,{fontSize:"15px"}]}>
                                    Com a solução Cegid Eticadata, controle e otimize seus processos comerciais, adaptando-se a especificidades como rastreio de lotes, edições de livros e documentos eletrónicos assinados digitalmente. Em um mercado competitivo, esta ferramenta é a chave para um negócio ágil e eficiente.
                                </Text>
                                <Box sx={[styles.disponivel,{gap:"5px",margin:"auto",cursor:"pointer"}]}  onClick={() => window.location.href = "https://eticadata.com/m-gestao-comercial/"}>
                                    <Text style={[styles.textdefault2,{fontWeight:"none",fontFamily: 'Montserrat',fontSize:"13px",color:"#1A65A4"}]}>
                                        <span >Mais informação</span> 
                                    </Text>
                                    <FontAwesomeIcon icon={faArrowRight} style={{ color: "#368cd6" }} />
                                </Box>
                                <Box sx={styles.disponivel}>
                                    <img
                                        src={disponivel}
                                        width={"25px"}
                                        height={"25px"}
                                        style={{marginLeft:"-0.2rem"}}
                                    ></img>
                                    <Text style={styles.disponiveltext}>
                                        <span style={{fontWeight:"bold"}}>Disponível</span> 
                                    </Text>
                                </Box>
                                <Text style={styles.textdefault2}>
                                    <span style={{color:"black"}}>50,5€</span> 
                                </Text>
                            </Box>      
                        </Box>        
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
    container1:{
        display:"grid",
        marginTop:"2rem",
        marginBottom:"2rem",
        gap:"20px",
    },
    container1large:{
        display:"grid",
        gridTemplateRows: "auto auto auto",
        gridTemplateColumns:"auto auto auto",
    },
    container1extralarge:{
        display:"grid",
        gridTemplateRows: "auto auto auto auto",
        gridTemplateColumns:"auto auto auto auto", 
    },
    container1medium:{
        display:"grid",
        gridTemplateRows: "auto auto",
        gridTemplateColumns:"auto auto",
    },
    container1small:{
        display:"flex",
        flexDirection:"column",
    },
    container1extrasmall:{
        display:"flex",
        flexDirection:"column",
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