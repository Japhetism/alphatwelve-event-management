import React, { FC, useState } from "react";
import "./tabs.css";

interface Tab {
    title: string;
    icon: FC<React.SVGProps<SVGSVGElement>>;
}

interface TabsProps {
    tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    return (
        <div className="tabs">
            <div className="tab-titles">
                {tabs.map((tab, index) => {
                    const Icon = tab.icon;
                    return (
                        <div className={`tab-title-container ${activeTabIndex === index ? "active" : ""}`}>
                            <Icon color={activeTabIndex === index ? "#8576FF" : "#ADA9BB"} />
                            <button
                                key={index}
                                onClick={() => setActiveTabIndex(index)}
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
