import React, { useState, useEffect } from "react";
import Marquee from "../@/components/magicui/marquee";
import Frame9 from "../assets/carrousel1/Frame 9.png";
import Frame10 from "../assets/carrousel1/Frame 10.png";
import Frame11 from "../assets/carrousel1/Frame 11.png";
import Frame12 from "../assets/carrousel1/Frame 12.png";
import Frame13 from "../assets/carrousel1/Frame 13.png";
import Frame14 from "../assets/carrousel1/Frame 14.png";
import Frame15 from "../assets/carrousel1/Frame 15.png";
import Frame16 from "../assets/carrousel1/Frame 16.png";
import Frame17 from "../assets/carrousel1/Frame 17.png";


interface CarouselProps {
  duration?: string;
  pauseOnHover?: boolean;
  reverse?: boolean; 
}

const Carousel = ({
  duration = "60s",
  pauseOnHover = true,
  reverse = false
}: CarouselProps) => {
  const carouselItems = [
    { src: Frame9, alt: "Picture One" },
    { src: Frame10, alt: "Picture Two" },
    { src: Frame11, alt: "Picture Three" },
    { src: Frame12, alt: "Picture Four" },
    { src: Frame13, alt: "Picture Five" },
    { src: Frame14, alt: "Picture Six" },
    { src: Frame15, alt: "Picture Seven" },
    { src: Frame16, alt: "Picture Eight" },
    { src: Frame17, alt: "Picture Eight" },

  ];

  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  return (
    <div
      style={{ 
        width: "100%", 
        maxWidth: "90vw", // Ensure it does not exceed viewport width
        backgroundColor: "#F6F6F6",
        position: "relative",
        overflow: "hidden",
        display: "flex", // Center contents
        justifyContent: "center", // Horizontally center content
        alignItems: "center" // Vertically center content
      }}
    >
      <div
        className="absolute top-0 left-0 w-1/6 h-full z-10"
        style={{
          background: "linear-gradient(to right, #F6F6F6, transparent)"
        }}
      ></div>
      <div
        className="absolute top-0 right-0 w-1/6 h-full z-10"
        style={{
          background: "linear-gradient(to left, #F6F6F6, transparent)"
        }}
      ></div>

      <Marquee
        className="py-4"
        pauseOnHover={pauseOnHover}
        reverse={reverse} 
        style={{ "--duration": duration } as React.CSSProperties}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          {carouselItems.map((item, index) => (
            <div key={index} className="mx-2" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img
                src={item.src}
                alt={item.alt}
                style={{
                  maxWidth: "40vh",
                  height: "auto",
                  margin: "0 30px"
                }}
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Carousel;