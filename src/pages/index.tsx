import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useDarkMode } from "../hooks/useDarkMode";
import SideMenu from "../components/sidemenu";
import Tabs from "../components/tabs";
import Home from "./home";
import { footerMenuItems } from "../fixtures/sidemenu";
import "./pages.css";

const Pages = () => {
    const { isDarkMode } = useDarkMode();
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

    const handleCollapseToggle = (collapsed: boolean) => {
        setIsCollapsed(collapsed);
    };

    return (
        <div className={`app ${isDarkMode ? "dark-mode" : ""}`}>
            <SideMenu onCollapseToggle={handleCollapseToggle} />
            <div className={`content ${isCollapsed ? "collapsed" : ""}`}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </div>
            <div className="footer-tabs">
                <Tabs tabs={footerMenuItems} />
            </div>
        </div>
    );
};

export default Pages;
