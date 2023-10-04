import { useState, useEffect } from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import {View, Text,StyleSheet} from 'react-native';
import {Link} from "react-router-dom";
import Box from "@mui/material/Box";
import useMediaQuery from '@mui/material/useMediaQuery';
import '../index.css';


export default function Termoseserviços() {
    const isExtraSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));
    const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.between('md', 'lg'));
    const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.between('lg', 'xl'));
    const isExtraLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('xl'));
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
                        <Text style={{fontSize: "20px",zIndex:-1}}>   \  Termos e condições  </Text>  
                        </Box>
                    </Box> 
                    <Text style={{
                        ...styles.textdefault3,
                        ...(isSmallScreen ? styles.textdefault3small : {}),
                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                    }}>
                        <span style={{fontWeight:"bold"}}>Termos</span> e condições 
                    </Text>
                    <Text style={{
                        ...styles.textdefault3,
                        fontSize:"18px",
                        marginTop:"1rem",
                        zIndex:-1,
                        ...(isSmallScreen ? styles.textdefault3small : {}),
                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                    }}>
                        <span style={{fontWeight:"bold"}}>| Condições de Venda</span> 
                    </Text>
                    <Text style={{fontSize: "16px",lineHeight:"2rem",zIndex:-1,}}>A Inforsystem oferece uma ampla variedade de produtos e serviços de informática aos seus clientes. No entanto, pode haver situações em que determinados produtos promovidos não estejam imediatamente disponíveis na loja devido a falta de stock ou porque a loja local não participa da promoção em questão.
                    <br />A empresa tem o direito de estabelecer uma quantidade máxima de produtos que um cliente pode adquirir. Os preços anunciados são válidos somente durante o tempo especificado na campanha e estão sujeitos a erros de digitação, imagem, indisponibilidade de stock e/ou falhas nos sistemas de computador.
                    <br />Além disso, a Inforsytem tem a prerrogativa de alterar, a qualquer momento, as informações e ofertas comerciais, incluindo detalhes sobre produtos, preços, promoções e termos de venda.
                    </Text> 
                    <Text style={{
                        ...styles.textdefault3,
                        fontSize:"18px",
                        marginTop:"1rem",
                        zIndex:-1,
                        ...(isSmallScreen ? styles.textdefault3small : {}),
                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                    }}>
                        <span style={{fontWeight:"bold"}}>| Encomendas</span>
                    </Text>
                    <Text style={{fontSize: "16px",lineHeight:"2rem",zIndex:-1,}}>A Inforsystem oferece duas opções para o cliente receber os seus produtos:
                        <ul style={{ listStylePosition: "inside", padding:0,margin: 0,marginLeft:"0.5rem"}}>
                            <li>
                            Recolha diretamente na loja;      
                            </li>
                            <li>Entrega no endereço fornecido.</li>
                        </ul>
                        Assim que o pagamento da sua encomenda for confirmado, esta será prontamente tratada. Se houver uma falta de stock de algum item, a Inforsystem entrará em contacto consigo dentro de 24 horas para propor um item substituto ou fornecer detalhes sobre quando o produto estará disponível.
                        <br />Depois de ter a concordância do cliente, a encomenda será processada. Se, por algum motivo, um componente das máquinas gaming Inforsystem estiver indisponível, ele será trocado por uma peça de qualidade igual ou superior.
                        <br />A Inforsystem detém o direito de anular a encomenda em qualquer fase. Se o cliente já tiver realizado o pagamento, receberá um reembolso total do valor.
                        <br />Todas as encomendas feitas no website da Inforsystem são tratadas após confirmação do cliente, ficando a gestão e responsabilidade totalmente a cargo da loja.
                    </Text> 
                    <Text style={{
                        ...styles.textdefault3,
                        fontSize:"18px",
                        marginTop:"1rem",
                        zIndex:-1,
                        ...(isSmallScreen ? styles.textdefault3small : {}),
                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                    }}>
                        <span style={{fontWeight:"bold"}}>| Cancelamentos</span>
                    </Text>
                    <Text style={{fontSize: "16px",lineHeight:"2rem",zIndex:-1,}}>
                        Se o pagamento não for realizado dentro de 48 horas após o envio do email de confirmação da Inforsystem, a loja pode decidir cancelar a encomenda, voltando a disponibilizar os produtos para venda.
                        <br/>Uma vez que a encomenda esteja processada, não pode ser cancelada.
                        <br />Se houver um erro no tratamento ou envio de uma encomenda devido a um lapso da Inforsystem, o cliente receberá o produto correto sem custos adicionais. O período inicialmente previsto para a entrega começa a contar a partir da data em que o erro é identificado.
                        <br />Custos de envio não serão reembolsados caso os erros na encomenda sejam responsabilidade do cliente.
                    </Text>
                    <Text style={{
                        ...styles.textdefault3,
                        fontSize:"18px",
                        marginTop:"1rem",
                        zIndex:-1,
                        ...(isSmallScreen ? styles.textdefault3small : {}),
                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                    }}>
                        <span style={{fontWeight:"bold"}}>| Política de preços</span>
                    </Text>
                    <Text style={{fontSize: "16px",lineHeight:"2rem",zIndex:-1,}}>
                        Os preços apresentados no website já têm o IVA incluído, conforme a taxa legal atual.
                        <br />Os valores, detalhes dos produtos e disponibilidade podem mudar sem notificação, exceto para negócios já em andamento.
                    </Text>
                    <Text style={{
                        ...styles.textdefault3,
                        fontSize:"18px",
                        marginTop:"1rem",
                        zIndex:-1,
                        ...(isSmallScreen ? styles.textdefault3small : {}),
                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                    }}>
                        <span style={{fontWeight:"bold"}}>| Formas de pagamento</span>
                    </Text>
                    <Text style={{fontSize: "16px",lineHeight:"2rem",zIndex:-1,}}>
                    O website da Inforsytem oferece diversas opções de pagamento:
                        <ul style={{ listStylePosition: "inside", padding:0,margin: 0,marginLeft:"0.5rem"}}>
                            <li>
                            Cartão Visa e MasterCard: É necessário fornecer todos os dados solicitados.      
                            </li>
                            <li>Multibanco: Pode realizar o pagamento numa máquina multibanco ou online, utilizando o serviço de home banking do seu banco.</li>
                            <li>
                            MB Way: Se optar por este método, tem um prazo de 5 minutos para confirmar o pagamento na app MB Way. Se o sistema notificar que o pagamento não foi aceite, a encomenda será automaticamente anulada. Se pretende fazer uma compra diretamente numa das lojas Inforsytem, consulte no local as opções de pagamento disponíveis, que podem ser diferentes das referidas acima.    
                            </li>
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
                        <span style={{fontWeight:"bold"}}>| Condições de devoluções e trocas</span>
                    </Text>
                    <Text style={{fontSize: "16px",lineHeight:"2rem",zIndex:-1,}}>
                    Política de Devoluções e Trocas da Inforsystem(Baseada no Decreto-Lei n.º 24/2014, com alterações pela Lei n.º 47/2014)
                    <ol style={{ listStylePosition: "inside", padding:0,margin: 0,marginLeft:"0.5rem"}}>
                            <li>
                                Encomendas à Distância:
                                <ul style={{listStylePosition: "inside", padding:0,margin: 0,marginLeft:"0.5rem"}}>
                                    <li>
                                    Compras online enviadas para a morada do cliente podem ser trocadas ou devolvidas no prazo de 14 dias após a entrega.    
                                    </li>
                                </ul>    
                            </li>
                            <li> Condições para Devolução:
                                <ul style={{listStylePosition: "inside", padding:0,margin: 0,marginLeft:"0.5rem"}}>
                                    <li>
                                        Produto na embalagem original, sem marcas de uso.
                                    </li>
                                </ul>    
                            </li>
                            <li>
                                Obrigatórios: 
                                <ul style={{listStylePosition: "inside", padding:0,margin: 0,marginLeft:"0.5rem"}}>
                                    <li>
                                        Devoluções devem ser acompanhadas da fatura correspondente.
                                    </li>
                                </ul>    
                            </li>
                            <li>
                                Custos: 
                                <ul style={{listStylePosition: "inside", padding:0,margin: 0,marginLeft:"0.5rem"}}>
                                    <li>
                                        Os custos de devolução ou troca são suportados pelo cliente.
                                    </li>
                                </ul>        
                            </li>
                            <li>
                                Valor do Produto: 
                                <ul style={{listStylePosition: "inside", padding:0,margin: 0,marginLeft:"0.5rem"}}>
                                    <li>
                                        Se o produto for manipulado além do habitual, o cliente é responsável por qualquer depreciação.
                                    </li>
                                </ul>           
                            </li>
                            <li>
                                Processo: 
                                <ul style={{listStylePosition: "inside", padding:0,margin: 0,marginLeft:"0.5rem"}}>
                                    <li>Contato prévio é necessário via telefone da loja.
                                    </li>
                                    <li>
                                        Após verificação, um reembolso será emitido conforme a escolha do cliente.
                                    </li>
                                </ul>   
                            </li>
                            <li>
                                Direito de Livre Resolução: 
                                <ul style={{listStylePosition: "inside", padding:0,margin: 0,marginLeft:"0.5rem"}}>
                                    <li>O cliente pode cancelar a compra no prazo de 14 dias após a receção.
                                    </li>
                                    <li>
                                        A comunicação de cancelamento deve ser feita de forma clara (por, email) até o 14º dia.
                                    </li>
                                    <li>
                                    Inforystem reembolsará todos os pagamentos no prazo de 14 dias após a notificação, usando o mesmo método de pagamento.
                                    </li>
                                </ul>   
                            </li>
                        </ol>
                    </Text>
                    <Text style={{
                        ...styles.textdefault3,
                        fontSize:"18px",
                        marginTop:"1rem",
                        zIndex:-1,
                        ...(isSmallScreen ? styles.textdefault3small : {}),
                        ...(isExtraSmallScreen ? styles.textdefault3extrasmall : {})
                    }}>
                        <span style={{fontWeight:"bold"}}>| Contactos</span>
                    </Text>
                    <Text style={{fontSize: "16px",lineHeight:"2rem",}}>
                        A Inforsystem tem várias formas de ser contactada:
                        <ul style={{listStylePosition: "inside", padding:0,margin: 0,marginLeft:"0.5rem"}}>
                            <li>
                                Telefone: <span><Link  id='aheader' to="https://wa.me/351967687915">(+351) 966218628</Link></span> 
                            </li>
                            <li>
                                Email: <span><Link  id='aheader' to="mailto:loja2@inforsystem.net"> loja2@inforsystem.net</Link></span>
                            </li>
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
                        <span style={{fontWeight:"bold"}}>| Contratos ou compras feitas na loja Inforystem</span>
                    </Text>
                    <Text style={{fontSize: "16px",lineHeight:"2rem",zIndex:-1,}}>
                        A loja Inforsystem opera de forma financeira e jurídica autónoma e segue a Lei da Defesa do Consumidor - Lei n.º 24/96 de 31 de julho. De acordo com esta lei:
                        <br />Para compras feitas diretamente na loja, a legislação não garante o mesmo direito de arrependimento que existe para compras à distância.
                        <br />Não há uma norma legal que permita aos consumidores se arrependerem de compras realizadas presencialmente na loja.
                        <br />Assim, geralmente, se um cliente compra um produto na loja física e depois muda de ideia, não tem direito a trocar, devolver o item ou solicitar um reembolso.
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