import { useState, useEffect,useRef } from "react";
import { useNavigate,Link,useLocation} from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";
import { Text,StyleSheet} from 'react-native';
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faExclamation} from '@fortawesome/free-solid-svg-icons'
import { faMinus} from '@fortawesome/free-solid-svg-icons'
import '../index.css';
import * as XLSX from 'xlsx';
import portateisprodutos from "./../img/portateisprodutos.png";
import pcprodutos from "./../img/pcprodutos.png";
import monitoresprodutos from "./../img/monitoresprodutos.png";
import sistemasposprodutos from "./../img/sistemasposprodutos.png";
import componentesprodutos from "./../img/componentesprodutos.png";
import tecladosratosprodutos from "./../img/tecladosratosprodutos.png";
import discosprodutos from "./../img/discosprodutos.png";
import acessoriosprodutos from "./../img/acessoriosprodutos.png";

export default function Produtos() {
    const isExtraSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));
    const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.between('md', 'lg'));
    const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.between('lg', 'xl'));
    const isExtraLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('xl'));
    const itemsPerPage = 16;
    const errRef = useRef();
    const [all, setall] = useState([]);
    const [marcasearch, setmarcasearch] = useState([]);
    const [marca, setmarca] = useState([]);
    const [familiasearch, setfamiliasearch] = useState([]);
    const [familia, setfamilia] = useState([]);
    const [refersearch, setrefersearch] = useState([]);
    const [refer, setrefer] = useState([]);
    const [descsearch, setdescsearch] = useState([]);
    const [desc, setdesc] = useState([]);
    const [error, seterror] = useState([]);
    const navigate = useNavigate();
    
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
                || row[1] === "PCs_Acessórios"
                );
                
           
                const combinedsarray = Array.from(new Set(
                    [
                        ...data,  
                    ]
                )) 
                
                const marca = combinedsarray.map(value => value[0]); 
                setmarcasearch(marca);
                const familia = combinedsarray.map(value => value[1]); 
                setfamiliasearch(familia)
                const refer = combinedsarray.map(value => value[2]); 
                setrefersearch(refer)
                const desc = combinedsarray.map(value => value[3]); 
                setdescsearch(desc)
                setall(combinedsarray)  
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

    const filter = (input,dataset)=>{
        if (input && input.length > 0) {
            return dataset.filter(item => item.includes(input));
        }
        return [];
    }

    const res = (all,i,name)=>{
        if (i && i.length > 0) {
            return all.filter(item => {
                if (name === "marca") {
                    return i.includes(item[0]);
                } else if (name === "família") {
                    return i.includes(item[1]);
                } else if (name === "referência") {
                    return i.includes(item[2]);
                } else if (name === "descrição") {
                    return i.includes(item[3]);
                }
                return false;  // default to false if no conditions are met
            });
        }
        return [];
    }

    const search = () =>{
        const mar = filter(marca, marcasearch) || [];
        const fam = filter(familia, familiasearch) || [];
        const ref = filter(refer, refersearch) || [];
        const de = filter(desc, descsearch) || [];
        const filtersearch = Array.from(new Set(
            [
                ...res(all,mar,"marca"),
                ...res(all,fam,"família"),
                ...res(all,ref,"referência"), 
                ...res(all,de,"descrição") 
            ]     
        ))
        if(filtersearch.length>0){
            seterror("")
            const maxPages = Math.ceil(filtersearch.length / itemsPerPage);
            localStorage.setItem('filtersearch', JSON.stringify(filtersearch));
            localStorage.setItem('maxPages', maxPages);
            navigate('/produtos/Pesquisa/produtosencontrados?page=1')
        }
        else{
            seterror("Não foram encontrados resultados")
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
                            <Text style={{fontSize: "20px",zIndex:-1}}>    \  Produtos  \    </Text>  
                            <Text  style={{fontSize: "20px",zIndex:-1}}>Pesquisa    </Text>   
                            </Box>
                    </Box>
                    <Text style={{
                        ...styles.textdefault3,
                        ...(isSmallScreen ? styles.textdefault3small : {}),
                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                    }}>
                        <span style={{fontWeight:"bold"}}>Produtos</span>
                    </Text>
                    <Text style={{
                        ...styles.textdefault,
                        maxWidth: "1800px",
                        ...(isSmallScreen ? styles.textdefaultsmall : {}),
                        ...(isExtraSmallScreen ? styles.textdefaultextrasmall : {})
                    }}>
                        Conheça os produtos disponíveis na loja
                    </Text>
                </Box>
                <Box sx={styles.viewcontainer}>      
                    <Box sx={styles.containerfeaturesmainproduct}> 
                        <Box sx={[styles.containerfeatures,{marginRight:"150px",marginLeft:"150px"}]}>   
                            <Text style={[
                            styles.textdefault,
                                {maxWidth: "1800px",
                                textAlign:"center",
                                marginTop:"0.5rem",
                                marginBottom:"1rem"}
                            ]}>
                                Pesquisa de Produtos
                            </Text>    
                            <Box  sx={{...styles.pesquisamain,
                            ...(isMediumScreen && styles.pesquisamainmedium), 
                            ...(isSmallScreen && styles.pesquisamainsmall), 
                            ...(isExtraSmallScreen && styles.pesquisamainextrasmall),
                            }}>  
                                <Box sx={styles.pesquisacolumn}>   
                                    <Box sx={styles.pesquisarow}>
                                        <Text style={[styles.textdefault,{fontSize:"15px",margin:0}]}>
                                                Descrição
                                        </Text>
                                        <input
                                                type="text"
                                                style={styles.inputtext}
                                                value={desc}
                                                onChange={e=>setdesc(e.target.value)}
                                                />
                                    </Box>
                                    <Box sx={styles.pesquisarow}>
                                        <Text style={[styles.textdefault,{fontSize:"15px",margin:0}]}>
                                                Referência
                                        </Text>
                                        <input
                                                type="text"
                                                style={styles.inputtext}
                                                value={refer}
                                                onChange={e=>setrefer(e.target.value)}
                                                />
                                    </Box>
                                </Box>
                                <Box sx={styles.pesquisacolumn}>   
                                    <Box sx={styles.pesquisarow}>
                                        <Text style={[styles.textdefault,{fontSize:"15px",margin:0}]}>
                                                Marca
                                        </Text>
                                        <input
                                                type="text"
                                                style={styles.inputtext}
                                                value={marca}
                                                onChange={e=>setmarca(e.target.value)}
                                                />
                                    </Box>
                                    <Box sx={styles.pesquisarow}>
                                        <Text style={[styles.textdefault,{fontSize:"15px",margin:0}]}>
                                                Família
                                        </Text>
                                        <input
                                                type="text"
                                                style={styles.inputtext}
                                                value={familia}
                                                onChange={e=>setfamilia(e.target.value)}
                                                />
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx = {[styles.boxcontainer]}> 
                                <Button sx={[styles.buttoncontainer,{}]} onClick={search}>PESQUISAR</Button>
                            </Box>
                            {error.length>0 && (
                            <Box sx = {[styles.boxcontainer,{borderRadius:"4px"}]}> 
                                <Text    ref={errRef}
                                    style={error ? styles.errmsg : styles.offscreen}
                                    aria-live="assertive" >{`${error}.`}
                                </Text>     
                          
                            </Box>       
                            )} 
                        </Box>      
                    </Box>        
                </Box> 
                <Box  sx={{...styles.container1,
                ...(isExtraLargeScreen && styles.container1extralarge),
                ...(isLargeScreen && styles.container1large), 
                ...(isMediumScreen && styles.container1medium), 
                ...(isSmallScreen && styles.container1small), 
                ...(isExtraSmallScreen && styles.container1extrasmall)}}>
                    <Box sx={styles.viewcontainer}> 
                        <Box sx={{background: "#1A65A4",borderRadius:"3px 0px"}}>
                            <Box sx={styles.containerfeaturesmainproduct}> 
                            <Box style={ {textAlign:"center"}}>
                                <Text style={[styles.textdefault,{fontSize:"20px",color:"white",zIndex:0,fontWeight:"bold"}]}>
                                    Portáteis
                                </Text>
                            </Box>    
                            </Box>  
                        </Box>     
                        <Box sx={styles.containerfeaturesmainproduct}> 
                            <Box sx={styles.containerfeatures}>
                                <Box sx={styles.produtosmenurow}>
                                    <img src={portateisprodutos}>
                                    </img>
                                    <Box sx={styles.produtosmenucolumn}>
                                        <Box sx = {[styles.boxcontainer,{flexDirection: "row",margin:0,marginTop:"1rem"}]}> 
                                            <FontAwesomeIcon icon={faMinus} style={{color: "#someColor"}} />
                                            <Link  id='aheader' style={{fontSize:"15px", fontFamily: 'Montserrat'}}>
                                                Baterias
                                            </Link>
                                        </Box>
                                        <Box sx = {[styles.boxcontainer,{flexDirection: "row",margin:0,marginTop:"0.2rem"}]}> 
                                            <FontAwesomeIcon icon={faMinus} style={{color: "#someColor"}} />
                                            <Link id='aheader' style={{fontSize:"15px", fontFamily: 'Montserrat'}}>
                                                Carregadores
                                            </Link>
                                        </Box>
                                        <Box sx = {[styles.boxcontainer,{flexDirection: "row",margin:0,marginTop:"0.2rem"}]}> 
                                            <FontAwesomeIcon icon={faMinus} style={{color: "#someColor"}} />
                                            <Link id='aheader' style={{fontSize:"15px", fontFamily: 'Montserrat'}}>
                                                Notebook
                                            </Link>
                                        </Box>
                                        <Box sx = {[styles.boxcontainer,{flexDirection: "row",margin:0,marginTop:"0.2rem"}]}> 
                                            <FontAwesomeIcon icon={faMinus} style={{color: "#someColor"}} />
                                            <Link id='aheader' style={{fontSize:"15px", fontFamily: 'Montserrat'}}>
                                                Tablet Pc
                                            </Link>
                                        </Box>
                                        <Box sx = {[styles.boxcontainer,{flexDirection: "row",margin:0,marginTop:"0.2rem"}]}> 
                                            <FontAwesomeIcon icon={faMinus} style={{color: "#someColor"}} />
                                            <Link id='aheader' style={{fontSize:"15px", fontFamily: 'Montserrat'}}>
                                                Malas e Capas
                                            </Link>
                                        </Box>
                                    </Box>       
                                </Box>     
                            </Box>      
                        </Box>   
                            
                    </Box> 
                    <Box sx={styles.viewcontainer}> 
                        <Box sx={{background: "#1A65A4",borderRadius:"3px 0px"}}>
                            <Box sx={styles.containerfeaturesmainproduct}> 
                            <Box style={ {textAlign:"center"}}>
                                <Text style={[styles.textdefault,{fontSize:"20px",color:"white",zIndex:0,fontWeight:"bold"}]}>
                                    Computadores
                                </Text>
                            </Box>    
                            </Box>  
                        </Box>     
                        <Box sx={styles.containerfeaturesmainproduct}> 
                            <Box sx={styles.containerfeatures}>
                                <Box sx={styles.produtosmenurow}>
                                    <img src={pcprodutos}>
                                    </img>
                                    <Box sx={styles.produtosmenucolumn}>
                                        <Box sx = {[styles.boxcontainer,{flexDirection: "row",margin:0,marginTop:"1rem"}]}> 
                                            <FontAwesomeIcon icon={faMinus} style={{color: "#someColor"}} />
                                            <Link  id='aheader' to="/computadores?page=1" style={{fontSize:"15px", fontFamily: 'Montserrat'}}>
                                                Computadores
                                            </Link>
                                        </Box>
                                        <Box sx = {[styles.boxcontainer,{flexDirection: "row",margin:0,marginTop:"0.2rem"}]}> 
                                            <FontAwesomeIcon icon={faMinus} style={{color: "#someColor"}} />
                                            <Link id='aheader' style={{fontSize:"15px", fontFamily: 'Montserrat'}} to="/computadoresacessórios?page=1">
                                                Computadores Acessórios
                                            </Link>
                                        </Box>
                                        <Box sx = {[styles.boxcontainer,{flexDirection: "row",margin:0,marginTop:"0.2rem"}]}> 
                                            <FontAwesomeIcon icon={faMinus} style={{color: "#someColor"}} />
                                            <Link id='aheader' to="/computadoreseacessórios?page=1" style={{fontSize:"15px", fontFamily: 'Montserrat'}}>
                                            Ver tudo
                                            </Link>
                                        </Box>
                                    </Box>       
                                </Box>     
                            </Box>      
                        </Box>            
                    </Box> 
                    <Box sx={styles.viewcontainer}> 
                        <Box sx={{background: "#1A65A4",borderRadius:"3px 0px"}}>
                            <Box sx={styles.containerfeaturesmainproduct}> 
                            <Box style={ {textAlign:"center"}}>
                                <Text style={[styles.textdefault,{fontSize:"20px",color:"white",zIndex:0,fontWeight:"bold"}]}>
                                    Monitores
                                </Text>
                            </Box>    
                            </Box>  
                        </Box>     
                        <Box sx={styles.containerfeaturesmainproduct}> 
                            <Box sx={styles.containerfeatures}>
                                <Box sx={styles.produtosmenurow}>
                                    <img src={monitoresprodutos}>
                                    </img>
                                    <Box sx={styles.produtosmenucolumn}>
                                        <Box sx = {[styles.boxcontainer,{flexDirection: "row",margin:0,marginTop:"1rem"}]}> 
                                            <FontAwesomeIcon icon={faMinus} style={{color: "#someColor"}} />
                                            <Link  id='aheader' style={{fontSize:"15px", fontFamily: 'Montserrat'}}>
                                                Monitores
                                            </Link>
                                        </Box>    
                                    </Box>       
                                </Box>     
                            </Box>      
                        </Box>            
                    </Box> 
                    <Box sx={styles.viewcontainer}> 
                        <Box sx={{background: "#1A65A4",borderRadius:"3px 0px"}}>
                            <Box sx={styles.containerfeaturesmainproduct}> 
                            <Box style={ {textAlign:"center"}}>
                                <Text style={[styles.textdefault,{fontSize:"20px",color:"white",zIndex:0,fontWeight:"bold"}]}>
                                    Sistemas Pos 
                                </Text>
                            </Box>    
                            </Box>  
                        </Box>     
                        <Box sx={styles.containerfeaturesmainproduct}> 
                            <Box sx={styles.containerfeatures}>
                                <Box sx={styles.produtosmenurow}>
                                    <img src={sistemasposprodutos}>
                                    </img>
                                    <Box sx={styles.produtosmenucolumn}>
                                        <Box sx = {[styles.boxcontainer,{flexDirection: "row",margin:0,marginTop:"1rem"}]}> 
                                            <FontAwesomeIcon icon={faMinus} style={{color: "#someColor"}} />
                                            <Link  id='aheader'  to="/posImpressoras?page=1" style={{fontSize:"15px", fontFamily: 'Montserrat'}}>
                                                POS Impressoras
                                            </Link>
                                        </Box>  
                                        <Box sx = {[styles.boxcontainer,{flexDirection: "row",margin:0,marginTop:"0.2rem"}]}> 
                                            <FontAwesomeIcon icon={faMinus} style={{color: "#someColor"}} />
                                            <Link  id='aheader' to="/posLeitorescodigobarra?page=1" style={{fontSize:"15px", fontFamily: 'Montserrat'}}>
                                                POS Leitores códigos barra
                                            </Link>
                                        </Box>   
                                        <Box sx = {[styles.boxcontainer,{flexDirection: "row",margin:0,marginTop:"0.2rem"}]}> 
                                            <FontAwesomeIcon icon={faMinus} style={{color: "#someColor"}} />
                                            <Link  id='aheader' to="/possistemaspos?page=1" style={{fontSize:"15px", fontFamily: 'Montserrat'}}>
                                                Sistemas de POS
                                            </Link>
                                        </Box>   
                                        <Box sx = {[styles.boxcontainer,{flexDirection: "row",margin:0,marginTop:"0.2rem"}]}> 
                                            <FontAwesomeIcon icon={faMinus} style={{color: "#someColor"}} />
                                            <Link  id='aheader' to="/posmonitores?page=1" style={{fontSize:"15px", fontFamily: 'Montserrat'}}>
                                                POS Monitores
                                            </Link>
                                        </Box>  
                                        <Box sx = {[styles.boxcontainer,{flexDirection: "row",margin:0,marginTop:"0.2rem"}]}> 
                                            <FontAwesomeIcon icon={faMinus} style={{color: "#someColor"}} />
                                            <Link  id='aheader' to="/posacessórios?page=1" style={{fontSize:"15px", fontFamily: 'Montserrat'}}>
                                                POS Acessórios
                                            </Link>
                                        </Box>    
                                        <Box sx = {[styles.boxcontainer,{flexDirection: "row",margin:0,marginTop:"0.2rem"}]}> 
                                            <FontAwesomeIcon icon={faMinus} style={{color: "#someColor"}} />
                                            <Link id='aheader' to="/sistemaspos?page=1" style={{fontSize:"15px", fontFamily: 'Montserrat'}}>
                                            Ver tudo
                                            </Link>
                                        </Box>
                                    </Box>       
                                </Box>     
                            </Box>      
                        </Box>            
                    </Box> 
                    <Box sx={styles.viewcontainer}> 
                        <Box sx={{background: "#1A65A4",borderRadius:"3px 0px"}}>
                            <Box sx={styles.containerfeaturesmainproduct}> 
                            <Box style={ {textAlign:"center"}}>
                                <Text style={[styles.textdefault,{fontSize:"20px",color:"white",zIndex:0,fontWeight:"bold"}]}>
                                    Componentes 
                                </Text>
                            </Box>    
                            </Box>  
                        </Box>     
                        <Box sx={styles.containerfeaturesmainproduct}> 
                            <Box sx={styles.containerfeatures}>
                                <Box sx={styles.produtosmenurow}>
                                    <img src={componentesprodutos}>
                                    </img>
                                    <Box sx={styles.produtosmenucolumn}>
                                        <Box sx = {[styles.boxcontainer,{flexDirection: "row",margin:0,marginTop:"1rem"}]}> 
                                            <FontAwesomeIcon icon={faMinus} style={{color: "#someColor"}} />
                                            <Link  id='aheader' to='/placasgráficas?page=1' style={{fontSize:"15px", fontFamily: 'Montserrat'}}>
                                                Placas Gráficas
                                            </Link>
                                        </Box>  
                                        <Box sx = {[styles.boxcontainer,{flexDirection: "row",margin:0,marginTop:"0.2rem"}]}> 
                                            <FontAwesomeIcon icon={faMinus} style={{color: "#someColor"}} />
                                            <Link  id='aheader' to="/motherboards?page=1" style={{fontSize:"15px", fontFamily: 'Montserrat'}}>
                                                Motherboards
                                            </Link>
                                        </Box> 
                                        <Box sx = {[styles.boxcontainer,{flexDirection: "row",margin:0,marginTop:"0.2rem"}]}> 
                                            <FontAwesomeIcon icon={faMinus} style={{color: "#someColor"}} />
                                            <Link  id='aheader' to="/processadores?page=1" style={{fontSize:"15px", fontFamily: 'Montserrat'}}>
                                            Processadores
                                            </Link>
                                        </Box>   
                                        <Box sx = {[styles.boxcontainer,{flexDirection: "row",margin:0,marginTop:"0.2rem"}]}> 
                                            <FontAwesomeIcon icon={faMinus} style={{color: "#someColor"}} />
                                            <Link  id='aheader' to="/componentes?page=1" style={{fontSize:"15px", fontFamily: 'Montserrat'}}>
                                                Ver tudo 
                                            </Link>
                                        </Box>  
                                    </Box>       
                                </Box>     
                            </Box>      
                        </Box>            
                    </Box> 
                    <Box sx={styles.viewcontainer}> 
                        <Box sx={{background: "#1A65A4",borderRadius:"3px 0px"}}>
                            <Box sx={styles.containerfeaturesmainproduct}> 
                            <Box style={ {textAlign:"center"}}>
                                <Text style={[styles.textdefault,{fontSize:"20px",color:"white",zIndex:0,fontWeight:"bold"}]}>
                                    Memórias 
                                </Text>
                            </Box>    
                            </Box>  
                        </Box>     
                        <Box sx={styles.containerfeaturesmainproduct}> 
                            <Box sx={styles.containerfeatures}>
                                <Box sx={styles.produtosmenurow}>
                                    <img src={componentesprodutos}>
                                    </img>
                                    <Box sx={styles.produtosmenucolumn}>
                                        <Box sx = {[styles.boxcontainer,{flexDirection: "row",margin:0,marginTop:"1rem"}]}> 
                                            <FontAwesomeIcon icon={faMinus} style={{color: "#someColor"}} />
                                            <Link  id='aheader' to='/memóriaspcs?page=1' style={{fontSize:"15px", fontFamily: 'Montserrat'}}>
                                                Memórias PCs
                                            </Link>
                                        </Box>  
                                        <Box sx = {[styles.boxcontainer,{flexDirection: "row",margin:0,marginTop:"0.2rem"}]}> 
                                            <FontAwesomeIcon icon={faMinus} style={{color: "#someColor"}} />
                                            <Link  id='aheader' to="/memóriasportáteis?page=1" style={{fontSize:"15px", fontFamily: 'Montserrat'}}>
                                                Memórias Portáteis
                                            </Link>
                                        </Box> 
                                        <Box sx = {[styles.boxcontainer,{flexDirection: "row",margin:0,marginTop:"0.2rem"}]}> 
                                            <FontAwesomeIcon icon={faMinus} style={{color: "#someColor"}} />
                                            <Link  id='aheader' to="/memóriasusb?page=1" style={{fontSize:"15px", fontFamily: 'Montserrat'}}>
                                                Memórias USB
                                            </Link>
                                        </Box> 
                                        <Box sx = {[styles.boxcontainer,{flexDirection: "row",margin:0,marginTop:"0.2rem"}]}> 
                                            <FontAwesomeIcon icon={faMinus} style={{color: "#someColor"}} />
                                            <Link  id='aheader' to="/memóriascartões?page=1" style={{fontSize:"15px", fontFamily: 'Montserrat'}}>
                                                Memórias Cartões
                                            </Link>
                                        </Box>  
                                        <Box sx = {[styles.boxcontainer,{flexDirection: "row",margin:0,marginTop:"0.2rem"}]}> 
                                            <FontAwesomeIcon icon={faMinus} style={{color: "#someColor"}} />
                                            <Link  id='aheader' to="/memóriasespecíficas?page=1" style={{fontSize:"15px", fontFamily: 'Montserrat'}}>
                                                Memórias Específicas
                                            </Link>
                                        </Box>   
                                        <Box sx = {[styles.boxcontainer,{flexDirection: "row",margin:0,marginTop:"0.2rem"}]}> 
                                            <FontAwesomeIcon icon={faMinus} style={{color: "#someColor"}} />
                                            <Link  id='aheader' to="/memórias?page=1" style={{fontSize:"15px", fontFamily: 'Montserrat'}}>
                                                Ver tudo 
                                            </Link>
                                        </Box>  
                                    </Box>       
                                </Box>     
                            </Box>      
                        </Box>            
                    </Box> 
                    <Box sx={styles.viewcontainer}> 
                        <Box sx={{background: "#1A65A4",borderRadius:"3px 0px"}}>
                            <Box sx={styles.containerfeaturesmainproduct}> 
                            <Box style={ {textAlign:"center"}}>
                                <Text style={[styles.textdefault,{fontSize:"20px",color:"white",zIndex:0,fontWeight:"bold"}]}>
                                    Teclados e Ratos
                                </Text>
                            </Box>    
                            </Box>  
                        </Box>     
                        <Box sx={styles.containerfeaturesmainproduct}> 
                            <Box sx={styles.containerfeatures}>
                                <Box sx={styles.produtosmenurow}>
                                    <img src={tecladosratosprodutos}>
                                    </img>
                                    <Box sx={styles.produtosmenucolumn}>
                                        <Box sx = {[styles.boxcontainer,{flexDirection: "row",margin:0,marginTop:"1rem"}]}> 
                                            <FontAwesomeIcon icon={faMinus} style={{color: "#someColor"}} />
                                            <Link  id='aheader' style={{fontSize:"15px", fontFamily: 'Montserrat'}}>
                                                Teclados
                                            </Link>
                                        </Box>  
                                        <Box sx = {[styles.boxcontainer,{flexDirection: "row",margin:0,marginTop:"0.2rem"}]}> 
                                            <FontAwesomeIcon icon={faMinus} style={{color: "#someColor"}} />
                                            <Link  id='aheader' style={{fontSize:"15px", fontFamily: 'Montserrat'}}>
                                                Ratos
                                            </Link>
                                        </Box> 
                                        <Box sx = {[styles.boxcontainer,{flexDirection: "row",margin:0,marginTop:"0.2rem"}]}> 
                                            <FontAwesomeIcon icon={faMinus} style={{color: "#someColor"}} />
                                            <Link  id='aheader' style={{fontSize:"15px", fontFamily: 'Montserrat'}}>
                                                Teclados + Ratos
                                            </Link>
                                        </Box>  
                                        <Box sx = {[styles.boxcontainer,{flexDirection: "row",margin:0,marginTop:"0.2rem"}]}> 
                                            <FontAwesomeIcon icon={faMinus} style={{color: "#someColor"}} />
                                            <Link  id='aheader' to="/tapetesderato?page=1" style={{fontSize:"15px", fontFamily: 'Montserrat'}}>
                                                Tapetes Ratos
                                            </Link>
                                        </Box>  
                                    </Box>       
                                </Box>     
                            </Box>      
                        </Box>      
                            
                    </Box> 
                    <Box sx={styles.viewcontainer}> 
                        <Box sx={{background: "#1A65A4",borderRadius:"3px 0px"}}>
                            <Box sx={styles.containerfeaturesmainproduct}> 
                            <Box style={ {textAlign:"center"}}>
                                <Text style={[styles.textdefault,{fontSize:"20px",color:"white",zIndex:0,fontWeight:"bold"}]}>
                                    Discos
                                </Text>
                            </Box>    
                            </Box>  
                        </Box>     
                        <Box sx={styles.containerfeaturesmainproduct}> 
                            <Box sx={styles.containerfeatures}>
                                <Box sx={styles.produtosmenurow}>
                                    <img src={discosprodutos}>
                                    </img>
                                    <Box sx={styles.produtosmenucolumn}>
                                        <Box sx = {[styles.boxcontainer,{flexDirection: "row",margin:0,marginTop:"1rem"}]}> 
                                            <FontAwesomeIcon icon={faMinus} style={{color: "#someColor"}} />
                                            <Link  id='aheader' to="/discosHDD?page=1" style={{fontSize:"15px", fontFamily: 'Montserrat'}}>
                                                Discos HDD
                                            </Link>
                                        </Box>  
                                        <Box sx = {[styles.boxcontainer,{flexDirection: "row",margin:0,marginTop:"0.2rem"}]}> 
                                            <FontAwesomeIcon icon={faMinus} style={{color: "#someColor"}} />
                                            <Link  id='aheader' to="/discosSSD?page=1" style={{fontSize:"15px", fontFamily: 'Montserrat'}}>
                                                Discos SSD
                                            </Link>
                                        </Box> 
                                        <Box sx = {[styles.boxcontainer,{flexDirection: "row",margin:0,marginTop:"0.2rem"}]}> 
                                            <FontAwesomeIcon icon={faMinus} style={{color: "#someColor"}} />
                                            <Link  id='aheader' to="/discosExternos?page=1" style={{fontSize:"15px", fontFamily: 'Montserrat'}}>
                                                Discos Externos
                                            </Link>
                                        </Box>   
                                        <Box sx = {[styles.boxcontainer,{flexDirection: "row",margin:0,marginTop:"0.2rem"}]}> 
                                            <FontAwesomeIcon icon={faMinus} style={{color: "#someColor"}} />
                                            <Link  id='aheader' to="/discos?page=1" style={{fontSize:"15px", fontFamily: 'Montserrat'}}>
                                                Ver tudo
                                            </Link>
                                        </Box> 
                                    </Box>       
                                </Box>     
                            </Box>      
                        </Box>      
                            
                    </Box> 
                    <Box sx={styles.viewcontainer}> 
                        <Box sx={{background: "#1A65A4",borderRadius:"3px 0px"}}>
                            <Box sx={styles.containerfeaturesmainproduct}> 
                            <Box style={ {textAlign:"center"}}>
                                <Text style={[styles.textdefault,{fontSize:"20px",color:"white",zIndex:0,fontWeight:"bold"}]}>
                                    Acessórios
                                </Text>
                            </Box>    
                            </Box>  
                        </Box>     
                        <Box sx={styles.containerfeaturesmainproduct}> 
                            <Box sx={styles.containerfeatures}>
                                <Box sx={styles.produtosmenurow}>
                                    <img src={acessoriosprodutos}>
                                    </img>
                                    <Box sx={styles.produtosmenucolumn}>
                                        <Box sx = {[styles.boxcontainer,{flexDirection: "row",margin:0,marginTop:"1rem"}]}> 
                                            <FontAwesomeIcon icon={faMinus} style={{color: "#someColor"}} />
                                            <Link  id='aheader' to='/coolers?page=1' style={{fontSize:"15px", fontFamily: 'Montserrat'}}>
                                                Coolers
                                            </Link>
                                        </Box>  
                                        <Box sx = {[styles.boxcontainer,{flexDirection: "row",margin:0,marginTop:"0.2rem"}]}> 
                                            <FontAwesomeIcon icon={faMinus} style={{color: "#someColor"}} />
                                            <Link  id='aheader' to='/redes?page=1' style={{fontSize:"15px", fontFamily: 'Montserrat'}}>
                                                Redes
                                            </Link>
                                        </Box> 
                                        <Box sx = {[styles.boxcontainer,{flexDirection: "row",margin:0,marginTop:"0.2rem"}]}> 
                                            <FontAwesomeIcon icon={faMinus} style={{color: "#someColor"}} />
                                            <Link  id='aheader' to='/caixas?page=1' style={{fontSize:"15px", fontFamily: 'Montserrat'}}>
                                                Caixas PC
                                            </Link>
                                        </Box>   
                                        <Box sx = {[styles.boxcontainer,{flexDirection: "row",margin:0,marginTop:"0.2rem"}]}> 
                                            <FontAwesomeIcon icon={faMinus} style={{color: "#someColor"}} />
                                            <Link  id='aheader' to='/drives?page=1' style={{fontSize:"15px", fontFamily: 'Montserrat'}}>
                                                Drives
                                            </Link>
                                        </Box>  
                                        <Box sx = {[styles.boxcontainer,{flexDirection: "row",margin:0,marginTop:"0.2rem"}]}> 
                                            <FontAwesomeIcon icon={faMinus} style={{color: "#someColor"}} />
                                            <Link  id='aheader' to="/fontesdealimentação?page=1" style={{fontSize:"15px", fontFamily: 'Montserrat'}}>
                                                Fontes de Alimentação
                                            </Link>
                                        </Box>    
                                    </Box>       
                                </Box>     
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
    offscreen: {
        display: 'none',
      },
    errmsg: {
        marginBottom: 0,
        paddingBottom:0,
        fontFamily: 'Montserrat',
        fontWeight: "bold",
        fontSize:"13px",
        color:"black",
        textAlign:"left"
    },
    container:{
        display:'flex',
        flexDirection:'column',
        marginTop:"2rem",
        marginBottom:"2rem",
    },  
    produtosmenucolumn:{
        display:"flex",flexDirection:"column",  
    },
    produtosmenurow:{
        display:"flex",flexDirection:"row",gap:"20px"
    },
    pesquisamain:{
       justifyContent:"center",gap:"30px",
       display:"grid",
       gridTemplateRows: "auto auto ",
       gridTemplateColumns:"auto auto "
    },
    pesquisamainextrasmall:{
        gridTemplateRows: "auto",
        gridTemplateColumns:"auto"
    },
    pesquisamainsmall:{
        gridTemplateRows: "auto  ",
        gridTemplateColumns:"auto  "
    },
    pesquisacolumn:{
        display:"flex",flexDirection:"column",gap:"20px",width:"300px"
    },
    pesquisarow:{
        display:"flex",flexDirection:"row",gap:"15px",alignItems:"center"
    },
    boxcontainer:{
        display:"flex",
        flexDirection:"column",
        textAlign:"left",
        gap:"5px",
        width:"auto",
        margin:"auto",
        marginTop:"15px",
        marginBottom:"15px"
    },
    inputtext:{
        borderRadius:"4px",
        paddingLeft:"0.3rem",
        border:"0.5px solid #98A2B3",
        fontFamily: 'Montserrat',
        fontSize:"12px",
        width: "100%"
      }, 
    containersmall:{
       alignItems:"center",
    },
    containerextrasmall:{
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
        padding:"0.5rem",
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
        fontSize:"13px",
        paddingTop:"0.2rem",
        paddingBottom:"0.2rem",
        borderRadius:"6px",
        '&:hover': {
            backgroundColor: '#134b7c',
          },
    },

});