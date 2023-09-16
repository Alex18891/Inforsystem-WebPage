import React, { useEffect,useState,useContext  } from "react";
import { styled } from "@mui/material/styles";
import { useNavigate,Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import {View, Text,StyleSheet} from 'react-native';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import ReactModal from 'react-modal';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import pfp from "./../img/user.png";
import logo from "./../img/logo.png";
import menu from "./../img/menu.png";
import menuwhite from "./../img/menuwhite.png";
import Login from './Login';
import Register from "./Register";
import { PopupContext } from './popupcontext';
import ForgotPassword from "./ForgotPassword";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius + 10 ,
  marginLeft: 0,

  [theme.breakpoints.up("md")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
  backgroundColor: "#EBEBEB",
  
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1rem + ${theme.spacing(4)})`,
    paddingRight: `calc(1rem + ${theme.spacing(3)})`,
    transition: theme.transitions.create("width"),
    border:"1px solid black",
    borderRadius:"12px",
    [theme.breakpoints.up("md")]: {
      width: "24ch",
      height:"2.8ch"
    },
    [theme.breakpoints.down("sm")]: {
      width: "24ch", // Set width to 100% for small screens
      height:"2.8ch", // Set height to 1.6ch for small screens
    },
    [theme.breakpoints.down('lg')]: {
      width: '24ch', // Set width to 30ch for large screens
      height:"2.8ch", // Set height to 2ch for large screens
    },
    "&::placeholder": {
      opacity: 0.8,
      fontFamily:"K2D",

    },  
  },
}));

export default function PrimarySearchAppBar() {
  const isExtraSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.between('md', 'lg'));
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.between('lg', 'xl'));
  const isExtraLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('xl'));
  const [searchValue, setSearchValue] = React.useState("");
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const { isOpenLogin, setIsOpenLogin, isOpenRegister, setIsOpenRegister,isOpenForgotpassword,setIsOpenForgotpassword  } = useContext(PopupContext);
  const [isHoveredprodu, setIsHoveredprodu] = useState(false);
  const [isHoveredsoft, setIsHoveredsoft] = useState(false);
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsHoveredprodu(false)
    setIsHoveredsoft(false);
  };

  const handleMouseEnterprod = () => {
    setIsHoveredprodu(prevState => !prevState);
    setIsHovered(false);
    setIsHoveredsoft(false);
};


const handleMouseEntersoft = () => {
    setIsHovered(false);
    setIsHoveredsoft(true);
    setIsHoveredprodu(false);
};


  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsHoveredsoft(false);
    setIsHoveredprodu(false);
  };

  const loginaccount = () =>{
    setIsOpenLogin(true);
  }

  const menutoolbar = (
    <Box sx={{ display: "flex", alignItems: "center", gap: "50px"}}>
      <Box sx={{display:"flex",alignItems: "center", gap: "15px"}}>
        <View    style={[styles.container,{zIndex: isOpenLogin || isOpenForgotpassword || isOpenRegister ? 0 : 1,}]} >
          <img src={menu} width={30}  style={{cursor:"pointer"}} onClick={() => window.location.href = "/"} ></img>
        </View>
        <View  onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnterprod}  style={[styles.container,{zIndex: isOpenLogin || isOpenForgotpassword || isOpenRegister ? 0 : 1,}]} >   
          <View  sx={styles.produtosmenu} >
              Produtos       
          </View>
          <View  style={[styles.container_cont,isHoveredprodu && styles.containerHovered]}>
                <Link  style={styles.acontainer} id='aheader'to="/produtos/Pesquisa">Pesquisa</Link>  
                <Link  style={styles.acontainer} id='aheader'to="/produtos/Pesquisa">Catálogo</Link>  
          </View>
        </View>  
      </Box>
         
      <View  style={[styles.container,{zIndex: isOpenLogin || isOpenForgotpassword || isOpenRegister ? 0 : 1,minWidth: "380px",}]} onMouseEnter={handleMouseEntersoft}
            onMouseLeave={handleMouseLeave}>
            <Box  style={{ color: "black",textDecorationLine:"none"}} >
                Software
                <i className="fa fa-caret-down" style={{marginLeft:"0.5rem"}} ></i>
            </Box>
        <View  style={[styles.container_cont,isHoveredsoft && styles.containerHovered]}>
            <Link style={styles.acontainer} id='aheader' to="/suportemanutenção?page=1">Serviços de Suporte/Manutenção</Link>
            <Link style={styles.acontainer} id='aheader' to="/softwarefaturação">Serviços de Faturação</Link>
        </View>
      </View>
    </Box>
  )

  return (
    <Box sx={{ flexGrow: 1}}>
        <Box position="static"  sx={{background: "#1A65A4"}}>
            <Toolbar sx={styles.firsttoolbar}>
              <Box sx={{...styles.firstitemfirsttoolbar,
                    ...(isSmallScreen && styles.firstitemfirsttoolbarsmall),
                    ...(isExtraSmallScreen && styles.firstitemfirsttoolbarextrasmall) }}>
               
                {( isSmallScreen  ) && (
                  <Box sx={{ display: "flex", alignItems: "center", gap: "50px"}}>
                  <View  style={[styles.container,{zIndex: isOpenLogin || isOpenForgotpassword || isOpenRegister ? 0 : 1,}]} >
                    <Box  sx={[styles.produtosmenu]}  >
                      <img src={menuwhite} width={40} style={{cursor:"pointer",color:"white"}} onClick={handleMouseEnterprod} ></img>          
                    </Box>  
                  </View>      
                  </Box> 
                )
                }
                {
                  (
                  <>
                    <img
                        src={logo}
                        width={210}
                        height={42}
                        alt="profile picture"
                        onClick={() => window.location.href = "/"}
                        style={{cursor:"pointer"}}
                      />
                    </>   
                )
              }   
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon style={{ color: "#344054"}} />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Pesquisa os nossos produtos"
                    inputProps={{ "aria-label": "search" }}
                    onChange={handleSearchChange}
                  />     
                </Search>  
                {( isExtraSmallScreen  ) && (
                <View    style={[styles.container,{zIndex: isOpenLogin || isOpenForgotpassword || isOpenRegister ? 0 : 1,}]} >
                   <Box  style={{ color: "white",textDecorationLine:"none", cursor:"pointer"}} onClick={handleMouseEnterprod}>
                      Menu
                      <i className="fa fa-caret-down" style={{marginLeft:"0.5rem"}} ></i>
                    </Box>  
                  </View> 
                )}
              </Box>
              <Box sx={{...styles.seconditemfirsttoolbar,
                    ...(isSmallScreen && styles.seconditemfirsttoolbarsmall),
                    ...(isExtraSmallScreen && styles.seconditemfirsttoolbarsmall)  }} onClick={loginaccount}>
                <img
                    src={pfp}
                    alt="profile picture"
                    width="40px"
                    height="40px"
                    style={{
                    marginTop:"0.5rem"
                    }}
                ></img>
                <Text style={styles.textdefault} >
                    Minha conta
                </Text> 
              </Box>
              
              <ReactModal
                isOpen={isOpenLogin}
                onRequestClose={() => setIsOpenLogin(false)}
                contentLabel="Login Modal"
                style={styles.popup}
              >
              <button 
                onClick={() => setIsOpenLogin(false)} 
                  style={{
                    cursor:'pointer',
                    position: 'absolute', // Position the button absolutely
                    top: '10px', // Position from the top
                    right: '10px', // Position from the right
                    background: 'transparent',
                    color:'#344054', // Optionally make the button background transparent
                    border: 'none',
                    zIndex:2 // Optionally remove the button border
                  }}
                >
                <FontAwesomeIcon size="2x" icon={faTimes} />
                </button>
                <Login onRequestClose={() => setIsOpenLogin(false)} />
            </ReactModal>
            <ReactModal
              isOpen={isOpenRegister}
              onRequestClose={() => setIsOpenRegister(false)}
              contentLabel="Register Modal"
              style={styles.popup}
            >
              <button 
                onClick={() => setIsOpenRegister(false)} 
                style={{
                  cursor:'pointer',
                  position: 'absolute', // Position the button absolutely
                  top: '10px', // Position from the top
                  right: '10px', // Position from the right
                  background: 'transparent',
                  color:'#344054', // Optionally make the button background transparent
                  border: 'none',
                  zIndex:2 // Optionally remove the button border
                }}
              >
                <FontAwesomeIcon size="2x" icon={faTimes} />
              </button>
              <Register onRequestClose={() => setIsOpenRegister(false)} />
            </ReactModal>
            <ReactModal
              isOpen={isOpenForgotpassword}
              onRequestClose={() => setIsOpenForgotpassword(false)}
              contentLabel="Forgot Password Modal"
              style={styles.popup}
            >
              <button 
                onClick={() => setIsOpenForgotpassword(false)} 
                style={{
                  cursor:'pointer',
                  position: 'absolute', // Position the button absolutely
                  top: '10px', // Position from the top
                  right: '10px', // Position from the right
                  background: 'transparent',
                  color:'#344054', // Optionally make the button background transparent
                  border: 'none',
                  zIndex:2 // Optionally remove the button border
                }}
              >
                <FontAwesomeIcon size="2x" icon={faTimes} />
              </button>
              <ForgotPassword onRequestClose={() => setIsOpenForgotpassword(false)} />
            </ReactModal>
            </Toolbar>       
        </Box >
        {(isExtraSmallScreen|| isSmallScreen) && isHoveredprodu &&  (
         
          <View  style={[styles.container_cont,isHoveredprodu && styles.containerHovered, { width: "100%",borderRadius:"2px" } ]}>
                <Link  style={styles.acontainer} id='aheader'to="/produtos/Pesquisa">Pesquisa de Produtos</Link>  
                <Link  style={styles.acontainer} id='aheader'to="/produtos/Pesquisa">Catálogo de Produtos</Link>  
                <Link style={styles.acontainer} id='aheader' to="/suportemanutenção?page=1">Serviços de Suporte/Manutenção</Link>
              <Link style={styles.acontainer} id='aheader' to="/softwarefaturação">Serviços de Faturação</Link>
          </View>
      

        )}
        <Box  sx={{ background: "white" ,boxShadow: '0 0 30px rgba(0, 0, 0, 0.2)'}}>
          <Toolbar  sx={{...styles.secondtoolbar,
                      ...(isSmallScreen && styles.secondtoolbarsmall),
                      ...(isExtraSmallScreen && styles.secondtoolbarsmall)  }}>
            {menutoolbar}
            <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: "flex", alignItems: "center",gap: "50px" ,zIndex:0}}>
              <View  style={[styles.container,{zIndex: isOpenLogin || isOpenForgotpassword || isOpenRegister ? 0 : 1,}]} onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}>
                  <Link style={{ color: "black",textDecorationLine:"none"}} >
                      Contactos
                      <i className="fa fa-caret-down" style={{marginLeft:"0.5rem"}} ></i>
                  </Link>
                  <View  style={[styles.container_cont,isHovered && styles.containerHovered]}>
                    
                      <Link style={styles.acontainer} id='aheader' to="https://wa.me/351967687915">
                          <i style={{marginTop:"0.2rem"}} className="fas fa-phone" width="21px" height="21px"  ></i>
                          <p style={{margin:0}}>(+351) 966218628</p>
                      </Link>
                      <Link style={styles.acontainer} id='aheader' to="mailto:loja2@inforsystem.net">
                          <i style={{marginTop:"0.2rem"}} className="fas fa-envelope" width="21px" height="24px"   ></i>
                          <p style={{margin:0}} >loja2@inforsystem.net</p>
                      </Link>
                    
                  </View>
              </View>
              <Link style={{ textDecorationLine:"none" }} id='aheader' to="/sobrenós">
                Sobre nós
              </Link> 
              <Link style={{ textDecorationLine:"none" }} id='aheader' to="#">
                Pedir orçamento
              </Link> 
            </Box>
          </Toolbar>
        </Box>
  
    </Box>
  );
}

const styles = StyleSheet.create({

  hamburger:{
    content:" ",
    display:"block",
    width:"30px",
    height:"3px"
  },
  produtosmenu:{
    color: "black",textDecorationLine:"none",display:"flex",alignItems:"center",gap:"15px"
  },
    container:{
        position: "relative",
        display: "inline-block",
    },
    popup:{
      overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)', 
        backdropFilter: 'blur(10px)', // This line adds the blur effect
      },
      content : {
      position: 'relative',
      top: '50%',
      left: '50%',
      right : 'auto',
      bottom : 'auto',
      width:"1000px",
      transform : 'translate(-50%, -50%)',
      backgroundColor : '#fff', 
      borderRadius:'6px',
      paddingBottom:'5rem',
      padding:'0',
      border: 0,
      zIndex:2
      }
    },
    container_cont2:{
      display: "none",
      backgroundColor: "white",
      shadowColor: '#000',
      shadowOffset: {
      width: 0,
      height: 8,
      },
      shadowOpacity: 0.2,
      shadowRadius: 16,
      borderRadius:"10px"  
  },
    firsttoolbar:{
      alignItems:"center",
      display:"flex",
      justifyContent:"space-between",
      maxWidth:"1800px",
      margin:"auto"
    },
    seconditemfirsttoolbar:{
      display: "flex", alignItems: "center",cursor: "pointer"
    },
    seconditemfirsttoolbarsmall:{
      display: "none"
    },
    firstitemfirsttoolbar:{
      flexDirection:"row",display:"flex"
    },
    firstitemfirsttoolbarsmall:{
      gap:"20px",
      margin:0,
      
    },
    firstitemfirsttoolbarextrasmall:{
      gap:"10px",
      marginLeft:"auto",
      marginRight:"auto",
      flexDirection:"column",
      marginBottom:"20px",
      marginTop:"10px",
      alignItems: "center"
    },
    secondtoolbar:{
      marginLeft:"auto",
      marginRight:"auto",
      alignItems:"center",
      display:"flex",
      justifyContent:"space-between",
      maxWidth:"1800px", 
    },

    secondtoolbarsmall:{
      display:"none",
    },

    container_cont:{
        display: "none",
        position: "absolute",
        backgroundColor: "white",
        minWidth: "115px",
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 8,
        },
        shadowOpacity: 0.2,
        shadowRadius: 16,
        paddingRight:"20px",
        borderRadius:"5px",  
    },
    container_small:{
      display: "none",
      margin:"auto"

  },

     acontainer: {
        display: "flex",
        gap:"10px",
        fontSize:"16px",
        marginLeft:"1rem",
        alignItems:"center",
        textDecorationLine:"none",
        marginTop:"0.5rem",
        padding: "6px",
        marginBottom:"0.5rem",
        cursor:"pointer"
      },
  
      containerHovered: {
        display: "block",
        zIndex:2
      },
      textdefault:{
        fontSize:"16px",
        fontFamily:"K2D",
        color:"white"
      }
});
