import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../../hooks/useDarkMode";
import { ISideMenuItem } from "../../interfaces/sidemenu";
import "./tabs.css";

interface ITabsProps {
    tabs: ISideMenuItem[];
}

const Tabs = ({ tabs }: ITabsProps) => {

    const { isDarkMode } = useDarkMode();
    const navigate = useNavigate();
    
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    return (
        <div className={`tabs ${isDarkMode ? "dark-mode" : ""}`}>
            <div className="tab-titles">
                {tabs.map((tab, index) => {
                    const Icon = tab.icon;
                    return (
                        <div
                            className={`tab-title-container ${activeTabIndex === index ? "active" : ""}`}
                            key={index}
                            onClick={() => {
                                setActiveTabIndex(index)
                                navigate(tab.link)
                            }}
                        >
                            <Icon color={activeTabIndex === index ? "#8576FF" : (isDarkMode ? "#FFFFFF" : "#ADA9BB")} />
                            <button
                                key={index}
                                className={`tab-title ${activeTabIndex === index ? "active" : ""}`}
                            >
                                {tab.name}
                            </button>
                        </div> 
                    )  
                })}
            </div>
        </div>
    );
};

export default Tabs;
