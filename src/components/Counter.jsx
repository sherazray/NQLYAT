import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Counter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Counter animation triggers only once
    threshold: 0.3, // Start animation when 30% of the component is visible
  });

  return (
    <div ref={ref} className="bg-white flex justify-center items-center">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-300 text-center">
          {/* First Counter */}
          <div className="flex flex-col md:flex-row items-center justify-center border-gray-300 space-x-3 py-4 md:border-r">
            <span className="text-5xl font-bold text-gray-900">
              {inView && <CountUp start={0} end={81294} duration={3} separator="," />}
            </span>
            <span className="text-[#ca1f26] text-lg">■</span>
            <span className="text-gray-500 text-lg text-center md:text-left">
              Guaranteed Delivery Services
            </span>
          </div>

          {/* Second Counter */}
          <div className="flex flex-col md:flex-row items-center justify-center space-x-3 py-4">
            <span className="text-5xl font-bold text-gray-900">
              {inView && <CountUp start={0} end={13893} duration={3} separator="," />}
            </span>
            <span className="text-[#ca1f26] text-lg">■</span>
            <span className="text-gray-500 text-lg text-center md:text-left">
              Client Satisfaction Record
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
