import Table from "../index";
import { IEvent } from "../../../interfaces/event";
import "./event.css";

interface IEventTable {
    events: IEvent[];
    onClick: (event: IEvent) => void;
}

const EventTable = ({
    events,
    onClick,
}: IEventTable) => {
    const columns = [
        {
            header: "Event Name",
            accessor: "name",
            render: (row: IEvent) => (
                <div onClick={() => onClick(row)} className="event-name-cell">
                    {row.name}
                </div>
            ),
        },
        { header: "Date", accessor: "date" },
        { header: "Speaker", accessor: "speaker" },
        {
            header: "Status",
            accessor: "status",
            render: (row: IEvent) => (
                <div className="row-status-container">
                    <div className={`row-status ${row.status.toLowerCase() === "completed" ? "row-status-completed" : "row-status-in-progress"}`}>
                        <div className={`row-status-indicator ${row.status.toLowerCase() === "completed" ? "row-status-completed-indicator" : "row-status-in-progress-indicator"}`}></div>
                    </div>
                </div>
            )
        },
    ];

    return <Table data={events} columns={columns} />;
};

export default EventTable;
