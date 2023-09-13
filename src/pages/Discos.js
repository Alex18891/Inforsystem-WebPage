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
import arrowleft from "./../img/arrowleft.png"
import arrowabove from "./../img/arrowabove.png"

export default function Discos() {
    const isExtraSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));
    const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.between('md', 'lg'));
    const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.between('lg', 'xl'));
    const isExtraLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('xl'));
    const itemsPerPage = 16;
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const [discos, setdiscos] = useState([]);
    const [discosfilter, setdiscosfilter] = useState([]);
    const [maxpages, setmaxpages] = useState([]);
    const [maxpagesfilter, setmaxpagesfilter] = useState([]);
    const [marcadiscos, setmarcadiscos] = useState([]);
    const [familydiscos, setfamilydiscos] = useState([]);
    const [checkboxmarca,setcheckboxmarca] = useState(Array(marcadiscos.length).fill(false));
    const [checkboxfamily,setcheckboxfamily] = useState(Array(familydiscos.length).fill(false));
    const pageNumber = queryParams.get("page");
    const itemsToShow = discos.slice(((parseInt(pageNumber, 10) ) - 1) * itemsPerPage, (parseInt(pageNumber, 10) ) * itemsPerPage);
    const [filtro, setfiltro] = useState(false);

    const renderLinks = () => {
        let elements = [];
        for (let i = 0; i < maxpages; i++) {
          let currentNumber = 1 + i;
          if (currentNumber <= maxpages && currentNumber <= 7) {
            elements.push(
              <Link to={`/discos?page=${currentNumber}`} id='aheader' key={currentNumber}>
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
                const discosexter = jsonData.filter(row => row[1] === "Discos_Externos");
                const discosssd = jsonData.filter(row => row[1] === "Discos_SSD");      
                const discoshdd = jsonData.filter(row => row[1] === "Discos_HDD");
                const combinedmarcaarray =Array.from(new Set(
                    [
                        ...discosexter.map(value => value[0]),
                        ...discosssd.map(value => value[0]),
                        ...discoshdd.map(value => value[0])
                    ]
                )) 
                setmarcadiscos(combinedmarcaarray)
                const combinedfamilyarray = Array.from(new Set(
                    [
                        ...discosexter.map(value => value[1].replace(/_/g, ' ')),
                        ...discosssd.map(value => value[1].replace(/_/g, ' ')),
                        ...discoshdd.map(value => value[1].replace(/_/g, ' ')),
                    ]
                ))
                setfamilydiscos(combinedfamilyarray)
                const combineddiscosarray = Array.from(new Set(
                    [
                        ...discosexter,
                        ...discosssd,
                        ...discoshdd,
                    ]
                ))
                const maxPages = Math.ceil(combineddiscosarray.length / itemsPerPage);
                setmaxpages(maxPages)
                setdiscos(combineddiscosarray)
                setdiscosfilter(combineddiscosarray)
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

    useEffect(()=>{       
        const filterBySelectedCheckboxes = () => {
            return discosfilter.filter(item=>{      //Filter the pcs by family     
                for(let i = 0; i<checkboxmarca.length;i++)//For that runs up to all the checkboxs
                {
                    console.log( marcadiscos[i])
                    if(checkboxmarca[i] && item[0] ==  marcadiscos[i])//If the checkbox is selecte and element 1 of pcsfilter array(family) is equal to the familypcs array return true
                    {    
                        return true;
                    }   
                }
                return false;
            })
        };
        const deduplicated = Array.from(new Set(filterBySelectedCheckboxes().map(JSON.stringify))).map(JSON.parse); //JSON.stringify converts all array to string to removes all the repeated arrays
        //after the JSON.parse put the array into the initial state.
        console.log(deduplicated);
        if(deduplicated.length>0)
        {
            const maxPages = Math.ceil(deduplicated.length / itemsPerPage);
            setmaxpages(maxPages);
            setdiscos(deduplicated);
            navigate('?page=1');
        }
        else{
            setdiscos(discosfilter);
            setmaxpages(maxpagesfilter);
            navigate('?page=1');
        }
      
    },[checkboxmarca, marcadiscos, discosfilter])

    const marcafunction = (event,index) =>{
        const updatedCheckboxes = [...checkboxmarca];
        updatedCheckboxes[index] = event.target.checked;
        setcheckboxmarca(updatedCheckboxes)    
    }

    useEffect(()=>{       
        const filterBySelectedCheckboxes = () => {
            return discosfilter.filter(item=>{      //Filter the pcs by family     
                for(let i = 0; i<checkboxfamily.length;i++)//For that runs up to all the checkboxs
                {
                    console.log( familydiscos[i])
                    if(checkboxfamily[i] && item[1].replace(/_/g, ' ') ==  familydiscos[i])//If the checkbox is selecte and element 1 of pcsfilter array(family) is equal to the familypcs array return true
                    {    
                        return true;
                    }   
                }
                return false;
            })
        };
        const deduplicated = Array.from(new Set(filterBySelectedCheckboxes().map(JSON.stringify))).map(JSON.parse); //JSON.stringify converts all array to string to removes all the repeated arrays
        //after the JSON.parse put the array into the initial state.
        console.log(deduplicated);
        if(deduplicated.length>0)
        {
            const maxPages = Math.ceil(deduplicated.length / itemsPerPage);
            setmaxpages(maxPages);
            setdiscos(deduplicated);
            navigate('?page=1');
        }
        else{
            setdiscos(discosfilter);
            setmaxpages(maxpagesfilter);
            navigate('?page=1');
        }
      
    },[checkboxfamily, familydiscos, discosfilter])

    const familyfunction = (event,index) =>{
        const updatedCheckboxes = [...checkboxfamily];
        updatedCheckboxes[index] = event.target.checked;
        setcheckboxfamily(updatedCheckboxes)    
    }

    const commonContainer1 = (
        <Box  sx={styles.container1}>
            <Box sx={[styles.viewcontainer,{paddingLeft:"0"}]}>      
            <Box sx={styles.containerfeaturesmainproduct}> 
               <Box sx={styles.containermenu}>
               <Box sx={styles.titlemenu}>
                   <Text style={styles.textdefault2}>
                       <span style={{color:"black"}}>Marca</span> 
                   </Text>
                   <img src={arrowabove} width={30} height={30}></img>
               </Box>
               <Divider style={{border:0, borderTop:'1px solid rgba(52, 64, 84, 0.3)',width:"100%",marginBottom:"0.5rem"}}/>
               <Box sx={styles.containerfeatures}>
                   {
                       discos.length>0  &&(
                           marcadiscos.map((pc, index) => (
                               <Box sx = {styles.menuflex}> 
                               <Checkbox sx={{padding:"0"}} checked={checkboxmarca[index]} onChange={(e) => marcafunction(e, index)} />
                               <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                   {marcadiscos[index]}
                               </Text>
                               </Box>
                           ))                                                                                                       
                   )}
                   
                      
               </Box>     
               </Box> 
               <Box sx={styles.containermenu}>
                   <Box sx={styles.titlemenu}>
                       <Text style={styles.textdefault2}>
                           <span style={{color:"black"}}>Família</span> 
                       </Text>
                       <img src={arrowabove} width={30} height={30}></img>
                   </Box>
                   <Divider style={{border:0, borderTop:'1px solid rgba(52, 64, 84, 0.3)',width:"100%",marginBottom:"0.5rem"}}/>
                   <Box sx={styles.containerfeatures}>
                       {
                           discos.length>0  &&(
                               familydiscos.map((pc, index) => (
                                   <Box sx = {styles.menuflex}> 
                                   <Checkbox sx={{padding:"0"}} checked={checkboxfamily[index]} onChange={(e) => familyfunction(e, index)} />
                                   <Text style={[styles.textdefault,{margin:"0",fontSize:"14px"}]}>
                                       {familydiscos[index]}
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
                        <Text style={{fontSize: "20px",zIndex:-1}}>    \  Produtos  \    </Text>  
                        <Text  style={{fontSize: "20px",zIndex:-1}}>Discos</Text>   
                        </Box>
                    </Box>     
                    <Text style={{
                        ...styles.textdefault3,
                        ...(isSmallScreen ? styles.textdefault3small : {}),
                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                    }}>
                        <span style={{fontWeight:"bold"}}>Discos</span>
                    </Text>
                    <Text style={{
                        ...styles.textdefault,
                        maxWidth: "1800px",
                        ...(isSmallScreen ? styles.textdefaultsmall : {}),
                        ...(isExtraSmallScreen ? styles.textdefaultextrasmall : {})
                    }}>
                        Veja os discos disponíveis na loja
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
                        {discos.length>0  &&(
                                itemsToShow.map((disco, index) => (
                                        <Box sx={styles.viewcontainer}>
                                        <Box sx={styles.containerfeaturesmainproduct}> 
                                            <Box sx={styles.containerfeaturesproduts}> 
                                                <img
                                                    src={secondpc}
                                                    style={{maxWidth:"180px"}}
                                                ></img>
                                            </Box>
                                            <Box sx={styles.containerfeatures}>
                                                <Text style={[styles.textdefault2]} key={index}>
                                                    {disco[3]}   
                                                </Text>
                                                <Text style={[styles.textdefault,{fontSize:"13px"}]}>Ref: {disco[2]} </Text>    
                                     
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
                                                    <span style={{color:"black"}}>{disco[5]} €</span> 
                                                </Text>
                                            </Box>
                                        </Box>
                                        </Box> 
                                ))
                            )}
                        <Box sx={styles.pages}>
                            <Box sx={styles.pagesflex}> 
                                {parseInt(pageNumber, 10) <= maxpages && parseInt(pageNumber, 10) > 1 && (
                                    <Link  to={`/discos?page=${parseInt(pageNumber, 10) - 1}`} id='aheader' >
                                        <img src={arrowleft} height={10}></img>
                                        <img src={arrowleft} height={10}></img>
                                    
                                    </Link> 
                                )}     
                                {renderLinks()}
                                {parseInt(pageNumber, 10) < maxpages && maxpages>7 && (
                                    <Link  to={`/discos?page=${parseInt(pageNumber, 10) + 1}`} id='aheader' >     
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