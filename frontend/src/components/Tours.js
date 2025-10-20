import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Tours.css";

const Tours = () => {
  const [tours, setTours] = useState([]);
  const backendUrl = "http://localhost:5000"; // adjust if needed

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const res = await axios.get(`${backendUrl}/api/tours`);
        setTours(res.data);
      } catch (err) {
        console.error("Error fetching tours:", err);
      }
    };

    fetchTours();
  }, []);

  return (
    <section className="tours-section">
      <h2 className="section-title">Our Tours</h2>
      <div className="tours-grid">
        {tours.length === 0 ? (
          <p>No tours available.</p>
          
        ) : (
          tours.map((tour) => (
            <div className="tour-card" key={tour._id}>
              <div className="tour-image">
                <img
                  src={tour.imageUrl ? `${backendUrl}${tour.imageUrl}` : "/placeholder.png"}
                  alt={tour.title}
                />
                <div className="tour-overlay">
                  <h3>{tour.title}</h3>
                  <p>{tour.location}</p>
                  <p><strong>${tour.price}</strong></p>
                </div>
              </div>
              <p className="tour-desc">{tour.description}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Tours;
