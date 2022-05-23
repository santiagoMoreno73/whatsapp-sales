// components
import Login from "./components/Login";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/theme/GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={GlobalStyle}>
      <GlobalStyle />
      <Login />
    </ThemeProvider>
  );
}

export default App;
