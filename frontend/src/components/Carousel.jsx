import React, { useEffect, useState, useContext } from "react";
import { carousel1, carousel2, carousel3, carousel4, carousel5, carousel6, carousel7, c1, c2, c3 } from "../assets/assets.js"
import { MainContext } from "../context/MainContext.jsx";
const images = [
    c1, c2, c3

];

const Carousel = () => {
    const [index, setIndex] = useState(0);

    const { navigate } = useContext(MainContext)
    // Auto slide every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);


    const onClickBook = () => {
        navigate("/booking/1")
    }

    return (
        <div className="relative w-full  overflow-hidden mb-5">
            {/* Slides */}
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
            >
                {images.map((img, i) => (
                    <div
                        key={i}
                        className="w-full h-64 sm:h-100 flex-shrink-0 bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center cursor-pointer "
                        style={{ backgroundImage: `url(${img})` }}
                        aria-label={`Slide ${i}`}
                    >

                    </div>
                ))}
            </div>

            {/* Navigation Dots 
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-3 h-3 rounded-full transition-all ${i === index ? "bg-white scale-125" : "bg-gray-400"
                            }`}
                    ></button>
                ))}
            </div>
            */}
        </div>
    );
};

export default Carousel;
