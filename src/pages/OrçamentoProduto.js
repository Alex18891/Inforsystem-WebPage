import { useState, useEffect,useRef,useContext } from "react";
import { useNavigate,Link,useLocation, useParams} from "react-router-dom";
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
import firstorçamento from "./../img/firstorçamento.png"
import secondorçamento from "./../img/secondorçamento.png"
import thirdorçamento from "./../img/thirdorçamento.png"
import fourthorçamento from "./../img/fourthorçamento.png"
import buy from "./../img/return.png"
import { PopupContext } from './popupcontext';
import secondpc from "./../img/secondpc.png";
import { useUser } from '../UserProvider';

export default function OrcamentoProduto() {
    const isExtraSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));
    const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.between('md', 'lg'));
    const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.between('lg', 'xl'));
    const isExtraLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('xl'));
    const [title,settitle] = useState('');
    const [carta,setcarta] = useState('');
    const [familia,setfamilia] = useState([]);
    const checkedService = "Adquirir produto da nossa loja";
    const userInfo = JSON.parse(localStorage.getItem('userinfo'));
    const {item: itemstring} = useParams();
    const search = JSON.parse(itemstring);
    console.log(search)
    const navigate = useNavigate();
    const {userid,email } = useUser();
    const {isOpenEndereco, setIsOpenEndereco,isOpenEnderecoadd, setIsOpenEnderecoadd,setIsOpenLogin } = useContext(PopupContext);


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

    const  orcamento =  (event) =>{
        event.preventDefault();
        const country = userInfo.country
        const state = userInfo.state
        const morada = userInfo.morada
        const nome = userInfo.name
        const cdpt = userInfo.cdpt
        const telefone = userInfo.telefone
        const ncontribuinte = userInfo.ncontribuinte
        let requestData = {title,checkedService,country,state,cdpt,morada,nome,telefone,email,ncontribuinte}
        if(checkedService =="Adquirir produto da nossa loja")
        {
            requestData.newParameter = search
        }
        axios.post('http://localhost:8080/pedirorcamento',requestData).then(res=>{
            console.log(res)
            console.log(res.data.message)
        }).catch(err => console.log(err));
      
    }
    
    const endereco = () =>{
        if(!userid)
        {
            setIsOpenLogin(true)
        }
        else{
            setIsOpenEnderecoadd(true)
        }
        
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
                    <FormControl component="form" onSubmit={orcamento} sx={{...styles.formularioproduto,
                            ...(isMediumScreen && styles.formularioprodutosmedium),
                            ...(isSmallScreen && styles.formularioprodutosmall),
                            ...(isExtraSmallScreen && styles.formularioprodutosmall)}}>            
                            <Box sx={{...styles.container,
                                ...(isSmallScreen && {width:"70%",marginLeft:"auto",marginRight:"auto"}),
                                ...(isExtraSmallScreen && {width:"70%",marginLeft:"auto",marginRight:"auto"}),
                                alignItems:"left",  
                                }} > 
                  
                                        <Text style={{
                                        ...styles.textdefault3,
                                        fontSize:"25px",
                                        fontWeight:"bold",
                                        ...(isSmallScreen ? styles.textdefault3small : {}),
                                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                                    }}>
                                        Formulário
                                    </Text>       
                                    <Text style={{
                                        ...styles.textdefault3,
                                        fontSize:"20px",
                                        ...(isSmallScreen ? styles.textdefault3small : {}),
                                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                                    }}>
                                        Preencha o formulário
                                    </Text>
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
                                            {(userInfo)  ?(
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
                                                    }}>
                                                            <Text style={{...styles.textdefault4, maxWidth:"270px"}} >
                                                                {userInfo.morada}, 
                                                            </Text>

                                                        <Box >
                                                            <Text  onClick= {endereco} style={{...styles.textdefaultblue, maxWidth:"270px"}} >
                                                                Mudar
                                                            </Text>
                                                    
                                                        </Box>
                                                    </Box>   
                                                    <Box sx = {{...styles.contactosflexrow,
                                                    justifyContent:"space-between",
                                                    ...(isSmallScreen && styles.contactosflexrowsmall),
                                                    ...(isExtraSmallScreen && styles.contactosflexrowsmall)
                                                    }}> 
                                                        <Text style={{...styles.textdefault4, maxWidth:"470px"}} >
                                                        {userInfo.state}, {userInfo.country}, {userInfo.cdpt} 
                                                        </Text>
                                                    </Box> 
                                                </Box>     
                                            </Box> 
                                            ):(
                                                <Box style={styles.contentflex}>
                                                    <Box sx={{...styles.pesquisarow,
                                                        ...(isSmallScreen && styles.pesquisarowsmall),
                                                        ...(isExtraSmallScreen && styles.pesquisarowsmall)
                                                    }}>
                                                            <Box >
                                                                <Text  onClick= {endereco} style={{...styles.textdefaultblue, color:"black", maxWidth:"270px"}} >
                                                                    Adicionar Endereço
                                                                </Text>     
                                                            </Box>         
                                                    </Box>
                                                </Box>
                                            )}     
                                        </Box>
                                    </Box> 
                            </Box>
                      <Box>
                        <Text style={{
                            ...styles.textdefault3,
                            fontSize:"25px",
                            fontWeight:"bold",
                            ...(isSmallScreen ? styles.textdefault3small : {}),
                            ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                        }}>
                            <p style={{marginBottom:"0.5rem",marginTop:"0.5rem"}}>Resumo do pedido</p>
                        </Text>       
                        <Text style={{
                            ...styles.textdefault3,
                            fontSize:"20px",
                            ...(isSmallScreen ? styles.textdefault3small : {}),
                            ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                        }}>
                            <p style={{marginBottom:"0.5rem",marginTop:"0.5rem"}}>Confirme os seus dados</p>
                        </Text>  
                        <Box sx={{...styles.container,
                                ...(isSmallScreen && {width:"70%",marginLeft:"auto",marginRight:"auto"}),
                                ...(isExtraSmallScreen && {width:"70%",marginLeft:"auto",marginRight:"auto"}),
                                 }}>
                        <Box sx={styles.viewcontainer}>
                            <Box sx={styles.containerfeaturesmainproduct}> 
                                <Box sx={styles.containerfeatures}>
                                    <Text style={{
                                            ...styles.textdefault3,
                                            fontSize:"23px",
                                            fontWeight:"bold",
                                            ...(isSmallScreen ? styles.textdefault3small : {}),
                                            ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                                        }}>
                                        <p style={{marginBottom:"0.5rem",marginTop:"0.5rem"}}>{familia}: <span style={{fontWeight:"normal"}}> {search[1] !== "PCs_Acessórios" && `${search[1].replace(/_/g, ' ')}`} </span></p>
                                    </Text>
                                    <Box sx={styles.produtosmenurow}>
                                        <img src={secondpc} style={{maxWidth:"180px"}} >
                                        </img>
                                        <Box sx={styles.containerfeatures}>
                                            <Box sx={styles.produtosflexboxdes}>
                                                <Text style={[styles.textdefault2,{fontSize:"22px",margin:0}]}>
                                                    <span style={{color:"black"}}>Descrição:</span> 
                                                </Text>
                                                <Text style={[styles.textdefault,{fontSize:"20px",margin:0,maxWidth:"480px"}]}>{search[3]} </Text>  
                                            </Box>
                                            <Box sx={styles.produtosflexboxdes}>
                                                <Text style={[styles.textdefault2,{fontSize:"22px",margin:0}]}>
                                                    <span style={{color:"black"}}>Referência:</span> 
                                                </Text>
                                                <Text style={[styles.textdefault,{fontSize:"20px",margin:0,maxWidth:"480px"}]}>{search[2]} </Text>  
                                            </Box>
                                            <Box sx={styles.produtosflexboxdes}>
                                                <Text style={[styles.textdefault2,{fontSize:"22px",margin:0}]}>
                                                    <span style={{color:"black"}}>Marca:</span> 
                                                </Text>
                                                <Text style={[styles.textdefault,{fontSize:"20px",margin:0,maxWidth:"480px"}]}>{search[0]} </Text>  
                                            </Box>
                                            <Box sx={styles.produtosflexboxdes}>
                                                <Text style={[styles.textdefault2,{fontSize:"22px",margin:0}]}>
                                                    <span style={{color:"black"}}>Preço do produto:</span> 
                                                </Text>
                                                <Text style={[styles.textdefault,{fontSize:"20px",margin:0}]}>{search[5]} €  </Text>  
                                            </Box>    
                                        </Box>      
                                    </Box>   
                                    <Text style={{
                                            ...styles.textdefault3,
                                            fontSize:"16px",
                                            ...(isSmallScreen ? styles.textdefault3small : {}),
                                            ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                                        }}>
                                        <p style={styles.textlowdescription}>O preço seu produto será analisado e cobrado depois da confirmação por email.</p>
                                    </Text>  
                                    <Box sx={styles.precoflexcolumn}>
                                        <Box sx={styles.precoflexrow}>
                                            <Text style={{
                                                ...styles.textdefault3,
                                                fontSize:"23px",
                                                ...(isSmallScreen ? styles.textdefault3small : {}),
                                                ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                                            }}>
                                            <p style={{marginBottom:"0.5rem",marginTop:"0.5rem"}}>Subtotal</p>
                                            </Text>
                                            <Text style={{
                                                ...styles.textdefault3,
                                                fontSize:"23px",
                                                ...(isSmallScreen ? styles.textdefault3small : {}),
                                                ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                                            }}>
                                            <p style={{marginBottom:"0.5rem",marginTop:"0.5rem"}}>{search[5]} €</p>
                                            </Text>
                                        </Box>
                                        <Box sx={styles.precoflexrow}>
                                            <Text style={{
                                                ...styles.textdefault3,
                                                fontSize:"23px",
                                                ...(isSmallScreen ? styles.textdefault3small : {}),
                                                ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                                            }}>
                                            <p style={{marginBottom:"0.5rem",marginTop:"0.5rem"}}>Frete</p>
                                            </Text>
                                            <Text style={{
                                                ...styles.textdefault3,
                                                fontSize:"23px",
                                                ...(isSmallScreen ? styles.textdefault3small : {}),
                                                ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                                            }}>
                                            <p style={{marginBottom:"0.5rem",marginTop:"0.5rem"}}>12€</p>
                                            </Text>
                                        </Box>
                                        <Divider style={{border:0, borderTop:'1px solid rgba(52, 64, 84, 0.3)',width:"100%"}}/>
                                        <Box sx={styles.precoflexrow}>
                                            <Text style={{
                                                ...styles.textdefault3,
                                                fontSize:"23px",
                                                fontWeight:"bold",
                                                ...(isSmallScreen ? styles.textdefault3small : {}),
                                                ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                                            }}>
                                            <p style={{marginBottom:"0.5rem",marginTop:"0.5rem"}}>Total</p>
                                            </Text>
                                            <Text style={{
                                                ...styles.textdefault3,
                                                fontSize:"23px",
                                                fontWeight:"bold",
                                                ...(isSmallScreen ? styles.textdefault3small : {}),
                                                ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                                            }}>
                                            <p style={{marginBottom:"0.5rem",marginTop:"0.5rem"}}>{Math.round(search[5] + 12)} €</p>
                                            </Text>
                                        </Box>       
                                    </Box>
                                    <Box style={styles.contentflex}>
                                            <Box sx = {{...styles.boxcontainer,
                                                        marginTop:"1rem",
                                                        marginBottom:"1rem"}}>
                                                    <Button type="submit"  startIcon={<img src={buy} alt="description"/>} disabled={!userInfo}  sx={styles.buttoncontainer} >PEDIR ORÇAMENTO</Button>
                                            </Box>        
                                            <p style={styles.textlowdescription}>Ao clicar pedir orçamento está a aceitar os nossos termos e condições e a nossa politíca de privacidade</p>         
                                        </Box>     
                                </Box>  
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
        display:"flex",flexDirection:"row",gap:"15px",alignItems:"baseline"
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
        alignItems:"strech"
    },
    formularioprodutosmedium:{
        display:"flex",
        flexDirection:"column",
        gap:"20px",
        alignItems:"strech"
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
        flex: 1
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