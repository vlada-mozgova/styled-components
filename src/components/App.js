import Home from "pages/Home";
import Login from "pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    background: white;
    min-height: 100vh;
    margin: 0;
    color: black;
    font-family: "Kaushan Script";
  }
`;

const theme = {
  primaryColor: "#f8049c",
  secondaryColor: "#fdd54f",
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
