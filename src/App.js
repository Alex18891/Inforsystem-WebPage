import { Route, Routes } from "react-router-dom";
import React, { useState } from 'react';
import Homepage from "./pages/Homepage";
import SoftwareFaturação from "./pages/SoftwareFaturação";
import Termoseserviços from "./pages/Termoseserviços";
import Politicadeprivacidade from "./pages/Politicadeprivacidade";
import Politicadecookies from "./pages/Politicadecookies";
import Sobrenos from "./pages/Sobrenos";
import Computadores from "./pages/Computadores";
import Monitores from "./pages/Monitores";
import Acessórios from "./pages/Acessorios";
import Impressoras from "./pages/Impressoras";
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
          <Route path="/termoseserviços" element={<Termoseserviços/>} />
          <Route path="/políticadeprivacidade" element={<Politicadeprivacidade/>} />
          <Route path="/políticadecookies" element={<Politicadecookies/>} />
          <Route path="/sobrenós" element={<Sobrenos/>} />
          <Route path="/computadores" element={<Computadores/>} />
          <Route path="/monitores" element={<Monitores/>} />
          <Route path="/acessórios" element={<Acessórios/>} />
          <Route path="/impressoras" element={<Impressoras/>} />
        </Routes>
      </ThemeProvider>
    </PopupContext.Provider>
    );
}

export default App;
