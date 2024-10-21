import { useDarkMode } from "../../../hooks/useDarkMode";
import { IEvent } from "../../../interfaces/event";
import "./eventModalContent.css";

interface IEventModalContent {
    event: IEvent
}

const EventModalContent = ({
    event
}: IEventModalContent) => {

    const { isDarkMode } = useDarkMode();
    
    return (
        <div className={`event-modal-container ${isDarkMode ? "dark-mode" : ""}`}>
            <div className="event-modal-content-section">
                <div>
                    <span className="event-name">{event.name}</span><br/>
                    <span className="event-date">{event.date}</span>
                </div>
                <div className="event-description-container">
                    <p className="event-description">{event.description}</p>
                </div>
                <div className="event-image-container">
                    <img src="/assets/images/avatar1.png" alt="Avatar 1" />
                    <img src="/assets/images/avatar2.png" alt="Avatar 2" />
                    <img src="/assets/images/avatar3.png" alt="Avatar 3" />
                </div>
                <div>
                    <p className="event-description">
                        {`1 Guest Speaker: ${event.speaker}.`}<br/>
                        {`${event.attendees} Attendees`}
                    </p>
                </div>
            </div>
            <div className="event-button-container">
                <div className="event-modal-footer-section">
                    <div className="edit-event-button-container">
                        <button className="edit-event-button">Edit</button>
                    </div>
                    <div className="event-completed-container">
                        <div className="delete-event-button-container">
                            <button className="delete-event-button">Delete</button>
                        </div>
                        <div className="complete-event-button-container">
                            <button className="complete-event-button">Mark as Completed</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventModalContent;