import ToDo from "./pages/ToDo";
import { ThemeProvider } from "styled-components";
import theme from "./components/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToDo />
    </ThemeProvider>
  );
}

export default App;
