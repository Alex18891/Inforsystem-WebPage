import React, { useEffect,useState } from "react";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import {View, Text,StyleSheet} from 'react-native';
import useMediaQuery from '@mui/material/useMediaQuery';

import pfp from "./../img/user.png";

import logo from "./../img/logo.png";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius + 10 ,
  marginLeft: 0,

  [theme.breakpoints.up("sm")]: {
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
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHoveredprodu, setIsHoveredprodu] = useState(false);
  const [isHoveredserv, setIsHoveredserv] = useState(false);
  const [isHoveredsoft, setIsHoveredsoft] = useState(false);
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsHoveredprodu(false)
    setIsHoveredserv(false);
    setIsHoveredsoft(false);
  };

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };
  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  const handleMouseEnterprod = () => {
    setIsHoveredprodu(true)
    setIsHovered(false);
    setIsHoveredserv(false);
    setIsHoveredsoft(false);
};

const handleMouseEntersoft = () => {
    setIsHoveredprodu(false);
    setIsHovered(false);
    setIsHoveredserv(false);
    setIsHoveredsoft(true);
};

const handleMouseEnterserv = () => {
    setIsHoveredprodu(false)
    setIsHovered(false);
    setIsHoveredserv(true);
    setIsHoveredsoft(false);
};
  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsHoveredprodu(false)
    setIsHoveredserv(false);
    setIsHoveredsoft(false);
  };


  return (
    <Box sx={{ flexGrow: 1}}>
        <Box position="static"  sx={{background: "#1A65A4"}}>
            <Toolbar sx={styles.firsttoolbar}>
              <Box sx={{...styles.firstitemfirsttoolbar,
                    ...(isSmallScreen && styles.firstitemfirsttoolbarsmall),
                    ...(isExtraSmallScreen && styles.firstitemfirsttoolbarextrasmall) }}>
                <img
                  src={logo}
                  width={210}
                  height={42}
                  alt="profile picture"
                ></img>
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
              </Box>
              <Box sx={{...styles.seconditemfirsttoolbar,
                    ...(isSmallScreen && styles.seconditemfirsttoolbarsmall),
                    ...(isExtraSmallScreen && styles.seconditemfirsttoolbarsmall)  }}>
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
            </Toolbar>
        </Box >
      <Box position="static" sx={{ background: "white" ,boxShadow: '0 0 30px rgba(0, 0, 0, 0.2)'}}>
        <Toolbar sx={{...styles.secondtoolbar,
                    ...(isSmallScreen && styles.secondtoolbarsmall),
                    ...(isExtraSmallScreen && styles.secondtoolbarsmall)  }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "50px" }}>
              <View  style={styles.container} onMouseEnter={handleMouseEnterprod}
                      onMouseLeave={handleMouseLeave}>
                  <a  style={{ color: "black"}} >
                      Produtos
                      <i className="fa fa-caret-down" style={{marginLeft:"0.5rem"}} ></i>
                  </a>
                  <View  style={[styles.container_cont,isHoveredprodu && styles.containerHovered]}>
                          <a style={styles.acontainer} id='aheader' href="#">Computadores</a>
                          <a style={styles.acontainer} id='aheader' href="#">Sistemas Pos</a>
                          <a style={styles.acontainer} id='aheader' href="#">All-In-On</a>
                          <a style={styles.acontainer} id='aheader' href="#">Portateis</a>
                          <a style={styles.acontainer} id='aheader' href="#">Monitores</a>
                          <a style={styles.acontainer} id='aheader' href="#">Impressoras</a>
                          <a style={styles.acontainer} id='aheader' href="#">Acessórios</a>
                  </View>
              </View>
              <View  style={styles.container} onMouseEnter={handleMouseEnterserv}
                      onMouseLeave={handleMouseLeave}>
                  <a  style={{ color: "black" }} >
                      Serviços
                      <i className="fa fa-caret-down" style={{marginLeft:"0.5rem"}} ></i>
                  </a>
                  <View  style={[styles.container_cont,isHoveredserv && styles.containerHovered]}>
                      <View style={styles.container}  onMouseEnter={handleMouseEnter2}
                      onMouseLeave={handleMouseLeave2} > 
                              <Text style={[styles.acontainer, {marginBottom:0, paddingRight:"40px"}]}>Reparação
                                  <i class="fa fa-caret-right" style={{marginTop:"0.3rem"}}></i>
                              </Text>     
        
                              <View style={[styles.container_cont2,isHovered2 && styles.containerHovered]} >
                                  <a style={styles.acontainer} id='aheader' href="#">Computadores</a>
                                  <a style={styles.acontainer} id='aheader' href="#">Impressoras</a>
                              </View>
                      </View>
                          <a style={styles.acontainer} id='aheader' href="#">Instalação SO</a>
                          <a style={styles.acontainer} id='aheader' href="#">Remoção de virus</a>
                  </View>
              </View>
              <View  style={styles.container} onMouseEnter={handleMouseEntersoft}
                      onMouseLeave={handleMouseLeave}>
                      <a  style={{ color: "black"}} >
                          Software
                          <i className="fa fa-caret-down" style={{marginLeft:"0.5rem"}} ></i>
                      </a>
                  <View  style={[styles.container_cont,isHoveredsoft && styles.containerHovered]}>
                  <View style={styles.container}  onMouseEnter={handleMouseEnter2}
                      onMouseLeave={handleMouseLeave2} > 
                              <Text style={[styles.acontainer, {paddingRight:"20px", marginBottom:0}]}>Serviços Web
                                  <i class="fa fa-caret-right" style={{marginTop:"0.3rem"}}></i>
                              </Text>     
                              <View style={[styles.container_cont2,isHovered2 && styles.containerHovered]} >
                                  <a style={styles.acontainer} id='aheader' href="#">Alojamento</a>
                              </View>
                      </View>
                          
                          <a style={styles.acontainer} id='aheader' href="#">Faturação</a>
                  </View>
              </View>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: "flex", alignItems: "center",gap: "50px" }}>
            <View  style={styles.container} onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                <a style={{ color: "black"}} >
                    Contactos
                    <i className="fa fa-caret-down" style={{marginLeft:"0.5rem"}} ></i>
                </a>
                <View  style={[styles.container_cont,isHovered && styles.containerHovered]}>
                  
                    <a style={styles.acontainer} id='aheader' href="https://wa.me/351967687915">
                        <i style={{marginTop:"0.2rem"}} className="fas fa-phone" width="21px" height="21px"  ></i>
                        <p style={{margin:0}}>(+351) xxxxxxxxx</p>
                    </a>
                    <a style={styles.acontainer} id='aheader' href="mailto:loja2@inforsystem.net">
                        <i style={{marginTop:"0.2rem"}} className="fas fa-envelope" width="21px" height="24px"   ></i>
                        <p style={{margin:0}} >loja2@inforsystem.net</p>
                    </a>
                  
                </View>
            </View>
            <a style={{ textDecorationLine:"none" }} id='aheader' href="#">
              Sobre a empresa
            </a> 
            <a style={{ textDecorationLine:"none" }} id='aheader' href="#">
              Enviar ticket
            </a> 
          </Box>
        </Toolbar>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
    container:{
        position: "relative",
        display: "inline-block",
        zIndex:2
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
      margin:"auto"
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
        minWidth: "180px",
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 8,
        },
        shadowOpacity: 0.2,
        shadowRadius: 16,
        paddingRight:"20px",
        borderRadius:"10px",  
    },

    container_cont2:{
        display: "none",
        position: "absolute",
        backgroundColor: "white",
        paddingRight:"20px",
        left:"140px",
        top:"0px",
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 8,
        },
        shadowOpacity: 0.2,
        shadowRadius: 16,
        borderRadius:"10px"  
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
