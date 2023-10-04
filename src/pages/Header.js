import React, { useEffect,useState,useContext  } from "react";
import { styled } from "@mui/material/styles";
import { useNavigate,Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import {View, Text,StyleSheet} from 'react-native';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import ReactModal from 'react-modal';
import { Divider } from '@mui/material';
import * as XLSX from 'xlsx';
import pfp from "./../img/user.png";
import pfpsmall from "./../img/usersmall.png";
import logo from "./../img/logo.png";
import menu from "./../img/menu.png";
import menuwhite from "./../img/menuwhite.png";
import Login from './Login';
import Conta from "./Conta";
import Endereco from "./Endereco.js";
import Enderecomain from "./Enderecomain.js";
import Register from "./Register";
import { PopupContext } from './popupcontext';
import ForgotPassword from "./ForgotPassword";
import { useUser } from '../UserProvider';
import { set } from "mongoose";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius  ,
  border:"1px solid black",
  marginLeft: 0,
  [theme.breakpoints.up("md")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
  backgroundColor: "#EBEBEB",
  
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1rem + ${theme.spacing(4)})`,
    paddingRight: `calc(1rem + ${theme.spacing(3)})`,
    transition: theme.transitions.create("width"),
    borderRadius:"4px",

    [theme.breakpoints.down("sm")]: {
      width: "25ch", // Set width to 100% for small screens
      height:"2.8ch", // Set height to 1.6ch for small screens
    },
    [theme.breakpoints.down('md') && theme.breakpoints.up("sm") ]: {
      width: '55ch', // Set width to 30ch for large screens
      height:"2.8ch", // Set height to 2ch for large screens
    },
    [theme.breakpoints.down("lg") && theme.breakpoints.up('md') ]: {
      width: "30ch",
      height:"2.8ch"
    },
    [theme.breakpoints.up('lg')] : {
      width: '30ch', // Set width to 30ch for large screens
      height:"2.8ch", // Set height to 2ch for large screens
    },
    "&::placeholder": {
      opacity: 0.8,
      fontFamily:"K2D",

    },  
  },
}));

export default function PrimarySearchAppBar() {
  const isExtraSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.between('md', 'lg'));
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.between('lg', 'xl'));
  const isExtraLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('xl'));
  const [searchValue, setSearchValue] = React.useState("");
  const navigate = useNavigate();
  const [all, setall] = useState([]);
  const [search, setsearch] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isselected, setselected] = useState(false);
  const { isOpenLogin, setIsOpenLogin, isOpenRegister, setIsOpenRegister,isOpenForgotpassword,setIsOpenForgotpassword , isOpenEndereco,isOpenEnderecoadd,
  isOpenconta, setIsOpenconta,setIsOpenEndereco,setIsOpenEnderecoadd} = useContext(PopupContext);
  const [isHoveredprodu, setIsHoveredprodu] = useState(false);
  const [isHoveredsoft, setIsHoveredsoft] = useState(false);
  const { setUserId,name,userid,setEmail,setname } = useUser();
  console.log(userid)
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
          const data = jsonData.filter(row => row[1] === "Caixas" ||
            row[1] === "Placas_Graficas" || row[1] === "Motherboards_Pcs" || 
            row[1] === "Processadores" || row[1] === "PCs" 
            || row[1] === "Soluções_de_Arrefecimento" || row[1] === "Discos_Externos" ||
            row[1] === "Discos_SSD" || row[1] === "Discos_HDD" || row[1] === "Drives_Ópticas" ||
            row[1] === "Memorias_PCs" || row[1] === "Memorias_Portateis" || row[1] === "Memorias_USB" ||
            row[1] === "Memorias_Cartoes" ||  row[1] === "Memorias_Especificas" || row[1] === "Redes_Switch" ||
            row[1] === "Conectividade" || row[1] === "POS_Impressoras" || row[1] === "POS_Leitores_codigos_barra" ||
            row[1] === "Sistemas_de_POS" ||  row[1] === "POS_Monitores" || row[1] === "POS_Acessorios" ||  row[1] === "Ratos_Acessórios"
            || row[1] === "SW_Servidores" || row[1] === "SW_Sistemas_Operativos"
            );

            const PCacc = jsonData.filter(row => row[1] === "PCs_Acessórios"); 
            const shouldIncludeInAcc = (brand, product) => {
              switch (brand) {
                  case "Cooler_Master":
                      return product !== "V750 Gold i Multi A/EU cord" && product !== "V850 Gold i Multi A/EU cord";
                  case "Asus":
                      return product === "GX601 ROG Strix Helios HDD Cage Kit ";
                  case "Nox":
                      return product.includes("Adapter");
                  case "Corsair":
                      return !product.includes("Series") && product !== "Professional  AX1600i Digital ATX Power Supply, EU version ";
                  case "UNYKAch":
                      return product.includes("Adaptador");
                  default:
                      return false;
              }
            };
            const shouldIncludeInfont = (brand, product) => {
              switch (brand) {
                  case "Cooler_Master":
                      return product === "V750 Gold i Multi A/EU cord" && product === "V850 Gold i Multi A/EU cord";
                  case "Asus":
                      return product !== "GX601 ROG Strix Helios HDD Cage Kit ";
                  case "Nox":
                      return !product.includes("Adapter");
                  case "Corsair":
                      return product.includes("Series") && product === "Professional  AX1600i Digital ATX Power Supply, EU version ";
                  case "UNYKAch":
                      return !product.includes("Adaptador");
                  default:
                      return false;
              }
            };
            let acc = PCacc.filter(value => shouldIncludeInAcc(value[0], value[3])); 
            let font = PCacc.filter(value => shouldIncludeInfont(value[0], value[3])); 
            const combinedsarray = Array.from(new Set(
              [
                  ...data,
                  ...acc,
                  ...font,
              ]
            )) 
            setall(combinedsarray)  
        }
    };
    
    reader.readAsArrayBuffer(blob);

    } catch (error) {
    console.error("Error reading the file:", error);
    }
};  

const filter = (input, dataset) => {
  if (input && input.length > 0) {
    return dataset.filter(item => 
      item.some(subItem => String(subItem).includes(input))
    );
  }
  return [];
}

  useEffect(() => {
      readFile();
  }, []);

  useEffect(()=>{
      setsearch(filter(searchValue,all))
  },[searchValue])

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsHoveredprodu(false)
    setIsHoveredsoft(false);
  };

  const handleMouseEnterprod = () => {
    setIsHoveredprodu(prevState => !prevState);
    setIsHovered(false);
    setIsHoveredsoft(false);
  };


  const handleMouseEntersoft = () => {
    setIsHovered(false);
    setIsHoveredsoft(true);
    setIsHoveredprodu(false);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsHoveredsoft(false);
    setIsHoveredprodu(false);
  };

  const loginaccount = () =>{
    if(!userid)
    {
      setIsOpenLogin(true);
    }
    else{
      setIsOpenconta(true)
    }
  }

  const menutoolbar = (
    <Box sx={{ display: "flex", alignItems: "center", gap: "50px"}}>
      <Box sx={{display:"flex",alignItems: "center", gap: "15px"}}>
        <View style={[styles.container,{zIndex: isOpenLogin || isOpenForgotpassword || isOpenRegister || isOpenEndereco || isOpenEnderecoadd || isOpenconta ? 0 : 1,}]} >
          <img src={menu} width={30}  style={{cursor:"pointer"}} onClick={() => window.location.href = "/"} ></img>
        </View>
        <View  onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnterprod}  style={[styles.container,{zIndex: isOpenLogin || isOpenForgotpassword || isOpenRegister || isOpenEndereco || isOpenEnderecoadd || isOpenconta ? 0 : 1,}]} >   
          <View  sx={styles.produtosmenu} >
              Produtos       
          </View>
          <View  style={[styles.container_cont,isHoveredprodu && styles.containerHovered]}>
                <Link  style={styles.acontainer} id='aheader'to="/produtos/Pesquisa">Pesquisa</Link>  
                <Link  style={styles.acontainer} id='aheader'to="/produtos/Pesquisa">Catálogo</Link>  
          </View>
        </View>  
      </Box>   
      <View  style={[styles.container,{zIndex: isOpenLogin || isOpenForgotpassword || isOpenRegister || isOpenEndereco || isOpenEnderecoadd || isOpenconta ? 0 : 1,minWidth: "380px",}]} onMouseEnter={handleMouseEntersoft}
            onMouseLeave={handleMouseLeave}>
            <Box  style={{ color: "black",textDecorationLine:"none"}} >
                Software
                <i className="fa fa-caret-down" style={{marginLeft:"0.5rem"}} ></i>
            </Box>
        <View  style={[styles.container_cont,isHoveredsoft && styles.containerHovered]}>
            <Link style={styles.acontainer} id='aheader' to="/suportemanutenção?page=1">Serviços de Suporte/Manutenção</Link>
            <Link style={styles.acontainer} id='aheader' to="/softwarefaturação">Serviços de Faturação</Link>
        </View>
      </View>
    </Box>
  ) 

  const logout = (
        <Box sx={{...styles.seconditemfirsttoolbar,
          ...(isSmallScreen && styles.seconditemfirsttoolbarsmall),
          ...(isExtraSmallScreen && styles.seconditemfirsttoolbarsmall)}} onClick={loginaccount}>
              <img
                  src={pfp}
                  alt="profile picture"
                  width="40px"
                  height="40px"
                  style={{
                  marginTop:"0.5rem"
                  }}
                ></img>
              <Text style={styles.textdefault} >
                {!userid ? "Minha conta" : name}
              </Text> 
        </Box>   
  )

//IR PARA PAGINA DE Definições/PROFIL FALTA
  const contasmall = (
    <Box sx={{ display: "flex", alignItems: "center", gap: "50px",justifyContent:"space-between"}}>
    <Box sx={[styles.produtosmenu]}>
      <img src={menuwhite} width={40} style={{cursor:"pointer",color:"white"}} onClick={handleMouseEnterprod} ></img>          
      <img
        src={logo}
        width={210}
        height={42}
        alt="profile picture"
        onClick={() => window.location.href = "/"}
        style={{cursor:"pointer"}}
      />
    </Box>
            <Box  onClick={loginaccount}>
                  <img
                src={pfpsmall}
                alt="profile picture"
                width="40px"
                height="40px"
                style={{
                marginTop:"0.5rem",
                cursor:"pointer"
                }}></img>
            </Box> 
    </Box> 
  )

  const handleselectsearch = () => {
    setselected(true)  
  }

  const handleleavesearch = () => {
    setselected(false)
  }

  const handleproduct = (item) => {
    navigate(`/produtoindividual/${encodeURIComponent(JSON.stringify(item))}`);
  }

  return (
    <Box sx={{ flexGrow: 1}}>
        <Box position="static"  sx={{background: "#1A65A4"}}>
            <Toolbar sx={styles.firsttoolbar}>
              <Box sx={{...styles.firstitemfirsttoolbar,
                    ...(isSmallScreen && styles.firstitemfirsttoolbarsmall),
                    ...(isExtraSmallScreen && styles.firstitemfirsttoolbarextrasmall) }}>
                {( isSmallScreen || isExtraSmallScreen ) ? (
                 contasmall
                ):(
                  <>
                  <img
                      src={logo}
                      width={210}
                      height={42}
                      alt="profile picture"
                      onClick={() => window.location.href = "/"}
                      style={{cursor:"pointer"}}
                    />
                  </>   
                )
                }
                <Box sx={styles.mainsearch} onMouseEnter={handleselectsearch}
                      onMouseLeave={handleleavesearch}>
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon style={{ color: "#344054"}} />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Pesquisa os nossos produtos"
                      inputProps={{ "aria-label": "search" }}
                      onChange={handleSearchChange}    
                      value={searchValue}
                    />    
                  </Search>  
                  {(search.length > 0 || isselected) ?(
                    <Box sx={{
                      ...styles.searchbar,
                      ...isSmallScreen && styles.searchbarsmall,
                      ...isExtraSmallScreen && styles.searchbarextrasmall,
                      zIndex: isOpenLogin || isOpenForgotpassword || isOpenRegister || isOpenEndereco || isOpenEnderecoadd || isOpenconta ? 0 : 2,
                    }}>
                      {search.slice(0, 4).map((item, index) => (
                        <Box sx={{display:"flex",flexDirection:"column",gap:"10px"}} onClick = {(e) =>handleproduct(item)}>
                          <Text  style={{...styles.acontainer,gap:"5px",padding:"0px",marginRight:"0.5rem",marginLeft:"0.5rem"}} id='aheader'>
                            Produto: {item[3]}
                          </Text>
                        </Box>   
                      ))}    
                    </Box>
                  ):null
                  } 
                </Box>  
              </Box>
            {logout}
            <ReactModal
                isOpen={isOpenLogin}
                onRequestClose={() => setIsOpenLogin(false)}
                contentLabel="Login Modal"
                style={styles.popup}
              >
              <button 
                onClick={() => setIsOpenLogin(false)} 
                  style={{
                    cursor:'pointer',
                    position: 'absolute', // Position the button absolutely
                    top: '10px', // Position from the top
                    right: '10px', // Position from the right
                    background: 'transparent',
                    color:'#344054', // Optionally make the button background transparent
                    border: 'none',
                    zIndex:2 // Optionally remove the button border
                  }}
                >
                <FontAwesomeIcon size="2x" icon={faTimes} />
                </button>
                <Login onRequestClose={() => setIsOpenLogin(false)} />
            </ReactModal>
            <ReactModal
              isOpen={isOpenRegister}
              onRequestClose={() => setIsOpenRegister(false)}
              contentLabel="Register Modal"
              style={styles.popup}
            >
              <button 
                onClick={() => setIsOpenRegister(false)} 
                style={{
                  cursor:'pointer',
                  position: 'absolute', // Position the button absolutely
                  top: '10px', // Position from the top
                  right: '10px', // Position from the right
                  background: 'transparent',
                  color:'#344054', // Optionally make the button background transparent
                  border: 'none',
                  zIndex:2 // Optionally remove the button border
                }}
              >
                <FontAwesomeIcon size="2x" icon={faTimes} />
              </button>
              <Register onRequestClose={() => setIsOpenRegister(false)} />
            </ReactModal>
            <ReactModal
              isOpen={isOpenForgotpassword}
              onRequestClose={() => setIsOpenForgotpassword(false)}
              contentLabel="Forgot Password Modal"
              style={styles.popup}
            >
              <button 
                onClick={() => setIsOpenForgotpassword(false)} 
                style={{
                  cursor:'pointer',
                  position: 'absolute', // Position the button absolutely
                  top: '10px', // Position from the top
                  right: '10px', // Position from the right
                  background: 'transparent',
                  color:'#344054', // Optionally make the button background transparent
                  border: 'none',
                  zIndex:2 // Optionally remove the button border
                }}
              >
                <FontAwesomeIcon size="2x" icon={faTimes} />
              </button>
              <ForgotPassword onRequestClose={() => setIsOpenForgotpassword(false)} />
            </ReactModal>
            <ReactModal
              isOpen={isOpenconta}
              onRequestClose={() => setIsOpenconta(false)}
              contentLabel="Conta Modal"
              style={styles.popupconta}
            >
              <button 
                onClick={() => setIsOpenconta(false)} 
                style={{
                  cursor:'pointer',
                  position: 'absolute', // Position the button absolutely
                  top: '10px', // Position from the top
                  right: '10px', // Position from the right
                  background: 'transparent',
                  color:'#344054', // Optionally make the button background transparent
                  border: 'none',
                  zIndex:2 // Optionally remove the button border
                }}
              >
                <FontAwesomeIcon size="2x" icon={faTimes} />
              </button>
              <Conta onRequestClose={() => setIsOpenconta(false)} />
            </ReactModal>
            <ReactModal                 
              isOpen={isOpenEndereco}
              onRequestClose={() =>setIsOpenEndereco(false)}
              contentLabel="Endereco Modal"
              style={styles.popupendereco}
              >
              <button 
                  onClick={() => setIsOpenEndereco(false)} 
                  style={{
                  cursor:'pointer',
                  position: 'absolute', // Position the button absolutely
                  top: '10px', // Position from the top
                  right: '10px', // Position from the right
                  background: 'transparent',
                  color:'#344054', // Optionally make the button background transparent
                  border: 'none',
                  zIndex:2 // Optionally remove the button border
                  }}
              >
              <FontAwesomeIcon size="2x" icon={faTimes} />
              </button>
            <Endereco onRequestClose={() => setIsOpenEndereco(false)} />
            </ReactModal>
            <ReactModal
                isOpen={isOpenEnderecoadd}
                onRequestClose={() =>setIsOpenEnderecoadd(false)}
                contentLabel="Endereco Modal"
                style={styles.popupendereco}
                >
                <button 
                    onClick={() => setIsOpenEnderecoadd(false)} 
                    style={{
                    cursor:'pointer',
                    position: 'absolute', // Position the button absolutely
                    top: '10px', // Position from the top
                    right: '10px', // Position from the right
                    background: 'transparent',
                    color:'#344054', // Optionally make the button background transparent
                    border: 'none',
                    zIndex:2 // Optionally remove the button border
                    }}
                >
                <FontAwesomeIcon size="2x" icon={faTimes} />
                </button>
                <Enderecomain onRequestClose={() => setIsOpenEnderecoadd(false)} />
            </ReactModal> 
            </Toolbar>       
        </Box >
        {(isExtraSmallScreen|| isSmallScreen) && isHoveredprodu &&  (
          <View  style={[styles.container_cont,isHoveredprodu && styles.containerHovered, { width: "100%",borderRadius:"2px" } ]}>
                <Link  style={styles.acontainer} id='aheader'to="/produtos/Pesquisa">Pesquisa de Produtos</Link>  
                <Link  style={styles.acontainer} id='aheader'to="/produtos/Pesquisa">Catálogo de Produtos</Link>  
                <Link style={styles.acontainer} id='aheader' to="/suportemanutenção?page=1">Serviços de Suporte/Manutenção</Link>
              <Link style={styles.acontainer} id='aheader' to="/softwarefaturação">Serviços de Faturação</Link>
              <Link style={styles.acontainer} id='aheader' to="/perdirorçamento">Pedir orçamento</Link> 
              <Link style={styles.acontainer} id='aheader' to="/sobrenós">Sobre nós </Link>
          </View>
        )}  
        <Box  sx={{ background: "white" ,boxShadow: '0 0 30px rgba(0, 0, 0, 0.2)'}}>
          <Toolbar  sx={{...styles.secondtoolbar,
                      ...(isSmallScreen && styles.secondtoolbarsmall),
                      ...(isExtraSmallScreen && styles.secondtoolbarsmall)  }}>
            {menutoolbar}
            <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: "flex", alignItems: "center",gap: "50px" ,zIndex: isOpenLogin || isOpenForgotpassword || isOpenRegister || isOpenEndereco || isOpenEnderecoadd || isOpenconta  ? 0 : 1}}>
              <View  style={[styles.container]} onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}>
                  <Link style={{ color: "black",textDecorationLine:"none"}} >
                      Contactos
                      <i className="fa fa-caret-down" style={{marginLeft:"0.5rem"}} ></i>
                  </Link>
                  <View  style={[styles.container_cont,isHovered && styles.containerHovered]}>  
                      <Link style={styles.acontainer} id='aheader' to="https://wa.me/351967687915">
                          <i style={{marginTop:"0.2rem"}} className="fas fa-phone" width="21px" height="21px"  ></i>
                          <p style={{margin:0}}>(+351) 966218628</p>
                      </Link>
                      <Link style={styles.acontainer} id='aheader' to="mailto:loja2@inforsystem.net">
                          <i style={{marginTop:"0.2rem"}} className="fas fa-envelope" width="21px" height="24px"   ></i>
                          <p style={{margin:0}} >loja2@inforsystem.net</p>
                      </Link>
                  </View>
              </View>
              <Link style={{ textDecorationLine:"none" }} id='aheader' to="/sobrenós">
                Sobre nós
              </Link> 
              <Link style={{ textDecorationLine:"none"}} id='aheader' to="/perdirorçamento">
                Pedir orçamento
              </Link> 
            </Box>
          </Toolbar>
        </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  produtosmenu:{
    color: "black",textDecorationLine:"none",display:"flex",alignItems:"center",gap:"15px"
  },
  container:{
      position: "relative",
      display: "inline-block",
  },
  popup:{
    overlay: {
      backgroundColor: 'rgba(0,0,0,0.5)', 
      backdropFilter: 'blur(10px)', // This line adds the blur effect
    },
    content : {
    position: 'relative',
    top: '50%',
    left: '50%',
    right : 'auto',
    bottom : 'auto',
    width:"1000px",
    transform : 'translate(-50%, -50%)',
    backgroundColor : '#fff', 
    borderRadius:'6px',
    paddingBottom:'5rem',
    padding:'0',
    border: 0,
    zIndex:2
    }
  },
  popupconta:{
    overlay: {
      backgroundColor: 'rgba(0,0,0,0.5)', 
    },
    content : {
    position: 'relative',
    inset:0,
    marginLeft:"auto",
    width:"380px",
    height:"100%",
    backgroundColor : '#fff', 
    borderRadius:'6px',
    padding:'0',
    border: 0,
    zIndex:2
    }
  },
  popupendereco:{
    overlay: {
      backgroundColor: 'rgba(0,0,0,0.5)', 
    },
    content : {
    position: 'relative',
    top: '50%',
    left: '50%',
    right : 'auto',
    bottom : 'auto',
    width:"800px",
    transform : 'translate(-50%, -50%)',
    backgroundColor : '#fff', 
    borderRadius:'6px',
    paddingBottom:'2rem',
    padding:'0',
    border: 0,
    zIndex:2
    }
  },
  searchbar:{
    position: 'absolute',   
    marginLeft: `1.5rem`,
    top: '94%', 
    border:"1px solid black",
    left: 0, 
    right: 0,
    width: "41.1ch", 
    backgroundColor: "#EBEBEB", 
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  searchbarextrasmall:{
    marginLeft: `0rem`,
  },
  searchbarsmall:{
    marginLeft: `0rem`,
    width: "67ch", 
  },
    mainsearch:{
      position: 'relative',
      display:"flex",
      flexDirection:"column" ,
    },
    firsttoolbar:{
      alignItems:"center",
      display:"flex",
      justifyContent:"space-between",
      maxWidth:"1800px",
      margin:"auto"
    },
    seconditemfirsttoolbar:{
      display: "flex", alignItems: "center",cursor: "pointer"
    },
    seconditemfirsttoolbarsmall:{
      display: "none"
    },
    firstitemfirsttoolbar:{
      flexDirection:"row",display:"flex"
    },
    firstitemfirsttoolbarsmall:{
      gap:"10px",
      margin:0,    
      flexDirection:"column",
      alignItems: "normal",
      marginBottom:"20px",
      marginTop:"10px",
    },
    firstitemfirsttoolbarextrasmall:{
      gap:"10px",
      marginLeft:"auto",
      marginRight:"auto",
      flexDirection:"column",
      marginBottom:"20px",
      marginTop:"10px",
      alignItems: "normal",
    },
    secondtoolbar:{
      marginLeft:"auto",
      marginRight:"auto",
      alignItems:"center",
      display:"flex",
      justifyContent:"space-between",
      maxWidth:"1800px", 
    },
    secondtoolbarsmall:{
      display:"none",
    },
    container_cont:{
        display: "none",
        position: "absolute",
        backgroundColor: "white",
        minWidth: "115px",
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 8,
        },
        shadowOpacity: 0.2,
        shadowRadius: 16,
        paddingRight:"20px",
        borderRadius:"5px",  
    },
     acontainer: {
        display: "flex",
        gap:"7px",
        fontSize:"16px",
        marginLeft:"1rem",
        alignItems:"center",
        textDecorationLine:"none",
        marginTop:"0.5rem",
        padding: "3px",
        marginBottom:"0.5rem",
        cursor:"pointer"
      }, 
      containerHovered: {
        display: "block",
        zIndex:2
      },
      textdefault:{
        fontSize:"16px",
        fontFamily:"K2D",
        color:"white"
      }
});
