import Card from "../../components/card";
import Carousel from "../../components/carousel";
import BarChart from "../../components/chart/barchart";
import { homeData } from "../../fixtures/homeData";
import { ICard } from "../../interfaces/card";
import "./home.css";

const Home = () => {

    const { statistics, monthlyEvents, news } = homeData;
    const eventLabels = Object.keys(monthlyEvents).map(month => month.charAt(0).toUpperCase() + month.slice(1, 3));
    const eventData = Object.values(monthlyEvents);

    return (
        <div className="home-container">
            <div className="home-title">Welcome! here is your summary</div>
            <div className="home-statistics">
                {statistics.map((item: ICard, index) => (
                    <Card
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
            </div>
        </div>
    )
}

export default Home;