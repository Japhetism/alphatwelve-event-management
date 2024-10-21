import { ChevronLeftIcon } from "../../assets/icons/chevronLeftIcon";
import { ChevronRightIcon } from "../../assets/icons/chevronRightIcon";
import { useDarkMode } from "../../hooks/useDarkMode";
import "./pagination.css";

interface IPagination {
    currentPage: number;
    totalPages: number;
    rowsPerPage: number;
    rowsPerPageOptions: number[];
    setCurrentPage: (page: number) => void;
    setRowsPerPage: (rows: number) => void;
}

const Pagination = ({
    currentPage,
    totalPages,
    rowsPerPage,
    rowsPerPageOptions,
    setCurrentPage,
    setRowsPerPage,
}: IPagination) => {

    const { isDarkMode } = useDarkMode();

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setRowsPerPage(Number(event.target.value));
        setCurrentPage(1);
    };
    
    return (
        <div className={`pagination ${isDarkMode ? "dark-mode" : ""}`}>
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="pagination-button">
                <ChevronLeftIcon color={isDarkMode ? "#8576FF" : "#334155"} />
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    disabled={currentPage === index + 1}
                    className="pagination-button-number"
                >
                    {index + 1}
                </button>
            ))}

            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="pagination-button">
                <ChevronRightIcon color={isDarkMode ? "#8576FF" : "#334155"} />
            </button>

            <div className="rows-per-page">
                <label htmlFor="rows-per-page" className="row-info">Show: </label>
                <select className="row-select row-info" id="rows-per-page" value={rowsPerPage} onChange={handleRowsPerPageChange}>
                    {rowsPerPageOptions.map(option => (
                        <option key={option} value={option}>{option} rows</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default Pagination;