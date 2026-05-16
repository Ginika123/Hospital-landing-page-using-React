import "./Hero.css";
import { useEffect, useState } from "react";

function Hero() {

    const slides = [
        {
            title: "Quality Healthcare You Can Trust",
            text: "We provide world-class medical care with experienced doctors."
        },

        {
            title: "Emergency Care 24/7",
            text: "Our hospital is always ready for any emergency situation."
        },

        {
            title: "Expert Doctors & Modern Equipment",
            text: "We use advanced technology to give you the best treatment."
        }
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {

            setIndex((prev) => (prev + 1) % slides.length);

        }, 4000);

        return () => clearInterval(interval);

    }, []);

    return (
        <section className="hero">

            <div className="hero-content">

                <h1>
                    {slides[index].title}
                </h1>

                <p>
                    {slides[index].text}
                </p>

                <div className="hero-buttons">

                    <button className="hero-btn">
                        Book Appointment
                    </button>

                    <button className="hero-btn">
                        Book Appointment
                    </button>

                </div>

            </div>

        </section>
    );
}

export default Hero;