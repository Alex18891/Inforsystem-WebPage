import {useContext} from "react";
import React from 'react'
import { useNavigate,Link } from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";
import {Text,StyleSheet} from 'react-native';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import useMediaQuery from '@mui/material/useMediaQuery';
import { Divider } from '@mui/material';
import logoutimg from "./../img/logout.png";
import pfpsmall from "./../img/usersmallblack.png";
import settings from "./../img/settings.png";
import newsletter from "./../img/newsletter.png"
import { PopupContext } from './popupcontext';
import '../index.css';
import { useUser } from '../UserProvider';
import address from "./../img/address.png"
import ajuda from "./../img/ajuda.png"

export default function DadosPessoais() {
    const isExtraSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));
    const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.between('md', 'lg'));
    const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.between('lg', 'xl'));
    const isExtraLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('xl'));
    const userInfo = JSON.parse(localStorage.getItem('userinfo'));
    const { setUserId,setEmail,setname,name,userid} = useUser();
    const navigate = useNavigate();
    const {setIsOpenEnderecoadd} = useContext(PopupContext);

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

      const endereco = () =>{
        setIsOpenEnderecoadd(true)
    }

    const enderecocontainer = (
        <> 
            {(userInfo)  ? (
                <Box  sx={styles.container1}>
                    <Box sx={styles.viewcontainer}>
                        <Box sx={{...styles.containerfeaturesmainproduct,gap:"10px"}}>
                            <Box sx = {styles.contactosflexrow}>
                                <Text style={{...styles.textdefault2,margin:0}}>
                                    <span style={{color:"black",fontSize:"20px"}}>Moradas de Entrega</span> 
                                </Text>
                            </Box>
                            <Box sx={{...styles.pesquisarow,
                                ...(isSmallScreen && styles.pesquisarowsmall),
                                ...(isExtraSmallScreen && styles.pesquisarowsmall)
                            }}>
                               
                                <Box sx = {styles.contactosflexrow}>
                                    <Box style={styles.contactosflexcolumn} >
                                        <Text style={{                                      
                                            ...styles.textdefault3,
                                            fontSize:"22px",
                                            margin:0,
                                            color:"black"
                                        }}>
                                            <Text  style={{...styles.textdefaultblue, color:"black", maxWidth:"270px"}}>{userInfo.name}</Text>
                                        </Text>
                                    </Box>
                                    <Box style={styles.contactosflexcolumn} >
                                        <Text style={{                                      
                                            ...styles.textdefault3,
                                            fontSize:"22px",
                                            margin:0,
                                            color:"black"
                                        }}>
                                            <Text  style={{...styles.textdefaultblue, color:"black", maxWidth:"270px"}}>{userInfo.telefone}</Text>
                                        </Text>
                                    </Box>
                                </Box>              
                            </Box>
                            <Box sx={{...styles.pesquisarow,
                                flexDirection:"column",
                                alignItems:"normal",   
                            }}>
                                <Box sx = {styles.contactosflexrow}>
                                    <Text style={styles.textdefault4} >
                                        {userInfo.morada}, 
                                    </Text>
                                </Box>   
                                <Box sx = {styles.contactosflexrow}>
                                    <Text style={styles.textdefault4} >
                                        {userInfo.state}, {userInfo.country}, {userInfo.cdpt} 
                                    </Text>
                                </Box> 
                                <Box sx = {styles.contactosflexrow}>
                                    <Text  onClick= {endereco} style={{...styles.textdefaultblue}} >
                                            Mudar
                                    </Text>
                                </Box>
                            </Box>  
                        </Box>                   
                    </Box>   
                </Box> 
            ):(
                <Box  sx={styles.container1}>
                    <Box sx={styles.viewcontainer} >   
                        <Box sx={styles.containerfeaturesmainproduct}> 
                            <Text style={{...styles.textdefault2,margin:0}}>
                                <span style={{color:"black",fontSize:"20px"}}>Moradas de Entrega</span> 
                            </Text>
                            <Text onClick= {endereco}  style={{...styles.textdefaultblue, color:"black", maxWidth:"270px"}} >
                                    Adicionar Endereço
                            </Text> 
                        </Box>
                    </Box> 
                </Box>
            )}
        </>
    )

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
                                                <span style={{color:"black",fontSize:"20px"}}>Dados Pessoais</span> 
                                            </Text>
                                        </Box>
                                        <Box sx={styles.containerfeaturesproduts}> 
                                            <Box sx={{...styles.pesquisacolumn,
                                                ...(isMediumScreen && styles.pesquisacolumnsmall),
                                                ...(isSmallScreen && styles.pesquisacolumnsmall),
                                                ...(isExtraSmallScreen && styles.pesquisacolumnsmall)}}>
                                                <Box sx={{...styles.pesquisarow,
                                                ...(isExtraSmallScreen && styles.pesquisarowsmall)}}>
                                                    <Text style={[styles.textdefault,{fontSize:"15px",margin:0, flex: "none"}]}>
                                                            Nome do utilizador:
                                                    </Text>
                                                    <input
                                                            type="text"
                                                            style={styles.inputtext}
                                                            />
                                                </Box>
                                                <Box sx={{...styles.pesquisarow,
                                                ...(isExtraSmallScreen && styles.pesquisarowsmall)}}>
                                                    <Text style={[styles.textdefault,{fontSize:"15px",margin:0, flex: "none"}]}>
                                                            Email:
                                                    </Text>
                                                    <input
                                                            type="email"
                                                            style={styles.inputtext}
                                                            />
                                                </Box>
                                            </Box>   
                                        </Box>
                                        <Box sx={{...styles.containerfeaturesproduts,flexDirection:"row"}}> 
                                                <Button sx={[styles.buttoncontainer,{flex:"none"}]}>GUARDAR DADOS</Button>
                                        </Box>
                                    </Box>
                                </Box> 
                            </Box>    
                            <Box  sx={styles.container1}>
                                <Box sx={styles.viewcontainer} >   
                                    <Box sx={styles.containerfeaturesmainproduct}> 
                                        <Box sx={styles.containerfeaturesproduts}> 
                                            <Text style={{...styles.textdefault2,margin:0}}>
                                                <span style={{color:"black",fontSize:"20px"}}>Alterar Palavra Passe</span> 
                                            </Text>
                                        </Box>
                                        <Box sx={{...styles.containerfeaturesproduts,flexDirection:"row"}}> 
                                            <Box sx={{...styles.pesquisarow, flex: "0.49",
                                            ...(isMediumScreen && {flex: 1}),
                                            ...(isSmallScreen && {flex: 1}),
                                            ...(isExtraSmallScreen  && {flex: 1,gap:"10px",flexDirection:"column",alignItems:"normal"})}}>
                                                        <Text style={[styles.textdefault,{fontSize:"15px",margin:0, flex: "none"}]}>
                                                                Palavra Passe Atual:
                                                        </Text>
                                                        <input
                                                                type="text"
                                                                style={styles.inputtext}
                                                                />
                                                    </Box>
                                            </Box>
                                        <Box sx={styles.containerfeaturesproduts}> 
                                            <Box sx={{...styles.pesquisacolumn,
                                                ...(isMediumScreen && styles.pesquisacolumnsmall),
                                                ...(isSmallScreen && styles.pesquisacolumnsmall),
                                                ...(isExtraSmallScreen && styles.pesquisacolumnsmall)}}>
                                                    <Box sx={{...styles.pesquisarow,
                                                    ...(isExtraSmallScreen && styles.pesquisarowsmall)}}>
                                                    <Text style={[styles.textdefault,{fontSize:"15px",margin:0, flex: "none"}]}>
                                                            Nova Palavra Passe:
                                                    </Text>
                                                    <input
                                                            type="text"
                                                            style={styles.inputtext}
                                                            />
                                                </Box>
                                                <Box sx={{...styles.pesquisarow,
                                                    ...(isExtraSmallScreen && styles.pesquisarowsmall)}}>
                                                    <Text style={[styles.textdefault,{fontSize:"15px",margin:0, flex: "none"}]}>
                                                        Confirmar Palavra Passe:
                                                    </Text>
                                                    <input
                                                            type="email"
                                                            style={styles.inputtext}
                                                            />
                                                </Box>
                                            </Box> 
                                        </Box>
                                        <Box sx={{...styles.containerfeaturesproduts,flexDirection:"row"}}> 
                                                <Button sx={[styles.buttoncontainer,{flex:"none"}]}>GUARDAR DADOS</Button>
                                        </Box>
                                    </Box>
                                </Box> 
                            </Box>   
                            {enderecocontainer}
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
    contactosflexrow:{
        display:"flex",flexDirection:"row",gap:"5px"
    },
    contactosflexcolumn:{
        display:"flex", flexDirection:"column",gap:"5px"
    },
    pesquisacolumn:{
        display:"flex",flexDirection:"row",gap:"30px"
    },
    pesquisacolumnsmall:{
        flexDirection:"column",
        gap:"15px"
    },
    containermainsmall:{
        flexDirection:"column",
        gap:0
    },
    pesquisarow:{
        display:"flex",flexDirection:"row",gap:"10px",alignItems:"center", flex:1
    },
    pesquisarowsmall:{
        flexDirection:"column",gap:"10px",alignItems:"normal"
    },
    containermainextrasmall:{
        flexDirection:"column",
        gap:0
    },
    inputtext:{
        borderRadius:"4px",
        paddingLeft:"0.3rem",
        border:"0.5px solid #98A2B3",
        fontFamily: 'Montserrat',
        fontSize:"12px",
        width: "100%",
        height:"20px"
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
    textdefault2:{
        fontSize:"15px",
        fontFamily:"K2D",
        marginBottom:"0.5rem",
        marginTop:"0.5rem",
        maxWidth:"420px",
        fontWeight:"bold",
    },
    textdefaultblue:{
        fontSize:"15px",
        fontFamily: 'Montserrat',
        color:"#1B64A7",
        fontWeight:"900",
        cursor: "pointer"
      },
    textdefault3:{
        fontSize:"37px",
        fontFamily:"K2D",
        marginBottom:"0.5rem",
        zIndex:-1
    },
    textdefault4:{
        fontSize:"15px",
        fontFamily: 'Montserrat',
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