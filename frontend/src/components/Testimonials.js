// src/components/Testimonials.js
import React from "react";
import "./Testimonials.css";

const testimonials = [
  { name: "David Tran", daysAgo: "6 days ago", text: "Ghazi was an amazing tour guide. We saw the Sahara Desert, Berber villages, and more." },
  { name: "Aliasger Adamjee", daysAgo: "8 days ago", text: "Everything was perfectly organized. We explored historic sites, quads in Sahara, and Mediterranean." },
  { name: "Rachel Montgomery", daysAgo: "11 days ago", text: "Our guide spoke multiple languages and made our 10-day Tunisia trip unforgettable." },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Our Travelers Say</h2>
      <div className="testimonials-container">
        {testimonials.map((item, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-text">"{item.text}"</p>
            <p className="testimonial-author">{item.name} - {item.daysAgo}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
