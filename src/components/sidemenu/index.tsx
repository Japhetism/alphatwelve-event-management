import { NavLink } from "react-router-dom";
import { menuItems } from "../../fixtures/sidemenu";
import { ISideMenuItem } from "../../interfaces/sidemenu";
import "./sidemenu.css";

const SideMenu: React.FC = () => {
    return (
        <div className="side-menu">
            <h2>Full logo</h2>
            <ul>
                {menuItems.map((item: ISideMenuItem) => (
                    <li key={item.id}>
                        <NavLink 
                            to={item.link} 
                            className={({ isActive }) => (isActive ? "active-link menu-item" : "inactive-link menu-item")}
                        >
                            {({ isActive }) => {
                                const Icon = item.icon;
                                const iconColor: string = isActive ? "#8576FF" : "#ADA9BB";
                                return (
                                    <>
                                        <Icon color={iconColor} />
                                        {item.name}
                                    </>
                                );
                            }}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SideMenu;
