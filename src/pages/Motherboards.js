import { useState,useEffect } from "react";
import React from 'react'
import { useNavigate,useLocation,Link } from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";
import {View, Text,StyleSheet} from 'react-native';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import useMediaQuery from '@mui/material/useMediaQuery';
import Checkbox from '@mui/material/Checkbox';
import { Divider } from '@mui/material';
import * as XLSX from 'xlsx';
import '../index.css';

import firstpc from "./../img/firstpc.png";
import secondpc from "./../img/secondpc.png";
import thirdpc from "./../img/thirdpc.png";
import fourthpc from "./../img/fourthpc.png";
import fifthpc from "./../img/fifthpc.png";
import sixthpc from "./../img/sixthpc.png";
import seventhpc from "./../img/seventhpc.png";
import eighthpc from "./../img/eighthpc.png";
import ninethpc from "./../img/ninethpc.png";
import tenthpc from "./../img/tenthpc.png";
import eleventhpc from "./../img/eleventhpc.png";
import twelfthpc from "./../img/twelfthpc.png";

import firstpcsecondpage from "./../img/firstpcsecondpage.png";
import secondpcsecondpage  from "./../img/secondpcsecondpage.png";
import thirdpcsecondpage  from "./../img/thirdpcsecondpage.png";
import fourthpcsecondpage  from "./../img/fourthpcsecondpage.png";
import fifthpcsecondpage  from "./../img/fifthpcsecondpage.png";
import sixthpcsecondpage  from "./../img/sixthpcsecondpage.png";
import seventhpcsecondpage  from "./../img/seventhpcsecondpage.png";
import eighthpcsecondpage  from "./../img/eighthpcsecondpage.png";
import ninethpcsecondpage  from "./../img/ninethpcsecondpage.png";
import tenthpcsecondpage  from "./../img/tenthpcsecondpage.png";
import eleventhpcsecondpage  from "./../img/eleventhpcsecondpage.png";
import twelfthpcsecondpage  from "./../img/twelfthpcsecondpage.png";

import disponivel from "./../img/disponivel.png"
import arrowright from "./../img/arrowright.png"
import arrowleft from "./../img/arrowleft.png"
import arrowabove from "./../img/arrowabove.png"

