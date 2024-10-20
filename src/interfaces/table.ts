export interface IColumn {
    header: string;
    accessor: string;
    render?: (item: any) => React.ReactNode; 
}

export interface ITableProps {
    data: any[];
    columns: IColumn[];
    rowsPerPageOptions?: number[];
}