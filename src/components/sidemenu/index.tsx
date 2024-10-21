import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AppBar from "../appBar";
import { ISideMenuItem } from "../../interfaces/sidemenu";
import { LeftIcon } from "../../assets/icons/leftIcon";
import { SwitchIcon } from "../../assets/icons/switchIcon";
import { SwitchOnIcon } from "../../assets/icons/switchOnIcon";
import { UserMaskIcon } from "../../assets/icons/userMaskIcon";
import { ExpandIcon } from "../../assets/icons/expandIcon";
import { sideMenuItems } from "../../fixtures/sidemenu";
import { useDarkMode } from "../../hooks/useDarkMode";
import "./sidemenu.css";

const SideMenu: React.FC<{ onCollapseToggle: (collapsed: boolean) => void; }> = ({ onCollapseToggle }) => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
        onCollapseToggle(!isCollapsed);
    };

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`side-menu ${isCollapsed ? 'collapsed' : ''} ${isDarkMode ? 'dark-mode' : ''}`}>
            <AppBar onMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} />
            <ul className={isMenuOpen ? "side-menu-open" : "side-menu-close"}>
                {sideMenuItems.map((item: ISideMenuItem) => (
                    <li key={item.id}>
                        <NavLink 
                            to={item.link} 
                            className={({ isActive }) => (isActive ? "active-link menu-item menu-link" : "inactive-link menu-item menu-link")}
                        >
                            {({ isActive }) => {
                                const Icon = item.icon;
                                const iconColor: string = isActive 
                                    ? (isDarkMode ? "#FFFFFF" : "#8576FF") 
                                    : "#ADA9BB";
                                return (
                                    <>
                                        <Icon color={iconColor} />
                                        {!isCollapsed && item.name}
                                        {(item.showNotification && !isCollapsed) && (
                                            <div className="count">
                                                <span>3</span>
                                            </div>
                                        )}
                                    </>
                                );
                            }}
                        </NavLink>
                    </li>
                ))}
                <li>
                    <div className="menu-item extra-link collapse-menu" onClick={toggleCollapse}>
                        {!isCollapsed ? <LeftIcon /> : <ExpandIcon />}
                        {!isCollapsed ? "Collapse" : ""}
                    </div>
                </li>
                <li>
                    <div className="menu-item extra-link" onClick={toggleDarkMode}>
                        {isDarkMode ? <SwitchOnIcon /> : <SwitchIcon />}
                        {!isCollapsed && "Dark mode"}
                    </div>
                </li>
                <li>
                    <div className="menu-item extra-link" onClick={() => console.log("here")}>
                        <UserMaskIcon />
                        {!isCollapsed && (
                            <div className="user-section">
                                <span>Rudra Devi</span>
                                <span>rudra.devi@gmail.com</span>
                            </div>
                        )}
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default SideMenu;
