import { Route, Routes } from "react-router-dom";
import React, { useState } from 'react';
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Forgotpassword from "./pages/ForgotPassword";
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
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<Forgotpassword/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </ThemeProvider>
    </PopupContext.Provider>
    );
}

export default App;
