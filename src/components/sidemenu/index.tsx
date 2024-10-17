import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { menuItems } from "../../fixtures/sidemenu";
import { ISideMenuItem } from "../../interfaces/sidemenu";
import { LeftIcon } from "../../assets/icons/leftIcon";
import { SwitchIcon } from "../../assets/icons/switchIcon";
import { UserMaskIcon } from "../../assets/icons/userMaskIcon";
import "./sidemenu.css";
import { ExpandIcon } from "../../assets/icons/expandIcon";

const SideMenu: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={`side-menu ${isCollapsed ? 'collapsed' : ''}`}>
            {!isCollapsed && <h2>Full logo</h2>}
            <ul>
                {menuItems.map((item: ISideMenuItem) => (
                    <li key={item.id}>
                        <NavLink 
                            to={item.link} 
                            className={({ isActive }) => (isActive ? "active-link menu-item menu-link" : "inactive-link menu-item menu-link")}
                        >
                            {({ isActive }) => {
                                const Icon = item.icon;
                                const iconColor: string = isActive ? "#8576FF" : "#ADA9BB";
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
                    <div
                        className="menu-item extra-link"
                        onClick={toggleCollapse}
                    >
                        {!isCollapsed ? <LeftIcon /> : <ExpandIcon />}
                        {!isCollapsed ? "Collapse" : ""}
                    </div>
                </li>
                <li>
                    <div
                        className="menu-item extra-link"
                        onClick={() => console.log("here")}
                    >
                        <SwitchIcon />
                        {!isCollapsed && "Dark mode"}
                    </div>
                </li>
                <li>
                    <div
                        className="menu-item extra-link"
                        onClick={() => console.log("here")}
                    >
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
