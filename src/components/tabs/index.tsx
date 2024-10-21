import React, { FC, useState } from "react";
import { useDarkMode } from "../../hooks/useDarkMode";
import "./tabs.css";

interface Tab {
    title: string;
    icon: FC<React.SVGProps<SVGSVGElement>>;
}

interface TabsProps {
    tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {

    const { isDarkMode } = useDarkMode();
    
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    return (
        <div className={`tabs ${isDarkMode ? "dark-mode" : ""}`}>
            <div className="tab-titles">
                {tabs.map((tab, index) => {
                    const Icon = tab.icon;
                    return (
                        <div className={`tab-title-container ${activeTabIndex === index ? "active" : ""}`} key={index} onClick={() => setActiveTabIndex(index)}>
                            <Icon color={activeTabIndex === index ? "#8576FF" : (isDarkMode ? "#FFFFFF" : "#ADA9BB")} />
                            <button
                                key={index}
                                className={`tab-title ${activeTabIndex === index ? "active" : ""}`}
                            >
                                {tab.title}
                            </button>
                        </div> 
                    )  
                })}
            </div>
        </div>
    );
};

export default Tabs;
