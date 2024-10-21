import { useEffect, useState } from "react";
import Card from "../../components/card";
import Carousel from "../../components/carousel";
import BarChart from "../../components/chart/barchart";
import EventFilters from "../../components/filters/eventFilters";
import Modal from "../../components/modal";
import EventTable from "../../components/table/event";
import EventModalContent from "../../components/modal/eventModalContent";
import { homeData } from "../../fixtures/homeData";
import { ICard } from "../../interfaces/card";
import { IEvent } from "../../interfaces/event";
import { useDarkMode } from "../../hooks/useDarkMode";
import "./home.css";

const initialSelectedEvent: IEvent = {
    name: "",
    description: "",
    attendees: 0,
    status: "",
    date: "",
    id: 0,
    speaker: "",
}

const initialSearchFilters = {
    status: "",
    sort: "",
}

const Home = () => {
    const { isDarkMode } = useDarkMode();
    const [selectedEvent, setSelectedEvent] = useState(initialSelectedEvent);
    const [filters, setFilters] = useState(initialSearchFilters);
    const [filteredEvents, setFilteredEvents] = useState<any>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (event: IEvent) => {
        setSelectedEvent(event);
        setIsModalOpen(true);
    }
    const closeModal = () => {
        setSelectedEvent(initialSelectedEvent);
        setIsModalOpen(false);
    }

    const { statistics, monthlyEvents, news, events } = homeData;
    const eventLabels = Object.keys(monthlyEvents).map(month => month.charAt(0).toUpperCase() + month.slice(1, 3));
    const eventData = Object.values(monthlyEvents);

    useEffect(() => {
        const handleEventFilter = () => {
            let filteredEvents = events;
    
            // Apply status filter
            if (filters.status) {
                filteredEvents = filteredEvents.filter(event => event.status === filters.status);
            }
    
            console.log("Filtered and sorted events: ", filteredEvents);
            setFilteredEvents(filteredEvents);
        };
    
        handleEventFilter();
    }, [filters, events]);
    

    return (
        <div className={`home-container ${isDarkMode ? 'dark-mode' : ''}`}>
            <div className="home-title">Welcome! here is your summary</div>
            <div className="home-statistics">
                {statistics.map((item: ICard, index) => (
                    <Card
                        key={index}
                        title={item.title}
                        value={item.value}
                        percentage={item.percentage}
                    />
                ))}
            </div>
            <div className="event-container">
                <p className="event-registration-title">Event Registrations per month</p>
                <div className="event-section">
                    <div className="event-registration-section">
                        <div className="event-chart">
                            <BarChart
                                title=""
                                borderColor="#8576FF"
                                backgroundColor="#8576FF"
                                labels={eventLabels}
                                data={eventData}
                                tickColor={isDarkMode ? "#FFFFFF" : "#64748B"}
                            />
                        </div>
                    </div>
                    <div className="event-slider-container">
                        <Carousel data={news} />
                    </div>
                </div>
                <div className="event-history">
                    <p className="event-history-header">Event History</p>
                    <EventFilters count={filteredEvents.length} setFilters={setFilters} filters={filters} />
                    <EventTable events={filteredEvents} onClick={openModal} />
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <EventModalContent event={selectedEvent} />
            </Modal>
        </div>
    )
}

export default Home;