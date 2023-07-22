import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Button from '@mui/material/Button';
import {Text,StyleSheet} from 'react-native';
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import useMediaQuery from '@mui/material/useMediaQuery';

import logo from "./../img/logo.png";

export default function Homepage() {
    const isExtraSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));
    const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.between('md', 'lg'));
    const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.between('lg', 'xl'));
    const isExtraLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('xl'));
    return (
        <>
           <Box sx={{ flexGrow: 1,}}>
           <Box position="static" sx={{background: "#1A65A4"}}>
                <Toolbar >
                    <Box sx={styles.toolbarcontainer}>
                        <img
                        src={logo}
                        alt="profile picture"    
                        ></img>
                    </Box>
            
            </Toolbar>
            </Box >
           </Box>
           <Box  sx={{margin:"auto",marginTop:"3rem",textAlign: 'left',maxWidth:"1000px"}}>
                <Box sx={styles.maincontainer}>
                    <Text style={styles.textdefault} >
                        Iniciar sessão
                    </Text> 
                    <Box sx={styles.viewcontainer}>
                        <Box sx={styles.containerfeaturesmain}>     
                            <Box sx = {styles.boxcontainer}> 
                        
                                <label style={styles.textdefault1} >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email*"
                                    style={styles.inputtext}
                                    />
                            </Box>
                            <Box sx = {styles.boxcontainer}> 
                                <label style={styles.textdefault1} >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="Password*"
                                    style={styles.inputtext}
                                    />
                            </Box>
                            <Box sx = {styles.boxcontainer}> 
                                <Text style={styles.textdefault3} >
                                        Esqueçi-me da password? Recupera<span><a style={styles.textdefaultblue}> aqui</a></span>        
                                </Text>  
                            </Box>
                            <Box sx = {styles.boxcontainer}> 
                                <Button sx={styles.buttoncontainer}>Iniciar sessão</Button>
                            </Box>
                            <Box sx = {[styles.boxcontainer,{alignItems:"center"}]}> 
                                <Text style={styles.textdefault4} >
                                        És novo cliente?<span><a style={styles.textdefaultblue1}> Cria a tua conta</a></span>        
                                </Text>  
                            </Box>
                        </Box>

                    </Box>
                </Box>
            </Box>
        </>
    );
}

const styles = StyleSheet.create({
    toolbarcontainer:{
        flexGrow: 1, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        marginTop:"4rem",
        marginBottom:"4rem"
    },



    buttoncontainer:{
        backgroundColor:"#1B64A7",
        color:"white",
        fontFamily: 'K2D',
        fontSize:"13px",
        paddingTop:"0.1rem",
        paddingBottom:"0.1rem",
        borderRadius:"8px",
        '&:hover': {
            // Remove hover effect by setting hover styles the same as default styles
            backgroundColor: '#134b7c',
          },
    },
    maincontainer:{
        margin:"auto",
        width:"65%",
    },

    textdefault:{
        fontSize:"30px",
        fontFamily: 'K2D',
        color:"#344054"
      },
      textdefaultblue:{
        fontSize:"10px",
        fontFamily: 'Montserrat',
        color:"#1B64A7",
        fontWeight:"900",
      },
      textdefaultblue1:{
        fontSize:"13px",
        fontFamily: 'Montserrat',
        color:"#1B64A7",
        fontWeight:"900",
        
      },

      textdefault3:{
        fontSize:"10px",
        fontFamily: 'Montserrat',
        fontWeight:"900",
        color:"black",
        WebkitTextStrokeWidth: '0.1px', // Stroke width

      },

      textdefault4:{
        fontSize:"13px",
        fontFamily: 'Montserrat',
        fontWeight:"900",
        color:"black",
        WebkitTextStrokeWidth: '0.1px', 
      },

      
      textdefault1:{
        fontSize:"17px",
        fontFamily: 'Montserrat',
        color:"#344054"
      },
      viewcontainer:{ 
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)', 
        borderRadius: 2,
        marginTop:"1rem"
    },
    containerfeaturesmain:{
        background: "white",
        gap:"10px",
        display:"flex",
        flexDirection:"column",
        paddingTop:"2rem",
        alignItems:"center",
        paddingBottom:"2rem"
    },
    boxcontainer:{
        display:"flex",
        flexDirection:"column",
        textAlign:"left",
        gap:"5px",
        width:"60%"
    },

    inputtext:{
        borderRadius:"4px",
        paddingLeft:"0.5rem",
        border:"1px solid #98A2B3", // Change the border color here
        height:"3ch",
        width:"auto",
        fontFamily: 'Montserrat',
        fontSize:"12px",
      },
});