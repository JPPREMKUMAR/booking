import React, { useEffect, useState, useContext } from "react";
import { carousel1, carousel2, carousel3, carousel4, carousel5, carousel6 } from "../assets/assets.js"
import { MainContext } from "../context/MainContext.jsx";
const images = [
    carousel6,
    carousel5,

    carousel2, carousel3



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
                        className="w-full h-64 md:h-96 flex-shrink-0 bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center "
                        style={{ backgroundImage: `url(${img})` }}
                        aria-label={`Slide ${i}`}
                    >
                        <div>

                            <h1 className="text-center text-2xl sm:text-4xl font-bold italic text-gray-400">Book Your Airport Taxi Now</h1>
                            <h1 className="text-center text-2xl sm:text-4xl font-bold italic text-gray-400">Safe & Reliable Booking</h1>
                            <h1 className="text-center text-2xl sm:text-4xl font-bold italic text-gray-400">Fly High Ride Premium </h1>
                            <div className=" sm:my-5 my-2">
                                <button className="text-white font-bold sm:text-md text:sm sm:px-5 sm:py-2  px-3 py-1 bg-blue-500 rounded-md outline-none cursor-pointer " onClick={onClickBook}>Book Now</button>
                            </div>
                        </div>
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
