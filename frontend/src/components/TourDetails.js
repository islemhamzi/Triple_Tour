import React, { useState } from "react";
import "./TourDetails.css";

const TourDetails = () => {
  const [activeTab, setActiveTab] = useState("details");

  const tabs = ["details", "highlights", "itinerary", "map", "faqs", "reviews"];

  return (
    <div className="tour-details">
      {/* Hero Image */}
      <img
        className="tour-details-image"
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        alt="Tunisia Desert"
      />

      {/* Tabs */}
      <div className="tour-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="tab-content">
        {activeTab === "details" && (
          <div>
            <h2>3-Day Tunisia Desert Trip Details</h2>
            <p>
              Explore Douz’s desert landscapes, ride camels, visit mountain oases,
              and spend a night in a desert camp under the stars...
            </p>
          </div>
        )}

        {activeTab === "highlights" && (
          <ul>
            <li>Spend a night in a desert camp under the stars</li>
            <li>Ride camels or ATVs through the Sahara dunes</li>
            <li>Visit the Star Wars filming site at Sidi Driss Hotel</li>
            <li>Discover Chebika and Tamerza mountain oases</li>
          </ul>
        )}

        {activeTab === "itinerary" && (
          <div>
            <h3>Day 1: Tunis - Kairouan - Tozeur</h3>
            <p>Explore Kairouan’s Great Mosque and travel to Tozeur...</p>
            <h3>Day 2: Tozeur - Douz</h3>
            <p>4WD safari, oases, and desert night camp.</p>
            <h3>Day 3: Douz - Matmata - El Jem - Tunis</h3>
            <p>Visit Berber homes and Roman ruins before returning to Tunis.</p>
          </div>
        )}

        {activeTab === "map" && (
          <iframe
            title="Tunisia Map"
            src="https://www.google.com/maps/embed?pb=!1m18!..."
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        )}

        {activeTab === "faqs" && (
          <div>
            <h4>How flexible is this itinerary?</h4>
            <p>Very flexible — we adapt it to your preferences.</p>
            <h4>What is the best time to go?</h4>
            <p>October to April for pleasant desert weather.</p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="reviews">
            <blockquote>
              "Ghazi was an amazing tour guide — attentive, knowledgeable, and fun!"
              <footer>— David Tran (6 days ago)</footer>
            </blockquote>
            <blockquote>
              "Incredible experience — everything was perfectly organized!"
              <footer>— Aliasger Adamjee (8 days ago)</footer>
            </blockquote>
          </div>
        )}
      </div>
    </div>
  );
};

export default TourDetails;
