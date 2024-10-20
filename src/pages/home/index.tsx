import { useState } from "react";
import Card from "../../components/card";
import Carousel from "../../components/carousel";
import BarChart from "../../components/chart/barchart";
import EventFilters from "../../components/filters/eventFilters";
import Modal from "../../components/modal";
import EventTable from "../../components/table/event";
import Tabs from "../../components/tabs";
import EventModalContent from "../../components/modal/eventModalContent";
import { homeData } from "../../fixtures/homeData";
import { footerMenuItems } from "../../fixtures/sidemenu";
import { ICard } from "../../interfaces/card";
import { IEvent } from "../../interfaces/event";

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

const Home = () => {
    const [selectedEvent, setSelectedEvent] = useState(initialSelectedEvent);
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

    return (
        <div className="home-container">
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
                            />
                        </div>
                    </div>
                    <div className="event-slider-container">
                        <Carousel data={news} />
                    </div>
                </div>
                <div className="event-history">
                    <p className="event-history-header">Event History</p>
                    <EventFilters />
                    <EventTable events={events} onClick={openModal} />
                </div>
            </div>
            <div className="footer-tabs">
                <Tabs tabs={footerMenuItems} />
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <EventModalContent event={selectedEvent} />
            </Modal>
        </div>
    )
}

export default Home;