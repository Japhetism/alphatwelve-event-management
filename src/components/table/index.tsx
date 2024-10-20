import React, { useState } from "react";
import { ChevronRightIcon } from "../../assets/icons/chevronRightIcon";
import { ChevronLeftIcon } from "../../assets/icons/chevronLeftIcon";
import { IEvent } from "../../interfaces/event";
import { ITable } from "../../interfaces/table";
import "./table.css";

const Table = ({
    data
}: ITable) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

    const totalPages = Math.ceil(data.length / rowsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setRowsPerPage(Number(event.target.value));
        setCurrentPage(1);
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Event Name</th>
                        <th>Date</th>
                        <th>Speaker</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {currentRows.map((row: IEvent) => (
                        <tr key={row.id}>
                            <td>{row.eventName}</td>
                            <td>{row.date}</td>
                            <td>{row.speaker}</td>
                            <td>
                                <div className="row-status-container">
                                    <div className={`row-status ${row.status.toLowerCase() === "completed" ? "row-status-completed" : "row-status-in-progress"}`}>
                                        <div className={`row-status-indicator ${row.status.toLowerCase() === "completed" ? "row-status-completed-indicator" : "row-status-in-progress-indicator"}`}></div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="pagination">
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="pagination-button">
                    <ChevronLeftIcon />
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
                    <ChevronRightIcon />
                </button>
                
                <div className="rows-per-page">
                    <label htmlFor="rows-per-page" className="row-info">Show: </label>
                    <select className="row-select row-info" id="rows-per-page" value={rowsPerPage} onChange={handleRowsPerPageChange}>
                        <option value={10}>10 rows</option>
                        <option value={20}>20 rows</option>
                        <option value={50}>50 rows</option>
                        <option value={100}>100 rows</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Table;
