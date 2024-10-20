import React, { useState } from "react";
import { ChevronRightIcon } from "../../assets/icons/chevronRightIcon";
import { ChevronLeftIcon } from "../../assets/icons/chevronLeftIcon";
import { ITableProps } from "../../interfaces/table";
import "./table.css";

const Table = ({
    data,
    columns,
    rowsPerPageOptions = [10, 20, 50, 100],
}: ITableProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);

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
                        {columns.map((column, index) => (
                            <th key={index}>{column.header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {currentRows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {columns.map((column, colIndex) => (
                                <td key={colIndex}>
                                    {column.render ? column.render(row) : row[column.accessor]}
                                </td>
                            ))}
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
                        {rowsPerPageOptions.map(option => (
                            <option key={option} value={option}>{option} rows</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Table;
