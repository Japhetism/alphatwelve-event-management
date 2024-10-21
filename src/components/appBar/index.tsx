import { HamburgerIcon } from "../../assets/icons/hamburgerIcon";
import { CloseIcon } from "../../assets/icons/closeIcon";
import { IAppBar } from "../../interfaces/appBar";
import "./appBar.css";

const AppBar = ({ isMenuOpen, onMenuToggle, isDarkMode }: IAppBar) => {
    return (
        <div className={`app-bar ${isDarkMode ? 'dark-mode' : ''}`}>
            <h2>Full Logo</h2>
            <div className={`menu-toggle ${isMenuOpen ? "close-container" : ""}`} onClick={onMenuToggle}>
                {isMenuOpen
                ? 
                    <CloseIcon color={isDarkMode ? "#484554" : "#334155"} />
                : 
                    <HamburgerIcon color={isDarkMode ? "#FCF7FF" : "#64748B"} /> 
                }
            </div>
        </div>
    );
};

export default AppBar;
