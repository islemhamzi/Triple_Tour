import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MultiDayTours from "./components/MultiDayTours";
import Highlights from "./components/Highlights";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import TourDetails from "./components/TourDetails"; // ✅ we’ll create this soon

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* 🏠 Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <MultiDayTours />
              <Highlights />
              <Testimonials />
              <ContactUs />
            </>
          }
        />
        {/* 🧭 Tour Details Page */}
        <Route path="/tours/:id" element={<TourDetails />} />
      </Routes>
    </>
  );
}

export default App;
