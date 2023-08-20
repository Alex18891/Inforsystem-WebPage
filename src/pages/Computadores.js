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
import arrowabove from "./../img/arrowabove.png"

export default function Computadores() {
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
                        <Text  style={{fontSize: "20px",zIndex:-1}}>Computadores</Text>   
                        </Box>
                    </Box>     
                    <Text style={{
                        ...styles.textdefault3,
                        ...(isSmallScreen ? styles.textdefault3small : {}),
                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                    }}>
                        <span style={{fontWeight:"bold"}}>Computadores</span>
                    </Text>
                    <Text style={{
                        ...styles.textdefault,
                        maxWidth: "1800px",
                        ...(isSmallScreen ? styles.textdefaultsmall : {}),
                        ...(isExtraSmallScreen ? styles.textdefaultextrasmall : {})
                    }}>
                        Veja os computadores disponíveis na loja
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
                                                        <span style={{color:"black"}}>Tipo</span> 
                                                    </Text>
                                                    <img src={arrowabove} width={30} height={30}></img>
                                                </Box>
                                                 <Divider style={{border:0, borderTop:'1px solid rgba(52, 64, 84, 0.3)',width:"100%",marginBottom:"0.5rem"}}/>
                                                 <Box sx={styles.containerfeatures}>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             Portáteis
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             Mac
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             Computadores Gaming
                                                         </Text>
                                                     </Box>   
                                                 </Box>     
                                             </Box> 
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
                                                        <span style={{color:"black"}}>Tipo</span> 
                                                    </Text>
                                                    <img src={arrowabove} width={30} height={30}></img>
                                                 </Box>
                                                 <Divider style={{border:0, borderTop:'1px solid rgba(52, 64, 84, 0.3)',width:"100%",marginBottom:"0.5rem"}}/>
                                                 <Box sx={styles.containerfeatures}>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             Portáteis
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             Mac
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             Computadores Gaming
                                                         </Text>
                                                     </Box>   
                                                 </Box>     
                                        </Box> 
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
                                            src={firstpc}
                                            style={{maxWidth:"180px"}}
                                        ></img>
                                    </Box>
                                    <Text style={[styles.textdefault2]}>
                                    PORTÁTIL GAMING VICTUS HP - I5 12450H / RTX 3050 4GB / 16GB RAM / 512GB SSD / 15.6" FULL HD IPS / 144HZ / S/SO - 15-FA0023NP
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                        NVIDIA GeForce RTX 3050
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                    INTEL I5 12500H
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
                                    ):pageNumber ==2 ?(
                                        <Box sx={styles.containerfeatures}>
                                        <Box sx={styles.containerfeaturesproduts}> 
                                            <img
                                                src={firstpcsecondpage}
                                                style={{maxWidth:"180px"}}
                                            ></img>
                                        </Box>
                                        <Text style={[styles.textdefault2]}>
                                        THINKPAD L15 G4, INTEL CORE™ I5-1335U, 15.6" 1920 X 1080 NON-TOUCH, WINDOWS 11 PRO 64, 16.0GB, 1X512GB SSD M.2 2242 PCIE GEN4 TLC OPAL, INTEL IRIS XE GRAPHICS, BT 5.1
                                        </Text>
                                        <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                            Windows 11 Pro
                                        </Text>
                                        <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                            INTEL I5 1335U
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
                                    pageNumber == 1 ?(
                                        <Box sx={styles.containerfeatures}>
                                        <Box sx={styles.containerfeaturesproduts}> 
                                            <img
                                                src={secondpc}
                                                style={{maxWidth:"180px"}}
                                            ></img>
                                        </Box>
                                        <Text style={[styles.textdefault2]}>
                                            COMPUTADOR DESKTOP HP VICTUS 15L - AMD RYZEN 5 5600G / RTX 3060 TI 8GB / 16GB RAM / 512GB SSD / S/SO - TG02-0018NP
                                        </Text>
                                        <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                            NVIDIA GeForce RTX 3060 TI
                                        </Text>
                                        <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                            AMD RYZEN 5 5600G
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
                                    ):pageNumber ==2 ?(
                                            <Box sx={styles.containerfeatures}>
                                            <Box sx={styles.containerfeaturesproduts}> 
                                                <img
                                                    src={secondpcsecondpage}
                                                    style={{maxWidth:"180px"}}
                                                ></img>
                                            </Box>
                                            <Text style={[styles.textdefault2]}>
                                                PORTÁTIL HP ZBOOK STUDIO G10 16\"WUXGA 500NITS I7-13800H 32GB(2X16GB)DDR5 1TBPCIE RTX A2000 8GB W11P64 3YR
                                            </Text>
                                            <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                                32 GB
                                            </Text>
                                            <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                                Windows 11 Pro
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
                                    pageNumber == 1 ?(
                                        <Box sx={styles.containerfeatures}>
                                            <Box sx={styles.containerfeaturesproduts}> 
                                                <img
                                                    src={thirdpc}
                                                    style={{maxWidth:"180px"}}
                                                ></img>
                                            </Box>
                                            <Text style={[styles.textdefault2]}>
                                                PORTÁTIL NOTEBOOK HP - AMD RYZEN 7 5700U / 12GB RAM / 256GB SSD / 15.6" FULL HD - 15S-EQ2052NP
                                            </Text>
                                            <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                                AMD RYZEN 7 5700U
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
                                    ):pageNumber ==2 ?(
                                            <Box sx={styles.containerfeatures}>
                                            <Box sx={styles.containerfeaturesproduts}> 
                                                <img
                                                    src={thirdpcsecondpage}
                                                    style={{maxWidth:"180px"}}
                                                ></img>
                                            </Box>
                                            <Text style={[styles.textdefault2]}>
                                                DESKTOP TSUNAMI AROA DH11 I7-11700 / 16GB RAM / 512GB SSD / DVDRW / SEM SISTEMA OPERATIVO
                                            </Text>
                                            <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                                16 GB
                                            </Text>
                                            <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                                INTEL I7 11700
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
                                    pageNumber == 1 ?(
                                        <Box sx={styles.containerfeatures}>
                                            <Box sx={styles.containerfeaturesproduts}> 
                                                <img
                                                    src={fourthpc}
                                                    style={{maxWidth:"180px"}}
                                                ></img>
                                            </Box>
                                            <Text style={[styles.textdefault2]}>
                                                PORTÁTIL LENOVO - AMD RYZEN 7 5700U / 8GB RAM / 512GB SSD / 15.6" FULL HD / SEM SISTEMA OPERATIVO - IDEAPAD 3 15ALC6-913
                                            </Text>
                                            <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                                8 GB
                                            </Text>
                                            <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                                AMD RYZEN 7 5700U
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
                                    ):pageNumber ==2 ?(
                                            <Box sx={styles.containerfeatures}>
                                            <Box sx={styles.containerfeaturesproduts}> 
                                                <img
                                                    src={fourthpcsecondpage}
                                                    style={{maxWidth:"180px"}}
                                                ></img>
                                            </Box>
                                            <Text style={[styles.textdefault2]}>
                                                PORTÁTIL HP - I5 1335U / 16GB RAM / 512GB SSD / 14" / WINDOWS 11 PRO - ELITEBOOK 840 G10
                                            </Text>
                                            <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                                Windows 11 Pro
                                            </Text>
                                            <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                                INTEL I5 1335U
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
                                    pageNumber == 1 ?(
                                        <Box sx={styles.containerfeatures}>
                                            <Box sx={styles.containerfeaturesproduts}> 
                                                <img
                                                    src={fifthpc}
                                                    style={{maxWidth:"180px"}}
                                                ></img>
                                            </Box>
                                            <Text style={[styles.textdefault2]}>
                                                PORTÁTIL ASUS TUF GAMING A15 - AMD RYZEN 7 5800H / 8GB RAM / 512GB SSD / 15.6" FULL HD / RTX 3060 6GB / S S/O - FA506QM-R75B36PS1
                                            </Text>
                                            <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                                NVIDIA GeForce RTX 3060 6GB
                                            </Text>
                                            <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                                8GB RAM
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
                                    ):pageNumber ==2 ?(
                                            <Box sx={styles.containerfeatures}>
                                            <Box sx={styles.containerfeaturesproduts}> 
                                                <img
                                                    src={fifthpcsecondpage}
                                                    style={{maxWidth:"180px"}}
                                                ></img>
                                            </Box>
                                            <Text style={[styles.textdefault2]}>
                                                PORTÁTIL LENOVO - I7 1360P / 16GB RAM / 1TB SSD / 14" 4K / WINDOWS 11 HOME - YOGA 9 14IRP8-528
                                            </Text>
                                            <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                                16 GB
                                            </Text>
                                            <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                                INTEL I7 1360
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
                                    pageNumber == 1 ?(
                                        <Box sx={styles.containerfeatures}>
                                            <Box sx={styles.containerfeaturesproduts}> 
                                                <img
                                                    src={sixthpc}
                                                    style={{maxWidth:"180px"}}
                                                ></img>
                                            </Box>
                                            <Text style={[styles.textdefault2]}>
                                                PORTÁTIL LENOVO - AMD RYZEN 7 5800H / RTX 3060 6GB / 16GB RAM / 1TB SSD / 15.6" IPS FHD 165 HZ / S S/O - LEGION 5 15ACH6-276
                                            </Text>
                                            <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                                AMD RYZEN 7 5800H
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
                                    ):pageNumber ==2 ?(
                                        <Box sx={styles.containerfeatures}>
                                            <Box sx={styles.containerfeaturesproduts}> 
                                                <img
                                                    src={sixthpcsecondpage}
                                                    style={{maxWidth:"180px"}}
                                                ></img>
                                            </Box>
                                            <Text style={[styles.textdefault2]}>
                                                COMPUTADOR PORTÁTIL ASUS - I7 1165G7 / 16GB RAM / 512GB SSD / 14" FULL HD / WINDOWS 11 PRO - ZENBOOK UX425EA-71BLHDCP2
                                            </Text>
                                            <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                                Windows 11 Pro
                                            </Text>
                                            <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                                INTEL I7 1165G7
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
                                    pageNumber == 1 ?(
                                        <Box sx={styles.containerfeatures}>
                                            <Box sx={styles.containerfeaturesproduts}> 
                                                <img
                                                    src={seventhpc}
                                                    style={{maxWidth:"180px"}}
                                                ></img>
                                            </Box>
                                            <Text style={[styles.textdefault2]}>
                                            COMPUTADOR GAMING - AMD RYZEN 5 5500 / RTX 3060 TI 8GB / 16GB RAM / 500GB SSD / WINDOWS 11 HOME - CHIP7 AURORA V40
                                            </Text>
                                            <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                                NVIDIA GeForce RTX 3060 TI
                                            </Text>
                                            <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                                WINDOWS 11 HOME
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
                                    ):pageNumber ==2 ?(
                                            <Box sx={styles.containerfeatures}>
                                            <Box sx={styles.containerfeaturesproduts}> 
                                                <img
                                                    src={seventhpcsecondpage}
                                                    style={{maxWidth:"180px"}}
                                                ></img>
                                            </Box>
                                            <Text style={[styles.textdefault2]}>
                                                COMPUTADOR PORTÁTIL ASUS F515EA-71BLHDSS1 I7 1165G7 / 8GB RAM / 512GB SSD / 15.6" IPS FULL HD / IRIS XE GRAPHICS / SEM SISTEMA OPERATIVO
                                            </Text>
                                            <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                                8 GB
                                            </Text>
                                            <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                                INTEL I7 1165G7
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
                                                    src={eighthpc}
                                                    style={{maxWidth:"180px"}}
                                                ></img>
                                            </Box>
                                            <Text style={[styles.textdefault2]}>
                                                COMPUTADOR GAMING - AMD RYZEN 5 3600 HEXA CORE / RTX 3060 12GB / 1TB SSD / 16GB RAM - CHIP7 ORION V2
                                            </Text>
                                            <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                                NVIDIA GeForce RTX 3060
                                            </Text>
                                            <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                                AMD RYZEN 5 3600
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
                                    ):pageNumber ==2 ?(
                                            <Box sx={styles.containerfeatures}>
                                            <Box sx={styles.containerfeaturesproduts}> 
                                                <img
                                                    src={eighthpcsecondpage}
                                                    style={{maxWidth:"180px"}}
                                                ></img>
                                            </Box>
                                            <Text style={[styles.textdefault2]}>
                                                PORTÁTIL ASUS VIVOBOOK PRO OLED K3500PH-51B15AS1 - INTEL CORE I5 11300H / 8GB RAM / 512GB SSD / 15.6" / GTX 1650 MAX Q
                                            </Text>
                                            <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                                NVIDIA GeForce GTX 1650
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
                                    pageNumber == 1 ?(
                                        <Box sx={styles.containerfeatures}>
                                            <Box sx={styles.containerfeaturesproduts}> 
                                                <img
                                                    src={ninethpc}
                                                    style={{maxWidth:"180px"}}
                                                ></img>
                                            </Box>
                                            <Text style={[styles.textdefault2]}>
                                                PORTÁTIL ASUS - AMD RYZEN 5 5625U / 8GB RAM / 512GB SSD / 14" / WINDOWS 11 HOME - ZENBOOK UM3402YA-R55BLHDPB1
                                            </Text>
                                            <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                                AMD RYZEN 5 5625U
                                            </Text>
                                            <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                                Windows 11 Home
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
                                    ):pageNumber ==2 ?(
                                            <Box sx={styles.containerfeatures}>
                                            <Box sx={styles.containerfeaturesproduts}> 
                                                <img
                                                    src={ninethpcsecondpage}
                                                    style={{maxWidth:"180px"}}
                                                ></img>
                                            </Box>
                                            <Text style={[styles.textdefault2]}>
                                                COMPUTADOR DESKTOP PRIMUX - AMD RYZEN 5 5600X / RTX 3050 8GB / 16GB RAM / 500GB SSD / WINDOWS 11 HOME - LYNX
                                            </Text>
                                            <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                                AMD Ryzen 5
                                            </Text>
                                            <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                                NVIDIA Geforce RTX 3050
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
                                                    src={tenthpc}
                                                    style={{maxWidth:"180px"}}
                                                ></img>
                                            </Box>
                                            <Text style={[styles.textdefault2]}>
                                                COMPUTADOR GAMING - AMD RYZEN 5 3600 / GTX 1650 4GB / 16GB RAM / 1TB SSD - CHIP7 SHARK V6
                                            </Text>
                                            <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                                NVIDIA GeForce GTX 1650
                                            </Text>
                                            <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                                AMD RYZEN 5 3600
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
                                    ):pageNumber ==2 ?(
                                        <Box sx={styles.containerfeatures}>
                                        <Box sx={styles.containerfeaturesproduts}> 
                                            <img
                                                src={tenthpcsecondpage}
                                                style={{maxWidth:"180px"}}
                                            ></img>
                                        </Box>
                                        <Text style={[styles.textdefault2]}>
                                            COMPUTADOR GAMING - AMD RYZEN 5 3600 / GTX 1650 4GB / 16GB RAM / 1TB SSD - CHIP7 SHARK V6
                                        </Text>
                                        <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                            8 GB
                                        </Text>
                                        <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                            INTEL I7-1165G7
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
                                    pageNumber == 1 ?( 
                                        <Box sx={styles.containerfeatures}>
                                        <Box sx={styles.containerfeaturesproduts}> 
                                            <img
                                                src={eleventhpc}
                                                style={{maxWidth:"180px"}}
                                            ></img>
                                        </Box>
                                        <Text style={[styles.textdefault2]}>
                                            COMPUTADOR GAMING - AMD RYZEN 7 5700X / AMD RX 6800 XT 16GB / 32GB RAM / 1TB SSD - CHIP7 PEGASUS V21
                                        </Text>
                                        <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                            AMD RX 6800 XT
                                        </Text>
                                        <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                            AMD RYZEN 7 5700X
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
                                    ):pageNumber ==2 ?(
                                            <Box sx={styles.containerfeatures}>
                                            <Box sx={styles.containerfeaturesproduts}> 
                                                <img
                                                    src={eleventhpcsecondpage}
                                                    style={{maxWidth:"180px"}}
                                                ></img>
                                            </Box>
                                            <Text style={[styles.textdefault2]}>
                                                PORTÁTIL ASUS - I7 1355U / 16GB RAM / 1TB SSD / 13.3" OLED / WINDOWS 11 HOME - ZENBOOK S 13 90NB0Z92-M00HD0
                                            </Text>
                                            <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                                Windows 11 Home
                                            </Text>
                                            <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                                INTEL I7 1355U
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
                                                src={twelfthpc}
                                                style={{maxWidth:"180px"}}
                                            ></img>
                                        </Box>
                                        <Text style={[styles.textdefault2]}>
                                            PORTÁTIL HP ZBOOK FIREFLY G10 - AMD RYZEN 7 PRO 7840HS, 32 GB DDR5, 1 TB SSD, ECRÃ WQXGA 14", WINDOWS 11 PRO
                                        </Text>
                                        <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                            32 GB
                                        </Text>
                                        <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                            Windows 11 Home
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
                                ):pageNumber ==2 ?(
                                        <Box sx={styles.containerfeatures}>
                                        <Box sx={styles.containerfeaturesproduts}> 
                                            <img
                                                src={twelfthpcsecondpage}
                                                style={{maxWidth:"180px"}}
                                            ></img>
                                        </Box>
                                        <Text style={[styles.textdefault2]}>
                                            PORTÁTIL HP ZBOOK FIREFLY G10 - AMD RYZEN 7 PRO 7840HS, 32 GB DDR5, 1 TB SSD, ECRÃ WQXGA 14", WINDOWS 11 PRO
                                        </Text>
                                        <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                            32 GB
                                        </Text>
                                        <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                            Windows 11 Home
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
                                    <Link to="/computadores?page=1" id='aheader' >
                                        1   &nbsp; 
                                    </Link>
                                    <Text>
                                        | 
                                    </Text>
                                </Box>
                                <Box>
                                    <Link  to="/computadores?page=2" id='aheader' >
                                        2  &nbsp; 
                                    </Link>
                                    <Text>
                                        | 
                                    </Text>
                                </Box>
                                <Box>
                                    <Link  to="/computadores?page=3" id='aheader' >
                                        3   &nbsp; 
                                    </Link>
                                    <Text>
                                        | 
                                    </Text>
                                </Box>
                                <Box>
                                    <Link to="/computadores?page=4" id='aheader' >
                                        4   &nbsp; 
                                    </Link>
                                    <Text>
                                        | 
                                    </Text>
                                </Box>
                                <Box>
                                    <Link to="/computadores?page=5" id='aheader' >
                                        5  &nbsp; 
                                    </Link>
                                    <Text>
                                        | 
                                    </Text>
                                </Box>
                                <Box>
                                    <Link  to="/computadores?page=6" id='aheader' >
                                        6   &nbsp; 
                                    </Link>
                                    <Text>
                                        | 
                                    </Text>
                                </Box>
                                <Box>
                                    <Link  to="/computadores?page=7" id='aheader' >
                                        7   &nbsp; 
                                    </Link>
                                    <Text>
                                        | 
                                    </Text>
                                </Box>
                                <Box >
                                    <img src={arrowright} height={10}></img>
                                    <img src={arrowright} height={10}></img>
                                </Box>
                               
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