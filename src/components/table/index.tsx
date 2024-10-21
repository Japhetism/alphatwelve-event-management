import React, { useState, useEffect } from "react";
import { ChevronRightIcon } from "../../assets/icons/chevronRightIcon";
import { ChevronDownIcon } from "../../assets/icons/chevronDownIcon";
import Pagination from "../pagination";
import { ITableProps } from "../../interfaces/table";
import { useDarkMode } from "../../hooks/useDarkMode";
import "./table.css";

const Table = ({
    data,
    columns,
    rowsPerPageOptions = [10, 20, 50, 100],
}: ITableProps) => {
    const { isDarkMode } = useDarkMode();
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
        <div className={isDarkMode ? 'dark-mode' : ''}>
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
                                                    <div className="table-cell-icon">{expandedRow === rowId ? <ChevronDownIcon color={isDarkMode ? "#FFFFFF" : "#334155"} /> : <ChevronRightIcon color={isDarkMode ? "#FFFFFF" : "#334155"} />}</div>
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
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={rowsPerPageOptions}
                setCurrentPage={setCurrentPage}
                setRowsPerPage={setRowsPerPage}
            />
        </div>
    );
};

export default Table;
