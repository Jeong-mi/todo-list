import ToDo from "./pages/ToDo";
import { ThemeProvider } from "styled-components";
import theme from "./components/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<ToDo />}></Route>
          <Route path="/todo" element={<ToDo />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
