import { HamburgerIcon } from "../../assets/icons/hamburgerIcon";
import { CloseIcon } from "../../assets/icons/closeIcon";
import { IAppBar } from "../../interfaces/appBar";
import "./appBar.css";

const AppBar = ({ isMenuOpen, onMenuToggle }: IAppBar) => {
    return (
        <div className="app-bar">
            <h2>Full Logo</h2>
            <div className={`menu-toggle ${isMenuOpen ? "close-container" : ""}`} onClick={onMenuToggle}>
                {isMenuOpen ? <CloseIcon/> : <HamburgerIcon /> }
            </div>
        </div>
    );
};

export default AppBar;