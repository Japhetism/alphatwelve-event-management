import SearchInput from "../../searchInput";
import { DownloadIcon } from "../../../assets/icons/downloadIcon";
import { VerticalEllipsisIcon } from "../../../assets/icons/verticalEllipsisIcon";
import "./eventFilters.css";

const EventFilters = () => {
    return (
        <div className="filter-container">
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
                    <select className="status">
                        <option>Status</option>
                    </select>
                </div>
                <div className="name-container">
                    <select className="name">
                        <option>Name</option>
                    </select>
                </div>
                <div className="display-label">Displaying 100 results</div>
            </div>
            <div className="filter-section-sort">
                <div className="display-sort">Sort:</div>
                <div className="sort-recent-container">
                    <select className="sort-recent">
                        <option>Most Recent</option>
                    </select>
                </div>
                <div className="sort-ellipsis-container">
                    <button className="sort-ellipsis">
                        <VerticalEllipsisIcon />
                    </button>
                </div>
                <div className="download-container">
                    <button className="download">
                        <DownloadIcon />
                        Export
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EventFilters;