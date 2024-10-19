import Card from "../../components/card";
import { homeData } from "../../fixtures/homeData";
import { ICard } from "../../interfaces/card";
import "./home.css";

const Home = () => {
    const { statistics } = homeData;
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
        </div>
    )
}

export default Home;