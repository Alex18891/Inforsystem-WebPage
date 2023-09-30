import { useState, useEffect,useRef,useContext } from "react";
import { useNavigate,Link,useLocation} from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";
import {View, Text,StyleSheet} from 'react-native';
import Box from "@mui/material/Box";
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import { Divider,FormControl } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactModal from 'react-modal';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import '../index.css';
import axios from 'axios'
import onetopic from "./../img/onetopic.png"
import twotopic from "./../img/twotopic.png"
import threetopic from "./../img/threetopic.png"
import firstorçamento from "./../img/firstorçamento.png"
import secondorçamento from "./../img/secondorçamento.png"
import thirdorçamento from "./../img/thirdorçamento.png"
import fourthorçamento from "./../img/fourthorçamento.png"
import buy from "./../img/return.png"
import { allCountries as countryRegionData } from 'country-region-data'
import {calling} from './callingcodes'
import Checkbox from '@mui/material/Checkbox';
import { PopupContext } from './popupcontext';
import Endereco from "./Endereco.js";
import Enderecomain from "./Enderecomain.js";
import secondpc from "./../img/secondpc.png";

export default function Orcamento() {
    const isExtraSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));
    const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.between('md', 'lg'));
    const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.between('lg', 'xl'));
    const isExtraLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('xl'));
    const [title,settitle] = useState('');
    const [carta,setcarta] = useState('');
    const [checkedService, setCheckedService] = useState(null);
    const [checkboxterm, setcheckboxterm] = useState(null);
    const navigate = useNavigate();
    const {isOpenEndereco, setIsOpenEndereco,isOpenEnderecoadd, setIsOpenEnderecoadd } = useContext(PopupContext);
    const userInfo = JSON.parse(localStorage.getItem('userinfo'));
    console.log(userInfo)
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }
    const email = getCookie('email');

    const  orcamento =  (event) =>{
        event.preventDefault();
        console.log("top")
        const country = userInfo.country
        const state = userInfo.state
        const morada = userInfo.morada
        const nome = userInfo.name
        const cdpt = userInfo.cdpt
        const telefone = userInfo.telefone
        const ncontribuinte = userInfo.ncontribuinte
        axios.post('http://localhost:8080/pedirorcamento',{title,checkedService,country,state,cdpt,morada,nome,telefone,email,ncontribuinte}).then(res=>{
            console.log(res)
            console.log(res.data.message)
        }).catch(err => console.log(err));
          
    }
    
    const endereco = () =>{
        setIsOpenEnderecoadd(true)
    }

    const services = [
        'Reparação de Computadores',
        'Reparação de Impressoras',
        'Alojamentos de serviços Web',
        'Remoção de vírus',
        'Instalação de sistema operativo',
        'Adquirir produto da nossa loja'
    ];

    return (
        <>
            <Header></Header>
            <Box sx={{maxWidth:"1800px",  margin:"auto",paddingLeft:"0.5rem",paddingRight:"0.5rem"}}>
                <Box sx={{...styles.container,
                  marginBottom:0,
                  marginTop:"2rem",
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
                            <Text style={{fontSize: "20px",zIndex:-1}}>   \  Pedir orçamento </Text>  
                            </Box>
                        </Box>   
                        <Text style={{...styles.textdefault3,
                             ...(isSmallScreen && {textAlign:"center"}),
                             ...(isExtraSmallScreen && {textAlign:"center"})
                        }}>
                            <span style={{fontWeight:"bold"}}>Pedir</span> Orçamento
                        </Text>
                </Box>
                    <Text style={{
                        ...styles.textdefault3,
                        fontSize:"25px",
                        fontWeight:"bold",
                        ...(isSmallScreen ? styles.textdefault3small : {}),
                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                    }}>
                        <p style={{marginBottom:"0.5rem",marginTop:"0.5rem"}}>Conheça os procedimentos</p>
                    </Text> 
                    <Box  sx={{...styles.container1,
                    ...(isExtraLargeScreen && styles.container1extralarge),
                    ...(isLargeScreen && styles.container1large), 
                    ...(isMediumScreen && styles.container1medium), 
                    ...(isSmallScreen && styles.container1small), 
                    ...(isExtraSmallScreen && styles.container1extrasmall)}}>   
                        <Box sx={{...styles.viewcontainer}}>
                            <Box sx={styles.imgcontainerflex}>
                                <img style={styles.imgcontainer} src={firstorçamento} ></img>
                            </Box>              
                            <Box sx={styles.containerfeaturesmainproduct}> 
                                <Box sx={styles.containerfeatures}>
                                    <Text style={{
                                        ...styles.textdefault3,
                                        fontSize:"22px",
                                        fontWeight:"bold",
                                        textAlign:"center",
                                        ...(isSmallScreen ? styles.textdefault3small : {}),
                                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                                    }}>
                                        Pedir orçamento
                                    </Text>       
                                    <Text style={[styles.textdefault,{fontSize:"13px"}]}>Faça o seu pedido de orçamento através do preenchimento do formulário.</Text>   
                                </Box>
                            </Box>
                        </Box> 
                        <Box sx={styles.viewcontainer}>
                            <Box sx={styles.imgcontainerflex}>
                                <img style={styles.imgcontainer} src={secondorçamento} ></img>
                            </Box>   
                            <Box sx={styles.containerfeaturesmainproduct}>    
                                <Box sx={styles.containerfeatures}>
                                    <Text style={{
                                        ...styles.textdefault3,
                                        fontSize:"22px",
                                        fontWeight:"bold",
                                        textAlign:"center",
                                        ...(isSmallScreen ? styles.textdefault3small : {}),
                                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                                    }}>
                                        Receber e-mail 
                                    </Text>       
                                    <Text style={[styles.textdefault,{fontSize:"13px"}]}>Após preencher os dados, vai receber um email de confirmação.</Text>   
                                </Box>
                            </Box>
                        </Box> 
                        <Box sx={styles.viewcontainer}>
                            <Box sx={styles.imgcontainerflex}>
                                <img style={styles.imgcontainer} src={thirdorçamento} ></img>
                            </Box>
                            <Box sx={styles.containerfeaturesmainproduct}> 
                                <Box sx={styles.containerfeatures}>
                                    <Text style={{
                                        ...styles.textdefault3,
                                        fontSize:"22px",
                                        fontWeight:"bold",
                                        textAlign:"center",
                                        ...(isSmallScreen ? styles.textdefault3small : {}),
                                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                                    }}>
                                        Validar orçamento
                                    </Text>       
                                    <Text style={[styles.textdefault,{fontSize:"13px"}]}>O orçamento será validado na nossa loja dentro de um prazo de 15 dias utéis.</Text>   
                                </Box>
                            </Box>
                        </Box> 
                        <Box sx={styles.viewcontainer}>
                            <Box sx={styles.imgcontainerflex}>
                                <img style={styles.imgcontainer} src={fourthorçamento} ></img>
                            </Box>
                            <Box sx={styles.containerfeaturesmainproduct}> 
                                <Box sx={styles.containerfeatures}>
                                    <Text style={{
                                        ...styles.textdefault3,
                                        fontSize:"22px",
                                        fontWeight:"bold",
                                        textAlign:"center",
                                        ...(isSmallScreen ? styles.textdefault3small : {}),
                                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                                    }}>
                                        Finalizar pedido
                                    </Text>       
                                    <Text style={[styles.textdefault,{fontSize:"13px"}]}>Na etapa final, o seu pedido será realizado pela nossa loja e enviado para o endereço 
                                    fornecido.</Text>   
                                </Box>
                            </Box>
                        </Box> 
                    </Box>     
                    <FormControl style={{...styles.formularioproduto,
                        ...(isMediumScreen && styles.formularioprodutosmedium),
                        ...(isSmallScreen && styles.formularioprodutosmall),
                        ...(isExtraSmallScreen && styles.formularioprodutosmall) }} component="form" onSubmit={orcamento}>
                        <Box>
                            <Text style={{
                                ...styles.textdefault3,
                                fontSize:"25px",
                                fontWeight:"bold",
                                ...(isSmallScreen ? styles.textdefault3small : {}),
                                ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                            }}>
                                <p style={{marginBottom:"0.5rem",marginTop:"0.5rem"}}>Formulário</p>
                            </Text>       
                            <Text style={{
                                ...styles.textdefault3,
                                fontSize:"20px",
                                ...(isSmallScreen ? styles.textdefault3small : {}),
                                ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                            }}>
                                <p style={{marginBottom:"0.5rem",marginTop:"0.5rem"}}>Preencha o formulário</p>
                            </Text>     
                            <Box sx={{...styles.container,
                                ...(isSmallScreen && {marginLeft:"auto",marginRight:"auto"}),
                                ...(isExtraSmallScreen && {marginLeft:"auto",marginRight:"auto"}),
                                alignItems:"left",  
                                }} >       
                                <Box style={{...styles.contentmain,
                                            ...(isExtraLargeScreen && styles.contentmainlarge),
                                            ...(isLargeScreen && styles.contentmainlarge),
                                            ...(isMediumScreen && styles.contentmainmedium),
                                            ...(isSmallScreen && styles.contentmainsmall),
                                            ...(isExtraSmallScreen && styles.contentmainsmall)}}>   
                                    <Box style={styles.contentflex}>
                                        <Box style={styles.titleflex}> 
                                            <img
                                                width={30}
                                                height={30}
                                                src={onetopic}               
                                            ></img>
                                            <Text style={{
                                                ...styles.textdefault3,
                                                fontSize:"27px",
                                                margin:0,
                                                ...(isSmallScreen ? styles.textdefault3small : {}),
                                                ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                                            }}>
                                                <p style={{marginBottom:"0.5rem",marginTop:"0.5rem"}}>Diga o que precisa</p>
                                            </Text>
                                        </Box>
                                        <Box style={{display:"flex", flexDirection:"column",gap:"15px"}}>
                                            <Box sx={{...styles.pesquisarow,
                                                ...(isSmallScreen && styles.pesquisarowsmall),
                                                ...(isExtraSmallScreen && styles.pesquisarowsmall)
                                            }}>
                                                <Text style={{
                                                        ...styles.textdefault3,
                                                        fontSize:"22px",
                                                    }}>
                                                        Título do pedido
                                                </Text>
                                                <input
                                                    type="text"
                                                    required
                                                    value={title}
                                                    placeholder="Título*"
                                                    title="The fill of this camp is mandatory"
                                                    onChange={(e)=>settitle(e.target.value)}
                                                    style={{...styles.inputtext,height:"20px"}}  
                                                    /> 
                                            </Box>
                                            <Box sx={{...styles.pesquisarow,
                                                ...(isSmallScreen && styles.pesquisarowsmall),
                                                ...(isExtraSmallScreen && styles.pesquisarowsmall)
                                            }}>
                                                <Text style={{
                                                        ...styles.textdefault3,
                                                        fontSize:"22px",  
                                                    }}>
                                                        Descrição do pedido (Opcional)
                                                </Text>
                                                <textarea
                                                    style={{...styles.inputtext,height:"100px",resize: "none"}}  
                                                    value={carta}
                                                    placeholder="Descrição do seu pedido"
                                                    onChange={(e)=>setcarta(e.target.value)}
                                                >     
                                                </textarea>
                                            </Box>
                                
                                        </Box>     
                                    </Box>               
                                    <Box style={styles.contentflex}>
                                        <Box style={styles.titleflex}> 
                                            <img
                                                width={30}
                                                height={30}
                                                src={twotopic}               
                                            ></img>
                                            <Text style={{
                                                ...styles.textdefault3,
                                                fontSize:"27px",
                                                margin:0,
                                                ...(isSmallScreen ? styles.textdefault3small : {}),
                                                ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                                            }}>
                                                <p style={{marginBottom:"0.5rem",marginTop:"0.5rem"}}>Endereço</p>
                                            </Text>
                                        </Box>
                                            {userInfo && (
                                                <Box style={styles.contentflex}>
                                                    <Box sx={{...styles.pesquisarow,
                                                        ...(isSmallScreen && styles.pesquisarowsmall),
                                                        ...(isExtraSmallScreen && styles.pesquisarowsmall)
                                                    }}>
                                                        <Box sx = {{...styles.contactosflexrow,
                                                        ...(isSmallScreen && styles.contactosflexrowsmall),
                                                        ...(isExtraSmallScreen && styles.contactosflexrowsmall)
                                                        }}>
                                                            <Box style={styles.contactosflexcolumn} >
                                                                <Text style={{                                      
                                                                    ...styles.textdefault3,
                                                                    fontSize:"22px",
                                                                    margin:0,
                                                                    color:"black"
                                                                }}>
                                                                    <p style={{marginBottom:"0.5rem",marginTop:"0.5rem"}}>{userInfo.name}</p>
                                                                </Text>
                                                            </Box>
                                                            <Box style={styles.contactosflexcolumn} >
                                                                <Text style={{                                      
                                                                    ...styles.textdefault3,
                                                                    fontSize:"22px",
                                                                    margin:0,
                                                                    color:"black"
                                                                }}>
                                                                    <p style={{marginBottom:"0.5rem",marginTop:"0.5rem"}}>{userInfo.telefone}</p>
                                                                </Text>
                                                            </Box>
                                                        
                                                        </Box>              
                                                    </Box>
                                                    <Box sx={{...styles.pesquisarow,
                                                        ...(isSmallScreen && styles.pesquisarowsmall),
                                                        ...(isExtraSmallScreen && styles.pesquisarowsmall),
                                                        
                                                    }}>
                                                        <Box sx = {{...styles.contactosflexrow,
                                                        justifyContent:"space-between",
                                                        ...(isSmallScreen && styles.contactosflexrowsmall),
                                                        ...(isExtraSmallScreen && styles.contactosflexrowsmall)
                                                        }}>
                                                                <Text style={{...styles.textdefault4, maxWidth:"270px"}} >
                                                                    {userInfo.morada}, 
                                                                </Text>

                                                            <Box >
                                                                <Text  onClick= {endereco} style={{...styles.textdefaultblue, maxWidth:"270px"}} >
                                                                    Mudar
                                                                </Text>
                                                                <ReactModal
                                                                    
                                                                    isOpen={isOpenEndereco}
                                                                    onRequestClose={() =>setIsOpenEndereco(false)}
                                                                    contentLabel="Endereco Modal"
                                                                    style={styles.popup}
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
                                                                    style={styles.popup}
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
                                                            </Box>
                                                        </Box>   
                                                        <Box sx = {{...styles.contactosflexrow,
                                                        justifyContent:"space-between",
                                                        ...(isSmallScreen && styles.contactosflexrowsmall),
                                                        ...(isExtraSmallScreen && styles.contactosflexrowsmall)
                                                        }}> 
                                                            <Text style={{...styles.textdefault4, maxWidth:"270px"}} >
                                                            {userInfo.state}, {userInfo.cdpt} 
                                                            </Text>
                                                        </Box> 
                                                    </Box>     
                                                </Box> 
                                            )}    
                                    </Box>                      
                                </Box>
                              
                            </Box>    
                        </Box>
                        <Box>
                        <Box sx={{...styles.container,
                                ...(isSmallScreen && {marginLeft:"auto",marginRight:"auto"}),
                                ...(isExtraSmallScreen && {marginLeft:"auto",marginRight:"auto"}),
                                alignItems:"left",  
                                }} >       
                                    <Box style={styles.contentflex}>
                                        <Box style={styles.titleflex}> 
                                            <img
                                                width={30}
                                                height={30}
                                                src={threetopic}               
                                            ></img>
                                            <Text style={{
                                                ...styles.textdefault3,
                                                fontSize:"27px",
                                                margin:0,
                                                ...(isSmallScreen ? styles.textdefault3small : {}),
                                                ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                                            }}>
                                                <p style={{marginBottom:"0.5rem",marginTop:"0.5rem"}}>Escolha o serviço</p>
                                            </Text>
                                        </Box>
                                        <input type="hidden" required value={checkedService} />
                                        <Box style={{display:"flex", flexDirection:"column",gap:"15px"}}>
                                                <Box  sx={{ ...styles.pesquisarow, ...(isSmallScreen && styles.pesquisarowsmall), ...(isExtraSmallScreen && styles.pesquisarowsmall)}}>
                                                    <Text style={{ ...styles.textdefault3, fontSize: "22px" }}>
                                                        Que serviço precisa?
                                                    </Text>
                                                    {services.map((service)=>(
                                                        <Box key = {service} sx={[styles.boxcontainer, { flexDirection: 'row', margin: 0, alignItems: "center", marginLeft: "-0.6rem" }]}>
                                                            <Checkbox required={checkedService === null ? true  : false}  onChange={() => setCheckedService(service)} checked={checkedService === service} />
                                                            <Text style={styles.textdefault4} >
                                                                {service}
                                                            </Text>
                                                        </Box>
                                                    ))}  
                                                </Box>                         
                                        </Box>
                                    </Box> 
                                    <Box style={{...styles.contentflex,marginTop:"1rem",}}>
                                        <Text style={ {...styles.textdefault4,fontSize:"13px"}} >
                                            Nota: Em caso de adquirir um produto na nossa loja, indique no título o que deseja.          
                                        </Text> 
                                        <Box sx = {[styles.boxcontainer,{flexDirection:'row',alignItems:"center",marginLeft:"-0.6rem",marginTop:0,marginBottom:0}]}> 
                                            <Checkbox required value={checkboxterm} onChange={(e) => setcheckboxterm(e.target.checked)}/>
                                            <Text style={ {...styles.textdefault4,fontSize:"13px"}} >
                                                LI E ACEITO OS <span><Link to="/termoseserviços" style={{color:"#1B64A7",fontFamily: 'Montserrat',cursor:"pointer", textDecorationLine:"none"}}>TERMOS E CONDIÇÕES</Link> </span>E CONFIRMO QUE COMPREENDO A <span><Link to="/políticadeprivacidade" style={{color:"#1B64A7",fontFamily: 'Montserrat',cursor:"pointer", textDecorationLine:"none"}}>POLÍTICA DE PRIVACIDADE</Link> </span>        
                                            </Text>  
                                        </Box>
                                        
                                    </Box>   
                                    <Box style={styles.contentflex}>
                                        <Box sx = {{...styles.boxcontainer,
                                                    marginBottom:"1rem"}}>
                                            <Button type="submit"  startIcon={<img src={buy} alt="description"/>} disabled={!checkboxterm}  sx={styles.buttoncontainer} >PEDIR ORÇAMENTO</Button>
                                        </Box>   
                                    </Box>            
                            </Box>     
                        </Box>                                   
                    </FormControl>                              
            </Box> 
            <Footer></Footer>
        </>
    );
}

const styles = StyleSheet.create({
    imgcontainerflex:{
        alignItems: 'stretch',height: '55%', display: 'flex'
    },
    popup:{
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
    imgcontainer:{
        resizeMode: 'cover' ,
        width: '100%', // or any width you prefer
    },
    precoflexcolumn:{
        display:"flex",
        flexDirection:"column",
        gap:"5px"
    },
    precoflexrow:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    produtosflexboxdes:{
        display:"flex",flexDirection:"row",gap:"15px",alignItems:"center"
    },
    produtosmenurow:{
        display:"flex",flexDirection:"column",gap:"10px"
    },
    formularioproduto:{
        display:"flex",
        flexDirection:"row",
        gap:"170px"
    },
    formularioprodutosmall:{
        display:"flex",
        flexDirection:"column",
        gap:"20px",
        alignItems:"center"
    },
    formularioprodutosmedium:{
        display:"flex",
        flexDirection:"column",
        gap:"20px",
        alignItems:"center"
    },
    container1:{
        display:"grid",
        marginTop:"2rem",
        gap:"50px",
    },
    container1large:{
        display:"grid",
        gridTemplateRows: "auto auto auto",
        gridTemplateColumns:"auto auto auto",
    },
    container1extralarge:{
        display:"grid",
        gridTemplateColumns:"auto auto auto auto", 
    },
    container1medium:{
        display:"grid",
        gridTemplateRows: "auto auto",
        gridTemplateColumns:"auto auto auto",
    },
    container1small:{
        display:"flex",
        flexDirection:"column",
        width:"60%",
        margin:"auto"
    },
    container1extrasmall:{
        display:"flex",
        flexDirection:"column",
        width:"60%",
        margin:"auto"
    },
    boxcontainer:{
        display:"flex",
        flexDirection:"column",
        textAlign:"left",
    },

    pesquisarow:{
        display:"flex",flexDirection:"column",gap:"5px"
    },
    pesquisarowsmall:{
        width: "100%"
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
    contentmain:{
        display: "flex",
        minWidth:"700px",
    },
    contentmainlarge:{
        flexDirection:"column",
        gap:"20px",
    },
    contentmainsmall:{
        display: "flex",
        flexDirection:"column",
        gap:"20px",
        width:"100%",
    },
    contentmainmedium:{
        display: "flex",
        flexDirection:"column",
        gap:"20px",
    },
    inputtext:{
        borderRadius:"4px",
        paddingLeft:"0.3rem",
        border:"0.5px solid #98A2B3",
        fontFamily: 'Montserrat',
        fontSize:"12px", 
      }, 
    contentflex:{
        display:"flex",
        flexDirection:"column",
        gap:"5px",
    },
    titleflex:{
        display:"flex",
        flexDirection:"row",
        gap:"10px",
        alignItems:"center"
    },
    container:{
        display:'flex',
        flexDirection:'column',
        marginBottom:"2rem",  
    },   
    containerfeatures:{
        marginTop:"0.5rem",
        display:"flex",
        flexDirection:"column",
        marginBottom:"0.5rem",
        gap:"10px",
        alignItems:"left",
        textAlign:"center",
    },
    containerfeaturesproduts:{       
        textAlign:"center"
    },
    viewcontainer:{ 
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)', 
        marginBottom:"2rem",
        marginTop:"1rem",
        maxWidth:"600px"
    },
    containerfeaturesmainproduct:
    {
        background: "white",
        alignItems:"center",
        justifyContent:"center",
        padding:"1rem"
    },
    textlowdescription:{
        marginBottom:"0.5rem",marginTop:"0.5rem",textAlign:"left"
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
    color:"#368CD6",
    fontWeight:"bold",
    },
    textdefault2small:{
    textAlign:"center"
    },
    textdefault2extrasmall:{
        textAlign:"center"
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
    textdefault4:{
        fontSize:"17px",
        fontFamily: 'Montserrat',
      },   
      textdefaultblue:{
        fontSize:"17px",
        fontFamily: 'Montserrat',
        color:"#1B64A7",
        fontWeight:"900",
        cursor: "pointer"
      },
    buttoncontainer:{
        backgroundColor:"#1B64A7",
        color:"white",
        fontFamily: 'K2D',
        fontSize:"23px",
        paddingTop:"0.2rem",
        paddingBottom:"0.2rem",
        borderRadius:"6px",
        '&:hover': {
            backgroundColor: '#134b7c',
          },
          '&:disabled': {
            color:"white",
            backgroundColor: '#134b7c',
        },
    },
});