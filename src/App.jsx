import React, { useState, useEffect } from "react";
import Loader from "./components/Loader"; // Ensure you have a Loader component
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Features from "./components/Features";
import VideoSection from "./components/VideoSection";
import Counter from "./components/Counter";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactUs from "./components/ContactUs";
import OurFleet from "./components/OurFleet";
import Footer from "./components/Footer";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000); // Simulate loading
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <Carousel />
          <Features />
          <VideoSection />
          <Counter />
          <WhyChooseUs />
          <ContactUs />
          <OurFleet />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
