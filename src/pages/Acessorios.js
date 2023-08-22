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

import oneaccessory from "./../img/oneaccessory.png";
import secondaccessory from "./../img/secondaccessory.png";
import thirdaccessory from "./../img/thirdaccessory.png";
import fouraccessory from "./../img/fouraccessory.png";
import fiveaccessory from "./../img/fiveaccessory.png";
import sixaccessory from "./../img/sixaccessory.png";
import sevenaccessory from "./../img/sevenaccessory.png";
import eigthaccessory from "./../img/eigthaccessory.png";
import nineaccessory from "./../img/nineaccessory.png";
import tenaccessory from "./../img/tenaccessory.png";
import elevenaccessory from "./../img/elevenaccessory.png";
import twelveaccessory from "./../img/twelveaccessory.png";


import disponivel from "./../img/disponivel.png"
import arrowright from "./../img/arrowright.png"
import arrowabove from "./../img/arrowabove.png"

export default function Acessorios() {
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
                        <Text  style={{fontSize: "20px",zIndex:-1}}>Acessórios</Text>   
                        </Box>
                    </Box>     
                    <Text style={{
                        ...styles.textdefault3,
                        ...(isSmallScreen ? styles.textdefault3small : {}),
                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                    }}>
                        <span style={{fontWeight:"bold"}}>Acessórios</span>
                    </Text>
                    <Text style={{
                        ...styles.textdefault,
                        maxWidth: "1800px",
                        ...(isSmallScreen ? styles.textdefaultsmall : {}),
                        ...(isExtraSmallScreen ? styles.textdefaultextrasmall : {})
                    }}>
                        Veja os acessórios disponíveis na loja
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
                                                        <span style={{color:"black"}}>Tipos</span> 
                                                    </Text>
                                                    <img src={arrowabove} width={30} height={30}></img>
                                                </Box>
                                                 <Divider style={{border:0, borderTop:'1px solid rgba(52, 64, 84, 0.3)',width:"100%",marginBottom:"0.5rem"}}/>
                                                 <Box sx={styles.containerfeatures}>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             Teclados
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                            Ratos
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             Headsets
                                                         </Text>
                                                     </Box>  
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             Gamepads
                                                         </Text>
                                                     </Box>  
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             Webcams
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
                                                             LOGITECH
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             MICROSOFT
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             HYPER X
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
                                                             MSI
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
                                                             NACON
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
                                                        <span style={{color:"black"}}>Tipos</span> 
                                                    </Text>
                                                    <img src={arrowabove} width={30} height={30}></img>
                                                </Box>
                                                 <Divider style={{border:0, borderTop:'1px solid rgba(52, 64, 84, 0.3)',width:"100%",marginBottom:"0.5rem"}}/>
                                                 <Box sx={styles.containerfeatures}>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             Teclados
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                            Ratos
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             Headsets
                                                         </Text>
                                                     </Box>  
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             Gamepads
                                                         </Text>
                                                     </Box>  
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             Webcams
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
                                                             LOGITECH
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             MICROSOFT
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             HYPER X
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
                                                             MSI
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
                                                             NACON
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
                                            src={oneaccessory}
                                            style={{maxWidth:"180px"}}
                                        ></img>
                                    </Box>
                                    <Text style={[styles.textdefault2]}>
                                        HP 150 WIRED MOUSE/KB COMBO
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
                                            src={secondaccessory}
                                            style={{maxWidth:"180px"}}
                                        ></img>
                                    </Box>
                                    <Text style={[styles.textdefault2]}>
                                        RATO GAMING HYPERX PULSEFIRE HASTE PRETO
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
                                                src={thirdaccessory}
                                                style={{maxWidth:"180px"}}
                                            ></img>
                                        </Box>
                                        <Text style={[styles.textdefault2]}>
                                            TECLADO MICROSOFT SURFACE PRO SIGNATURE
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
                                            src={fouraccessory}
                                            style={{maxWidth:"180px"}}
                                        ></img>
                                        </Box>
                                        <Text style={[styles.textdefault2]}>
                                            RATO GAMING RAZER VIPER ULTIMATE 20000 DPI PRETO
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
                                        src={fiveaccessory}
                                        style={{maxWidth:"180px"}}
                                    ></img>
                                    </Box>
                                    <Text style={[styles.textdefault2]}>
                                        TECLADO + RATO ASUS WIRELESS W5000 PRETO USB - W5000
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
                                            src={sixaccessory}
                                            style={{maxWidth:"180px"}}
                                        ></img>
                                    </Box>
                                    <Text style={[styles.textdefault2]}>
                                        HEADSET WIRELESS HYPERX CLOUD FLIGHT PRETO
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
                                            src={sevenaccessory}
                                            style={{maxWidth:"180px"}}
                                        ></img>
                                    </Box>
                                    <Text style={[styles.textdefault2]}>
                                        RAZER KAIRA X HEADSET GAMING PARA XBOX PRETO
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
                                        src={eigthaccessory}
                                        style={{maxWidth:"180px"}}
                                    ></img>
                                    </Box>
                                    <Text style={[styles.textdefault2]}>
                                        AUSCULTADORES BLUETOOTH 5.0 COM MICROFONE INCORPORADO -10 HORAS DE AUTONOMIA - CINZENTO
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
                                        src={nineaccessory}
                                        style={{maxWidth:"180px"}}
                                    ></img>
                                </Box>
                                <Text style={[styles.textdefault2]}>
                                    GAMEPAD MSI FORCE GC30 V2 WIRELESS BRANCO PC / PS3 / ANDROI
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
                                        src={tenaccessory}
                                        style={{maxWidth:"180px"}}
                                    ></img>
                                </Box>
                                <Text style={[styles.textdefault2]}>
                                    WEBCAM HP 625 FHD
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
                                        src={elevenaccessory}
                                        style={{maxWidth:"180px"}}
                                    ></img>
                                </Box>
                                <Text style={[styles.textdefault2]}>
                                    HP 950 4K WEBCAM
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
                                        src={twelveaccessory}
                                        style={{maxWidth:"180px"}}
                                    ></img>
                                </Box>
                                <Text style={[styles.textdefault2]}>
                                    GAMEPAD NACON REVOLUTION X
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
                                    <Link to="/acessórios?page=1" id='aheader' >
                                        1   &nbsp; 
                                    </Link>
                                    <Text>
                                        | 
                                    </Text>
                                </Box>
                                <Box>
                                    <Link  to="/acessórios?page=2" id='aheader' >
                                        2  &nbsp; 
                                    </Link>
                                    <Text>
                                        | 
                                    </Text>
                                </Box>
                                <Box>
                                    <Link  to="/acessórios?page=3" id='aheader' >
                                        3   &nbsp; 
                                    </Link>
                                    <Text>
                                        | 
                                    </Text>
                                </Box>
                                <Box>
                                    <Link to="/acessórios?page=4" id='aheader' >
                                        4   &nbsp; 
                                    </Link>
                                    <Text>
                                        | 
                                    </Text>
                                </Box>
                                <Box>
                                    <Link to="/acessórios?page=5" id='aheader' >
                                        5  &nbsp; 
                                    </Link>
                                    <Text>
                                        | 
                                    </Text>
                                </Box>
                                <Box>
                                    <Link  to="/acessórios?page=6" id='aheader' >
                                        6   &nbsp; 
                                    </Link>
                                    <Text>
                                        | 
                                    </Text>
                                </Box>
                                <Box>
                                    <Link  to="/acessórios?page=7" id='aheader' >
                                        7   &nbsp; 
                                    </Link>
                                    <Text>
                                        | 
                                    </Text>
                                </Box>
                                <Link   to={`/acessórios?page=${parseInt(pageNumber, 10) + 1}`} id='aheader' >
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