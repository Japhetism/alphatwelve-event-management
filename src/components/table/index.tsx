import React, { useState, useEffect } from "react";
import { ChevronRightIcon } from "../../assets/icons/chevronRightIcon";
import { ChevronLeftIcon } from "../../assets/icons/chevronLeftIcon";
import { ChevronDownIcon } from "../../assets/icons/chevronDownIcon";
import { ITableProps } from "../../interfaces/table";
import "./table.css";

const Table = ({
    data,
    columns,
    rowsPerPageOptions = [10, 20, 50, 100],
}: ITableProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);
    const [expandedRow, setExpandedRow] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 768px)").matches);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.matchMedia("(max-width: 768px)").matches);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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

    const toggleRow = (rowIndex: number) => {
        if (isMobile) {
            setExpandedRow(prevRow => (prevRow === rowIndex ? null : rowIndex));
        }
    };

    const getDisplayedColumns = () => {
        return isMobile ? [columns[0], columns[columns.length - 1]] : columns;
    };

    const displayedColumns = getDisplayedColumns();

    const getLeftoverColumns = (row: any) => {
        return columns.filter(col => !displayedColumns.some(displayedCol => displayedCol.accessor === col.accessor));
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {displayedColumns.map((column, index) => (
                            <th key={index}>{column.header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {currentRows.map((row, rowIndex) => {
                        const rowId = indexOfFirstRow + rowIndex;
                        return (
                            <React.Fragment key={rowId}>
                                <tr onClick={() => toggleRow(rowId)} style={{ cursor: 'pointer' }} className={expandedRow === rowId ? "table-row-grey" : ""}>
                                    {displayedColumns.map((column, colIndex) => {
                                        if (colIndex === 0) {
                                            return (
                                                <td key={colIndex} className="with-icon">
                                                    <div className="table-cell-icon">{expandedRow === rowId ? <ChevronDownIcon /> : <ChevronRightIcon />}</div>
                                                    <div>{column.render ? column.render(row) : row[column.accessor]}</div>
                                                </td>
                                            )
                                        } else {
                                            return (
                                                <td key={colIndex}>
                                                    {column.render ? column.render(row) : row[column.accessor]}
                                                </td>
                                            )
                                        }
                                    })}
                                </tr>
                                {expandedRow === rowId && (
                                    <tr className={`"expanded-row" ${expandedRow === rowId ? "table-row-grey" : ""}`}>
                                        {getLeftoverColumns(row).reverse().map((col, colIndex) => (
                                            <td key={colIndex}>
                                                {row[col.accessor]}
                                            </td>
                                        ))}
                                    </tr>
                                )}
                            </React.Fragment>
                        );
                    })}
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
