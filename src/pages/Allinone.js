import { useState, useEffect } from "react";
import { useNavigate,useLocation,Link } from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";
import {View, Text,StyleSheet} from 'react-native';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import useMediaQuery from '@mui/material/useMediaQuery';
import Checkbox from '@mui/material/Checkbox';
import { Divider } from '@mui/material';
import '../index.css';

import oneallinonefirstpage from "./../img/firstallinonefirstpage.png";
import twoallinonefirstpage from "./../img/secondallinonefirstpage.png";
import threeallinonefirstpage from "./../img/thirdallinonefirstpage.png";
import fourallinonefirstpage from "./../img/fourthallinonefirstpage.png";
import fiveallinonefirstpage from "./../img/fifthallinonefirstpage.png";
import sixallinonefirstpage from "./../img/sixthallinonefirstpage.png";
import sevenallinonefirstpage from "./../img/seventhallinonefirstpage.png";
import eigthallinonefirstpage from "./../img/eighthallinonefirstpage.png";
import nineallinonefirstpage from "./../img/ninethallinonefirstpage.png";
import tenallinonefirstpage from "./../img/tenthallinonefirstpage.png";
import elevenallinonefirstpage from "./../img/eleventhallinonefirstpage.png";
import twelveallinonefirstpage from "./../img/twelfthallinonefirstpage.png";


import disponivel from "./../img/disponivel.png"
import arrowright from "./../img/arrowright.png"
import arrowabove from "./../img/arrowabove.png"

