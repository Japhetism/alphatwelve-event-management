import { useEffect, useState } from "react";
import { ChevronLeftIcon } from "../../assets/icons/chevronLeftIcon";
import { ChevronRightIcon } from "../../assets/icons/chevronRightIcon";
import { INews } from "../../interfaces/news";
import { ICarousel } from "../../interfaces/carousel";
import "./carousel.css";

const Carousel = ({ data }: ICarousel) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [data]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };

    return (
        <div className="carousel">
            <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {data.map((item: INews, index: number) => (
                    <div className="carousel-item" key={index}>
                        <img src={item.image} alt={`Slide ${index}`} />
                        <div className="carousel-caption">
                            <div className="carousel-caption-title">{item.title}</div>
                            <div className="carousel-caption-description">{item.description}</div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-control left" onClick={prevSlide}>
                <ChevronLeftIcon color="#334155" />
            </button>
            <button className="carousel-control right" onClick={nextSlide}>
                <ChevronRightIcon color="#334155" />
            </button>
        </div>
    );
};

export default Carousel;
