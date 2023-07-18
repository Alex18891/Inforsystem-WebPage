import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";
import {View, Text,StyleSheet} from 'react-native';

import examplepromotion from "./../img/examplepromotion.png";
import runningman from "./../img/running-man.png";
import quality from "./../img/quality-of-life.png";
import hand from "./../img/hand.png";
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

export default function Homepage() {
    return (
        <>
            <Header></Header>
            <View style={{maxWidth:"1800px",  margin:"auto"}}>
                <View style={styles.container}>
                    <img
                        src={examplepromotion}
                        style={styles.imgcontainer} 
                    ></img>
                </View>
                <View style={styles.viewcontainer}>
                    <View style={styles.containerfeaturesmain}>
                        <View style={styles.containerfeatures}>
                            <img
                                src={runningman}
                                width={"125px"}
                                height={"120px"}
                            ></img>
                            <Text style={styles.textdefault2}>
                                Reparação<span style={{fontWeight:"bold"}}> rápida</span> 
                            </Text>
                        </View>
                        <View style={styles.containerfeatures}>
                            <img
                                src={quality}
                                width={"125px"}
                                height={"120px"}
                            ></img>
                            <Text style={styles.textdefault2}>
                                Qualidade <span style={{fontWeight:"bold"}}> garantida</span> 
                            </Text>
                        </View>
                        <View style={styles.containerfeatures}>
                            <img
                                src={distributed}
                                width={"125px"}
                                height={"120px"}
                            ></img>
                            <Text style={styles.textdefault2}>
                                Todo o tipo de<span style={{fontWeight:"bold"}}> produto</span> 
                            </Text>
                        </View>
                        <View style={styles.containerfeatures}>
                            <img
                                src={hand}
                                width={"125px"}
                                height={"120px"}
                            ></img>
                            <Text style={styles.textdefault2}>
                            Mais barato<span style={{fontWeight:"bold"}}> impossível</span> 
                            </Text>
                        </View>
                    </View >   
                </View> 
                <Text style={styles.textdefault3}>
                    <span style={{fontWeight:"bold"}}>| Produtos</span> disponíveis
                </Text>
                <View style={styles.viewcontainer}>
                    <View style={styles.containerfeaturesmain}>
                        <View style={styles.containerfeatures}>
                            <View style={styles.containerfeaturesproduts}> 
                                <img
                                    src={pcgamingexample}
                                    width={"155px"}
                                    height={"130px"}
                                ></img>
                            </View>
                            <Text style={styles.textdefault2}>
                                <span style={{fontWeight:"bold"}}>PC GAMINGS</span> 
                            </Text>
                        </View>
                        <View style={styles.containerfeatures}>
                            <View style={styles.containerfeaturesproduts}> 
                                <img
                                    src={portatelexample}
                                    width={"215px"}
                                    height={"130px"}
                                ></img>
                            </View>
                            <Text style={styles.textdefault2}>
                               <span style={{fontWeight:"bold"}}>PORTÁTEIS</span> 
                            </Text>
                        </View>
                        <View style={styles.containerfeatures}>
                            <View style={styles.containerfeaturesproduts}> 
                                <img
                                    src={tabletexample}
                                    width={"135px"}
                                    height={"130px"}
                                ></img>
                            </View>
                            <Text style={styles.textdefault2}>
                                <span style={{fontWeight:"bold"}}>TABLETS</span> 
                            </Text>
                        </View>
                        <View style={styles.containerfeatures}>
                            <View style={styles.containerfeaturesproduts}> 
                                <img
                                    src={monitorexample}
                                    width={"185px"}
                                    height={"130px"}
                                ></img>
                            </View>
                            <Text style={styles.textdefault2}>
                                <span style={{fontWeight:"bold"}}>MONITORES</span> 
                            </Text>
                        </View>
                        <View style={styles.containerfeatures}>
                            <View style={styles.containerfeaturesproduts}> 
                            <img
                                src={printerexample}
                                width={"165px"}
                                height={"130px"}
                            ></img>
                            </View>
                            <Text style={styles.textdefault2}>
                                <span style={{fontWeight:"bold"}}>IMPRESSORAS</span> 
                            </Text>
                        </View>
                    </View >   
                </View> 
                <Text style={styles.textdefault3}>
                    <span style={{fontWeight:"bold"}}>| Produtos</span> mais vendidos
                </Text>
                <View style={styles.viewcontainer}>
                    <View style={styles.containerfeaturesmain}>
                        <View style={styles.containerfeatures}>
                            <View style={styles.containerfeaturesproduts}> 
                                <img
                                    src={pcgamingasus}
                                    width={"155px"}
                                    height={"130px"}
                                ></img>
                              </View>
                            <Text style={styles.textdefault2}>
                                <span style={{fontWeight:"bold"}}>PC GAMING ASUS</span> 
                            </Text>
                        </View>
                        <View style={styles.containerfeatures}>
                            <View style={styles.containerfeaturesproduts}> 
                                <img
                                    src={monitorasus}
                                    width={"155px"}
                                    height={"130px"}
                                ></img>
                                </View>
                            <Text style={styles.textdefault2}>
                               <span style={{fontWeight:"bold"}}>MONITOR ASUS 240HZ</span> 
                            </Text>
                        </View>
                        <View style={styles.containerfeatures}>
                            <View style={styles.containerfeaturesproduts}> 
                                <img
                                    src={fontedealimentaçãoax70}
                                    width={"135px"}
                                    height={"130px"}
                                ></img>
                            </View>
                            <Text style={styles.textdefault2}>
                                <span style={{fontWeight:"bold"}}>FONTE DE ALIMENTAÇÃO AX760</span> 
                            </Text>
                        </View>
                        <View style={styles.containerfeatures}>
                            <View style={styles.containerfeaturesproduts}> 
                                <img
                                    src={adaptadorusba}
                                    width={"165px"}
                                    height={"130px"}
                                ></img>
                            </View>
                            <Text style={styles.textdefault2}>
                                <span style={{fontWeight:"bold"}}>ADAPTADOR HAMA USB-A</span> 
                            </Text>
                        </View>
                        <View style={styles.containerfeatures}>
                            <View style={styles.containerfeaturesproduts}> 
                                <img
                                    src={xboxcontroller}
                                    width={"145px"}
                                    height={"130px"}
                                ></img>
                            </View>
                            <Text style={styles.textdefault2}>
                                <span style={{fontWeight:"bold"}}>COMANDO XBOX</span> 
                            </Text>
                        </View>
                    </View >   
                </View> 

            </View> 
            <Footer></Footer>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        position: "relative",
        display: "inline-block",
        paddingLeft:"0.5rem",
        paddingRight:"0.5rem",
    },
    containerfeatures:{
        marginTop:"0.5rem",
        display:"flex",
        flexDirection:"column",
        marginBottom:"0.5rem",
        alignItems:"center",
        textAlign:"center",
    },
    containerfeaturesproduts:{
        borderColor: 'rgba(194, 194, 194, 0.2)', 
        borderWidth: 1,       
        paddingLeft:"2rem",
        paddingRight:"2rem"
    },

    viewcontainer:{
        shadowColor: '#000', 
        shadowOffset: {width: 0,height: 8,},
        shadowOpacity: 0.2,
        shadowRadius: 16,
        marginBottom:"2rem",
        marginLeft:"0.5rem",
        marginRight:"0.5rem",
    },
    containerfeaturesmain:{
        display:"flex",
        gap:"130px",
        flexDirection:"row",
        background: "white",
        margin:"auto"
    },

    imgcontainer:{
        marginTop:"0.5rem",
        width:"100%"
    },
      textdefault:{
        fontSize:"16px",
        fontFamily:"K2D",
        color:"white"
      },
      textdefault2:{
        fontSize:"15px",
        fontFamily:"K2D",
        marginBottom:"0.5rem"
      },
      textdefault3:{
        fontSize:"27px",
        fontFamily:"K2D",
        marginBottom:"0.5rem",
        paddingLeft:"0.5rem",
      }
});