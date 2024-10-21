import SearchInput from "../../searchInput";
import { DownloadIcon } from "../../../assets/icons/downloadIcon";
import { VerticalEllipsisIcon } from "../../../assets/icons/verticalEllipsisIcon";
import { useDarkMode } from "../../../hooks/useDarkMode";
import "./eventFilters.css";

interface IEventFilters {
    count: number;
    filters: any;
    setFilters: (filter: any) => void;
}

const EventFilters = ({ count, filters, setFilters }: IEventFilters) => {

    const { isDarkMode } = useDarkMode();
    
    return (
        <div className={`filter-container ${isDarkMode ? "dark-mode" : ""}`}>
            <div className="filter-section">
                <div className="search-container">
                    <SearchInput className="search" />
                </div>
                <div className="date-container">
                    <select className="date">
                        <option>Date</option>
                    </select>
                </div>
                <div className="status-container">
                    <select className="status" onChange={(e) => setFilters({...filters, status: e.target.value})}>
                        <option value="">Status</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <div className="name-container">
                    <select className="name">
                        <option>Name</option>
                    </select>
                </div>
                <div className="display-label">{`Displaying ${count} result${count > 1 ? "s" : ""}`}</div>
            </div>
            <div className="filter-section-sort">
                <div className="display-sort">Sort:</div>
                <div className="sort-recent-container">
                    <select className="sort-recent" onChange={(e) => setFilters({...filters, sort: e.target.value})}>
                        <option value="most recent">Most Recent</option>
                        <option value="least recent">Least Recent</option>
                    </select>
                </div>
                <div className="sort-ellipsis-container">
                    <button className="sort-ellipsis">
                        <VerticalEllipsisIcon color={isDarkMode ? "#FFFFFF" : "#141414"} />
                    </button>
                </div>
                <div className="download-container">
                    <button className="download">
                        <DownloadIcon color={isDarkMode ? "#FFFFFF" : "#141414"} />
                        Export
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EventFilters;