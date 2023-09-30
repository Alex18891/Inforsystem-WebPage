import { useState,useEffect } from "react";
import React from 'react'
import { useNavigate,useLocation,Link } from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";
import {View, Text,StyleSheet} from 'react-native';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import useMediaQuery from '@mui/material/useMediaQuery';
import Checkbox from '@mui/material/Checkbox';
import { Divider } from '@mui/material';
import * as XLSX from 'xlsx';
import '../index.css';

import secondpc from "./../img/secondpc.png";

import disponivel from "./../img/disponivel.png"
import arrowright from "./../img/arrowright.png"
import arrowabove from "./../img/arrowabove.png"
import arrowleft from "./../img/arrowleft.png"

export default function Computadores() {
    const isExtraSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));
    const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.between('md', 'lg'));
    const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.between('lg', 'xl'));
    const isExtraLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('xl'));
    const itemsPerPage = 16;
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const [pcs, setpcs] = useState([]);
    const [pcsfilter, setpcsfilter] = useState([]);
    const [specif,setspecif] = useState([]);
    const [speciffilter,setspeciffilter] = useState([]);;
    const [proce,setprocessador] = useState([]);
    const [capa,setcapacidade] = useState([]);
    const [memo,setmemoria] = useState([]);
    const [checkboxproce,setcheckboxproc] = useState(Array(proce.length).fill(false));
    const [checkboxcapacity,setcheckboxcapacity] = useState(Array(capa.length).fill(false));
    const [checkboxmemo,setcheckboxmemo] = useState(Array(capa.length).fill(false));
    const [maxpages, setmaxpages] = useState([]);
    const [maxpagesfilter, setmaxpagesfilter] = useState([]);
    const pageNumber = queryParams.get("page");
    const itemsToShow = pcs.slice(((parseInt(pageNumber, 10) ) - 1) * itemsPerPage, (parseInt(pageNumber, 10) ) * itemsPerPage);
    const specifItemsToShow = specif.slice(((parseInt(pageNumber, 10) ) - 1) * itemsPerPage, (parseInt(pageNumber, 10) ) * itemsPerPage);
    const [filtro, setfiltro] = useState(false);

    const renderLinks = () => {
        let elements = [];
        for (let i = 0; i < maxpages; i++) {
          let currentNumber = 1 + i;
          if (currentNumber <= maxpages && currentNumber <= 7) {
            elements.push(
              <Link to={`/computadores?page=${currentNumber}`} id='aheader' key={currentNumber}>
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
        const response = await fetch("/data/Comp_Filtros.xlsx");
        const blob = await response.blob();
        const reader = new FileReader();
    
        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        
            if (jsonData && jsonData.length > 0) {
                const PCs = jsonData.filter(row => row[1] === "PCs");
                const combinedspecarray = Array.from(new Set(
                    [
                        ...PCs,
                    ]
                )) 
                //console.log(PCs.map(value=>value[3]))
                setpcs(combinedspecarray)
                setpcsfilter(combinedspecarray)
                const specificationseach = combinedspecarray.map(value=>value[3].split(','));

                const processador = Array.from(new Set(specificationseach.map(value=>value[0])));
                let capacidade = []
                let memoria = []
                specificationseach.map((value)=>{
                        if (value.some((element) => {
                            if(element.includes("SSD"))
                            {
                                if (!capacidade.includes(element)) {
                                    capacidade.push(element);
                                }       
                            }
                            else if(element.includes("DDR") || element.includes("MHz")){
                               
                                if (!memoria.includes(element)) {
                                    memoria.push(element);
                                }
                            }
                        }))
                         {           
                    }
                })
               
                //const memoria = Array.from(new Set(specificationseach.map(value=>value[2])));
                setprocessador(processador);
                setmemoria(memoria);
                setcapacidade(capacidade);
                setspecif(specificationseach);
                setspeciffilter(specificationseach)
                const maxPages = Math.ceil(combinedspecarray.length / itemsPerPage);
                setmaxpages(maxPages)
                setmaxpagesfilter(maxPages)
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

    useEffect(() => {
        const filterBySelectedCheckboxes = () => {
            return pcsfilter.filter(item => {
                for (let i = 0; i < checkboxproce.length; i++) {
                    if (checkboxproce[i] && item[3].split(',')[0] === proce[i]) {
                        return true;  // Return true and all the elements contained in the condiction
                    }
                }
                return false;  // No matching checkbox found for this item
            });
        };
        const deduplicated = Array.from(new Set(filterBySelectedCheckboxes().map(JSON.stringify))).map(JSON.parse);
        console.log(deduplicated);
        if (deduplicated.length > 0) {
            const maxPages = Math.ceil(deduplicated.length / itemsPerPage);
            setmaxpages(maxPages);
            setpcs(deduplicated);
            navigate('?page=1');
        } else {
            setpcs(pcsfilter);
            setmaxpages(maxpagesfilter);
            navigate('?page=1');
        }
    
    }, [checkboxproce, proce, pcsfilter]);
    
    const procefunction = (event,index) =>{ 
        const updatedCheckboxes = [...checkboxproce];
        updatedCheckboxes[index] = event.target.checked;
        setcheckboxproc(updatedCheckboxes)    
    }

    useEffect(() => {
        const filterBySelectedCheckboxes = () => {
            return pcsfilter.filter(item => {
                for (let i = 0; i < checkboxcapacity.length; i++) {
                    if (checkboxcapacity[i] && (item[3].split(',')[0] === capa[i] || item[3].split(',')[1] === capa[i] || item[3].split(',')[5] === capa[i] || item[3].split(',')[3] === capa[i] || item[3].split(',')[4] === capa[i] || item[3].split(',')[2] === capa[i] )) {
                        return true;  // Return true and all the elements contained in the condiction
                    }
                }
                return false;  // No matching checkbox found for this item
            });
        };
        const deduplicated = Array.from(new Set(filterBySelectedCheckboxes().map(JSON.stringify))).map(JSON.parse);
        const specificationseach = deduplicated.map(value=>value[3].split(','));
        console.log(deduplicated);
        console.log(specificationseach);
        if (deduplicated.length > 0) {
            const maxPages = Math.ceil(deduplicated.length / itemsPerPage);
            setmaxpages(maxPages);
            setspecif(specificationseach);
            setpcs(deduplicated);
            navigate('?page=1');
        } else {
            setpcs(pcsfilter);
            setspecif(speciffilter)
            setmaxpages(maxpagesfilter);
            navigate('?page=1');
        }
    
    }, [checkboxcapacity, capa, pcsfilter]);

    const capacityfunction = (event,index) =>{ 
        const updatedCheckboxes = [...checkboxcapacity];
        updatedCheckboxes[index] = event.target.checked;
        setcheckboxcapacity(updatedCheckboxes)    
    }

    useEffect(() => {
        const filterBySelectedCheckboxes = () => {
            return pcsfilter.filter(item => {
                for (let i = 0; i < checkboxmemo.length; i++) {
                    if (checkboxmemo[i] && (item[3].split(',')[0] === memo[i] || item[3].split(',')[5] === memo[i] || item[3].split(',')[3] === memo[i] || item[3].split(',')[2] === memo[i] || item[3].split(',')[4] === memo[i])) {
                        console.log(item)
                        return true;  // Return true and all the elements contained in the condiction
                    }
                }
                return false;  // No matching checkbox found for this item
            });
        };
        const deduplicated = Array.from(new Set(filterBySelectedCheckboxes().map(JSON.stringify))).map(JSON.parse);
        const specificationseach = deduplicated.map(value=>value[3].split(','));
        console.log(deduplicated);
        console.log(specificationseach);
        if (deduplicated.length > 0) {
            const maxPages = Math.ceil(deduplicated.length / itemsPerPage);
            setmaxpages(maxPages);
            setspecif(specificationseach);
            setpcs(deduplicated);
            navigate('?page=1');
        } else {
            setpcs(pcsfilter);
            setspecif(speciffilter)
            setmaxpages(maxpagesfilter);
            navigate('?page=1');
        }
    
    }, [checkboxmemo, memo, pcsfilter]);

    const memofunction = (event,index) =>{ 
        const updatedCheckboxes = [...checkboxmemo];
        updatedCheckboxes[index] = event.target.checked;
        setcheckboxmemo(updatedCheckboxes)    
    }

    const handleproduct = (item) =>
    {
        navigate(`/produtoindividual/${encodeURIComponent(JSON.stringify(item))}`)
    }

    const commonContainer1 = (
        <Box  sx={styles.container1}>
        <Box sx={[styles.viewcontainer,{paddingLeft:"0"}]}>      
            <Box sx={styles.containerfeaturesmainproduct}>  
               <Box sx={styles.containermenu}>
               <Box sx={styles.titlemenu}>
                   <Text style={styles.textdefault2}>
                       <span style={{color:"black"}}>Processador</span> 
                   </Text>
                   <img src={arrowabove} width={30} height={30}></img>
               </Box>
               <Divider style={{border:0, borderTop:'1px solid rgba(52, 64, 84, 0.3)',width:"100%",marginBottom:"0.5rem"}}/>
               <Box sx={styles.containerfeatures}>
                   {
                       pcs.length>0 &&(
                           proce.map((pc, index) => (
                               <Box sx = {styles.menuflex}> 
                               <Checkbox sx={{padding:"0"}} checked={checkboxproce[index]} onChange={(e) => procefunction(e, index)} />
                               <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                   {proce[index]}
                               </Text>
                               </Box>
                           ))
                   )}
               </Box>     
               </Box> 
               <Box sx={styles.containermenu}>
                   <Box sx={styles.titlemenu}>
                       <Text style={styles.textdefault2}>
                           <span style={{color:"black"}}>Capacidade</span> 
                       </Text>
                       <img src={arrowabove} width={30} height={30}></img>
                   </Box>
                   <Divider style={{border:0, borderTop:'1px solid rgba(52, 64, 84, 0.3)',width:"100%",marginBottom:"0.5rem"}}/>
                   <Box sx={styles.containerfeatures}>
                       {
                           pcs.length>0 &&(
                               capa.map((pc, index) => (
                                   <Box sx = {styles.menuflex}> 
                                   <Checkbox sx={{padding:"0"}} checked={checkboxcapacity[index]} onChange={(e) => capacityfunction(e, index)} />
                                   <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                       {capa[index]}
                                   </Text>
                                   </Box>    
                           ))
                       )}
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
                       {
                           pcs.length>0 &&(
                               memo.map((pc, index) => (  
                                <Box sx = {styles.menuflex}> 
                                <Checkbox sx={{padding:"0"}} checked={checkboxmemo[index]} onChange={(e) => memofunction(e, index)} />
                                <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                    {memo[index]}
                                </Text>
                                </Box>       
                           ))
                       )}
                   </Box>     
               </Box>
            </Box>        
        </Box> 
       </Box>
    )

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
                        <Link id='aheader' style={{fontSize: "20px",zIndex:-1}} to='/produtos/Pesquisa'>   &nbsp;  \  &nbsp; Produtos  &nbsp;  \  &nbsp;   </Link> 
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
                            (isSmallScreen || isExtraSmallScreen) && (
                                <>
                                    <Box sx ={{textAlign:"right"}}>  
                                        <Button sx={ filtro? { ...styles.buttoncontainer, backgroundColor: '#1B64A7',color:"white"}: styles.buttoncontainer} onClick={(e) => setfiltro(prevFiltro => !prevFiltro)}>Mostrar filtros</Button> 
                                    </Box> 
                                    {filtro ? commonContainer1 : null}
                                </>  
                            )}
                             {!isSmallScreen && !isExtraSmallScreen && commonContainer1}        
                    </Box>       
                    <Box  sx={{...styles.container1,
                    ...(isExtraLargeScreen && styles.container1extralarge),
                    ...(isLargeScreen && styles.container1large), 
                    ...(isMediumScreen && styles.container1medium), 
                    ...(isSmallScreen && styles.container1small), 
                    ...(isExtraSmallScreen && styles.container1extrasmall)}}>
                        {pcs.length>0 &&(
                                itemsToShow.map((pc, index) => (
                                        <Box sx={styles.viewcontainer} onClick = {(e) =>handleproduct(pc)}>
                                        <Box sx={styles.containerfeaturesmainproduct}> 
                                            <Box sx={styles.containerfeaturesproduts}> 
                                                <img
                                                    src={secondpc}
                                                    style={{maxWidth:"180px"}}
                                                ></img>
                                            </Box>
                                            <Box sx={styles.containerfeatures}>
                                                <Text style={[styles.textdefault2]} key={index}>
                                                    {pc[3]}   
                                                </Text>
                                                <Text style={[styles.textdefault,{fontSize:"13px"}]}>Ref: {pc[2]} </Text>  
                                                {specifItemsToShow[index] && (
                                                    <>
                                                        <Text>Processador: {specifItemsToShow[index][0]}</Text>
                                                        {
                                                            specifItemsToShow[index][3] && specifItemsToShow[index][3].includes("SSD") ? (
                                                                <>
                                                                    <Text>Capacidade: {specifItemsToShow[index][3]}</Text> 
                                                                    <Text>RAM: {specifItemsToShow[index][2]}</Text>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <Text>Capacidade: {specifItemsToShow[index][2]}</Text> 
                                                                    <Text>RAM: {specifItemsToShow[index][3]}</Text>
                                                                </>
                                                            )
                                                        }       
                                                    </>           
                                                )}           
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
                                    <Link  to={`/computadores?page=${parseInt(pageNumber, 10) - 1}`} id='aheader' >
                                        <img src={arrowleft} height={10}></img>
                                        <img src={arrowleft} height={10}></img>
                                    
                                    </Link> 
                                )}  
                                {renderLinks()}
                                {parseInt(pageNumber, 10) < maxpages && maxpages>7 && (
                                    <Link  to={`/computadores?page=${parseInt(pageNumber, 10) + 1}`} id='aheader' >
                                        
                                        <img src={arrowright} height={10}></img>
                                        <img src={arrowright} height={10}></img>
                                       
                                    </Link> 
                                )}                           
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
        marginTop:"0.5rem",
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
        cursor:"pointer"
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