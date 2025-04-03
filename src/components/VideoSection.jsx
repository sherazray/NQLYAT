import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";

const VideoSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const youtubeLink = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Change this to your video link

  return (
    <div className="relative flex flex-col items-end justify-center h-[600px] p-16 bg-[#7b7b83]">
      {/* Text and Play Button in One Row with Top Adjustment */}
      <div className="flex items-center justify-end gap-4 absolute top-40 right-16">
        <h2 className="text-white text-5xl font-bold font-doodle drop-shadow-lg">
          View Our Informative Videos
        </h2>

        {/* Play Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-yellow-500 rounded-full shadow-lg hover:scale-110 transition duration-300 ease-in-out"
        >
          <FaPlay className="text-black text-2xl md:text-3xl" />

          {/* Ripple Effect */}
          <span className="absolute w-full h-full bg-gray-400 opacity-30 rounded-full animate-ping"></span>
          <span className="absolute w-3/4 h-3/4 bg-gray-500 opacity-40 rounded-full animate-ping"></span>
        </button>
      </div>

      {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-end bg-black bg-opacity-80 z-50 p-6">
          <div className="relative w-full max-w-3xl p-4">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-300"
            >
              ✕
            </button>

            {/* Embedded YouTube Video */}
            <iframe
              className="w-full aspect-video rounded-lg shadow-lg"
              src={youtubeLink}
              title="YouTube Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoSection;
