import { useState, useEffect } from "react";
import { useNavigate,Link,useLocation} from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";
import {View, Text,StyleSheet} from 'react-native';
import Box from "@mui/material/Box";
import useMediaQuery from '@mui/material/useMediaQuery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Checkbox from '@mui/material/Checkbox';
import * as XLSX from 'xlsx';
import '../index.css';
import arrowright from "./../img/arrowright.png"
import arrowleft from "./../img/arrowleft.png"
import arrowabove from "./../img/arrowabove.png"
import windows7 from "./../img/windows7.png";
import windows10home from "./../img/windows10home.png";
import windows10pro from "./../img/windows10pro.png";
import windows11home from "./../img/windows11home.png";
import windows11pro from "./../img/windows11pro.png";
import rapairpc from "./../img/rapairpc.png"
import rapairprinter from "./../img/rapairprinter.png"
import removalvirus from "./../img/removalvirus.png"
import disponivel from "./../img/disponivel.png";
import operationalsystem from "./../img/operationalsystem.png"
import componentsrepair from "./../img/componentsrepair.png"
import virusremoval from "./../img/virusremoval.png";


export default function SuporteManutenção() {
    const isExtraSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));
    const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.between('md', 'lg'));
    const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.between('lg', 'xl'));
    const isExtraLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('xl'));
    const itemsPerPage = 16;
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const [pcs, setpcs] = useState([]);
    const [maxpages, setmaxpages] = useState([]);
    const pageNumber = queryParams.get("page");
    const itemsToShow = pcs.slice(((parseInt(pageNumber, 10) ) - 1) * itemsPerPage, (parseInt(pageNumber, 10) ) * itemsPerPage);
    const [isHoveredrepaircomponents, setIsHoveredrepaircomponents] = useState(false);
    const [isHoveredrepairremovalvirus, setIsHoveredrepairremovalvirus] = useState(false);
    const [isHoveredrepairinstaso, setIsHoveredrepairinstaso] = useState(false);
    const navigate = useNavigate();

    const onrepairsoinst = () => {
        setIsHoveredrepairinstaso(true);
        setIsHoveredrepairremovalvirus(false);
        setIsHoveredrepaircomponents(false);
    }
    
    const onrepairvirus= () =>{
        setIsHoveredrepairremovalvirus(true);
        setIsHoveredrepaircomponents(false);
        setIsHoveredrepairinstaso(false);
    }
    const onrepairenter= () => {
        setIsHoveredrepaircomponents(true);
        setIsHoveredrepairremovalvirus(false);
        setIsHoveredrepairinstaso(false);
    };
    const onrepairleave= () => {
        setIsHoveredrepaircomponents(false);
        setIsHoveredrepairinstaso(false);
        setIsHoveredrepairremovalvirus(false);
    };

    const renderLinks = () => {
        let elements = [];
        for (let i = 0; i < maxpages; i++) {
          let currentNumber = 1 + i;
          if (currentNumber <= maxpages && currentNumber <= 7) {
            elements.push(
              <Link to={`/suportemanutenção?page=${currentNumber}`} id='aheader' key={currentNumber}>
                {currentNumber}
                <Text>&nbsp; | </Text>
              </Link>
            );
          }     
        } 
        return elements;
      };
    
    const readFile = async () => {
        try {
        const response = await fetch("/data/Comp_Filtros_1.xlsx");
        const blob = await response.blob();
        const reader = new FileReader();
    
        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        
            if (jsonData && jsonData.length > 0) {
                const windowsserv = jsonData.filter(row => row[1] === "SW_Servidores"); 
                const windowsso = jsonData.filter(row => row[1] === "SW_Sistemas_Operativos"); 
                
     

                const combinedspecarray = Array.from(new Set(
                    [
                        ...windowsserv,
                        ...windowsso
                    ]
                )) 
                setpcs(combinedspecarray)        
                const maxPages = Math.ceil(combinedspecarray.length / itemsPerPage);
                setmaxpages(maxPages)
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
                        <Text style={{fontSize: "20px",zIndex:-1}}>    \  Software  \    </Text>  
                        <Text  style={{fontSize: "20px",zIndex:-1}}>Serviços de Suporte/Manutenção  </Text>   
                        </Box>
                    </Box>   
                    <Text style={{
                        ...styles.textdefault3,
                        ...(isSmallScreen ? styles.textdefault3small : {}),
                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                    }}>
                        <span style={{fontWeight:"bold"}}>Serviços</span> de Suporte/Manutenção
                    </Text>
                    <Text style={{
                        ...styles.textdefault3,
                        fontSize:"25px",
                        fontWeight:"bold",
                        ...(isSmallScreen ? styles.textdefault3small : {}),
                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                    }}>
                        <p style={{marginBottom:"0.5rem",marginTop:"0.5rem"}}>MANUTENÇÃO E SUPORTE</p>
                    </Text>
                    <Text style={{
                        ...styles.textdefault,
                        maxWidth: "1800px",
                        fontSize:"22px",
                        ...(isSmallScreen ? styles.textdefaultsmall : {}),
                        ...(isExtraSmallScreen ? styles.textdefaultextrasmall : {})
                    }}>
                        A Inforsystem está comprometida em fornecer um padrão de excelência em suporte ao cliente para produtos informáticos, abrangendo desde a reparação de software, computadores e impressoras até a instalação de sistemas operativos. 
                        <br></br>Asseguramos que toda a informação relativa a reparações e atualizações seja monitorizada e entregue dentro dos prazos acordados com o cliente. 
                        <br></br>Optar pelos nossos serviços significa garantir resoluções mais rápidas e precisas para os desafios informáticos.
                    </Text>
                    <Text style={{
                        ...styles.textdefault3,
                        fontSize:"25px",
                        fontWeight:"bold",
                        ...(isSmallScreen ? styles.textdefault3small : {}),
                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                    }}>
                        <p style={{marginBottom:"0.5rem",marginTop:"0.5rem"}}>TIPOS SUPORTE/MANUTENÇÃO</p>
                    </Text>           
                    <Box  sx={{...styles.container2,
                    ...(isExtraLargeScreen && styles.container2extralarge),
                    ...(isLargeScreen && styles.container2large), 
                    ...(isMediumScreen && styles.container2medium), 
                    ...(isSmallScreen && styles.container2small), 
                    ...(isExtraSmallScreen && styles.container2extrasmall)}}>
                        
                        <Box sx={{...styles.tipossuportediv,transform: isHoveredrepaircomponents ? 'scale(1.07)' : 'scale(1)'}} onMouseEnter={onrepairenter}
                            onMouseLeave={onrepairleave}>
                                {isHoveredrepaircomponents ?(
                                      <>
                                       <Box sx={[styles.viewcontainer,{maxWidth: "550px",padding:"3rem"}]}>
                                        <Text style={{
                                            ...styles.textdefault,
                                            
                                            fontSize:"22px",
                                        
                                            ...(isSmallScreen ? styles.textdefaultsmall : {}),
                                            ...(isExtraSmallScreen ? styles.textdefaultextrasmall : {})
                                        }}>
                                            A Inforsystem repara computadores/portáteis e dispositivos eletrónicos. 
                                            <br></br>Além da substituição de peças danificadas a inforsystem permite a substituição de discos rígidos/motherboards e limpeza interna.
                                        </Text>
                                       </Box>               
                                    </>     
                                ):(
                                    <>
                                    <img
                                        src={componentsrepair}
                                        style={{maxWidth:"220px"}}></img>
                                        <Text style={{
                                        ...styles.textdefault,
                                        fontSize:"24px",
                                        fontWeight:"bold",
                                        maxWidth: "1800px",
                                        ...(isSmallScreen ? styles.textdefaultsmall : {}),
                                        ...(isExtraSmallScreen ? styles.textdefaultextrasmall : {})
                                        }}>
                                        Reparação de Componentes
                                        </Text>  
                                  </>
                                )}
                            
                        </Box>
                        <Box sx={{...styles.tipossuportediv,transform: isHoveredrepairremovalvirus ? 'scale(1.07)' : 'scale(1)'}} onMouseEnter={onrepairvirus}
                            onMouseLeave={onrepairleave}>
                                {isHoveredrepairremovalvirus ?(
                                      <>
                                       <Box sx={[styles.viewcontainer,{maxWidth: "550px",padding:"3rem"}]}>
                                        <Text style={{
                                            ...styles.textdefault,
                                            
                                            fontSize:"22px",
                                        
                                            ...(isSmallScreen ? styles.textdefaultsmall : {}),
                                            ...(isExtraSmallScreen ? styles.textdefaultextrasmall : {})
                                        }}>
                                           
                                            A Inforsystem é especializada na deteção e eliminação de malwares, vírus e outras ameaças.
                                            <br></br>Além de remover softwares maliciosos, a Inforsystem também oferece serviços de segurança, prevenindo futuras infecções.
                                        </Text>
                                       </Box>
                                    
                                    </>
                                   
                                ):(
                                    <>     
                                        <img
                                        src={virusremoval}
                                        style={{maxWidth:"220px"}}
                                        ></img>
                                        <Text style={{
                                        ...styles.textdefault,
                                        fontSize:"24px",
                                        fontWeight:"bold",
                                        maxWidth: "1800px",
                                        ...(isSmallScreen ? styles.textdefaultsmall : {}),
                                        ...(isExtraSmallScreen ? styles.textdefaultextrasmall : {})
                                        }}>
                                        Remoção de vírus
                                        </Text>
                                    
                                    </>
                                    )}
                        </Box>
                        <Box sx={{...styles.tipossuportediv,transform: isHoveredrepairinstaso ? 'scale(1.07)' : 'scale(1)'}} onMouseEnter={onrepairsoinst}
                            onMouseLeave={onrepairleave}>
                                {isHoveredrepairinstaso ?(
                                      <>
                                       <Box sx={[styles.viewcontainer,{maxWidth: "550px",padding:"3rem"}]}>
                                        <Text style={{
                                            ...styles.textdefault,
                                            
                                            fontSize:"22px",
                                        
                                            ...(isSmallScreen ? styles.textdefaultsmall : {}),
                                            ...(isExtraSmallScreen ? styles.textdefaultextrasmall : {})
                                        }}>
                                           
                                           A Inforsystem é especializada na instalação e configuração de sistemas operativos, permitindo uma otimização para o seu dispositivo.
                                            <br></br>Além da instalação, a Inforsystem oferece assistência sobre atualizações e compatibilidades.
                                        </Text>
                                       </Box>
                                    
                                    </>
                                   
                                ):( 
                                    <>   
                                        <img
                                        src={operationalsystem}
                                        style={{maxWidth:"220px"}}
                                        ></img>
                                        <Text style={{
                                        ...styles.textdefault,
                                        fontSize:"24px",
                                        fontWeight:"bold",
                                        maxWidth: "1800px",
                                        ...(isSmallScreen ? styles.textdefaultsmall : {}),
                                        ...(isExtraSmallScreen ? styles.textdefaultextrasmall : {})
                                        }}>
                                            Instalação de SO
                                        </Text>
                                    </>
                                  
                                )}
                            
                         
                        </Box>
                    </Box>
                </Box>
                    <Text style={{
                        ...styles.textdefault,
                        maxWidth: "1800px",
                        ...(isSmallScreen ? styles.textdefaultsmall : {}),
                        ...(isExtraSmallScreen ? styles.textdefaultextrasmall : {})
                    }}>
                        Conheça os sistemas operativos disponíveis na loja
                    </Text>
                    <Box  sx={{...styles.container1,
                    ...(isExtraLargeScreen && styles.container1extralarge),
                    ...(isLargeScreen && styles.container1large), 
                    ...(isMediumScreen && styles.container1medium), 
                    ...(isSmallScreen && styles.container1small), 
                    ...(isExtraSmallScreen && styles.container1extrasmall)}}>
                        {pcs.length>0 &&(
                                itemsToShow.map((pc, index) => (
                                        <Box sx={styles.viewcontainer}>
                                        <Box sx={styles.containerfeaturesmainproduct}> 
                                            <Box sx={styles.containerfeaturesproduts}> 
                                                <img
                                                    src={pc[9]}
                                                    style={{maxWidth:"180px"}}
                                                ></img>
                                            </Box>
                                            <Box sx={styles.containerfeatures}>
                                                <Text style={[styles.textdefault2]} key={index}>
                                                    {pc[3]}   
                                                </Text>
                                                <Text style={[styles.textdefault,{fontSize:"13px"}]}>Ref: {pc[2]} </Text>   
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
                                                    <span style={{color:"black"}}>{pc[5]} €</span> 
                                                </Text>
                                            </Box>
                                        </Box>
                                        </Box> 
                                ))
                            )}
                            <Box sx={styles.pages}>
                                <Box sx={styles.pagesflex}>
                                    {parseInt(pageNumber, 10) <= maxpages && parseInt(pageNumber, 10) > 1 && (
                                        <Link  to={`/suportemanutenção?page=${parseInt(pageNumber, 10) - 1}`} id='aheader' >
                                            <img src={arrowleft} height={10}></img>
                                            <img src={arrowleft} height={10}></img>
                                        
                                        </Link> 
                                    )}  
                                    {renderLinks()}
                                    {parseInt(pageNumber, 10) < maxpages && maxpages>7 && (
                                        <Link  to={`/suportemanutenção?page=${parseInt(pageNumber, 10) + 1}`} id='aheader' >
                                            
                                            <img src={arrowright} height={10}></img>
                                            <img src={arrowright} height={10}></img>
                                        
                                        </Link> 
                                    )}                           
                                </Box>
                            </Box>
                    </Box> 
            </Box> 
            <Footer></Footer>
        </>
    );
}

const styles = StyleSheet.create({
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
    containerfeatures:{
        marginTop:"0.5rem",
        display:"flex",
        flexDirection:"column",
        marginBottom:"0.5rem",
        alignItems:"left",
        textAlign:"center",
    },
    containerfeaturesproduts:{       
        padding:"2rem",
        textAlign:"center"
    },
    viewcontainer:{ 
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)', 
        marginBottom:"2rem",
        paddingLeft:"0.5rem",
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
    container2:{
        display:"grid",
        margin:"0",
    },
    container2large:{
        display:"grid",
        gridTemplateRows: "auto auto",
        gridTemplateColumns:"auto auto",
    },
    container2extralarge:{
        display:"grid",
        gridTemplateRows: "auto auto auto",
        gridTemplateColumns:"auto auto auto", 
    },
    container2medium:{
        display:"grid",
        gridTemplateRows: "auto auto",
        gridTemplateColumns:"auto auto",
    },
    container2small:{
        display:"flex",
        flexDirection:"column",
    },
    container2extrasmall:{
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
      textAlign:"left"
     },
    textdefaultextrasmall:{
        textAlign:"left"
     },
    textdefault2:{
    fontSize:"15px",
    fontFamily:"K2D",
    marginBottom:"0.5rem",
    marginTop:"0.5rem",
    maxWidth:"420px",
    color:"#368CD6",
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
    tipossuportediv:{
        display:"flex",
        flexDirection:"column",
        transition: 'transform 0.3s ease',
        transform: 'translateY(0)', // default opacity
        gap:"20px"
    }
});