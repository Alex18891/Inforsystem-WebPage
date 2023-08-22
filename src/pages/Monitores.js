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

import onemonitorfirstpage from "./../img/onemonitorfirstpage.png";
import twomonitorfirstpage from "./../img/twomonitorfirstpage.png";
import threemonitorfirstpage from "./../img/threemonitorfirstpage.png";
import fourmonitorfirstpage from "./../img/fourmonitorfirstpage.png";
import fivemonitorfirstpage from "./../img/fivemonitorfirstpage.png";
import sixmonitorfirstpage from "./../img/sixmonitorfirstpage.png";
import sevenmonitorfirstpage from "./../img/sevenmonitorfirstpage.png";
import eigthmonitorfirstpage from "./../img/eigthmonitorfirstpage.png";
import ninemonitorfirstpage from "./../img/ninemonitorfirstpage.png";
import tenmonitorfirstpage from "./../img/tenmonitorfirstpage.png";
import elevenmonitorfirstpage from "./../img/elevenmonitorfirstpage.png";
import twelvemonitorfirstpage from "./../img/twelvemonitorfirstpage.png";


import disponivel from "./../img/disponivel.png"
import arrowright from "./../img/arrowright.png"
import arrowabove from "./../img/arrowabove.png"

export default function Monitores() {
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
                        <Text  style={{fontSize: "20px",zIndex:-1}}>Monitores</Text>   
                        </Box>
                    </Box>     
                    <Text style={{
                        ...styles.textdefault3,
                        ...(isSmallScreen ? styles.textdefault3small : {}),
                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                    }}>
                        <span style={{fontWeight:"bold"}}>Monitores</span>
                    </Text>
                    <Text style={{
                        ...styles.textdefault,
                        maxWidth: "1800px",
                        ...(isSmallScreen ? styles.textdefaultsmall : {}),
                        ...(isExtraSmallScreen ? styles.textdefaultextrasmall : {})
                    }}>
                        Veja os monitores disponíveis na loja
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
                                                        <span style={{color:"black"}}>Taxa máxima de atualização</span> 
                                                    </Text>
                                                    <img src={arrowabove} width={30} height={30}></img>
                                                </Box>
                                                 <Divider style={{border:0, borderTop:'1px solid rgba(52, 64, 84, 0.3)',width:"100%",marginBottom:"0.5rem"}}/>
                                                 <Box sx={styles.containerfeatures}>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             60 Hz
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                            120 Hz
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             144 Hz
                                                         </Text>
                                                     </Box>  
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             165 Hz
                                                         </Text>
                                                     </Box>  
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             240 Hz
                                                         </Text>
                                                     </Box>  
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             300 Hz
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
                                                             ASUS
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                            LG
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             SAMSUNG
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             PHILIPS
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             AOC
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                            ACER
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             DELL
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
                                                        <span style={{color:"black"}}>Taxa máxima de atualização</span> 
                                                    </Text>
                                                    <img src={arrowabove} width={30} height={30}></img>
                                                </Box>
                                                 <Divider style={{border:0, borderTop:'1px solid rgba(52, 64, 84, 0.3)',width:"100%",marginBottom:"0.5rem"}}/>
                                                 <Box sx={styles.containerfeatures}>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             60 Hz
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                            120 Hz
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             144 Hz
                                                         </Text>
                                                     </Box>  
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             165 Hz
                                                         </Text>
                                                     </Box>  
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             240 Hz
                                                         </Text>
                                                     </Box>  
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             300 Hz
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
                                                             ASUS
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                            LG
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             SAMSUNG
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             PHILIPS
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             AOC
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                            ACER
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             DELL
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
                                            src={onemonitorfirstpage}
                                            style={{maxWidth:"180px"}}
                                        ></img>
                                    </Box>
                                    <Text style={[styles.textdefault2]}>
                                        MONITOR ASUS - 23.8" FULL HD IPS / 144HZ / 1MS / AMD FREESYNC / DESIGN ERGONÓMICO / PIVOT - TUF GAMING VG249Q
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                        1920 x 1080
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                        144 Hz
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
                                            src={twomonitorfirstpage}
                                            style={{maxWidth:"180px"}}
                                        ></img>
                                    </Box>
                                    <Text style={[styles.textdefault2]}>
                                        MONITOR PHILIPS - 23.8" FULL HD VA / 144HZ / 1MS / AMD FREESYNC PREMIUM - 242E1GAJ/00
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                        60.5 cm
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                        144 Hz
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
                                                src={threemonitorfirstpage}
                                                style={{maxWidth:"180px"}}
                                            ></img>
                                        </Box>
                                        <Text style={[styles.textdefault2]}>
                                            MONITOR GAMING LG ULTRAGEAR - 24" FULL HD VA / 165HZ / 1MS / AMD FREESYNC PREMIUM - 24GQ50F-B
                                        </Text>
                                        <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                            165 Hz
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
                                            src={fourmonitorfirstpage}
                                            style={{maxWidth:"180px"}}
                                        ></img>
                                        </Box>
                                        <Text style={[styles.textdefault2]}>
                                            MONITOR AOC - 32" FULL HD CURVO VA / 240HZ / 1MS / HDMI DP - C32G2ZE/BK
                                        </Text>
                                        <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                            240 Hz
                                        </Text>
                                        <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                            80 cm
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
                                        src={fivemonitorfirstpage}
                                        style={{maxWidth:"180px"}}
                                    ></img>
                                    </Box>
                                    <Text style={[styles.textdefault2]}>
                                        MONITOR PORTÁTIL LENOVO L15 IPS 15.6" FHD 16:9 60HZ
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                        39.6 cm
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                        60 Hz
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
                                            src={sixmonitorfirstpage}
                                            style={{maxWidth:"180px"}}
                                        ></img>
                                    </Box>
                                    <Text style={[styles.textdefault2]}>
                                        SAMSUNG MONITOR ODYSSEY LED 32"4K ULTRA HD 3840X2160 PIXELS #PROMO EOL 31-07#
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                        81.3 cm
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                        165 Hz
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
                                            src={sevenmonitorfirstpage}
                                            style={{maxWidth:"180px"}}
                                        ></img>
                                    </Box>
                                    <Text style={[styles.textdefault2]}>
                                        MONITOR LENOVO THINKVISION T27I-10 | 27" | 1920X1080 | 16:9 | IPS | HDMI | DP | VGA | 250 NITS | 187X455X715 MM | USB 3.0X4 | 3-YEAR
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                        68.6 cm
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                        1920 x 1080
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
                                        src={eigthmonitorfirstpage}
                                        style={{maxWidth:"180px"}}
                                    ></img>
                                    </Box>
                                    <Text style={[styles.textdefault2]}>
                                        MONITOR ASROCK - 27" 2K QUAD HD CURVO VA / 165HZ / 1MS / HAS - PG27Q15R2A
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                        68.6 cm
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                        165 Hz
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
                                        src={ninemonitorfirstpage}
                                        style={{maxWidth:"180px"}}
                                    ></img>
                                </Box>
                                <Text style={[styles.textdefault2]}>
                                    MONITOR DELL P2722H IPS 27" FHD 16:9 60HZ
                                </Text>
                                <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                    60 Hz
                                </Text>
                                <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                    1920 x 1080
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
                                        src={tenmonitorfirstpage}
                                        style={{maxWidth:"180px"}}
                                    ></img>
                                </Box>
                                <Text style={[styles.textdefault2]}>
                                    MONITOR SMART SPC - 24" FULL HD / ANDROID TV / 2X USB 2.0 2X HDMI 1.4 - PRETO
                                </Text>
                                <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                    60 Hz
                                </Text>
                                <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                 60.5 cm
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
                                        src={elevenmonitorfirstpage}
                                        style={{maxWidth:"180px"}}
                                    ></img>
                                </Box>
                                <Text style={[styles.textdefault2]}>
                                    MONITOR BENQ ZOWIE 24.5" XL2540K TN FHD 240HZ 1MS
                                </Text>
                                <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                    1920 x 1080
                                </Text>
                                <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                    240 Hz
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
                                        src={twelvemonitorfirstpage}
                                        style={{maxWidth:"180px"}}
                                    ></img>
                                </Box>
                                <Text style={[styles.textdefault2]}>
                                    THINKCENTRE TIO22GEN4 21.5-INCH WLED FHD- MONITOR 
                                </Text>
                                <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                    60 Hz
                                </Text>
                                <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                    54.6 cm
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
                                    <Link to="/monitores?page=1" id='aheader' >
                                        1   &nbsp; 
                                    </Link>
                                    <Text>
                                        | 
                                    </Text>
                                </Box>
                                <Box>
                                    <Link  to="/monitores?page=2" id='aheader' >
                                        2  &nbsp; 
                                    </Link>
                                    <Text>
                                        | 
                                    </Text>
                                </Box>
                                <Box>
                                    <Link  to="/monitores?page=3" id='aheader' >
                                        3   &nbsp; 
                                    </Link>
                                    <Text>
                                        | 
                                    </Text>
                                </Box>
                                <Box>
                                    <Link to="/monitores?page=4" id='aheader' >
                                        4   &nbsp; 
                                    </Link>
                                    <Text>
                                        | 
                                    </Text>
                                </Box>
                                <Box>
                                    <Link to="/monitores?page=5" id='aheader' >
                                        5  &nbsp; 
                                    </Link>
                                    <Text>
                                        | 
                                    </Text>
                                </Box>
                                <Box>
                                    <Link  to="/monitores?page=6" id='aheader' >
                                        6   &nbsp; 
                                    </Link>
                                    <Text>
                                        | 
                                    </Text>
                                </Box>
                                <Box>
                                    <Link  to="/monitores?page=7" id='aheader' >
                                        7   &nbsp; 
                                    </Link>
                                    <Text>
                                        | 
                                    </Text>
                                </Box>
                                <Link  to={`/monitores?page=${parseInt(pageNumber, 10) + 1}`} id='aheader' >
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