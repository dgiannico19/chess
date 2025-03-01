import Board from "./components/Board/Board";
import { ThemeProvider } from "./context/ThemeProvider";

const App = () => (
  <ThemeProvider>
    <Board />
  </ThemeProvider>
);

export default App;