export default function Motherboards() {
    const isExtraSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));
    const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.between('md', 'lg'));
    const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.between('lg', 'xl'));
    const isExtraLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('xl'));
    const itemsPerPage = 16;
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const [pgraficas, setpgraficas] = useState([]);
    const [maxpages, setmaxpages] = useState([]);
    const [marcapgraficas, setmarcapgraficas] = useState([]);
    const [familypgraficas, setfamilypgraficas] = useState([]);
    const pageNumber = queryParams.get("page");
    const itemsToShow = pgraficas.slice(((parseInt(pageNumber, 10) ) - 1) * itemsPerPage, (parseInt(pageNumber, 10) ) * itemsPerPage);
    const [filtro, setfiltro] = useState(false);
    const readFile = async () => {
        try {
        const response = await fetch("/data/Comp_Filtros.xlsx");
        const blob = await response.blob();
        const reader = new FileReader();
    
        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        
            if (jsonData && jsonData.length > 0) {
                const pgraficas = jsonData.filter(row => row[1] === "Placas_Graficas");
                const combinedmarcaarray =Array.from(new Set(pgraficas.map(value => value[0]))) 
                setmarcapgraficas(combinedmarcaarray)
                const combinedfamilyarray = Array.from(new Set(pgraficas.map(value => value[1])))
                setfamilypgraficas(combinedfamilyarray)  
                const maxPages = Math.ceil(pgraficas.length / itemsPerPage);
                setmaxpages(maxPages)
                setpgraficas(pgraficas)
            }
        };
        
        reader.readAsArrayBuffer(blob);
    
        } catch (error) {
        console.error("Error reading the file:", error);
        }
    };    
    useEffect(() => {
        readFile();
    }, []);

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
                        <Text style={{fontSize: "20px",zIndex:-1}}>    \  Produtos  \    </Text>  
                        <Text  style={{fontSize: "20px",zIndex:-1}}>Placas Gráficas</Text>   
                        </Box>
                    </Box>     
                    <Text style={{
                        ...styles.textdefault3,
                        ...(isSmallScreen ? styles.textdefault3small : {}),
                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                    }}>
                        <span style={{fontWeight:"bold"}}>Placas Gráficas</span>
                    </Text>
                    <Text style={{
                        ...styles.textdefault,
                        maxWidth: "1800px",
                        ...(isSmallScreen ? styles.textdefaultsmall : {}),
                        ...(isExtraSmallScreen ? styles.textdefaultextrasmall : {})
                    }}>
                        Veja as placas gráficas disponíveis na loja
                    </Text>
                </Box>
                <Box sx={{...styles.containermain, 
                         ...(isSmallScreen && styles.containermainsmall), 
                         ...(isExtraSmallScreen && styles.containermainextrasmall),}}>
                    <Box>
                        {
                            isSmallScreen || isExtraSmallScreen ?
                                <>
                                    <Box sx ={{textAlign:"right"}}>  
                                        <Button sx={ filtro? { ...styles.buttoncontainer, backgroundColor: '#1B64A7',color:"white"}: styles.buttoncontainer} onClick={(e) => setfiltro(prevFiltro => !prevFiltro)}>Mostrar filtros</Button> 
                                    </Box>          
                                    { filtro &&
                                     <Box  sx={styles.container1}>
                                     <Box sx={[styles.viewcontainer,{paddingLeft:"0"}]}>      
                                         <Box sx={styles.containerfeaturesmainproduct}> 
                                            <Box sx={styles.containermenu}>
                                            <Box sx={styles.titlemenu}>
                                                <Text style={styles.textdefault2}>
                                                    <span style={{color:"black"}}>Marca</span> 
                                                </Text>
                                                <img src={arrowabove} width={30} height={30}></img>
                                            </Box>
                                            <Divider style={{border:0, borderTop:'1px solid rgba(52, 64, 84, 0.3)',width:"100%",marginBottom:"0.5rem"}}/>
                                            <Box sx={styles.containerfeatures}>
                                                {
                                                    pgraficas.length>0  &&(
                                                        marcapgraficas.map((pc, index) => (
                                                            <Box sx = {styles.menuflex}> 
                                                            <Checkbox sx={{padding:"0"}} />
                                                            <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                                {marcapgraficas[index]}
                                                            </Text>
                                                            </Box>
                                                        ))                                                                                                       
                                                )}         
                                            </Box>     
                                            </Box> 
                                         </Box>        
                                     </Box> 
                                 </Box>}
                                </>
                            :      
                            <Box  sx={styles.container1}>
                                <Box sx={[styles.viewcontainer,{paddingLeft:"0"}]}>      
                                    <Box sx={styles.containerfeaturesmainproduct}> 
                                        <Box sx={styles.containermenu}>
                                            <Box sx={styles.titlemenu}>
                                                <Text style={styles.textdefault2}>
                                                    <span style={{color:"black"}}>Marca</span> 
                                                </Text>
                                                <img src={arrowabove} width={30} height={30}></img>
                                            </Box>
                                            <Divider style={{border:0, borderTop:'1px solid rgba(52, 64, 84, 0.3)',width:"100%",marginBottom:"0.5rem"}}/>
                                            <Box sx={styles.containerfeatures}>
                                                {
                                                    pgraficas.length>0  &&(
                                                        marcapgraficas.map((pc, index) => (
                                                            <Box sx = {styles.menuflex}> 
                                                            <Checkbox sx={{padding:"0"}} />
                                                            <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                                {marcapgraficas[index]}
                                                            </Text>
                                                            </Box>
                                                        ))
                                                )}   
                                            </Box>     
                                        </Box> 
                                
                                    </Box>        
                                </Box> 
                            </Box>     
                        }     
                    </Box>       
                    <Box  sx={{...styles.container1,
                    ...(isExtraLargeScreen && styles.container1extralarge),
                    ...(isLargeScreen && styles.container1large), 
                    ...(isMediumScreen && styles.container1medium), 
                    ...(isSmallScreen && styles.container1small), 
                    ...(isExtraSmallScreen && styles.container1extrasmall)}}>
                        {pgraficas.length>0  &&(
                                itemsToShow.map((pgraficas, index) => (
                                        <Box sx={styles.viewcontainer}>
                                        <Box sx={styles.containerfeaturesmainproduct}> 
                                            <Box sx={styles.containerfeaturesproduts}> 
                                                <img
                                                    src={secondpc}
                                                    style={{maxWidth:"180px"}}
                                                ></img>
                                            </Box>
                                            <Box sx={styles.containerfeatures}>
                                                <Text style={[styles.textdefault2]} key={index}>
                                                    {pgraficas[3]}   
                                                </Text>
                                                <Text style={[styles.textdefault,{fontSize:"13px"}]}>Ref: {pgraficas[2]} </Text>    
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
                                                    <span style={{color:"black"}}>{pgraficas[5]} €</span> 
                                                </Text>
                                            </Box>
                                        </Box>
                                        </Box> 
                                ))
                            )}
                        <Box sx={styles.pages}>
                            <Box sx={styles.pagesflex}>
                                {parseInt(pageNumber, 10) <= maxpages && parseInt(pageNumber, 10) > 1 && (
                                    <Link  to={`/placasgráficas?page=${parseInt(pageNumber, 10) - 1}`} id='aheader' >
                                        <img src={arrowleft} height={10}></img>
                                        <img src={arrowleft} height={10}></img>
                                        <Text>
                                        &nbsp; | 
                                        </Text>
                                    </Link> 
                              
                               )}   
                                <Box>
                                    <Link to="/placasgráficas?page=1" id='aheader' >
                                        1   &nbsp; 
                                    </Link>
                                    <Text>
                                        | 
                                    </Text>
                                </Box>
                                <Box>
                                    <Link  to="/placasgráficas?page=2" id='aheader' >
                                        2  &nbsp; 
                                    </Link>
                                    <Text>
                                        | 
                                    </Text>
                                </Box>
                                <Box>
                                    <Link  to="/placasgráficas?page=3" id='aheader' >
                                        3   &nbsp; 
                                    </Link> 
                                    <Text>
                                        | 
                                    </Text>           
                                </Box>  
                                <Box>
                                    <Link  to="/placasgráficas?page=4" id='aheader' >
                                        4   &nbsp; 
                                    </Link>  
                                    <Text>
                                        | 
                                    </Text>          
                                </Box>  
                                <Box>
                                    <Link  to="/placasgráficas?page=5" id='aheader' >
                                        5   &nbsp; 
                                    </Link>  
                                    <Text>
                                        | 
                                    </Text>          
                                </Box>  
                                <Box>
                                    <Link  to="/placasgráficas?page=6" id='aheader' >
                                        6   &nbsp; 
                                    </Link> 
                                    <Text>
                                        | 
                                    </Text>           
                                </Box>  
                                <Box>
                                    <Link  to="/placasgráficas?page=7" id='aheader' >
                                        7   &nbsp; 
                                    </Link>  
                                    <Text>
                                        | 
                                    </Text>          
                                </Box>  
                                {parseInt(pageNumber, 10) < maxpages && (
                                    <Link  to={`/placasgráficas?page=${parseInt(pageNumber, 10) + 1}`} id='aheader' >
                                        <img src={arrowright} height={10}></img>
                                        <img src={arrowright} height={10}></img>
                                    </Link> 
                                )}                                
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
    titlemenu:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    pages:{
        width:"auto",
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)', 
        padding:"0.5rem",
        height:"20px"
    },
    pagesflex:{
        display:"flex",
        flexDirection:"row",
        gap:"10px",
        alignItems:" baseline "
    },
    containermain:{
        display:"flex",
        flexDirection:"row",
        gap:"15px"
    },
    containermainsmall:{
        flexDirection:"column",
        gap:0
    },
    containermainextrasmall:{
        flexDirection:"column",
        gap:0
    },
    menuflex:{
        display:"flex",
        flexDirection:'row',
        alignItems:"center",
        textAlign:"left",
        gap:"5px"
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
    disponivel:{
        marginTop:"0.5rem",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
    },
    containermenu:{
        margin:"1.5rem",
    },
    containerfeatures:{
        display:"flex",
        flexDirection:"column",
        gap:"5px",
        textAlign:"left",   
    },
    containerfeaturesproduts:{       
        padding:"2rem",
        margin:"auto"
    },
    viewcontainer:{ 
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)', 
        padding:"0.5rem",
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
        width:"100%"
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
    buttoncontainer:{
        color:"black",
        fontFamily: 'K2D',
        marginTop:"0.3rem",
        fontSize:"13px",
        paddingTop:"0.2rem",
        paddingBottom:"0.2rem",
        borderRadius:"6px",
        border:"1px solid #e0e0e0",
        '&:hover': {
            backgroundColor: '#fafafa',
            color:"black"
          },
          flex:1
    },
});