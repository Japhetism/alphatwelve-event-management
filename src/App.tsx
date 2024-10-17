import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideMenu from "./components/sidemenu";
import Home from "./pages/home";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <SideMenu />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
