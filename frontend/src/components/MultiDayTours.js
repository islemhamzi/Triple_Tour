import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./MultiDayTours.css";

const MultiDayTours = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    // Fetch tours from backend
    const fetchTours = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/tours");
        const data = await response.json();
        setTours(data);
      } catch (error) {
        console.error("Error fetching tours:", error);
      }
    };
    fetchTours();
  }, []);

  return (
    <section id="multi-day-tours" className="multi-day-tours">
      <h2>Multi-Day Tours</h2>

      <div className="tours-container">
        {tours.length === 0 ? (
          <p className="loading">Loading tours...</p>
        ) : (
          tours.map((tour) => (
            <div key={tour._id} className="tour-card">
              <img
                src={
                  tour.imageUrl?.startsWith("http")
                    ? tour.imageUrl
                    : `http://localhost:5000${tour.imageUrl}`
                }
                alt={tour.title}
              />
              <h3>{tour.title}</h3>
              <p>{tour.description}</p>
              <Link to={`/tours/${tour._id}`} className="learn-more-btn">
                Learn More
              </Link>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default MultiDayTours;
