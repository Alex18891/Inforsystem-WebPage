import { useState, useEffect } from "react";
import { useNavigate,Link} from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";
import {View, Text,StyleSheet} from 'react-native';
import Box from "@mui/material/Box";
import useMediaQuery from '@mui/material/useMediaQuery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import '../index.css';


export default function Politicadeprivacidade() {
    const isExtraSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));
    const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.between('md', 'lg'));
    const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.between('lg', 'xl'));
    const isExtraLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('xl'));
    const navigate = useNavigate();
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
                        <Text style={{fontSize: "20px",zIndex:-1}}>   \  Politica de privacidade  </Text>  
                        </Box>
                    </Box> 
                    <Text style={{
                        ...styles.textdefault3,
                        ...(isSmallScreen ? styles.textdefault3small : {}),
                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                    }}>
                        <span style={{fontWeight:"bold"}}>Politica</span> de privacidade
                    </Text>
                    <Text style={{fontSize: "16px",lineHeight:"2rem",zIndex:-1,}}>A Inforsystem valoriza e respeita a privacidade dos seus clientes. Por isso, adotámos políticas de privacidade alinhadas com elevados padrões de segurança. 
                        Garantimos que os seus dados pessoais são tratados conforme a legislação e com a máxima integridade. A nossa prioridade é a confidencialidade e a proteção dos seus dados, e estamos comprometidos em ser transparentes sobre como eles são usados.
                    </Text> 
                    <Text style={{
                        ...styles.textdefault3,
                        fontSize:"18px",
                        marginTop:"1rem",
                        zIndex:-1,
                        ...(isSmallScreen ? styles.textdefault3small : {}),
                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                    }}>
                        <span style={{fontWeight:"bold"}}>| Dados pessoais</span> 
                    </Text>
                    <Text style={{fontSize: "16px",lineHeight:"2rem",zIndex:-1,}}>Dados sobre um indivíduo, de qualquer tipo e em qualquer formato, seja som, imagem ou outro, que possam identificar ou tornar essa pessoa identificável.
                    </Text> 
                    <Text style={{
                        ...styles.textdefault3,
                        fontSize:"18px",
                        marginTop:"1rem",
                        zIndex:-1,
                        ...(isSmallScreen ? styles.textdefault3small : {}),
                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                    }}>
                        <span style={{fontWeight:"bold"}}>| Quem é responsável pelo tratamento dos seus dados pessoais?</span>
                    </Text>
                    <Text style={{fontSize: "16px",lineHeight:"2rem"}}>A Inforsystem é responsável pelos dados pessoais de seus clientes e potenciais clientes quando estes fazem uma encomenda, se registam. Para entrar em contacto connosco:
                        <br />Contactos: Rua dos Mareantes, 
                            4480-778 Vila do Conde  
                            | Telefone: <span><Link  id='aheader' to="https://wa.me/351967687915">(+351) 966218628 </Link></span>  
                            | Email:<span><Link  id='aheader' to="mailto:loja2@inforsystem.net"> loja2@inforsystem.net</Link></span>
                    
                    </Text> 
                    <Text style={{
                        ...styles.textdefault3,
                        fontSize:"18px",
                        marginTop:"1rem",
                        zIndex:-1,
                        ...(isSmallScreen ? styles.textdefault3small : {}),
                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                    }}>
                        <span style={{fontWeight:"bold"}}>| Como é recolhido os seus dados pessoais?</span>
                    </Text>
                    <Text style={{fontSize: "16px",lineHeight:"2rem",zIndex:-1,}}>
                        Recolhemos e processamos os seus dados pessoais nas seguintes circunstâncias:
                        <ul style={{ listStylePosition: "inside", padding:0,margin: 0,marginLeft:"0.5rem"}}>
                            <li>
                                Ao subscrever à newsletter da loja     
                            </li>
                            <li>Ao realizar uma compra ou registo no site da inforsystem.</li>
                        </ul>      
                    </Text>
                    <Text style={{
                        ...styles.textdefault3,
                        fontSize:"18px",
                        marginTop:"1rem",
                        zIndex:-1,
                        ...(isSmallScreen ? styles.textdefault3small : {}),
                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                    }}>
                        <span style={{fontWeight:"bold"}}>| Para que finalidades e com que fundamento podem ser utilizados os seus dados pessoais?</span>
                    </Text>
                    <Text style={{fontSize: "16px",lineHeight:"2rem",zIndex:-1,}}>
                        Os dados que recolhemos são usados principalmente para gerir a nossa relação com o cliente, personalizar os nossos serviços ao seu gosto, mantê-lo atualizado sobre os nossos produtos e informá-lo sobre as nossas promoções.
                        <br />O RGPD estabelece critérios específicos para o tratamento dos seus dados pessoais. Seguem os motivos pelos quais podemos processar seus dados:
                        <ul style={{ listStylePosition: "inside", padding:0,margin: 0,marginLeft:"0.5rem"}}>
                            <li>
                                Com o seu consentimento (que pode ser retirado a qualquer momento).    
                            </li>
                            <li> No contexto de procedimentos comerciais necessários para concluir uma venda onde você e a loja são partes envolvidas.</li>
                            <li> Para cumprir obrigações legais às quais a inforsytem está vinculada.</li>
                            <li> Para proteger os seus interesses.</li>
                            <li> Com base num interesse legítimo, desde que esse interesse prevaleça sobre os seus direitos de privacidade.</li>
                            <li> Quando é essencial para estabelecer, exercer ou defender legalmente num litígio.</li>
                        </ul>      
                    </Text>
                    <Text style={{
                        ...styles.textdefault3,
                        fontSize:"18px",
                        marginTop:"1rem",
                        zIndex:-1,
                        ...(isSmallScreen ? styles.textdefault3small : {}),
                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                    }}>
                        <span style={{fontWeight:"bold"}}>| Que dados pessoais são recolhidos?</span>
                    </Text>
                    <Text style={{fontSize: "16px",lineHeight:"2rem",zIndex:-1,}}>
                        Informações de contacto como nome, endereço, email, número de telefone, entre outros.         
                        <br />Detalhes pessoais como a data de nascimento e o número de contribuinte. 
                    </Text>
                    <Text style={{
                        ...styles.textdefault3,
                        fontSize:"18px",
                        marginTop:"1rem",
                        zIndex:-1,
                        ...(isSmallScreen ? styles.textdefault3small : {}),
                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                    }}>
                        <span style={{fontWeight:"bold"}}>| Como é que mantemos os seus dados pessoais seguros?</span>
                    </Text>
                    <Text style={{fontSize: "16px",lineHeight:"2rem",zIndex:-1,}}>
                    Os sistemas da inforsystem requerem credenciais de acesso, sendo estes compostos por login e senha, com diferentes níveis de acesso e mudanças periódicas.             
                    <br />Os sistemas estão preparados para detectar quando os clientes optam por não ter seus dados processados.
                    <br />Os dados pessoais são protegidos por senhas e, em situações específicas, transmitidos por email encriptado.
                    
                    </Text>
                    <Text style={{
                        ...styles.textdefault3,
                        fontSize:"18px",
                        marginTop:"1rem",
                        zIndex:-1,
                        ...(isSmallScreen ? styles.textdefault3small : {}),
                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                    }}>
                        <span style={{fontWeight:"bold"}}>| Como é que pode alterar ou retirar o seu consentimento?</span>
                    </Text>
                    <Text style={{fontSize: "16px",lineHeight:"2rem",zIndex:-1,}}>
                        A qualquer momento, pode modificar ou anular o seu consentimento, válido a partir daí, caso o tratamento dos seus dados pessoais dependa desse consentimento. Para isso, pode enviar um email para: loja2@inforystem.net ou, se disponível, ajustar as configurações na sua área de cliente. 
                    </Text>
                    <Text style={{
                        ...styles.textdefault3,
                        fontSize:"18px",
                        marginTop:"1rem",
                        zIndex:-1,
                        ...(isSmallScreen ? styles.textdefault3small : {}),
                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                    }}>
                        <span style={{fontWeight:"bold"}}>| Como pode reclamar junto da sua autoridade de controlo?</span>
                    </Text>
                    <Text style={{fontSize: "16px",lineHeight:"2rem"}}>
                        Queremos informar que pode, a qualquer momento, apresentar uma reclamação à autoridade reguladora, a Comissão Nacional de Proteção de Dados (CNPD).
                        <br />Contactos: Rua de São Bento, n.º 148, 3º, 1200-821 Lisboa | Telefone: +351 213928400 | Fax: +351 213976832 | Email: <span><Link  id='aheader' to="mailto:geral@cnpd.pt">geral@cnpd.pt</Link> </span>
                    </Text> 
                </Box>     
            </Box> 
            <Footer></Footer>
        </>
    );
}

const styles = StyleSheet.create({
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
});