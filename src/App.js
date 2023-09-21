import { Route, Routes } from "react-router-dom";
import React, { useState } from 'react';
import Homepage from "./pages/Homepage";
import SoftwareFaturação from "./pages/SoftwareFaturação";
import SuporteManutenção from "./pages/SuporteManutenção";
import Termoseserviços from "./pages/Termoseserviços";
import Politicadeprivacidade from "./pages/Politicadeprivacidade";
import Politicadecookies from "./pages/Politicadecookies";
import Sobrenos from "./pages/Sobrenos";
import Computadoreseseacessorios from "./pages/Computadoreseseacessorios";
import Computadores from "./pages/Computadores";
import Computadoresacc from "./pages/Computadoresacc";
import Memorias from "./pages/Memorias";
import Memoriaspcs from "./pages/Memoriaspcs";
import Memoriasportateis from "./pages/Memoriasportateis";
import Memoriasusb from "./pages/Memoriasusb.js";
import Memoriascartoes from "./pages/Memoriascartoes.js";
import Memoriasespecif from "./pages/Memoriasespecif.js";
import Caixas from "./pages/Caixas";
import Fontesaliment from "./pages/Fontesaliment";
import Componentes from "./pages/Componentes";
import Placasgraficas from "./pages/Placasgraficas";
import Motherboards from "./pages/Motherboards";
import Processadores from "./pages/Processadores";
import Coolers from "./pages/Coolers";
import Discos from "./pages/Discos";
import DiscosSSD from "./pages/DiscosSSD";
import DiscosHDD from "./pages/DiscosHDD";
import DiscosExternos from "./pages/DiscosExternos";
import Redes from "./pages/Redes";
import Drives from "./pages/Drives";
import TapetesRato from "./pages/TapetesRato";
import PosImpressoras from "./pages/posImpressoras";
import Possistemaspos from "./pages/possistemaspos";
import Posmonitores from "./pages/posmonitores";
import Posacessorios from "./pages/posacessorios";
import PosLeitorescodigobarra from "./pages/posLeitorescodigobarra";
import Sistemaspos from "./pages/Sistemaspos";
import Produtos from "./pages/Produtos";
import Produtoindividual from "./pages/Produtoindividual";
import PesquisaProdutos from "./pages/PesquisaProdutos";
import { PopupContext } from './pages/popupcontext';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  // Your theme configuration goes here
});

function App() {
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenRegister, setIsOpenRegister] = useState(false);
  const [isOpenForgotpassword, setIsOpenForgotpassword] = useState(false);
  
  return (
    <PopupContext.Provider value={{ isOpenLogin, setIsOpenLogin, isOpenRegister, setIsOpenRegister,isOpenForgotpassword, setIsOpenForgotpassword }}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/softwarefaturação" element={<SoftwareFaturação/>} />
          <Route path="/suportemanutenção" element={<SuporteManutenção/>} />
          <Route path="/termoseserviços" element={<Termoseserviços/>} />
          <Route path="/políticadeprivacidade" element={<Politicadeprivacidade/>} />
          <Route path="/políticadecookies" element={<Politicadecookies/>} />
          <Route path="/sobrenós" element={<Sobrenos/>} />
          <Route path="/computadoreseacessórios" element={<Computadoreseseacessorios/>}/>
          <Route path="/computadores" element={<Computadores/>}/>
          <Route path="/computadoresacessórios" element={<Computadoresacc/>}/>
          <Route path="/sistemaspos" element={<Sistemaspos/>} />
          <Route path="/posImpressoras" element={<PosImpressoras/>} />
          <Route path="/posLeitorescodigobarra" element={<PosLeitorescodigobarra/>} />
          <Route path="/possistemaspos" element={<Possistemaspos/>} />
          <Route path="/posmonitores" element={<Posmonitores/>} />
          <Route path="/posacessórios" element={<Posacessorios/>} />
          <Route path="/memórias" element={<Memorias/>} />
          <Route path="/memóriaspcs" element={<Memoriaspcs/>} />
          <Route path="/memóriasportáteis" element={<Memoriasportateis/>} />
          <Route path="/memóriasusb" element={<Memoriasusb/>} />
          <Route path="/memóriascartões" element={<Memoriascartoes/>} />
          <Route path="/memóriasespecíficas" element={<Memoriasespecif/>} />
          <Route path="/caixas" element={<Caixas/>} />
          <Route path="/fontesdealimentação" element={<Fontesaliment/>} />
          <Route path="/componentes" element={<Componentes/>} />
          <Route path="/placasgráficas" element={<Placasgraficas/>} />
          <Route path="/motherboards" element={<Motherboards/>} />
          <Route path="/processadores" element={<Processadores/>} />
          <Route path="/coolers" element={<Coolers/>} />
          <Route path="/discos" element={<Discos/>} />
          <Route path="/discosSSD" element={<DiscosSSD/>} />
          <Route path="/discosHDD" element={<DiscosHDD/>} />
          <Route path="/discosExternos" element={<DiscosExternos/>} />
          <Route path="/drives" element={<Drives/>} />
          <Route path="/redes" element={<Redes/>} />
          <Route path="/tapetesderato" element={<TapetesRato/>} />
          <Route path="/produtos/Pesquisa" element={<Produtos/>} />
          <Route path="/produtos/Pesquisa/produtosencontrados" element={<PesquisaProdutos/>} />
          <Route path="/produtoindividual/:item" element={<Produtoindividual/>} />
        </Routes>
      </ThemeProvider>
    </PopupContext.Provider>
    );
}

export default App;
