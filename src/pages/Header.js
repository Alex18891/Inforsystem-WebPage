import React, { useEffect,useState } from "react";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import {View, Text,StyleSheet} from 'react-native';

import pfp from "./../img/user.png";

import logo from "./../img/logo.png";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius + 10,
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
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
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    border:"1px solid black",
    borderRadius:"12px",
    [theme.breakpoints.up("md")]: {
      width: "28ch",
      height:"1.6ch"
    },
    "&::placeholder": {
      color: "#344054",
      opacity: 0.8,
      fontFamily:"K2D",
    },  
  },
}));



export default function PrimarySearchAppBar() {
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
      <AppBar position="static" style={{ background: "#1A65A4"}}>
        <Toolbar sx={{marginLeft:"auto",marginRight:"auto",gap:"580px"}}>
          <Box sx={{ flexGrow: 1,flexDirection:"row",display:"flex"}}>
            <img
              src={logo}
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
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex", alignItems: "center",justifycontent: "center",cursor: "pointer", }}>
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
      </AppBar>
      <AppBar position="static" style={{ background: "white" }}>
        <Toolbar sx={{marginLeft:"auto",marginRight:"auto",gap:"520px"}}>
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
      </AppBar>
    </Box>
  );
}

const styles = StyleSheet.create({
    container:{
        position: "relative",
        display: "inline-block"
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
        zIndex: 1
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
      },
      textdefault:{
        fontSize:"16px",
        fontFamily:"K2D",
        color:"white"
      }
     
  
});
