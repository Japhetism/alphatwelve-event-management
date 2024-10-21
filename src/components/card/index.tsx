import { ArrowDownRightIcon } from "../../assets/icons/arrowDownRightIcon";
import { ArrowUpRightIcon } from "../../assets/icons/arrowUpRightIcon"
import { InformationIcon } from "../../assets/icons/informationIcon";
import { useDarkMode } from "../../hooks/useDarkMode";
import { ICard } from "../../interfaces/card";
import "./card.css";

const Card = ({
    title,
    value,
    percentage,
}: ICard) => {
    const { isDarkMode } = useDarkMode();
    return (
        <div className={`card-container ${isDarkMode ? "dark-mode" : ""}`}>
            <div className="card-section">
                <div className="card-title-container">
                    <div className="card-title">
                        {title}
                    </div>
                    <InformationIcon color={isDarkMode ? "#FFFFFF" : "#64748B"}/>
                </div>
                <div className="card-value-container">
                    <div className="card-value">{value}</div>
                    {percentage >= 0 ? <ArrowUpRightIcon /> : <ArrowDownRightIcon />}
                    <div className={`card-value-difference ${percentage >=0 ? "card-positive-difference" : "card-negative-difference"}`}>{percentage >=0 ? `+${percentage.toFixed(1)}` : percentage.toFixed(1)}%</div>
                </div>
            </div>
        </div>
    )
}

export default Card;