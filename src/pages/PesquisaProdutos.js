import { useState, useEffect } from "react";
import { useNavigate,Link,useLocation} from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";
import {View, Text,StyleSheet} from 'react-native';
import Box from "@mui/material/Box";
import useMediaQuery from '@mui/material/useMediaQuery';
import '../index.css';
import arrowright from "./../img/arrowright.png"
import arrowleft from "./../img/arrowleft.png"



export default function PesquisaProdutos() {
    const isExtraSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));
    const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.between('md', 'lg'));
    const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.between('lg', 'xl'));
    const isExtraLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('xl'));
    const itemsPerPage = 15;
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const allsearch = JSON.parse(localStorage.getItem('filtersearch'));
    console.log(allsearch)
    const maxpages = localStorage.getItem('maxPages');
    const pageNumber = queryParams.get("page");
    const itemsToShow = allsearch.slice(((parseInt(pageNumber, 10) ) - 1) * itemsPerPage, (parseInt(pageNumber, 10) ) * itemsPerPage);
    const [isHoveredrepaircomponents, setIsHoveredrepaircomponents] = useState(false);
    const [isHoveredrepairremovalvirus, setIsHoveredrepairremovalvirus] = useState(false);
    const [isHoveredrepairinstaso, setIsHoveredrepairinstaso] = useState(false);
    const navigate = useNavigate();

    const renderLinks = () => {
        let elements = [];
        for (let i = 0; i < maxpages; i++) {
          let currentNumber = 1 + i;
          if (currentNumber <= maxpages && currentNumber <= 7) {
            elements.push(
              <Link to={`/produtos/Pesquisa/produtosencontrados?page=${currentNumber}`} id='aheader' key={currentNumber}>
                {currentNumber}
                <Text>&nbsp; | </Text>
              </Link>
            );
          }     
        } 
        return elements;
      };
    
 

    return (
        <>
            <Header></Header>
            {allsearch.length>0 && (  
                <Box sx={{maxWidth:"1800px", margin:"auto", paddingLeft:"0.5rem", paddingRight:"0.5rem"}}>
                     <Box sx={{
                         ...styles.container,
                         ...(isSmallScreen && styles.containersmall),
                         ...(isExtraSmallScreen && styles.containerextrasmall),
                     }}>
                    <Box>
                        <Box style={{
                            ...styles.textdefault,
                            maxWidth: "1800px",  
                            ...(isSmallScreen ? styles.textdefaultsmall : {}),
                            ...(isExtraSmallScreen ? styles.textdefaultextrasmall : {})
                        }}>
                            <Link id='aheader' style={{fontSize: "20px",zIndex:-1}} to='/'>Página Inicial</Link>  
                            <Link id='aheader' style={{fontSize: "20px",zIndex:-1}} to='/produtos/Pesquisa/'> &nbsp;  \  &nbsp; Pesquisa  &nbsp;  \  &nbsp;   </Link>     
                            <Text style={{fontSize: "20px",zIndex:-1}}>Produtos encontrados</Text>   
                        </Box>
                    </Box>
                    <Text style={{
                        ...styles.textdefault3,
                        ...(isSmallScreen ? styles.textdefault3small : {}),
                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                    }}>
                        <span style={{fontWeight:"bold"}}>Produtos</span> encontrados
                    </Text>
                        {allsearch.length>1 ?(
                            <Text style={[styles.textdefault, { fontSize:"14px"}]}>
                            Foram encontrados <span style={{fontWeight:"bold"}}>{allsearch.length}</span> resultados
                            </Text>
                        ):(
                            <Text style={[styles.textdefault, { fontSize:"14px"}]}>
                            Foi encontrado <span style={{fontWeight:"bold"}}>{allsearch.length}</span> resultado
                            </Text> 
                        )  
                        }
                         <Box  sx={{...styles.container1,
                                     marginTop:"1rem",
                                     marginBottom:"1rem",
                                     ...(isExtraLargeScreen && styles.container1extralarge && {gridTemplateRows: "auto auto auto",
                                     gridTemplateColumns:"auto auto auto"} ),
                                     ...(isLargeScreen && styles.container1large && {gridTemplateRows: "auto auto",
                                     gridTemplateColumns:"auto auto"}), 
                                     ...(isMediumScreen && styles.container1medium && {gridTemplateRows: "auto",
                                     gridTemplateColumns:"auto"}), 
                                     ...(isSmallScreen && styles.container1small), 
                                     ...(isExtraSmallScreen && styles.container1extrasmall)}}>
                                 {itemsToShow.map(item => (
                                     <Box sx={[styles.viewcontainer, {margin:0}]}>
                                         <Box sx={styles.containerfeaturesmainproduct}>
                                             <Box sx={[styles.containerfeatures, {marginRight:"50px", marginLeft:"50px"}]}>
                                                 <Text style={[styles.textdefault, {margin:"0", fontSize:"14px"}]}>
                                                     Marca: {item[0]}
                                                 </Text>
                                                 <Text style={[styles.textdefault, {margin:"0", fontSize:"14px"}]}>
                                                     Família: {item[1]}
                                                 </Text>
                                                 <Text style={[styles.textdefault, {margin:"0", fontSize:"14px"}]}>
                                                     Referência: {item[2]}
                                                 </Text>
                                                 <Text style={[styles.textdefault, {margin:"0", fontSize:"14px"}]}>
                                                     Descrição: {item[3]}
                                                 </Text>
                                                 {/* ... and other texts related to the item */}
                                             </Box>
                                         </Box>
                                     </Box>   
                                 ))}
                                <Box sx={styles.pages}>
                                    <Box sx={styles.pagesflex}>
                                        {parseInt(pageNumber, 10) <= maxpages && parseInt(pageNumber, 10) > 1 && (
                                            <Link  to={`/produtos/Pesquisa/produtosencontrados?page=${parseInt(pageNumber, 10) - 1}`} id='aheader' >
                                                <img src={arrowleft} height={10}></img>
                                                <img src={arrowleft} height={10}></img>
                                            
                                            </Link> 
                                        )}  
                                        {renderLinks()}
                                        {parseInt(pageNumber, 10) < maxpages && maxpages>7 && (
                                            <Link  to={`/produtos/Pesquisa/produtosencontrados?page=${parseInt(pageNumber, 10) + 1}`} id='aheader' >
                                                
                                                <img src={arrowright} height={10}></img>
                                                <img src={arrowright} height={10}></img>
                                            
                                            </Link> 
                                        )}                           
                                    </Box>
                                </Box>
                             </Box>
                     </Box>
                 </Box>   
            )}   
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