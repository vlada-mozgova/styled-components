import { Button } from "./common";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    background: white;
    min-height: 100vh;
    margin: 0;
    color: black;
    font-family: "Kaushan Script";
  }
`;

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <h1>App</h1>
      <Button>Hello</Button>
    </div>
  );
};

export default App;