export default function Allinone() {
    const isExtraSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));
    const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.between('md', 'lg'));
    const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.between('lg', 'xl'));
    const isExtraLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('xl'));
    const [filtro, setfiltro] = useState(false);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const pageNumber = queryParams.get("page");

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
                        <Text  style={{fontSize: "20px",zIndex:-1}}>All-in-one</Text>   
                        </Box>
                    </Box>     
                    <Text style={{
                        ...styles.textdefault3,
                        ...(isSmallScreen ? styles.textdefault3small : {}),
                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                    }}>
                        <span style={{fontWeight:"bold"}}>All-in-one</span>
                    </Text>
                    <Text style={{
                        ...styles.textdefault,
                        maxWidth: "1800px",
                        ...(isSmallScreen ? styles.textdefaultsmall : {}),
                        ...(isExtraSmallScreen ? styles.textdefaultextrasmall : {})
                    }}>
                        All-in-one disponíveis na loja
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
                                                        <span style={{color:"black"}}>Processador</span> 
                                                    </Text>
                                                    <img src={arrowabove} width={30} height={30}></img>
                                                </Box>
                                                 <Divider style={{border:0, borderTop:'1px solid rgba(52, 64, 84, 0.3)',width:"100%",marginBottom:"0.5rem"}}/>
                                                 <Box sx={styles.containerfeatures}>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             i5-1235U
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             i5-1135G7
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             i5-1335U
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             i5-12500
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             i7-1255U
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             i7-12700H
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             i7-12700
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             i7-13700
                                                         </Text>
                                                     </Box>
                                                 </Box>     
                                             </Box> 
                                             <Box sx={styles.containermenu}>
                                                <Box sx={styles.titlemenu}>
                                                    <Text style={styles.textdefault2}>
                                                        <span style={{color:"black"}}>Placa Gráfica</span> 
                                                    </Text>
                                                    <img src={arrowabove} width={30} height={30}></img>
                                                </Box>
                                                 <Divider style={{border:0, borderTop:'1px solid rgba(52, 64, 84, 0.3)',width:"100%",marginBottom:"0.5rem"}}/>
                                                 <Box sx={styles.containerfeatures}>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             NVIDIA GeForce RTX 3060
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             NVIDIA GeForce RTX 3060 TI
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             NVIDIA GeForce RTX 3050
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             NVIDIA RTX A500
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             AMD RX 7600
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             AMD RX 6800 XT
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             AMD RX 6700 XT
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             AMD Radeon RX 6500M
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             NVIDIA® GeForce® GTX 1650
                                                         </Text>
                                                     </Box>
                                                 </Box>     
                                             </Box> 
                                             <Box sx={styles.containermenu}>
                                                <Box sx={styles.titlemenu}>
                                                    <Text style={styles.textdefault2}>
                                                        <span style={{color:"black"}}>Memória RAM</span> 
                                                    </Text>
                                                    <img src={arrowabove} width={30} height={30}></img>
                                                </Box>
                                                 <Divider style={{border:0, borderTop:'1px solid rgba(52, 64, 84, 0.3)',width:"100%",marginBottom:"0.5rem"}}/>
                                                 <Box sx={styles.containerfeatures}>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             64 GB
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             32 GB
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             16 GB
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             8 GB
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             4 GB
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             2 GB
                                                         </Text>
                                                     </Box>
                                                 </Box>     
                                             </Box> 
                                             <Box sx={styles.containermenu}>
                                                <Box sx={styles.titlemenu}>
                                                    <Text style={styles.textdefault2}>
                                                        <span style={{color:"black"}}>Marca</span> 
                                                    </Text>
                                                    <img src={arrowabove} width={30} height={30}></img>
                                                </Box>
                                                 <Divider style={{border:0, borderTop:'1px solid rgba(52, 64, 84, 0.3)',width:"100%",marginBottom:"0.5rem"}}/>
                                                 <Box sx={styles.containerfeatures}>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             HP
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             ASUS
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             MSI
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             APPLE
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             RAZER
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             XIAOMI
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             NGS
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             INTEL
                                                         </Text>
                                                     </Box>
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
                                                        <span style={{color:"black"}}>Processador</span> 
                                                    </Text>
                                                    <img src={arrowabove} width={30} height={30}></img>
                                                </Box>
                                                 <Divider style={{border:0, borderTop:'1px solid rgba(52, 64, 84, 0.3)',width:"100%",marginBottom:"0.5rem"}}/>
                                                 <Box sx={styles.containerfeatures}>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             i5-1235U
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             i5-1135G7
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             i5-1335U
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             i5-12500
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             i7-1255U
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             i7-12700H
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             i7-12700
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             i7-13700
                                                         </Text>
                                                     </Box>
                                                 </Box>     
                                             </Box> 
                                             <Box sx={styles.containermenu}>
                                                <Box sx={styles.titlemenu}>
                                                    <Text style={styles.textdefault2}>
                                                        <span style={{color:"black"}}>Placa Gráfica</span> 
                                                    </Text>
                                                    <img src={arrowabove} width={30} height={30}></img>
                                                </Box>
                                                 <Divider style={{border:0, borderTop:'1px solid rgba(52, 64, 84, 0.3)',width:"100%",marginBottom:"0.5rem"}}/>
                                                 <Box sx={styles.containerfeatures}>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             NVIDIA GeForce RTX 3060
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             NVIDIA GeForce RTX 3060 TI
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             NVIDIA GeForce RTX 3050
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             NVIDIA RTX A500
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             AMD RX 7600
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             AMD RX 6800 XT
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             AMD RX 6700 XT
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             AMD Radeon RX 6500M
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             NVIDIA® GeForce® GTX 1650
                                                         </Text>
                                                     </Box>
                                                 </Box>     
                                             </Box> 
                                             <Box sx={styles.containermenu}>
                                                <Box sx={styles.titlemenu}>
                                                    <Text style={styles.textdefault2}>
                                                        <span style={{color:"black"}}>Memória RAM</span> 
                                                    </Text>
                                                    <img src={arrowabove} width={30} height={30}></img>
                                                </Box>
                                                 <Divider style={{border:0, borderTop:'1px solid rgba(52, 64, 84, 0.3)',width:"100%",marginBottom:"0.5rem"}}/>
                                                 <Box sx={styles.containerfeatures}>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             64 GB
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             32 GB
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             16 GB
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             8 GB
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             4 GB
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             2 GB
                                                         </Text>
                                                     </Box>
                                                 </Box>     
                                             </Box> 
                                             <Box sx={styles.containermenu}>
                                                <Box sx={styles.titlemenu}>
                                                    <Text style={styles.textdefault2}>
                                                        <span style={{color:"black"}}>Marca</span> 
                                                    </Text>
                                                    <img src={arrowabove} width={30} height={30}></img>
                                                </Box>
                                                 <Divider style={{border:0, borderTop:'1px solid rgba(52, 64, 84, 0.3)',width:"100%",marginBottom:"0.5rem"}}/>
                                                 <Box sx={styles.containerfeatures}>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             HP
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             ASUS
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             MSI
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             APPLE
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             RAZER
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             XIAOMI
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             NGS
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             INTEL
                                                         </Text>
                                                     </Box>
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
                        <Box sx={styles.viewcontainer}>      
                            <Box sx={styles.containerfeaturesmainproduct}> 
                               {
                                    pageNumber == 1 ? (
                                        <Box sx={styles.containerfeatures}>
                                    <Box sx={styles.containerfeaturesproduts}> 
                                        <img
                                            src={oneallinonefirstpage}
                                            style={{maxWidth:"180px"}}
                                        ></img>
                                    </Box>
                                    <Text style={[styles.textdefault2]}>
                                        COMPUTADOR ALL IN ONE AIO HP - I7 13700T / GTX 1650 4GB / 16GB RAM / 1TB SSD / 27" FULL HD / WINDOWS 11 HOME - PAVILION 27-CA2006NP
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                        NVIDIA GEFORCE 1650
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                        16 GB
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
                                    ):null  
                                 }    
                            </Box>        
                        </Box> 
                        <Box sx={styles.viewcontainer}>      
                            <Box sx={styles.containerfeaturesmainproduct}> 
                                {
                                  pageNumber == 1 ? (
                                    <Box sx={styles.containerfeatures}>
                                    <Box sx={styles.containerfeaturesproduts}> 
                                        <img
                                            src={twoallinonefirstpage}
                                            style={{maxWidth:"180px"}}
                                        ></img>
                                    </Box>
                                    <Text style={[styles.textdefault2]}>
                                        COMPUTADOR ALL IN ONE AIO LENOVO - I5 12450H / 16GB RAM / 512GB SSD / 24" FULL HD / WINDOWS 11 PRO - THINKCENTRE NEO 50A GEN3
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                        16 GB
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                        INTEL I5 12450H
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
                                ):null  
                             } 
                            </Box>        
                        </Box> 
                        <Box sx={styles.viewcontainer}>      
                            <Box sx={styles.containerfeaturesmainproduct}> 
                                {
                                    pageNumber == 1 ? (
                                        <Box sx={styles.containerfeatures}>
                                        <Box sx={styles.containerfeaturesproduts}> 
                                            <img
                                                src={threeallinonefirstpage}
                                                style={{maxWidth:"180px"}}
                                            ></img>
                                        </Box>
                                        <Text style={[styles.textdefault2]}>
                                            COMPUTADOR ALL IN ONE AIO LENOVO - I5 12450H / 8GB RAM / 256GB SSD / 22" / WINDOWS 11 PRO - THINKCENTRE NEO 30A 22 GEN3
                                        </Text>
                                        <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                            INTEL I5-12450H
                                        </Text>
                                        <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                            8 GB
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
                                    ):null  
                                 } 
                            </Box>        
                        </Box> 
                        <Box sx={styles.viewcontainer}>      
                            <Box sx={styles.containerfeaturesmainproduct}> 
                                {
                                     pageNumber == 1 ? (
                                        <Box sx={styles.containerfeatures}>
                                        <Box sx={styles.containerfeaturesproduts}> 
                                        <img
                                            src={fourallinonefirstpage}
                                            style={{maxWidth:"180px"}}
                                        ></img>
                                        </Box>
                                        <Text style={[styles.textdefault2]}>
                                            COMPUTADOR ALL IN ONE AIO DELL - I5 13500T / 16GB RAM / 512GB SSD / 23.8" FULL HD / WINDOWS 11 PRO - OPTIPLEX 7410
                                        </Text>
                                        <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                            INTEL I5-13500T
                                        </Text>
                                        <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                            16 GB
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
                                    ):null  
                                 }  
                            </Box>        
                        </Box> 
                        <Box sx={styles.viewcontainer}>      
                            <Box sx={styles.containerfeaturesmainproduct}> 
                                {
                                   pageNumber == 1 ? (
                                    <Box sx={styles.containerfeatures}>
                                    <Box sx={styles.containerfeaturesproduts}> 
                                    <img
                                        src={fiveallinonefirstpage}
                                        style={{maxWidth:"180px"}}
                                    ></img>
                                    </Box>
                                    <Text style={[styles.textdefault2]}>
                                        COMPUTADOR ALL IN ONE AIO MSI - I5 13400 / 8GB RAM / 256GB SSD / 21.5" FULL HD TOUCH / WEBCAM / WINDOWS 11 PRO - PRO AP222T 13M-043EU
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                        INTEL I5 13400
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                        8 GB
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
                                ):null  
                             }   
                            </Box>        
                        </Box> 
                        <Box sx={styles.viewcontainer}>      
                            <Box sx={styles.containerfeaturesmainproduct}> 
                                {
                                   pageNumber == 1 ? (
                                    <Box sx={styles.containerfeatures}>
                                        <Box sx={styles.containerfeaturesproduts}> 
                                        <img
                                            src={sixallinonefirstpage}
                                            style={{maxWidth:"180px"}}
                                        ></img>
                                    </Box>
                                    <Text style={[styles.textdefault2]}>
                                        COMPUTADOR ALL IN ONE AIO MSI - I5 12400 / 8GB RAM / 512GB SSD / 23.8" FULL HD / WEBCAM / WINDOWS 11 PRO - PRO AP242 12M-430EU
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                        INTEL I5 12400
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                        8 GB
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
                                ):null  
                             }  
                            </Box>        
                        </Box> 
                        <Box sx={styles.viewcontainer}>      
                            <Box sx={styles.containerfeaturesmainproduct}> 
                                {
                                   pageNumber == 1 ? (
                                    <Box sx={styles.containerfeatures}>
                                    <Box sx={styles.containerfeaturesproduts}> 
                                        <img
                                            src={sevenallinonefirstpage}
                                            style={{maxWidth:"180px"}}
                                        ></img>
                                    </Box>
                                    <Text style={[styles.textdefault2]}>
                                        COMPUTADOR ALL IN ONE MSI - I7 1260P / 16GB RAM / 512GB SSD / 27" FULL HD / WINDOWS 11 PRO - MODERN AM272P 12M-013EU
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                        WINDOWS 11 PRO
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                        16 GB
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
                                ):null  
                             }  
                            </Box>        
                        </Box> 
                        <Box sx={styles.viewcontainer}>      
                            <Box sx={styles.containerfeaturesmainproduct}>
                                {
                                   pageNumber == 1 ? (
                                    <Box sx={styles.containerfeatures}>
                                    <Box sx={styles.containerfeaturesproduts}> 
                                    <img
                                        src={eigthallinonefirstpage}
                                        style={{maxWidth:"180px"}}
                                    ></img>
                                    </Box>
                                    <Text style={[styles.textdefault2]}>
                                        COMPUTADOR HP AIO - I3 1125G4 QUAD CORE / 8GB RAM / 512GB SSD / 24" FULL HD - ALL-IN-ONE 24-DP1007NP
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                        INTEL I3 1125G4
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                        8 GB
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
                                ):null  
                             }   
                            </Box>        
                        </Box> 
                        <Box sx={styles.viewcontainer}>      
                            <Box sx={styles.containerfeaturesmainproduct}> 
                            {
                               pageNumber == 1 ? (
                                <Box sx={styles.containerfeatures}>
                                <Box sx={styles.containerfeaturesproduts}> 
                                    <img
                                        src={nineallinonefirstpage}
                                        style={{maxWidth:"180px"}}
                                    ></img>
                                </Box>
                                <Text style={[styles.textdefault2]}>
                                    COMPUTADOR AIO ASUS COMMERCIAL E5402WHAK I5 11500B HEXA CORE / 8GB RAM / 512GB SSD / 23.8" FULL HD / INTEL UHD GRAPHICS 
                                </Text>
                                <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                    INTEL I5 11500B
                                </Text>
                                <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                    8 GB
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
                            ):null  
                         }    
                            </Box>        
                        </Box> 
                        <Box sx={styles.viewcontainer}>      
                            <Box sx={styles.containerfeaturesmainproduct}> 
                            {
                               pageNumber == 1 ? (
                                <Box sx={styles.containerfeatures}>
                                <Box sx={styles.containerfeaturesproduts}> 
                                    <img
                                        src={tenallinonefirstpage}
                                        style={{maxWidth:"180px"}}
                                    ></img>
                                </Box>
                                <Text style={[styles.textdefault2]}>
                                    AIO VERITON EZ2740 23.8P FHD I3-1115G4 8GB 256GB SSD W11P
                                </Text>
                                <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                    INTEL I3-1115G4
                                </Text>
                                <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                    8 GB
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
                            ):null  
                         }    
                            </Box>        
                        </Box> 
                        <Box sx={styles.viewcontainer}>      
                            <Box sx={styles.containerfeaturesmainproduct}> 
                            {
                               pageNumber == 1 ? (
                                <Box sx={styles.containerfeatures}>
                                <Box sx={styles.containerfeaturesproduts}> 
                                    <img
                                        src={elevenallinonefirstpage}
                                        style={{maxWidth:"180px"}}
                                    ></img>
                                </Box>
                                <Text style={[styles.textdefault2]}>
                                    COMPUTADOR AIO ASUS ZENBOOK AIO A5401WRAK RYZEN 7 5825U / 16GB RAM / 512GB SSD / 23.8" FULL HD / WINDOWS 11 HOME
                                </Text>
                                <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                    WINDOWS 11 HOME
                                </Text>
                                <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                    16 GB
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
                            ):null  
                         }    
                            </Box>        
                        </Box> 
                        <Box sx={styles.viewcontainer}>      
                            <Box sx={styles.containerfeaturesmainproduct}> 
                            {
                               pageNumber == 1 ? (
                                <Box sx={styles.containerfeatures}>
                                <Box sx={styles.containerfeaturesproduts}> 
                                    <img
                                        src={twelveallinonefirstpage}
                                        style={{maxWidth:"180px"}}
                                    ></img>
                                </Box>
                                <Text style={[styles.textdefault2]}>
                                    APPLE IMAC 24" RETINA 4,5K - APPLE M1 8 CORES CPU / 7 CORES GPU / 16GB RAM / 256GB SSD / RATO MAGIC MOUSE E TECLADO - AZUL 
                                </Text>
                                <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                    APPLE M1 8 CORES
                                </Text>
                                <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                    16 GB
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
                            ):null  
                         }    
                            </Box>        
                        </Box> 
                        <Box sx={styles.pages}>
                            <Box sx={styles.pagesflex}>
                                <Box>
                                    <Link to="/allinone?page=1" id='aheader' >
                                        1   &nbsp; 
                                    </Link>
                                    <Text>
                                        | 
                                    </Text>
                                </Box>
                                <Box>
                                    <Link  to="/allinone?page=2" id='aheader' >
                                        2  &nbsp; 
                                    </Link>
                                    <Text>
                                        | 
                                    </Text>
                                </Box>
                                <Box>
                                    <Link  to="/allinone?page=3" id='aheader' >
                                        3   &nbsp; 
                                    </Link>
                                    <Text>
                                        | 
                                    </Text>
                                </Box>
                                <Box>
                                    <Link to="/allinone?page=4" id='aheader' >
                                        4   &nbsp; 
                                    </Link>
                                    <Text>
                                        | 
                                    </Text>
                                </Box>
                                <Box>
                                    <Link to="/allinone?page=5" id='aheader' >
                                        5  &nbsp; 
                                    </Link>
                                    <Text>
                                        | 
                                    </Text>
                                </Box>
                                <Box>
                                    <Link  to="/allinone?page=6" id='aheader' >
                                        6   &nbsp; 
                                    </Link>
                                    <Text>
                                        | 
                                    </Text>
                                </Box>
                                <Box>
                                    <Link  to="/allinone?page=7" id='aheader' >
                                        7   &nbsp; 
                                    </Link>
                                    <Text>
                                        | 
                                    </Text>
                                </Box>
                                <Link  to={`/allinone?page=${parseInt(pageNumber, 10) + 1}`} id='aheader' >
                                    <img src={arrowright} height={10}></img>
                                    <img src={arrowright} height={10}></img>
                                </Link>
                               
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