// src/pages/Home.tsx
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel1";
import Companies from "../components/Carousel2";
import '../App.css';

function Home() {
    const navigate = useNavigate();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const canvasRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        document.body.style.overflow = "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const handleWhoWeAreClick = () => {
        const windowHeight = window.innerHeight;
        const scrollDistance = windowHeight * 0.8;

        window.scrollTo({
            top: window.scrollY + scrollDistance,
            behavior: "smooth"
        });
    };

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const viewportHeight = window.innerHeight;
            const textElement = document.getElementById("fade-in-text");
            if (textElement) {
                const elementTop = textElement.getBoundingClientRect().top;
                if (elementTop < viewportHeight * 0.75) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            style={{
                backgroundColor: "#F6F6F6",
                color: "#333", 
                fontFamily: "Jost, sans-serif",
                minHeight: "100vh",
                padding: "5%", 
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start", 
                textAlign: "left", 
                gap: "20px",
                overflowY: "auto",
                overflowX: "hidden"
            }}
        >


            <h1 style={{ fontWeight: "bold", color: "#272727", margin: "26vh 0 0" }}>
                TARANTULA
            </h1> {/* Title */}
            <h2 style={{ color: "#272727", margin: "2vh 0 0" }}>
                TARANTULA PROVIDES TALENT MANAGEMENT AND STRATEGIC CONSULTING TO ICONS, ARTISTS, GENIUSES AND HEADS OF STATE
            </h2> {/* Subtitle */}
            <h3 style={{ color: "#272727", margin: "2vh 0 0" }}>
                MILO YIANNOPOULOS IS JOINED BY TWO SILENT PARTNERS IN A TRIUMVIRATE THAT OFFERS UNPRECEDENTED AND UNRIVALLED CONNECTIONS, CAPITAL AND EXPERTISE
            </h3> {/* Subtitle */}
            <p style={{ color: "#272727", margin: "8vh 0 -2vh" }}>
                PAST AND PRESENT CLIENTS
            </p> {/* Paragraph */}
            <div className="mt-10 mb-20">
                <Carousel duration="45s" pauseOnHover={true} />
                <Companies duration="45s" reverse={true} pauseOnHover={true} />
            </div>
            <footer style={{ color: "#272727", margin: "2% 0 -2vh" }}>
                <p>DIRECT ENQUIRIES TO MY@TRNT.LA</p>
                <p>WE ARE NOT ACCEPTING NEW CLIENTS AT THIS TIME</p>
                <p>© TARANTULA MANAGEMENT, LLC</p>
            </footer>
        </div>
    );
}

export default Home;
