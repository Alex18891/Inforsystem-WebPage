import { useState, useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";
import {View, Text,StyleSheet} from 'react-native';
import Box from "@mui/material/Box";
import useMediaQuery from '@mui/material/useMediaQuery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import '../index.css';

import windows7 from "./../img/windows7.png";
import windows10home from "./../img/windows10home.png";
import windows10pro from "./../img/windows10pro.png";
import windows11home from "./../img/windows11home.png";
import windows11pro from "./../img/windows11pro.png";
import rapairpc from "./../img/rapairpc.png"
import rapairprinter from "./../img/rapairprinter.png"
import removalvirus from "./../img/removalvirus.png"
import disponivel from "./../img/disponivel.png";
import operationalsystem from "./../img/operationalsystem.png"
import componentsrepair from "./../img/componentsrepair.png"
import virusremoval from "./../img/virusremoval.png";


export default function SuporteManutenção() {
    const isExtraSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));
    const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.between('md', 'lg'));
    const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.between('lg', 'xl'));
    const isExtraLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('xl'));
    const [isHoveredrepaircomponents, setIsHoveredrepaircomponents] = useState(false);
    const navigate = useNavigate();

    const onrepairenter= () => {
        setIsHoveredrepaircomponents(true);
    };
    const onrepairleave= () => {
        setIsHoveredrepaircomponents(false);
    };
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
                        <Text style={{fontSize: "20px",zIndex:-1}}>    \  Software  \    </Text>  
                        <Text  style={{fontSize: "20px",zIndex:-1}}>Serviços de Suporte/Manutenção  </Text>   
                        </Box>
                    </Box>   
                    <Text style={{
                        ...styles.textdefault3,
                        ...(isSmallScreen ? styles.textdefault3small : {}),
                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                    }}>
                        <span style={{fontWeight:"bold"}}>Serviços</span> de Suporte/Manutenção
                    </Text>
                    <Text style={{
                        ...styles.textdefault3,
                        fontSize:"25px",
                        fontWeight:"bold",
                        ...(isSmallScreen ? styles.textdefault3small : {}),
                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                    }}>
                        <p style={{marginBottom:"0.5rem",marginTop:"0.5rem"}}>MANUTENÇÃO E SUPORTE</p>
                    </Text>
                    <Text style={{
                        ...styles.textdefault,
                        maxWidth: "1800px",
                        fontSize:"22px",
                        ...(isSmallScreen ? styles.textdefaultsmall : {}),
                        ...(isExtraSmallScreen ? styles.textdefaultextrasmall : {})
                    }}>
                        A Inforsystem está comprometida em fornecer um padrão de excelência em suporte ao cliente para produtos informáticos, abrangendo desde a reparação de software, computadores e impressoras até a instalação de sistemas operativos. 
                        <br></br>Asseguramos que toda a informação relativa a reparações e atualizações seja monitorizada e entregue dentro dos prazos acordados com o cliente. 
                        <br></br>Optar pelos nossos serviços significa garantir resoluções mais rápidas e precisas para os desafios informáticos.
                    </Text>
                    <Text style={{
                        ...styles.textdefault3,
                        fontSize:"25px",
                        fontWeight:"bold",
                        ...(isSmallScreen ? styles.textdefault3small : {}),
                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                    }}>
                        <p style={{marginBottom:"0.5rem",marginTop:"0.5rem"}}>TIPOS SUPORTE/MANUTENÇÃO</p>
                    </Text>           
                    <Box  sx={{...styles.container2,
                    ...(isExtraLargeScreen && styles.container2extralarge),
                    ...(isLargeScreen && styles.container2large), 
                    ...(isMediumScreen && styles.container2medium), 
                    ...(isSmallScreen && styles.container2small), 
                    ...(isExtraSmallScreen && styles.container2extrasmall)}}>
                        
                        <Box sx={styles.tipossuportediv} onMouseEnter={onrepairenter}
                            onMouseLeave={onrepairleave}>
                            <img
                                src={componentsrepair}
                                style={{maxWidth:"320px"}}
                            ></img>
                                <Text style={{
                                ...styles.textdefault,
                                fontSize:"24px",
                                fontWeight:"bold",
                                maxWidth: "1800px",
                                ...(isSmallScreen ? styles.textdefaultsmall : {}),
                                ...(isExtraSmallScreen ? styles.textdefaultextrasmall : {})
                            }}>
                                Reparação de Componentes
                            </Text>
                        </Box>
                        <Box sx={styles.tipossuportediv}>
                            <img
                                src={virusremoval}
                                style={{maxWidth:"320px"}}
                            ></img>
                                <Text style={{
                                ...styles.textdefault,
                                fontSize:"24px",
                                fontWeight:"bold",
                                maxWidth: "1800px",
                                ...(isSmallScreen ? styles.textdefaultsmall : {}),
                                ...(isExtraSmallScreen ? styles.textdefaultextrasmall : {})
                            }}>
                                Remoção de vírus
                            </Text>
                        </Box>
                        <Box sx={styles.tipossuportediv}>
                            <img
                                src={operationalsystem}
                                style={{maxWidth:"320px"}}
                            ></img>
                                <Text style={{
                                ...styles.textdefault,
                                fontSize:"24px",
                                fontWeight:"bold",
                                maxWidth: "1800px",
                                ...(isSmallScreen ? styles.textdefaultsmall : {}),
                                ...(isExtraSmallScreen ? styles.textdefaultextrasmall : {})
                            }}>
                                Instalação de Sistemas Operativos
                            </Text>
                        </Box>
                    </Box>
                </Box>
                    <Text style={{
                        ...styles.textdefault,
                        maxWidth: "1800px",
                        ...(isSmallScreen ? styles.textdefaultsmall : {}),
                        ...(isExtraSmallScreen ? styles.textdefaultextrasmall : {})
                    }}>
                        Conheça os serviços de suporte/manutenção disponíveis na loja
                    </Text>
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
                                            src={windows7}
                                            style={{maxWidth:"180px"}}
                                        ></img>
                                    </Box>
                                    <Text style={[styles.textdefault2,{marginTop:"0"}]}>
                                        <span >WINDOWS 7</span> 
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"15px"}]}>
                                        Instalação do Sistema operativo
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"15px"}]}>
                                        Licença oficial da Microsoft
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"15px"}]}>
                                        Edições disponíveis: Starter, Home, Professional e Ultimate
                                    </Text>
                                
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
                                            src={windows10home}
                                            style={{maxWidth:"180px"}}
                                        ></img>
                                    </Box>
                                    <Text style={[styles.textdefault2,{marginTop:"0"}]}>
                                        <span >WINDOWS 10 HOME</span> 
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"15px"}]}>
                                        Instalação do Sistema operativo
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"15px"}]}>
                                        Licença oficial da Microsoft
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"15px"}]}>
                                        Windows 10 Home suporta uma ampla gama de hardware, incluindo PCs, tablets e alguns dispositivos móveis.
                                    </Text>
                                
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
                                            src={windows10pro}
                                            style={{maxWidth:"180px"}}
                                        ></img>
                                    </Box>
                                    <Text style={[styles.textdefault2,{marginTop:"0"}]}>
                                        <span >WINDOWS 10 PRO</span> 
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"15px"}]}>
                                        Instalação do Sistema operativo
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"15px"}]}>
                                        Licença oficial da Microsoft
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"15px"}]}>
                                        Windows 10 Pro é compatível com dispositivos 2-em-1, dispositivos móveis e outros hardwares empresariais.
                                    </Text>
                                
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
                                            src={windows11home}
                                            style={{maxWidth:"180px"}}
                                        ></img>
                                    </Box>
                                    <Text style={[styles.textdefault2,{marginTop:"0"}]}>
                                        <span >WINDOWS 11 HOME</span> 
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"15px"}]}>
                                        Instalação do Sistema operativo
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"15px"}]}>
                                        Licença oficial da Microsoft
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"15px"}]}>
                                        Windows 11 Home é direcionado, principalmente, para usuários domésticos. 
                                        Os widgets, que fornecem notícias, clima, calendário e outras informações, permitem fácil acesso a informações atualizadas.
                                    </Text>
                                
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
                                            src={windows11pro}
                                            style={{maxWidth:"180px"}}
                                        ></img>
                                    </Box>
                                    <Text style={[styles.textdefault2,{marginTop:"0"}]}>
                                        <span >WINDOWS 11 PRO</span> 
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"15px"}]}>
                                        Instalação do Sistema operativo
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"15px"}]}>
                                        Licença oficial da Microsoft
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"15px"}]}>
                                    Windows 11 Pro é direcionado para usuários profissionais, freelancers e pequenas/médias empresas, 
                                    oferecendo funcionalidades avançadas em relação à edição Home.
                                    </Text>
                                
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
                                            src={removalvirus}
                                            style={{maxWidth:"180px"}}
                                        ></img>
                                    </Box>
                                    <Text style={[styles.textdefault2,{marginTop:"0"}]}>
                                        <span >REMOÇÃO DE VÍRUS</span> 
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"15px"}]}>
                                        Desempenho do computador lento ou falhas frequentes.
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"15px"}]}>
                                        Acesso à internet ou ao disco rígido sem razão aparente.
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"15px"}]}>
                                        Pop-ups e anúncios inesperados
                                    </Text>
                                
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
                                            src={rapairprinter}
                                            style={{maxWidth:"180px"}}
                                        ></img>
                                    </Box>
                                    <Text style={[styles.textdefault2,{marginTop:"0"}]}>
                                        <span >REPARAÇÃO DE IMPRESSORAS</span> 
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"15px"}]}>
                                        Falha ao imprimir ou longas esperas antes da impressão.
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"15px"}]}>
                                        Mensagens de erro no dispositivo ou no computador.
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"15px"}]}>
                                        Barulhos estranhos durante a impressão ou ao liga
                                    </Text>
                                
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
                                            src={rapairpc}
                                            style={{maxWidth:"180px"}}
                                        ></img>
                                    </Box>
                                    <Text style={[styles.textdefault2,{marginTop:"0"}]}>
                                        <span >REPARAÇÃO DE COMPUTADORES</span> 
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"15px"}]}>
                                        Falha ao iniciar ou tela azul
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"15px"}]}>
                                        Sobreaquecimento
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"15px"}]}>
                                        Falhas de software ou aplicativos que não abrem corretamente
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"15px"}]}>
                                        Computador lento ou congelamentos frequentes
                                    </Text>
                                
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
    container2:{
        display:"grid",
        margin:"0",
    },
    container2large:{
        display:"grid",
        gridTemplateRows: "auto auto",
        gridTemplateColumns:"auto auto",
    },
    container2extralarge:{
        display:"grid",
        gridTemplateRows: "auto auto auto",
        gridTemplateColumns:"auto auto auto", 
    },
    container2medium:{
        display:"grid",
        gridTemplateRows: "auto auto",
        gridTemplateColumns:"auto auto",
    },
    container2small:{
        display:"flex",
        flexDirection:"column",
    },
    container2extrasmall:{
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
      textAlign:"left"
     },
    textdefaultextrasmall:{
        textAlign:"left"
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
    tipossuportediv:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        gap:"20px"
    }
});