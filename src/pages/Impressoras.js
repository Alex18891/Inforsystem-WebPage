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

import oneprint from "./../img/firstprinter.png";
import twoprint from "./../img/secondprinter.png";
import threeprint from "./../img/thirdprinter.png";
import fourprint from "./../img/fourthprinter.png";
import fiveprint from "./../img/fifthprinter.png";
import sixprint from "./../img/sixthprinter.png";
import sevenprint from "./../img/seventhprinter.png";
import eigthprint from "./../img/eighthprinter.png";
import nineprint from "./../img/ninethprinter.png";
import tenprint from "./../img/tenthprinter.png";
import elevenprint from "./../img/eleventhprinter.png";
import twelveprint from "./../img/twelfthprinter.png";


import disponivel from "./../img/disponivel.png"
import arrowright from "./../img/arrowright.png"
import arrowabove from "./../img/arrowabove.png"

export default function Impressoras() {
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
                        <Text  style={{fontSize: "20px",zIndex:-1}}>Impressoras</Text>   
                        </Box>
                    </Box>     
                    <Text style={{
                        ...styles.textdefault3,
                        ...(isSmallScreen ? styles.textdefault3small : {}),
                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                    }}>
                        <span style={{fontWeight:"bold"}}>Impressoras</span>
                    </Text>
                    <Text style={{
                        ...styles.textdefault,
                        maxWidth: "1800px",
                        ...(isSmallScreen ? styles.textdefaultsmall : {}),
                        ...(isExtraSmallScreen ? styles.textdefaultextrasmall : {})
                    }}>
                        Veja as impressoras disponíveis na loja
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
                                                        <span style={{color:"black"}}>Tamanho do ecrã na diagonal</span> 
                                                    </Text>
                                                    <img src={arrowabove} width={30} height={30}></img>
                                                </Box>
                                                 <Divider style={{border:0, borderTop:'1px solid rgba(52, 64, 84, 0.3)',width:"100%",marginBottom:"0.5rem"}}/>
                                                 <Box sx={styles.containerfeatures}>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                            10.9 cm
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                            6.86 cm
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                            6.1 cm
                                                         </Text>
                                                     </Box>  
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                            12.7 cm
                                                         </Text>
                                                     </Box>  
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                            7.62 cm
                                                         </Text>
                                                     </Box>  
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                            6.73 cm
                                                         </Text>
                                                     </Box>  
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                            20.3 cm
                                                         </Text>
                                                     </Box>   
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                            9.4 cm
                                                         </Text>
                                                     </Box> 
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             12.2 cm
                                                         </Text>
                                                     </Box>   
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                            5.84 cm
                                                         </Text>
                                                     </Box> 
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                            4.57 cm
                                                         </Text>
                                                     </Box>   
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                            3.81 cm
                                                         </Text>
                                                     </Box>   
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                            9.3 cm
                                                         </Text>
                                                     </Box> 
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                            10.8 cm
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
                                                            CANON
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                            DDIGITAL
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                            PANTUM
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                            EPSON
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                            XEROX
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                            LEXMARK
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
                                                        <span style={{color:"black"}}>Tamanho do ecrã na diagonal</span> 
                                                    </Text>
                                                    <img src={arrowabove} width={30} height={30}></img>
                                                </Box>
                                                 <Divider style={{border:0, borderTop:'1px solid rgba(52, 64, 84, 0.3)',width:"100%",marginBottom:"0.5rem"}}/>
                                                 <Box sx={styles.containerfeatures}>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                            10.9 cm
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                            6.86 cm
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                            6.1 cm
                                                         </Text>
                                                     </Box>  
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                            12.7 cm
                                                         </Text>
                                                     </Box>  
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                            7.62 cm
                                                         </Text>
                                                     </Box>  
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                            6.73 cm
                                                         </Text>
                                                     </Box>  
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                            20.3 cm
                                                         </Text>
                                                     </Box>   
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                            9.4 cm
                                                         </Text>
                                                     </Box> 
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                             12.2 cm
                                                         </Text>
                                                     </Box>   
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                            5.84 cm
                                                         </Text>
                                                     </Box> 
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                            4.57 cm
                                                         </Text>
                                                     </Box>   
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                            3.81 cm
                                                         </Text>
                                                     </Box>   
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                            9.3 cm
                                                         </Text>
                                                     </Box> 
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                            10.8 cm
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
                                                            CANON
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                            DDIGITAL
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                            PANTUM
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                            EPSON
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                            XEROX
                                                         </Text>
                                                     </Box>
                                                     <Box sx = {styles.menuflex}> 
                                                         <Checkbox sx={{padding:"0"}} />
                                                         <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                                            LEXMARK
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
                                            src={oneprint}
                                            style={{maxWidth:"180px"}}
                                        ></img>
                                    </Box>
                                    <Text style={[styles.textdefault2]}>
                                        CANON MULTIF JATO TINTA PIXMA TS8350A BLACK PROMO
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                        10.9 cm
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
                                            src={twoprint}
                                            style={{maxWidth:"180px"}}
                                        ></img>
                                    </Box>
                                    <Text style={[styles.textdefault2]}>
                                        IMPRESSORA MULTIFUNÇÕES HP OFFICEJET PRO 9010E
                                    </Text>  
                                    <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                        10.9 cm
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
                                                src={threeprint}
                                                style={{maxWidth:"180px"}}
                                            ></img>
                                        </Box>
                                        <Text style={[styles.textdefault2]}>
                                            XEROX IMP LASER COR C310V_DNI PROMO
                                        </Text>
                                        <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                            6.1 cm
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
                                            src={fourprint}
                                            style={{maxWidth:"180px"}}
                                        ></img>
                                        </Box>
                                        <Text style={[styles.textdefault2]}>
                                            PIXMA PRO-200 - IMPRESSORA FOTOGRÁFICA A3+ DE 8 TINTEIROS. IMPRESSÃO SEM FIOS A PARTIR DO SEU PC. TABLET E SMARTPHONE.
                                        </Text>
                                        <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                            7.62 cm
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
                                        src={fiveprint}
                                        style={{maxWidth:"180px"}}
                                    ></img>
                                    </Box>
                                    <Text style={[styles.textdefault2]}>
                                        HP COLOR LASERJET ENT MFP M578DN PRINTER
                                    </Text>  
                                    <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                        20.3 cm
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
                                            src={sixprint}
                                            style={{maxWidth:"180px"}}
                                        ></img>
                                    </Box>
                                    <Text style={[styles.textdefault2]}>
                                        IMPRESSORA BROTHER LASER MONO HL-L6400DW - WIFI
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                        4.57 cm
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
                                            src={sevenprint}
                                            style={{maxWidth:"180px"}}
                                        ></img>
                                    </Box>
                                    <Text style={[styles.textdefault2]}>
                                        IMPRESSORA MULTIFUNÇÕES CANON PIXMA TS9550 - WIFI/LAN
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                        10.8 cm
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
                                        src={eigthprint}
                                        style={{maxWidth:"180px"}}
                                    ></img>
                                    </Box>
                                    <Text style={[styles.textdefault2]}>
                                        IMPRESSORA HP MULTIFUNÇÕES LASERJET TANK 2604DW
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
                                        src={nineprint}
                                        style={{maxWidth:"180px"}}
                                    ></img>
                                </Box>
                                <Text style={[styles.textdefault2]}>
                                    PANTUM IMP COLOR CP1100DW 18PPM DUPLEX WIFI DIRECT (PCLM/PS3/PCL6/PCL5)
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
                                        src={tenprint}
                                        style={{maxWidth:"180px"}}
                                    ></img>
                                </Box>
                                <Text style={[styles.textdefault2]}>
                                    IMPRESSORA MULTIFUNÇÕES EPSON ECOTANK ET-2850 WIRELESS
                                </Text>  
                                <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                    3.81 cm
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
                                        src={elevenprint}
                                        style={{maxWidth:"180px"}}
                                    ></img>
                                </Box>
                                <Text style={[styles.textdefault2]}>
                                    IMPRESSORA XEROX MULTIFUNÇÕES LASER VERSALINK C405V/DN
                                </Text>  
                                <Text style={[styles.textdefault,{fontSize:"13px"}]}>
                                    12.7 cm
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
                                        src={twelveprint}
                                        style={{maxWidth:"180px"}}
                                    ></img>
                                </Box>
                                <Text style={[styles.textdefault2]}>
                                    IMPRESSORA LEXMARK LASER MONO BSD M3350
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
                                    <Link to="/impressoras?page=1" id='aheader' >
                                        1   &nbsp; 
                                    </Link>
                                    <Text>
                                        | 
                                    </Text>
                                </Box>
                                <Box>
                                    <Link  to="/impressoras?page=2" id='aheader' >
                                        2  &nbsp; 
                                    </Link>
                                    <Text>
                                        | 
                                    </Text>
                                </Box>
                                <Box>
                                    <Link  to="/impressoras?page=3" id='aheader' >
                                        3   &nbsp; 
                                    </Link>
                                    <Text>
                                        | 
                                    </Text>
                                </Box>
                                <Box>
                                    <Link to="/impressoras?page=4" id='aheader' >
                                        4   &nbsp; 
                                    </Link>
                                    <Text>
                                        | 
                                    </Text>
                                </Box>
                                <Box>
                                    <Link to="/impressoras?page=5" id='aheader' >
                                        5  &nbsp; 
                                    </Link>
                                    <Text>
                                        | 
                                    </Text>
                                </Box>
                                <Box>
                                    <Link  to="/impressoras?page=6" id='aheader' >
                                        6   &nbsp; 
                                    </Link>
                                    <Text>
                                        | 
                                    </Text>
                                </Box>
                                <Box>
                                    <Link  to="/impressoras?page=7" id='aheader' >
                                        7   &nbsp; 
                                    </Link>
                                    <Text>
                                        | 
                                    </Text>
                                </Box>
                                <Link   to={`/impressoras?page=${parseInt(pageNumber, 10) + 1}`} id='aheader' >
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