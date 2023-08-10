import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";
import {View, Text,StyleSheet} from 'react-native';
import Box from "@mui/material/Box";
import useMediaQuery from '@mui/material/useMediaQuery';

import examplepromotion from "./../img/examplepromotion.png";
import runningman from "./../img/running-man.png";
import quality from "./../img/quality-of-life.png";
import hand from "./../img/hand.png";
import help from "./../img/help.png";
import distributed from "./../img/distributed.png";
import pcgamingexample from "./../img/pcgamingexample.png"
import portatelexample from "./../img/portablepcexample.png"
import tabletexample from "./../img/tabletexample.png"
import monitorexample from "./../img/monitorexample.png"
import printerexample from "./../img/printerexample.png"
import pcgamingasus from "./../img/pcgamingasus.png"
import monitorasus from "./../img/monitorasus.png"
import fontedealimentaçãoax70 from "./../img/fontedealimentaçãoax70.png"
import adaptadorusba from "./../img/adaptadorusba.png"
import xboxcontroller from "./../img/xboxcontroller.png"
import disponivel from "./../img/disponivel.png"
import rtx3070 from "./../img/rtx3070.png"
import appletablet from "./../img/appletablet.png"
import intelcorei9 from "./../img/intelcorei9.png"
import B760MGAMINGXDDR4MOTHERBOARD from "./../img/B760MGAMINGXDDR4MOTHERBOARD.png"
import capaa14galaxy from "./../img/capaa14galaxy.png"
import ratox19000dpi from "./../img/ratox19000dpi.png"
import tapeterazer from "./../img/tapeterazer.png"
import tecladogaming from "./../img/tecladogaming.png"
import impressora from "./../img/impressora.png"
import rapairpc from "./../img/rapairpc.png"
import rapairprinter from "./../img/rapairprinter.png"
import alojamento from "./../img/alojamento.png"
import removalvirus from "./../img/removalvirus.png"
import windowsinstallation from "./../img/windowsinstallation.png"

