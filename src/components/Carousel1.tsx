import React, { useState, useEffect } from "react";
import Marquee from "../@/components/magicui/marquee";
import Frame1 from "../assets/carrousel1/Frame 1.png";
import Frame2 from "../assets/carrousel1/Frame 2.png";
import Frame3 from "../assets/carrousel1/Frame 3.png";
import Frame4 from "../assets/carrousel1/Frame 4.png";
import Frame5 from "../assets/carrousel1/Frame 5.png";
import Frame6 from "../assets/carrousel1/Frame 6.png";
import Frame7 from "../assets/carrousel1/Frame 7.png";
import Frame8 from "../assets/carrousel1/Frame 8.png";

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
    { src: Frame1, alt: "Picture One" },
    { src: Frame2, alt: "Picture Two" },
    { src: Frame3, alt: "Picture Three" },
    { src: Frame4, alt: "Picture Four" },
    { src: Frame5, alt: "Picture Five" },
    { src: Frame6, alt: "Picture Six" },
    { src: Frame7, alt: "Picture Seven" },
    { src: Frame8, alt: "Picture Eight" },
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