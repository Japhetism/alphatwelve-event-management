import SearchInput from "../../searchInput";
import { DownloadIcon } from "../../../assets/icons/downloadIcon";
import { VerticalEllipsisIcon } from "../../../assets/icons/verticalEllipsisIcon";
import "./eventFilters.css";

const EventFilters = () => {
    return (
        <div className="filter-container">
            <div className="filter-section">
                <div>
                    <SearchInput className="search" />
                </div>
                <div>
                    <select className="date">
                        <option>Date</option>
                    </select>
                </div>
                <div>
                    <select className="status">
                        <option>Status</option>
                    </select>
                </div>
                <div>
                    <select className="name">
                        <option>Name</option>
                    </select>
                </div>
                <div className="display-label">Displaying 100 results</div>
            </div>
            <div className="filter-section">
                <div className="display-sort">Sort:</div>
                <div>
                    <select className="sort-recent">
                        <option>Most Recent</option>
                    </select>
                </div>
                <div>
                    <button className="sort-ellipsis">
                        <VerticalEllipsisIcon />
                    </button>
                </div>
                <div>
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