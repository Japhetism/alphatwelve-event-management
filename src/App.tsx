import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideMenu from "./components/sidemenu";
import Home from "./pages/home";
import "./App.css";
import { useState } from "react";

const App: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleCollapseToggle = (collapsed: boolean) => {
        setIsCollapsed(collapsed);
    };

    return (
        <Router>
            <div className="app">
                <SideMenu onCollapseToggle={handleCollapseToggle} />
                <div className={`content ${isCollapsed ? 'collapsed' : ''}`}>
                    <Routes>
                        <Route path="/home" element={<Home />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
