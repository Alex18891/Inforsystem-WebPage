import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Forgotpassword from "./pages/ForgotPassword";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  // Your theme configuration goes here
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<Forgotpassword/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </ThemeProvider>
    );
}

export default App;
