import { useEffect, useMemo, useState } from "react";
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
    sort: "most recent",
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

    const computedFilteredEvents = useMemo(() => {
        let updatedEvents = events;

        // Apply status filter
        if (filters.status) {
            updatedEvents = updatedEvents.filter(event => event.status === filters.status);
        }

        // Apply sorting by either most recent or least recent
        if (filters.sort) {
            updatedEvents.sort((a, b) => {
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);
                
                return filters.sort === 'most recent'
                    ? dateB.getTime() - dateA.getTime() // Sort descending
                    : dateA.getTime() - dateB.getTime(); // Sort ascending
            });
        }

        return updatedEvents;
    }, [events, filters]);
    
    useEffect(() => {
        console.log("Filtered and sorted events: ", computedFilteredEvents);
        setFilteredEvents(computedFilteredEvents);
    }, [computedFilteredEvents]);

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