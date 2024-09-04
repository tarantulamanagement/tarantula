import React from "react";

const BackgroundMusic = () => {
  return (
    <div>
      <audio
        id="background-music"
        src="/audio/Tarantula.mp3" // Path to your audio file
        autoPlay
        loop
        style={{ display: "none" }} // Hide the audio element
      >
        Your browser does not support the audio element.
      </audio>

      <script>
        {`
          const audio = document.getElementById('background-music');
          audio.controls = false; // Remove controls
          audio.volume = 0; // Set volume to 0 to ensure no sound
        `}
      </script>
    </div>
  );
};

export default BackgroundMusic;