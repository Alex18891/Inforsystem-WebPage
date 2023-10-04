import React from "react";
import { useState,useEffect } from "react";
import {useNavigate,useParams} from "react-router-dom";
import * as XLSX from 'xlsx';
import Button from '@mui/material/Button';
import { Text,StyleSheet} from 'react-native';
import useMediaQuery from '@mui/material/useMediaQuery';
import disponivel from "./../img/disponivel.png"
import Box from "@mui/material/Box";
import secondpc from "./../img/secondpc.png";

export default function Slider () {
    const isExtraSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));
    const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.between('md', 'lg'));
    const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.between('lg', 'xl'));
    const isExtraLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('xl'));
    const [itemsubtract, setitemsubtract]  =useState([]); 
    const [products, setProducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayProducts, setDisplayProducts] = useState([]);
    const { item: itemString } = useParams();
    const search = JSON.parse(itemString);
    const navigate = useNavigate();  

  ///FONTE E PCS ACESSORIOS DIFERENCIAR FAZER

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

    const shouldIncludeInFont = (brand, product) => {
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

    const verifyfontoracc = (brand,product)=>{
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
                || row[1] === "PCs_Acessórios" || row[1] === "SW_Servidores" || row[1] === "SW_Sistemas_Operativos"
                );

                const PCacc = jsonData.filter(row => row[1] === "PCs_Acessórios"); 
                
                const combinedsarray = Array.from(new Set(
                    [
                        ...data,  
                    ]
                )) 
                let datafilter = []
                
                combinedsarray.filter(value => {
                    if(value[1] === 'PCs_Acessórios' && value[1] === search[1] )
                    {   
                        const fontoracc = verifyfontoracc(search[0],search[3])
                        if(fontoracc === true)
                        {
                            let font = PCacc.filter(value => value[3] !== search[3] && shouldIncludeInFont(value[0], value[3]) );
                            datafilter = font
                        }
                        else{
                            let acc = PCacc.filter(value => value[3] !== search[3] && shouldIncludeInAcc(value[0], value[3]) );
                            datafilter = acc
                        }   
                    }
                    else if(value[1] === search[1] && value[3] !== search[3])
                    {
                       
                        datafilter.push(value)
                    }
                })  
                setProducts(datafilter);    
                if(isExtraLargeScreen )
                {
                    setDisplayProducts(datafilter.slice(0, 3));
                }
                else if(isLargeScreen || isMediumScreen)
                {
                    setDisplayProducts(datafilter.slice(0, 2));
                }
                else if(isSmallScreen || isExtraSmallScreen)
                {
                    setDisplayProducts(datafilter.slice(0, 1));
                }                       
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
        if(isExtraLargeScreen )
        {
            setCurrentIndex(0)
            setitemsubtract(3)
            setDisplayProducts(products.slice(0, 3));
        }
        else if(isLargeScreen || isMediumScreen)
        {
            setCurrentIndex(0)
            setitemsubtract(2)
            setDisplayProducts(products.slice(0, 2));
        }
        else if(isSmallScreen || isExtraSmallScreen)
        {
            setCurrentIndex(0)
            setitemsubtract(1)
            setDisplayProducts(products.slice(0, 1));
        }
    },[isExtraLargeScreen,isLargeScreen,isMediumScreen,isSmallScreen,isExtraSmallScreen])

    function loadNextProducts() {
        setCurrentIndex(prevIndex => {
        console.log(prevIndex)
        const nextIndex = prevIndex + itemsubtract;  //132
        console.log(nextIndex)
        if(nextIndex < products.length)
        {
            setDisplayProducts(products.slice(nextIndex, nextIndex + itemsubtract));
            return nextIndex;
        }    
        else if(nextIndex == products.length)
        {
            setDisplayProducts(products.slice(prevIndex, nextIndex));
            return nextIndex;
        }    
        });
      }

      function getDisplayedProducts(nextIndex, itemsubtract) {   
        if(nextIndex >= 0 && nextIndex < (products.length - itemsubtract) )
        {
          return products.slice(nextIndex, nextIndex + itemsubtract);
        }       
        else if(nextIndex === (products.length - itemsubtract))
        {
          return products.slice(nextIndex - itemsubtract, nextIndex);
        }
    }
      function loadpreviousProducts() {
        setCurrentIndex(prevIndex => {
          const nextIndex = prevIndex - itemsubtract;
          if (itemsubtract === 3 || itemsubtract === 2 && prevIndex !== 1 || itemsubtract === 1) 
          {
            const newDisplayedProducts = getDisplayedProducts(nextIndex, itemsubtract);
            setDisplayProducts(newDisplayedProducts);
            return nextIndex;
          }     
        });
      }
      const handleproduct = (item) => {
        navigate(`/produtoindividual/${encodeURIComponent(JSON.stringify(item))}`)
      }
 
    return(
        <Box  sx={{...styles.container1,
            ...(isExtraLargeScreen && styles.container1large),
            ...(isLargeScreen && styles.container1medium),
            ...(isMediumScreen && styles.container1medium),
            ...(isSmallScreen && styles.container1small),
            ...(isExtraSmallScreen && styles.container1small),
            }}> 
                {(currentIndex>0 && (currentIndex <= products.length))   && (
                    <Box style={{ cursor:"pointer",textAlign:"right"}} onClick={loadpreviousProducts} >
                        <Button> <i className="fas fa-arrow-left fa-4x"></i></Button>
                    </Box>         
                )}    
                {displayProducts.map(product => (
                    <Box  key={product.id} sx={{cursor:"pointer"}} onClick = {(e) =>handleproduct(product)} >
                        <Box sx={[styles.viewcontainer]}>
                            <Box sx={styles.containerfeaturesmainproduct}> 
                                <Box sx={styles.containerfeaturesproduts}> 
                                    <img
                                        src={secondpc}
                                        style={{maxWidth:"180px"}}
                                    ></img>
                                </Box>
                                <Box sx={styles.containerfeatures}>
                                    <Text style={[styles.textdefault2,{fontSize:"15px",maxWidth:"420px"}]}>
                                    {product[3]} 
                                    </Text>
                                    <Text style={[styles.textdefault,{fontSize:"13px"}]}>Ref: {product[2]}  </Text>    
                                    <Box sx={styles.disponivel}>
                                        <img
                                            src={disponivel}
                                            width={"25px"}
                                            height={"25px"}
                                            style={{marginLeft:"-0.2rem"}}
                                        ></img>
                                        <Text style={[styles.disponiveltext,{fontSize:"15px"}]}>
                                            <span style={{fontWeight:"bold"}}>Disponível</span> 
                                        </Text>
                                    </Box>
                                    <Text style={[styles.textdefault2,{fontSize:"15px",maxWidth:"420px"}]}>
                                        <span style={{color:"black"}}>{product[5]} € </span> 
                                    </Text>
                                </Box>
                            </Box>
                        </Box>  
                    </Box>
                ))} 
                {(products.length>itemsubtract && currentIndex < products.length) && (
                     <>
                     {!((currentIndex  == products.length - 1)) && !((currentIndex  == products.length - 2))  && (
                        <Box style={{ cursor:"pointer"}} onClick={loadNextProducts}>
                            <Button> <i className="fas fa-arrow-right fa-4x" ></i></Button>
                        </Box>
                     )}
                    </>    
                )}
        </Box>
    )   

}

const styles = StyleSheet.create({
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
    textdefault:{
        fontSize:"22px",
        fontFamily: 'Montserrat',
        marginBottom:"0.5rem",
        maxWidth:"420px",
        zIndex:-1
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
    disponiveltext:{
    fontSize:"24px",
    fontFamily:"K2D",
    marginBottom:"0rem",
    color:"#3CA62B",
    },
    container1:{
        marginTop:"1rem",
        marginBottom:"1rem",
        gap:"20px",
        position: 'relative',
        alignItems:"center"
    },
    container1large:{
        display:"grid",
        gridTemplateRows: "repeat(5, auto)",
        gridTemplateColumns:"repeat(5, auto)",
    },
    container1medium:{
        display:"grid",
        gridTemplateRows: "repeat(4, auto)",
        gridTemplateColumns:"repeat(4, auto)",
    },
    
    container1small:{
        display:"grid",
        gridTemplateRows: "repeat(3, auto)",
        gridTemplateColumns:"repeat(3, auto)",
    },
});