export default function Homepage() {
    const isExtraSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));
    const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.between('md', 'lg'));
    const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.between('lg', 'xl'));
    const isExtraLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('xl'));
    return (
        <>
            <Header></Header>
            <Box sx={{maxWidth:"1800px",  margin:"auto"}}>
                <Box  sx={{
                ...styles.container, // Apply common styles
                ...(isSmallScreen && styles.containersmall),
                ...(isExtraSmallScreen && styles.containersmall),  
                }}>
                    <img
                        src={examplepromotion}
                        style={styles.imgcontainer} 
                    ></img>
                </Box>
                <Box sx={styles.viewcontainer}>
                    <Box sx={{...styles.containerfeaturesmain,
                        ...(isExtraLargeScreen && styles.containerfeaturesmainextralarge),
                       ...(isLargeScreen && styles.containerfeaturesmainlarge), 
                       ...(isMediumScreen && styles.containerfeaturesmainmedium), 
                       ...(isSmallScreen && styles.containerfeaturesmainsmall), 
                       ...(isExtraSmallScreen && styles.containerfeaturesmainextrasmall), 
                    }}>
                        <Box sx={styles.containerfeatures}>
                            <img
                                src={runningman}
                                width={"125px"}
                                height={"120px"}
                            ></img>
                            <Text style={styles.textdefault2}>
                                Reparação<span style={{fontWeight:"bold"}}> rápida</span> 
                            </Text>
                        </Box>
                        <Box sx={styles.containerfeatures}>
                            <img
                                src={quality}
                                width={"125px"}
                                height={"120px"}
                            ></img>
                            <Text style={styles.textdefault2}>
                                Qualidade <span style={{fontWeight:"bold"}}> garantida</span> 
                            </Text>
                        </Box>
                        <Box sx={styles.containerfeatures}>
                            <img
                                src={distributed}
                                width={"125px"}
                                height={"120px"}
                            ></img>
                            <Text style={styles.textdefault2}>
                                Todo o tipo de<span style={{fontWeight:"bold"}}> produto</span> 
                            </Text>
                        </Box>
                        <Box sx={styles.containerfeatures}>
                            <img
                                src={help}
                                width={"125px"}
                                height={"120px"}
                            ></img>
                            <Text style={styles.textdefault2}>
                                Nada<span style={{fontWeight:"bold"}}> igual</span> 
                            </Text>
                        </Box>
                        <Box sx={styles.containerfeatures}>
                            <img
                                src={hand}
                                width={"125px"}
                                height={"120px"}
                            ></img>
                            <Text style={styles.textdefault2}>
                            Mais barato<span style={{fontWeight:"bold"}}> impossível</span> 
                            </Text>
                        </Box>
                    </Box>   
                </Box> 
                <Text style={styles.textdefault3}>
                    <span style={{fontWeight:"bold"}}>| Produtos</span> disponíveis
                </Text>
                <Box sx={styles.viewcontainer}>
                    <Box sx={{...styles.containerfeaturesmainproduct,
                        ...(isExtraLargeScreen && styles.containerfeaturesmainproductextralarge),
                       ...(isLargeScreen && styles.containerfeaturesmainproductlarge), 
                       ...(isMediumScreen && styles.containerfeaturesmainproductmedium), 
                       ...(isSmallScreen && styles.containerfeaturesmainproductsmall), 
                       ...(isExtraSmallScreen && styles.containerfeaturesmainproductextrasmall), 
                    }}>
                        <Box sx={styles.containerfeatures}>
                            <Box sx={styles.containerfeaturesproduts}> 
                                <img
                                    src={pcgamingexample}
                                    width={"155px"}
                                    height={"130px"}
                                ></img>
                            </Box>
                            <Text style={styles.textdefault2}>
                                <span style={{fontWeight:"bold"}}>PC GAMINGS</span> 
                            </Text>
                        </Box>
                        <Box sx={styles.containerfeatures}>
                            <Box sx={styles.containerfeaturesproduts}> 
                                <img
                                    src={portatelexample}
                                    width={"215px"}
                                    height={"130px"}
                                ></img>
                            </Box>
                            <Text style={styles.textdefault2}>
                               <span style={{fontWeight:"bold"}}>PORTÁTEIS</span> 
                            </Text>
                        </Box>
                        <Box sx={styles.containerfeatures}>
                            <Box sx={styles.containerfeaturesproduts}> 
                                <img
                                    src={tabletexample}
                                    width={"135px"}
                                    height={"130px"}
                                ></img>
                            </Box>
                            <Text style={styles.textdefault2}>
                                <span style={{fontWeight:"bold"}}>TABLETS</span> 
                            </Text>
                        </Box>
                        <Box sx={styles.containerfeatures}>
                            <Box sx={styles.containerfeaturesproduts}> 
                                <img
                                    src={monitorexample}
                                    width={"185px"}
                                    height={"130px"}
                                ></img>
                            </Box>
                            <Text style={styles.textdefault2}>
                                <span style={{fontWeight:"bold"}}>MONITORES</span> 
                            </Text>
                        </Box>
                        <Box sx={styles.containerfeatures}>
                            <Box sx={styles.containerfeaturesproduts}> 
                            <img
                                src={printerexample}
                                width={"165px"}
                                height={"130px"}
                            ></img>
                            </Box>
                            <Text style={styles.textdefault2}>
                                <span style={{fontWeight:"bold"}}>IMPRESSORAS</span> 
                            </Text>
                        </Box>
                    </Box>   
                </Box> 
                <Text style={styles.textdefault3}>
                    <span style={{fontWeight:"bold"}}>| Produtos</span> mais vendidos
                </Text>
                <Box sx={styles.viewcontainer}>
                    <Box sx={{...styles.containerfeaturesmainproduct,
                            ...(isExtraLargeScreen && styles.containerfeaturesmainproductextralarge),
                        ...(isLargeScreen && styles.containerfeaturesmainproductlarge), 
                        ...(isMediumScreen && styles.containerfeaturesmainproductmedium), 
                        ...(isSmallScreen && styles.containerfeaturesmainproductsmall), 
                        ...(isExtraSmallScreen && styles.containerfeaturesmainproductextrasmall), 
                        }}>
                        <Box sx={styles.containerfeatures}>
                            <Box sx={styles.containerfeaturesproduts}> 
                                <img
                                    src={pcgamingasus}
                                    width={"155px"}
                                    height={"130px"}
                                ></img>
                              </Box>
                            <Text style={styles.textdefault2}>
                                <span style={{fontWeight:"bold"}}>PC GAMING ASUS</span> 
                            </Text>
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
                                <span style={{fontWeight:"bold"}}>50,5€</span> 
                            </Text>
                        </Box>
                        <Box sx={styles.containerfeatures}>
                            <Box sx={styles.containerfeaturesproduts}> 
                                <img
                                    src={monitorasus}
                                    width={"155px"}
                                    height={"130px"}
                                ></img> 
                                </Box>
                            <Text style={styles.textdefault2}>
                               <span style={{fontWeight:"bold"}}>MONITOR ASUS 240HZ</span> 
                            </Text>
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
                                <span style={{fontWeight:"bold"}}>50,5€</span> 
                            </Text>
                        </Box>
                        <Box sx={styles.containerfeatures}>
                            <Box sx={styles.containerfeaturesproduts}> 
                                <img
                                    src={fontedealimentaçãoax70}
                                    width={"135px"}
                                    height={"130px"}
                                ></img>
                            </Box>
                            <Text style={styles.textdefault2}>
                                <span style={{fontWeight:"bold"}}>FONTE DE ALIMENTAÇÃO AX760</span> 
                            </Text>
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
                                <span style={{fontWeight:"bold"}}>50,5€</span> 
                            </Text>
                        </Box>
                        <Box sx={styles.containerfeatures}>
                            <Box sx={styles.containerfeaturesproduts}> 
                                <img
                                    src={adaptadorusba}
                                    width={"165px"}
                                    height={"130px"}
                                ></img>
                            </Box>
                            <Text style={styles.textdefault2}>
                                <span style={{fontWeight:"bold"}}>ADAPTADOR HAMA USB-A</span> 
                            </Text>
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
                                <span style={{fontWeight:"bold"}}>50,5€</span> 
                            </Text>
                        </Box>
                        <Box sx={styles.containerfeatures}>
                            <Box sx={styles.containerfeaturesproduts}> 
                                <img
                                    src={xboxcontroller}
                                    width={"145px"}
                                    height={"130px"}
                                ></img>
                            </Box>
                            <Text style={styles.textdefault2}>
                                <span style={{fontWeight:"bold"}}>COMANDO XBOX</span> 
                            </Text>
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
                                <span style={{fontWeight:"bold"}}>50,5€</span> 
                            </Text>
                        </Box>
                    </Box >   
                </Box> 
                <Text style={styles.textdefault3}>
                    <span style={{fontWeight:"bold"}}>| Novidades</span>
                </Text>
                <Box sx={styles.viewcontainer}>
                    <Box sx={{...styles.containerfeaturesmainproduct,
                            ...(isExtraLargeScreen && styles.containerfeaturesmainproductextralarge),
                        ...(isLargeScreen && styles.containerfeaturesmainproductlarge), 
                        ...(isMediumScreen && styles.containerfeaturesmainproductmedium), 
                        ...(isSmallScreen && styles.containerfeaturesmainproductsmall), 
                        ...(isExtraSmallScreen && styles.containerfeaturesmainproductextrasmall), 
                    }}>
                        <Box sx={styles.containerfeatures}>
                            <Box sx={styles.containerfeaturesproduts}> 
                                <img
                                    src={rtx3070}
                                    width={"155px"}
                                    height={"130px"}
                                ></img>
                              </Box>
                            <Text style={styles.textdefault2}>
                                <span style={{fontWeight:"bold"}}>RTX 3070 GEFORCE</span> 
                            </Text>
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
                                <span style={{fontWeight:"bold"}}>50,5€</span> 
                            </Text>
                        </Box>
                        <Box sx={styles.containerfeatures}>
                            <Box sx={styles.containerfeaturesproduts}> 
                                <img
                                    src={appletablet}
                                    width={"125px"}
                                    height={"130px"}
                                ></img> 
                                </Box>
                            <Text style={styles.textdefault2}>
                               <span style={{fontWeight:"bold"}}>APPLE TABLET (12.9-Inch)</span> 
                            </Text>
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
                                <span style={{fontWeight:"bold"}}>50,5€</span> 
                            </Text>
                        </Box>
                        <Box sx={styles.containerfeatures}>
                            <Box sx={styles.containerfeaturesproduts}> 
                                <img
                                    src={intelcorei9}
                                    width={"165px"}
                                    height={"130px"}
                                ></img>
                            </Box>
                            <Text style={styles.textdefault2}>
                                <span style={{fontWeight:"bold"}}>INTEL CORE i9</span> 
                            </Text>
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
                                <span style={{fontWeight:"bold"}}>50,5€</span> 
                            </Text>
                        </Box>
                        <Box sx={styles.containerfeatures}>
                            <Box sx={styles.containerfeaturesproduts}> 
                                <img
                                    src={B760MGAMINGXDDR4MOTHERBOARD}
                                    width={"165px"}
                                    height={"130px"}
                                ></img>
                            </Box>
                            <Text style={styles.textdefault2}>
                                <span style={{fontWeight:"bold"}}>B760M GAMING X DDR4 MOTHERBOARD</span> 
                            </Text>
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
                                <span style={{fontWeight:"bold"}}>50,5€</span> 
                            </Text>
                        </Box>
                        <Box sx={styles.containerfeatures}>
                            <Box sx={styles.containerfeaturesproduts}> 
                                <img
                                    src={capaa14galaxy}
                                    width={"175px"}
                                    height={"130px"}
                                ></img>
                            </Box>
                            <Text style={styles.textdefault2}>
                                <span style={{fontWeight:"bold"}}>CAPA GALAXY A14</span> 
                            </Text>
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
                                <span style={{fontWeight:"bold"}}>50,5€</span> 
                            </Text>
                        </Box>
                    </Box >   
                </Box> 
                <Text style={styles.textdefault3}>
                    <span style={{fontWeight:"bold"}}>| Acessórios</span>
                </Text>
                <Box sx={styles.viewcontainer}>
                        <Box sx={{...styles.containerfeaturesmainproduct,
                            ...(isExtraLargeScreen && styles.containerfeaturesmainproductextralarge),
                        ...(isLargeScreen && styles.containerfeaturesmainproductlarge), 
                        ...(isMediumScreen && styles.containerfeaturesmainproductmedium), 
                        ...(isSmallScreen && styles.containerfeaturesmainproductsmall), 
                        ...(isExtraSmallScreen && styles.containerfeaturesmainproductextrasmall), 
                        }}>
                        <Box sx={styles.containerfeatures}>
                            <Box sx={styles.containerfeaturesproduts}> 
                                <img
                                    src={ratox19000dpi}
                                    width={"135px"}
                                    height={"130px"}
                                ></img>
                              </Box>
                            <Text style={styles.textdefault2}>
                                <span style={{fontWeight:"bold"}}>RATO X 190000 DPI PRETO</span> 
                            </Text>
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
                                <span style={{fontWeight:"bold"}}>90,5€</span> 
                            </Text>
                        </Box>
                        <Box sx={styles.containerfeatures}>
                            <Box sx={styles.containerfeaturesproduts}> 
                                <img
                                    src={tapeterazer}
                                    width={"175px"}
                                    height={"130px"}
                                ></img> 
                                </Box>
                            <Text style={styles.textdefault2}>
                               <span style={{fontWeight:"bold"}}>TAPETE RATO RAZER</span> 
                            </Text>
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
                                <span style={{fontWeight:"bold"}}>20,5€</span> 
                            </Text>
                        </Box>
                        <Box sx={styles.containerfeatures}>
                            <Box sx={styles.containerfeaturesproduts}> 
                                <img
                                    src={tecladogaming}
                                    width={"165px"}
                                    height={"130px"}
                                ></img>
                            </Box>
                            <Text style={styles.textdefault2}>
                                <span style={{fontWeight:"bold"}}>TECLADO GAMING</span> 
                            </Text>
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
                                <span style={{fontWeight:"bold"}}>120,5€</span> 
                            </Text>
                        </Box>
                        <Box sx={styles.containerfeatures}>
                            <Box sx={styles.containerfeaturesproduts}> 
                                <img
                                    src={impressora}
                                    width={"155px"}
                                    height={"130px"}
                                ></img>
                            </Box>
                            <Text style={styles.textdefault2}>
                                <span style={{fontWeight:"bold"}}>IMPRESSORA</span> 
                            </Text>
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
                                <span style={{fontWeight:"bold"}}>50,5€</span> 
                            </Text>
                        </Box>
                        <Box sx={styles.containerfeatures}>
                            <Box sx={styles.containerfeaturesproduts}> 
                                <img
                                    src={xboxcontroller}
                                    width={"145px"}
                                    height={"130px"}
                                ></img>
                            </Box>
                            <Text style={styles.textdefault2}>
                                <span style={{fontWeight:"bold"}}>COMANDO XBOX</span> 
                            </Text>
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
                                <span style={{fontWeight:"bold"}}>40,5€</span> 
                            </Text>
                        </Box>
                    </Box>   
                </Box> 
                <Text style={styles.textdefault3}>
                    <span style={{fontWeight:"bold"}}>| Serviços</span>
                </Text>
                <Box sx={styles.viewcontainer}>
                        <Box sx={{...styles.containerfeaturesmainproduct,
                            ...(isExtraLargeScreen && styles.containerfeaturesmainproductextralarge),
                        ...(isLargeScreen && styles.containerfeaturesmainproductlarge), 
                        ...(isMediumScreen && styles.containerfeaturesmainproductmedium), 
                        ...(isSmallScreen && styles.containerfeaturesmainproductsmall), 
                        ...(isExtraSmallScreen && styles.containerfeaturesmainproductextrasmall), 
                        }}>
                        <Box sx={styles.containerfeatures}>
                            <Box sx={styles.containerfeaturesproduts}> 
                                <img
                                    src={rapairpc}
                                    width={"100%"}
                                    height={"130px"}
                                ></img>
                              </Box>
                            <Text style={styles.textdefault2}>
                                <span style={{fontWeight:"bold"}}>REPARAÇÃO DE COMPUTADORES</span> 
                            </Text>        
                            <Text style={styles.textdefault2}>
                                <span style={{fontWeight:"bold"}}>90,5€</span> 
                            </Text>
                        </Box>
                        <Box sx={styles.containerfeatures}>
                            <Box sx={styles.containerfeaturesproduts}> 
                                <img
                                    src={rapairprinter}
                                    width={"155px"}
                                    height={"130px"}
                                ></img> 
                                </Box>
                            <Text style={styles.textdefault2}>
                               <span style={{fontWeight:"bold"}}>REPARAÇÃO DE IMPRESSORAS</span> 
                            </Text>
                            <Text style={styles.textdefault2}>
                                <span style={{fontWeight:"bold"}}>20,5€</span> 
                            </Text>
                        </Box>
                        <Box sx={styles.containerfeatures}>
                            <Box sx={styles.containerfeaturesproduts}> 
                                <img
                                    src={alojamento}
                                    width={"170px"}
                                    height={"130px"}
                                ></img>
                            </Box>
                            <Text style={styles.textdefault2}>
                                <span style={{fontWeight:"bold"}}>ALOJAMENTO SERVIÇOS WEB</span> 
                            </Text>
                            <Text style={styles.textdefault2}>
                                <span style={{fontWeight:"bold"}}>120,5€</span> 
                            </Text>
                        </Box>
                        <Box sx={styles.containerfeatures}>
                            <Box style={styles.containerfeaturesproduts}> 
                                <img
                                    src={removalvirus}
                                    width={"160px"}
                                    height={"130px"}
                                ></img>
                            </Box>
                            <Text style={styles.textdefault2}>
                                <span style={{fontWeight:"bold"}}>REMOÇÃO DE VIRUS</span> 
                            </Text>
                            <Text style={styles.textdefault2}>
                                <span style={{fontWeight:"bold"}}>50,5€</span> 
                            </Text>
                        </Box>
                        <Box sx={styles.containerfeatures}>
                            <Box sx={styles.containerfeaturesproduts}> 
                                <img
                                    src={windowsinstallation}
                                    width={"145px"}
                                    height={"130px"}
                                ></img>
                            </Box>
                            <Text style={styles.textdefault2}>
                                <span style={{fontWeight:"bold"}}>INSTALAÇÃO SO</span> 
                            </Text>
                            <Text style={styles.textdefault2}>
                                <span style={{fontWeight:"bold"}}>40,5€</span> 
                            </Text>
                        </Box>
                    </Box>   
                </Box> 
            </Box> 
            <Footer></Footer>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        position: "relative",
        paddingLeft:"0.5rem",
        paddingRight:"0.5rem",   
        zIndex:-1 
    },
    containersmall:{
        display:"none",
    },
    containerfeatures:{
        marginTop:"0.5rem",
        display:"flex",
        flexDirection:"column",
        marginBottom:"0.5rem",
        alignItems:"left",
        textAlign:"center",
    },
    disponivel:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
    },
    containerfeaturesproduts:{
        border: '1px solid rgba(194, 194, 194, 0.2)', 
        borderWidth: 1,       
        paddingLeft:"2rem",
        paddingRight:"2rem"
    },

    viewcontainer:{ 
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)', 
        marginBottom:"2rem",
        marginLeft:"0.5rem",
        marginRight:"0.5rem",
    },
    containerfeaturesmain:{
        background: "white",
        alignItems:"center",
        justifyContent:"center"
    },
    containerfeaturesmainextralarge:{
        display:"flex",
        flexDirection:"row",
        gap:"180px",  
    },
    containerfeaturesmainlarge:{
        display:"flex",
        flexDirection:"row",
        gap:"120px",  
    },
    containerfeaturesmainmedium:{
        display:"grid",
        gridTemplateRows: "auto auto auto auto",
        gridTemplateColumns:"auto auto auto auto",
        gridColumnGap:"70px", 
    },
    containerfeaturesmainsmall:{
        display:"grid",
        gridTemplateRows: "auto auto ",
        gridTemplateColumns:"auto auto  ",
        gap:"40px", 
        marginTop:"0.5rem"
    },
    containerfeaturesmainextrasmall:{
        display:"flex",
        flexDirection:"column",
        gap:"40px", 
        marginTop:"0.5rem"
    },
    containerfeaturesmainproduct:
    {
        background: "white",
        alignItems:"center",
        justifyContent:"center",
    },
    containerfeaturesmainproductlarge:{
        display:"grid",
        gridTemplateRows: "auto auto auto ",
        gridTemplateColumns:"auto auto auto auto",
        gap:"40px",
    },
    containerfeaturesmainproductextralarge:{
        display:"flex",
        gap:"80px",
    },
    
    containerfeaturesmainproductmedium:{
        display:"grid",
        gridTemplateRows: "auto auto auto ",
        gridTemplateColumns:"auto auto auto ",
        gap:"40px",
    },

    containerfeaturesmainproductsmall:{
        display:"grid",
        gridTemplateRows: "auto auto ",
        gridTemplateColumns:"auto auto  ",
        gap:"40px", 
    },

    containerfeaturesmainproductextrasmall:{
        display:"flex",
        flexDirection:"column",
        gap:"40px", 
    },

    imgcontainer:{
        marginTop:"0.5rem",
        width:"100%",
    },
      textdefault:{
        fontSize:"16px",
        fontFamily:"K2D",
        color:"white"
      },
      textdefault2:{
        fontSize:"15px",
        fontFamily:"K2D",
        marginBottom:"0.5rem",
        marginTop:"0.5rem",
        maxWidth:"250px"
      },
     disponiveltext:{
        fontSize:"15px",
        fontFamily:"K2D",
        marginBottom:"0rem",
        color:"#3CA62B",
      },
      textdefault3:{
        fontSize:"27px",
        fontFamily:"K2D",
        marginBottom:"0.5rem",
        paddingLeft:"0.5rem",
      }
});