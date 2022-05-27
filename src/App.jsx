import React, { useState } from "react";

// route
import { BrowserRouter, Routes, Route } from "react-router-dom";

// provider
import { ThemeProvider } from "styled-components";

// theme
import GlobalStyle from "./theme/GlobalStyle";
import { lightTheme, darkTheme } from "./theme/theme";

// components
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Layout from "./components/Layout/Layout";
import Categories from "./pages/Categories/Categories";

export const ThemeContext = React.createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <BrowserRouter>
        <ThemeProvider theme={themeStyle}>
          <GlobalStyle />
          <Layout>
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/categories" element={<Categories />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
