// src/components/Highlights.js
import React from "react";
import "./Highlights.css";

const highlights = [
  { title: "Sahara Desert", description: "Camel rides, dunes, desert camps.", icon: "🏜️" },
  { title: "Historic Sites", description: "Roman amphitheaters, ancient ruins, UNESCO sites.", icon: "🏛️" },
  { title: "Cultural Experiences", description: "Berber villages, local cuisine, interacting with locals.", icon: "🎭" },
  { title: "Luxury Stays", description: "Handpicked hotels, exclusive accommodations.", icon: "🏨" },
  { title: "Tailor-Made Itineraries", description: "Trips fully customized for your preferences.", icon: "🛠️" },
];

const Highlights = () => {
  return (
    <section className="highlights">
      <h2>Highlights</h2>
      <div className="highlights-container">
        {highlights.map((item, index) => (
          <div key={index} className="highlight-card">
            <div className="highlight-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
