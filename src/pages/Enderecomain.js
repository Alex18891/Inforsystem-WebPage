import { useState, useEffect,useRef,useContext } from "react";
import { useNavigate,Link } from "react-router-dom";
import Button from '@mui/material/Button';
import {Text,StyleSheet} from 'react-native';
import Toolbar from "@mui/material/Toolbar";
import Checkbox from '@mui/material/Checkbox';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from "@mui/material/Box";
import { Divider } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faExclamation} from '@fortawesome/free-solid-svg-icons'
import { PopupContext } from './popupcontext';
import logo from "./../img/logo.png";
import axios from "axios";

export default function Enderecomain() {
    const isExtraSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));
    const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.between('md', 'lg'));
    const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.between('lg', 'xl'));
    const isExtraLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('xl'));
    const {isOpenEndereco, setIsOpenEndereco,isOpenEnderecoadd, setIsOpenEnderecoadd } = useContext(PopupContext);
    const [userinfo,setuserinfo] = useState([]);

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }
    const userid = getCookie('userid');
    useEffect(()=>{
        axios.get(`http://localhost:8080/endereco?userid=${userid}`)
        .then((res)=>{
            console.log(res.data)
            if(res.status === 200)
            {
                setuserinfo(res.data.user)
            }
        }  
        ).catch(err=>console.log(err))
    },[])

    const handleadd = () => {
        setIsOpenEnderecoadd(false)
        setIsOpenEndereco(true)
        localStorage.removeItem('userinfoselect'); //Remove os dados do endereço selecionado no botão de mudar anteriormente ao adicionar um novo endereço
    }

    const handlediv = (user)=>{
        setIsOpenEnderecoadd(false)
        localStorage.setItem('userinfo',JSON.stringify(user));
        localStorage.removeItem('userinfoselect'); //Remove os dados do endereço selecionado no botão de mudar anteriormente ao selecionar um endereço para orçamento
    }

    const handlechange = (user) =>{
        setIsOpenEnderecoadd(false)
        setIsOpenEndereco(true)
        localStorage.setItem('userinfoselect',JSON.stringify(user));//Envia os dados do endereço selecionado no botão de mudar
    }

    return (
        <>
           <Box  sx={{...styles.container, gap: userinfo.length > 0 ? "10px" : "320px",}}>
                <Box sx= {styles.contentflex}>
                        <Text style={styles.textdefault} >
                            Adicionar Endereço
                        </Text>                                 
                </Box> 
            {userinfo.length>0 && (
                userinfo.map((user,index)=>(
                    <>
                    <Box sx= {{...styles.contentflexaddendereco,}} >  
                         <Box key={index} onClick={() => handlediv(user)} sx= {{width:"70%", cursor:"pointer"}} >         
                                <Box sx = {{...styles.contactosflexrow,
                                ...(isSmallScreen && styles.contactosflexrowsmall),
                                ...(isExtraSmallScreen && styles.contactosflexrowsmall)
      
                                }} >
                                    <Text style={styles.textdefault} >
                                    {user.name}
                                    </Text>                  
                                    <Text style={styles.textdefault} >
                                        {user.telefone}
                                    </Text>   
                                </Box>                                       
                            <Box sx = {{...styles.contactosflexrow,
                                        ...(isSmallScreen && styles.contactosflexrowsmall),
                                        ...(isExtraSmallScreen && styles.contactosflexrowsmall),
                                  
                                        }}>       
                                                                    
                                        <Text style={{...styles.textdefault4, maxWidth:"270px"}} >
                                            {user.morada}   
                                        </Text>                    
                            </Box>
                            <Box sx = {{...styles.contactosflexrow,
                                        ...(isSmallScreen && styles.contactosflexrowsmall),
                                        ...(isExtraSmallScreen && styles.contactosflexrowsmall),
                               
                                        }}>                                     
                                        <Text style={{...styles.textdefault4, maxWidth:"270px"}} >
                                            {user.state}, {user.country}, {user.cdpt}     
                                        </Text>                    
                            </Box>
                        </Box>
                        <Box sx= {{width:"30%",textAlign:"right"}}>
                        <Text onClick={()=>handlechange(user)}   style={{...styles.textdefaultblue}} >
                            Mudar
                        </Text> 
                        </Box>
                    </Box>
                   
                   </> 
                ))
            )}      
                <Box sx = {[styles.boxcontainer,{flexDirection:"row",gap:"10px"}]}>   
                    <Button sx={styles.buttoncontainer} onClick={handleadd}>Adicionar endereço</Button>
                </Box>   
            </Box>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        margin:"auto",
        marginTop:"1rem",
        textAlign: 'left',
        maxWidth:"600px",
        display:"flex",
        flexDirection:"column",
        paddingLeft:"5rem",
        paddingRight:"5rem",  
    }, 
    contactosflexrow:{
        display:"flex",flexDirection:"row",gap:"5px"
    },
    contactosflexrowsmall:{
        display:"flex",flexDirection:"column",gap:"15px"
    },
    contactosflexcolumn:{
        display:"flex", flexDirection:"column",gap:"5px"
    },
    offscreen: {
        display: 'none',
      },

    errmsg: {
        marginBottom: 0,
        paddingBottom:0,
        fontFamily: 'Montserrat',
        fontWeight: "bold",
        fontSize:"13px",
        color:"rgb(211,109,109)",
        textAlign:"left"
    },
    buttoncontainer:{
        backgroundColor:"#1B64A7",
        color:"white",
        fontFamily: 'K2D',
        marginTop:"0.3rem",
        fontSize:"16px",
        paddingTop:"0.5rem",
        paddingBottom:"0.5rem",
        borderRadius:"6px",
        '&:hover': {
            backgroundColor: '#134b7c',
          },
          '&:disabled': {
            color:"white",
            backgroundColor: '#134b7c',
        },
          flex:1
    },
    textdefault:{
        fontSize:"20px",
        fontFamily: 'K2D',
        color:"#344054",
        WebkitTextStrokeWidth: '0.1px', 
        textAlign:"center"
      },
      textdefaultblue1:{
        fontSize:"13px",
        fontFamily: 'Montserrat',
        color:"#1B64A7",
        fontWeight:"900",
        cursor: "pointer"
      },
      textdefaultblue:{
        fontSize:"17px",
        fontFamily: 'Montserrat',
        color:"#1B64A7",
        fontWeight:"900",
        cursor: "pointer"
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
      },   
      textdefault1:{
        fontSize:"17px",
        fontFamily: 'Montserrat',
        color:"#344054"
      },
      boxcontainer:{
        display:"flex",
        flexDirection:"column",
        textAlign:"left",
    },
    contentflex:{
        display:"flex",
        flexDirection:"column",
        gap:"8px",     
    },
    contentflexaddendereco:{
        display:"flex",
        flexDirection:"row",
        gap:"8px",   
        justifyContent:"space-between",
        border: '1px solid rgba(194, 194, 194, 0.6)',padding:"0.5rem"
    },
    titleflex:{
        display:"flex",
        flexDirection:"row",
        gap:"10px",
        alignItems:"center"
    },
    inputtext:{
        borderRadius:"4px",
        paddingLeft:"0.3rem",
        border:"0.5px solid #98A2B3",
        fontFamily: 'Montserrat',
        fontSize:"12px", 
      }, 
 
});