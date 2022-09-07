import Home from "pages/Home";
import Login from "pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import LightTheme from "../themes/light";
import DarkTheme from "../themes/dark";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  body{
    background: ${(p) => p.theme.bodyBackgroundColor};
    min-height: 100vh;
    margin: 0;
    color: ${(p) => p.theme.bodyFontColor};
    font-family: "Kaushan Script";
  }
`;

const App = () => {
  const [theme, setTheme] = useState(LightTheme);
  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme((s) => (s.id === "light" ? DarkTheme : LightTheme));
        },
      }}
    >
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
