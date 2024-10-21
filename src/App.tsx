import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./pages";
import { DarkModeProvider } from "./context/DarkModeContext";

const App = () => {
    
  return (
    <DarkModeProvider>
      <Router>
        <Pages />
      </Router>
    </DarkModeProvider>
  );
};

export default App;
