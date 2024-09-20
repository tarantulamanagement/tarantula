// src/components/BackgroundVideo.tsx
import React from "react";

const BackgroundVideo = () => {
  return (
    <video
      src="/assets/background.mp4"
      autoPlay
      loop
      playsInline
      preload="auto"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      Your browser does not support the video tag.
    </video>
  );
};

export default BackgroundVideo;
