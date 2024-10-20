import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import SideMenu from "./components/sidemenu";
import Tabs from "./components/tabs";
import { footerMenuItems } from "./fixtures/sidemenu";
import "./App.css";

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
                <div className="footer-tabs">
                  <Tabs tabs={footerMenuItems} />
                </div>
            </div>
        </Router>
    );
};

export default App;
