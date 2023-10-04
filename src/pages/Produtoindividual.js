import { useState, useEffect,useRef,useContext } from "react";
import { useNavigate,Link,useParams} from "react-router-dom";
import Header from "./Header.js";
import Slide from "./Slider.js";
import Footer from "./Footer.js";
import { Text,StyleSheet} from 'react-native';
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import '../index.css';
import * as XLSX from 'xlsx';
import portateisprodutos from "./../img/portateisprodutos.png";
import disponivel from "./../img/disponivel.png"
import buy from "./../img/return.png"
import { useUser } from '../UserProvider';
import { PopupContext } from './popupcontext';

export default function Produtoindividual() {
    const isExtraSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));
    const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.between('md', 'lg'));
    const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.between('lg', 'xl'));
    const isExtraLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('xl'));
    const itemsPerPage = 16;
    const errRef = useRef();
    const { item: itemString } = useParams();
    const {userid} = useUser();
    const search = JSON.parse(itemString);
    const [familia,setfamilia] = useState([]);
    const [specif,setspecif] = useState([]);
    const {setIsOpenLogin} = useContext(PopupContext);
    const navigate = useNavigate();  
    
    const shouldIncludeInfont = (brand, product) => {
        switch (brand) {
            case "Cooler_Master":
                if(product === "V750 Gold i Multi A/EU cord" && product === "V850 Gold i Multi A/EU cord")
                {
                    return true;
                }
                else{
                    return false
                }
              
            case "Asus":
                if(product !== "GX601 ROG Strix Helios HDD Cage Kit ") 
                {
                    return true
                }
                else{
                    return false
                }
            case "Nox":
                if (!product.includes("Adapter")){
                    return true
                }
                else{
                    return false
                }
            case "Corsair":
                if (product.includes("Series") && product === "Professional  AX1600i Digital ATX Power Supply, EU version ")
                {
                    return true
                }
                else{
                    return false
                }
                    
            case "UNYKAch":
                if (!product.includes("Adaptador")){
                    return true ;
                } 
                else {
                    return false
                }
            default:
                return false;
        }
    }

    useEffect(()=>{
        if(search[1] === "PCs")
        {
            const specificationseach = search[3].split(',');
            setspecif(specificationseach);
            setfamilia("Computadores")
        }
        else if(search[1] === "PCs_Acessórios")
        {
            let font = shouldIncludeInfont(search[0], search[3])
            if( font == true)
            {
                setfamilia("Acessórios - Fontes de Alimentação")
            }
            else 
            {
                setfamilia("Computadores - PCs Acessórios")
            }
           
        }
        else if(search[1] === "POS_Impressoras" || search[1] === "POS_Leitores_codigos_barra" || search[1] === "Sistemas_de_POS" 
        || search[1] === "POS_Monitores" || search[1] === "POS_Acessorios" )
        {
            setfamilia("Sistemas Pos")
        }
        else if(search[1] === "Placas_Graficas" || search[1] === "Motherboards_Pcs" || search[1] === "Processadores" )
        {
            setfamilia("Componentes")
        }
        else if(search[1] === "Memorias_PCs" || search[1] === "Memorias_Portateis" || search[1] === "Memorias_USB" 
        || search[1] === "Memorias_Cartoes" || search[1] === "Memorias_Especificas" )
        {
            setfamilia("Memórias")
        }
        else if(search[1] === "Ratos_Acessórios")
        {
            setfamilia("Tapetes e Ratos")
        }
        else if(search[1] === "Discos_Externos" || search[1] === "Discos_SSD" || search[1] === "Discos_HDD" )
        {
            setfamilia("Discos")
        }
        else if(search[1] === "Soluções_de_Arrefecimento" || search[1] === "Redes_Switch" || search[1] === "Conectividade" 
        || search[1] === "Caixas" || search[1] === "Drives_Ópticas" )
        {
            setfamilia("Acessórios")
        }
        else if(search[1] === "SW_Servidores" || search[1] === "SW_Sistemas_Operativos" )
        {
            setfamilia("Serviços Suporte/Manutenção")
        }
        
    },[search])

    const pedirorcamento = () =>{
        if(userid)
        {
            navigate(`/perdirorçamentoproduto/${encodeURIComponent(JSON.stringify(search))}`)
        }
        else{
            setIsOpenLogin(true)
        }  
    }

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
                                <Link id='aheader' style={{fontSize: "20px",zIndex:-1}} to='/produtos/Pesquisa/'> &nbsp;  \  &nbsp; Pesquisa  &nbsp;  \  &nbsp;   </Link>     
                                <Text style={{fontSize: "20px",zIndex:-1}}>Produto</Text>   
                            </Box>
                    </Box>
                    <Text style={{
                        ...styles.textdefault3,
                        marginBottom:"1rem",
                        ...(isSmallScreen ? styles.textdefault3small : {}),
                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                    }}>
                        <span style={{fontWeight:"bold"}}>Produto</span>
                    </Text>
                    <Box sx={styles.container1}>
                        <Box sx={styles.viewcontainer}> 
                            <Box sx={{background: "#1A65A4",borderRadius:"3px 0px"}}>
                                <Box sx={styles.containerfeaturesmainproduct}> 
                                <Box style={ {textAlign:"center"}}>
                                    <Text style={[styles.textdefault,{fontSize:"36px",color:"white",zIndex:0,fontWeight:"bold"}]}>
                                        {familia} 
                                        {search[1] !== "PCs_Acessórios" && ` - ${search[1].replace(/_/g, ' ')}`}
                                    </Text>
                                </Box>    
                                </Box>  
                            </Box>     
                            <Box sx={styles.containerfeaturesmainproduct}> 
                                <Box sx={styles.containerfeatures}>
                                    <Box sx={{...styles.produtosmenurow,
                                        ...(isMediumScreen && styles.produtosmenurowsmall),
                                        ...(isSmallScreen && styles.produtosmenurowsmall),
                                        ...(isExtraSmallScreen && styles.produtosmenurowsmall),
                                        }}>
                                        <img src={portateisprodutos} style={{...{width:"30%"},
                                        ...(isMediumScreen && {width:"80%",margin:"auto"}),
                                        ...(isSmallScreen && {width:"80%",margin:"auto"}),
                                        ...(isExtraSmallScreen && {width:"80%",margin:"auto"}),
                                        }} >
                                        </img>
                                        <Box sx={styles.containerfeatures}>
                                            <Text style={[styles.textdefault2]}>
                                                {search[3]}  
                                            </Text>
                                            <Box sx={styles.disponivel}>
                                                <img
                                                    src={disponivel}
                                                    width={"45px"}
                                                    height={"45px"}
                                                    style={{marginLeft:"-0.5rem"}}
                                                ></img>
                                                <Text style={styles.disponiveltext}>
                                                    <span style={{fontWeight:"bold"}}>Disponível</span> 
                                                </Text>
                                            </Box>
                                            <Text style={[styles.textdefault2,{fontSize:"22px"}]}>
                                                <span style={{color:"black"}}>Referência:</span> 
                                            </Text>
                                            <Text style={[styles.textdefault,{fontSize:"20px"}]}>{search[2]}  </Text>    
                                            <Text style={[styles.textdefault2,{fontSize:"22px"}]}>
                                                <span style={{color:"black"}}>Marca:</span> 
                                            </Text>
                                            <Text style={[styles.textdefault,{fontSize:"20px"}]}>{search[0]}</Text>   
                                            {search[1] === "PCs" && (
                                                <>
                                                    <Text style={[styles.textdefault2,{fontSize:"22px"}]}>
                                                        <span style={{color:"black"}}>Especificações:</span> 
                                                    </Text>  
                                                    <Text style={[styles.textdefault,{fontSize:"20px"}]}>Processador: {specif[0]}</Text>
                                                        {
                                                            specif[3] && specif[3].includes("SSD") ? (
                                                                <>
                                                                    <Text style={[styles.textdefault,{fontSize:"20px"}]}>Capacidade: {specif[3]}</Text> 
                                                                    <Text style={[styles.textdefault,{fontSize:"20px"}]}>RAM: {specif[2]}</Text>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <Text style={[styles.textdefault,{fontSize:"20px"}]}>Capacidade: {specif[2]}</Text> 
                                                                    <Text style={[styles.textdefault,{fontSize:"20px"}]}>RAM: {specif[3]}</Text>
                                                                </>
                                                            )
                                                        }                   
                                                </>
                                            )
                                            }          
                                            <Text style={styles.textdefault2}>
                                                <span style={{color:"black"}}>{search[5]} €</span> 
                                            </Text>
                                            <Box sx = {{...styles.boxcontainer,
                                            ...(isSmallScreen && styles.boxcontainersmall),
                                            ...(isExtraSmallScreen && styles.boxcontainersmall),
                                            }}>
                                                <Button onClick={pedirorcamento} startIcon={<img src={buy} alt="description"/>} sx={styles.buttoncontainer} >PEDIR ORÇAMENTO</Button>
                                            </Box>
                                        
                                        </Box>      
                                    </Box>     
                                </Box>      
                            </Box>   
                        </Box> 
                    </Box>
                    <Text style={{
                            ...styles.textdefault3,
                            fontSize: "22px",
                            ...(isSmallScreen ? styles.textdefault3small : {}),
                            ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                        }}>
                            <span style={{fontWeight:"bold",fontSize: "22px"}}>Produtos</span> Relacionados
                    </Text>
                    <Text  style={{fontSize: "17px"}} >
                            Pesquisar mais produtos
                    </Text>  
                </Box>   
                <Slide key={search}></Slide>
            </Box>  
            <Footer></Footer>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'column',
        marginTop:"2rem",
        marginBottom:"2rem",
    },  
    produtosmenurowsmall:{
        flexDirection:"column",
        gap:"10px"
    },
    produtosmenurow:{
        display:"flex",flexDirection:"row",gap:"100px"
    },
    boxcontainer:{
        display:"flex",
        flexDirection:"column",
        textAlign:"left",
        gap:"5px",
        width:"60%",
        marginTop:"15px",
        marginBottom:"15px"
    },
    boxcontainersmall:{
        width:"60%"
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
    viewcontainer:{ 
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)', 
        marginBottom:"2rem",
    },
    containerfeaturesmainproduct:
    {
        background: "white",
        alignItems:"center",
        justifyContent:"center",
        padding:"1rem",
    },
    container1:{
        display:"block",
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
        fontSize:"30px",
        fontFamily:"K2D",
        marginBottom:"0.5rem",
        marginTop:"0.5rem",
        maxWidth:"820px",
        color:"black",
        fontWeight:"bold",
    },
    textdefault2small:{
    textAlign:"center"
    },
    textdefault2extrasmall:{
        textAlign:"center"
    },
    disponiveltext:{
    fontSize:"24px",
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
        backgroundColor:"#1B64A7",
        color:"white",
        fontFamily: 'K2D',
        fontSize:"18px",
        paddingTop:"0.2rem",
        paddingBottom:"0.2rem",
        borderRadius:"6px",
        '&:hover': {
            backgroundColor: '#134b7c',
          },
    },

});