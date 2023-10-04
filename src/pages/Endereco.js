import { useState, useEffect,useRef,useContext } from "react";
import { useNavigate,Link } from "react-router-dom";
import Button from '@mui/material/Button';
import {Text,StyleSheet} from 'react-native';
import Toolbar from "@mui/material/Toolbar";
import Checkbox from '@mui/material/Checkbox';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from "@mui/material/Box";
import { Divider } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faExclamation} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { PopupContext } from './popupcontext';
import { allCountries as countryRegionData } from 'country-region-data'
import {calling} from './callingcodes'
import logo from "./../img/logo.png";
import { useUser } from '../UserProvider';

export default function Endereco() {
    const isExtraSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));
    const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.between('md', 'lg'));
    const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.between('lg', 'xl'));
    const isExtraLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('xl'));
    const errRef = useRef();
    const userInfo = JSON.parse(localStorage.getItem('userinfoselect'));
    const {isOpenEndereco, setIsOpenEndereco,isOpenEnderecoadd, setIsOpenEnderecoadd} = useContext(PopupContext);
    const [ncontribuinte,setncontribuinte] = useState(userInfo ? userInfo.ncontribuinte : '');
    const [telefone,settelefone] = useState(userInfo ? userInfo.telefone : '');
    const [morada,setmorada] = useState(userInfo ? userInfo.morada : '');
    const [country,setcountry] = useState(userInfo ? userInfo.country :'');
    const [phoneabrebiation,setphoneabrebiation] = useState('351');
    const [countryStates, setCountryStates] = useState([]);
    const [state,setstate] = useState(userInfo ? userInfo.state :'');
    const [cdpt, setcdpt] = useState(userInfo ? userInfo.cdpt : '');
    const [error,seterror] = useState([]);
    const {userid,email,name } = useUser();
    const key = Object.keys(calling)
    const value = Object.values(calling)
   
    const verifyinputs = ()=> {
        seterror([])
        if(!state)
        {
            seterror(prevvalue=>[...prevvalue, 
                "É obrigatório o preenchimento do campo localidade"])
        }
        if(!country)
        {
            seterror(prevvalue=>[...prevvalue, 
                "É obrigatório o preenchimento do campo país"])
        }
        if(!cdpt)
        {
            seterror(prevvalue=>[...prevvalue, 
                "É obrigatório o preenchimento do campo código postal"])
        }
        if(!morada)
        {
            seterror(prevvalue=>[...prevvalue, 
                "É obrigatório o preenchimento do campo morada"])
        }
        if(!telefone)
        {
            seterror(prevvalue=>[...prevvalue, 
                "É obrigatório o preenchimento do campo telefone"])
        }
        if(!ncontribuinte)
        {
            seterror(prevvalue=>[...prevvalue, 
                "É obrigatório o preenchimento do campo búmero de contribuinte"])
        }
        else if(telefone && morada && country && cdpt && state && ncontribuinte ) {
            seterror([])  
            if(!userInfo)
            {
                axios.post('http://localhost:8080/criarendereco',{userid,name,telefone,morada, country,cdpt, state,ncontribuinte})
                .then((res)=>{
                    console.log(res)
                    if(res.status === 201){  
                        console.log(res.data.message)
                        setIsOpenEnderecoadd(true)
                        setIsOpenEndereco(false);
                    }
                }
                ).catch(err => console.log(err))   
            }
            else{
                axios.put(`http://localhost:8080/alterarendereco?idadress=${userInfo._id}`,{userid,name,telefone,morada, country,cdpt, state,ncontribuinte})
                .then((res)=>{
                    console.log(res)
                    if(res.status === 201){  
                        console.log(res.data.message)
                        localStorage.setItem('userinfo',JSON.stringify(res.data.user));
                        console.log(res.data.user)
                        setIsOpenEnderecoadd(true)
                        setIsOpenEndereco(false);
                    }
                }
                ).catch(err => console.log(err))     
            }   
        }        
    }

    const countryselect = (event) =>{
        setcountry(event.target.value)
        const selectedCountry = event.target.value;
        setCountryStates([])
        console.log(countryRegionData)
        const countryAbbreviations = countryRegionData.map(country => country.countryShortCode);
        console.log(countryAbbreviations)
        countryRegionData.find(country => { 
            console.log(country[1])
            if(country[0] === selectedCountry)
            {
                country[2].map(value=>{
                    setCountryStates((prevvalue)=>[...prevvalue,value]);
                })
                for(let i = 0; i<key.length;i++)
                {  
                    if(key[i] === country[1])
                    {
                        setphoneabrebiation(value[i])
                    }
                }
            }   
        });
    }
    
    const stateselect = (event) => {
        setstate(event.target.value)
    }

    function voltar(){
        setIsOpenEndereco(false);
        setIsOpenEnderecoadd(true);
    }


    return (
        <>
           <Box  sx={styles.container}>
                <Box sx={[styles.containerfeaturesmain,{gap:"9px"}]}>  
                    <Text style={styles.textdefault} >
                    {userInfo ? "Alterar Endereço" : "Adicionar endereço"}
                    </Text>               
                </Box>
                <Box style={styles.contentflex}>
                    <Box style={styles.titleflex}> 
            
                        <Text style={[styles.textdefault1,{fontSize:"13px",marginTop:"0.5rem",marginBottom:"1rem"}]} >
                            {userInfo ? "Alterar endereço da tua conta" : "Adicionar endereço da tua conta"}
                        </Text> 
                    </Box>
                    <Box style={{display:"flex", flexDirection:"column",gap:"15px"}}>                    
                            <Box sx={{...styles.pesquisarow,
                                ...(isSmallScreen && styles.pesquisarowsmall),
                                ...(isExtraSmallScreen && styles.pesquisarowsmall)
                            }}>
                                <Text style={ styles.textdefault1}>
                                        País
                                </Text>
                                <select style={{...styles.inputtext,height:"25px"}}   required  onChange={countryselect} >
                                    <option value= {country}  selected disabled>{userInfo ? userInfo.country : "Seleciona uma opção"}</option>
                                    {countryRegionData.map((countryName) => (
                                        <option key={countryName[0]} value={countryName[0]}>
                                            {countryName[0]}
                                        </option>
                                    ))}
                                </select>
                            </Box>
                            <Box sx = {{...styles.contactosflexrow,
                                ...(isSmallScreen && styles.contactosflexrowsmall),
                                ...(isExtraSmallScreen && styles.contactosflexrowsmall)
                            }}>                            
                                <Box sx={{...styles.pesquisarow,
                                    ...(isSmallScreen && styles.pesquisarowsmall),
                                    flex:1,
                                    ...(isExtraSmallScreen && styles.pesquisarowsmall)
                                }}>
                                    <Text style={ styles.textdefault1}>
                                            Localidade
                                    </Text>
                                    <select style={{...styles.inputtext,height:"25px"}}  required  onChange={stateselect}  >
                                        <option value= {state} selected disabled>{userInfo ? userInfo.state : "Seleciona uma opção"}</option>
                                        {countryStates.length>0 && (
                                            countryStates.map((countryName) => (
                                                <option key={countryName[0]} value={countryName[0]}>
                                                    {countryName[0]}
                                                </option>
                                            ))
                                        )
                                        }       
                                    </select>
                                </Box>
                                <Box sx={{...styles.pesquisarow,
                                        ...(isSmallScreen && styles.pesquisarowsmall),
                                        ...(isExtraSmallScreen && styles.pesquisarowsmall)
                                    }}>
                                       <Text style={ styles.textdefault1}>
                                                Código Postal
                                        </Text>
                                        <input
                                        type="text"
                                        value={cdpt}
                                        required
                                        onChange={(e)=>setcdpt(e.target.value)}
                                        placeholder="Código Postal*"
                                        style={{...styles.inputtext,height:"20px"}}   
                                        /> 
                                </Box>
                            </Box>
                            <Box sx={{...styles.pesquisarow,
                                    ...(isSmallScreen && styles.pesquisarowsmall),
                                    ...(isExtraSmallScreen && styles.pesquisarowsmall)
                                }}>
                                   <Text style={ styles.textdefault1}>
                                            Morada
                                    </Text>
                                    <textarea
                                    type="text"
                                    value={morada}
                                    required
                                    onChange={(e)=>setmorada(e.target.value)}
                                    placeholder="Morada completa*"
                                    style={{...styles.inputtext,height:"40px",resize: "none"}}  
                                    /> 
                            </Box>   
                            <Box sx={{...styles.pesquisarow,
                                ...(isSmallScreen && styles.pesquisarowsmall),
                                ...(isExtraSmallScreen && styles.pesquisarowsmall)
                            }}> 
                                <Box sx = {{...styles.contactosflexrow,
                                    ...(isSmallScreen && styles.contactosflexrowsmall),
                                    ...(isExtraSmallScreen && styles.contactosflexrowsmall)
                                }}>
                                    <Box style={styles.contactosflexcolumn} >
                                        <Text style={ styles.textdefault1}>
                                                Telefone
                                        </Text>  
                                        <Box sx={{display: 'flex', alignItems: 'center', gap: '0px'}}>
                                            <input
                                                type="tel"
                                                value={phoneabrebiation}
                                                style={{...styles.inputtext,height:"20px",width:"40px"}}  
                                            />
                                            <input
                                                type="tel"
                                                value={telefone}
                                                required
                                                placeholder="Número"
                                                pattern="^[0-9-+\s()]*$"
                                                onChange={(e)=>settelefone(e.target.value)}
                                                style={{...styles.inputtext,height:"20px"}}  
                                            />
                                        </Box>
                                    </Box>
                                    <Box style={{...styles.contactosflexcolumn,flex:1}} >
                                    <Text style={ styles.textdefault1}>
                                            Nª de contribuinte
                                    </Text>
                                    <input
                                        required
                                        value={ncontribuinte}
                                        onChange={(e)=>setncontribuinte(e.target.value)}
                                        pattern="^[0-9-+\s()]*$"
                                        placeholder="Nª de contribuinte*"
                                        type="tel"
                                        style={{...styles.inputtext,height:"20px"}}    
                                        /> 
                                    </Box> 
                                </Box>
                            </Box>                                 
                    </Box>
                    <Box sx = {[styles.boxcontainer,{flexDirection:"row",gap:"10px"}]}> 
                        <Button sx={styles.buttoncomeback} onClick={voltar} >Cancelar </Button>
                        <Button sx={styles.buttoncontainer} onClick={verifyinputs}>{userInfo ? "Alterar Endereço" : "Adicionar endereço"}</Button>
                    </Box>
                    {error.length>0 && (
                    <Box sx = {[styles.boxcontainer,{backgroundColor:"rgb(254,242,242)",borderRadius:"4px",padding:"0.5rem"}]}> 
                    <Box style={{display:"flex",gap:"5px"}}>
                        <FontAwesomeIcon icon={faExclamation} style={{color: "#ac4343",}} />
                        <Text style={[styles.errmsg,{color:"rgb(172,67,67)"}]}>Foram encontrados {error.length} erro(s) de validação:</Text>
                    </Box>    
                    <Divider style={{border:0, borderTop:'1px solid rgb(211,109,109)'}}/>
                    {error.map((message, index) =>
                        <Text key={index}   ref={errRef}
                            style={error ? styles.errmsg : styles.offscreen}
                            aria-live="assertive" >{`\u2022 ${message}`}
                        </Text>     
                    )}
                    </Box>       
                )} 
                </Box>     
            </Box>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        margin:"auto",
        marginTop:"3rem",
        textAlign: 'left',
        maxWidth:"600px",
        paddingLeft:"5rem",
        paddingRight:"5rem",
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
    offscreen: {
        display: 'none',
      },
      pesquisarow:{
        display:"flex",flexDirection:"column",gap:"5px"
    },
    pesquisarowsmall:{
        width: "100%"
    },
    errmsg: {
        marginBottom: 0,
        paddingBottom:0,
        fontFamily: 'Montserrat',
        fontWeight: "bold",
        fontSize:"13px",
        color:"rgb(211,109,109)",
        textAlign:"left"
    },
    buttoncomeback:{
        color:"white",
        '&:hover': {
            backgroundColor: '#6B7280',
          },
        backgroundColor:"#a7aab0",
        fontFamily: 'K2D',
        marginTop:"0.3rem",
        fontSize:"13px",
        paddingTop:"0.2rem",
        paddingBottom:"0.2rem",
        borderRadius:"6px",
        flex:1
    },

    buttoncontainer:{
        backgroundColor:"#1B64A7",
        color:"white",
        fontFamily: 'K2D',
        marginTop:"0.3rem",
        fontSize:"13px",
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
          flex:1
    },
    textdefault:{
        fontSize:"20px",
        fontFamily: 'K2D',
        color:"#344054",
        WebkitTextStrokeWidth: '0.1px', 
      },
      textdefault1:{
        fontSize:"17px",
        fontFamily: 'Montserrat',
        color:"#344054"
      },
      boxcontainer:{
        display:"flex",
        flexDirection:"column",
        textAlign:"left",
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
    inputtext:{
        borderRadius:"4px",
        paddingLeft:"0.3rem",
        border:"0.5px solid #98A2B3",
        fontFamily: 'Montserrat',
        fontSize:"12px", 
      }, 
 
});