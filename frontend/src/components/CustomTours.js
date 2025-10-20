import React from "react";
import "./CustomTours.css";

const CustomTours = () => {
  return (
    <div className="custom-tours-page">
      {/* Hero Section */}
      <section className="custom-hero">
        <div className="hero-text">
          <h1>Custom Tunisia Tours</h1>
          <p>Elevate your travel with a customized Tunisian experience</p>
          <div className="hero-rating">
            ⭐ 5.0 <span>· 200 reviews</span>
          </div>
          <button className="hero-btn">Build Your Custom Tour</button>
        </div>
      </section>

      {/* Intro */}
      <section className="custom-intro">
        <h2>Enjoy the most authentic way to experience Tunisia.</h2>
        <p>
          Welcome to <strong>Xperience Tunisia’s Tailor-Made Tour Builder</strong>. 
          Every journey should reflect the traveler behind it — that’s why we help 
          you create your dream itinerary, aligned with your interests, preferences, and budget.
        </p>
        <p>
          Whether inspired by our Multi-Day Tours or Tunisia Day Tours, your itinerary 
          is entirely in your hands. Choose your destinations, activities, accommodations, 
          and transportation — we’ll take care of the rest.
        </p>
      </section>

      {/* Testimonials */}
      <section className="custom-testimonials">
        <h2>A True 5-Star Xperience</h2>
        <div className="testimonials-container">
          <div className="testimonial">
            <p>
              “Ghazi was an amazing tour guide — extremely attentive, knowledgeable, 
              and fun. We explored the Sahara Desert, Berber villages, and El Jem. 
              Highly recommended!”
            </p>
            <span>- David Tran · 7 days ago</span>
          </div>
          <div className="testimonial">
            <p>
              “From the moment we landed, everything was perfectly organized. 
              Hichem went above and beyond — Tunisia is safe, beautiful, and full of kind people.”
            </p>
            <span>- Aliasger Adamjee · 9 days ago</span>
          </div>
          <div className="testimonial">
            <p>
              “We spent 10 incredible days around Tunisia. Every detail was seamless. 
              I’d love to return someday!”
            </p>
            <span>- Rachel Montgomery · 13 days ago</span>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="custom-how">
        <h2>How Does It Work?</h2>
        <div className="how-steps">
          <div className="how-step">
            <h3>1. Send Us Your Inquiry</h3>
            <p>Tell us what kind of trip you’d like to have.</p>
          </div>
          <div className="how-step">
            <h3>2. Get Your Free Quote</h3>
            <p>We’ll provide a personalized quote — no commitment needed.</p>
          </div>
          <div className="how-step">
            <h3>3. Customize and Book</h3>
            <p>Finalize your dream itinerary and let us handle the rest.</p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="custom-form">
        <h2>Your Xperience, Your Way</h2>
        <form className="tour-form">
          <div className="form-row">
            <input type="text" placeholder="Your Name*" required />
            <input type="email" placeholder="Email*" required />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Phone Number" />
            <input type="text" placeholder="Your Country*" required />
          </div>
          <textarea placeholder="Tell us about your dream trip..." rows="6"></textarea>
          <button type="submit">Submit Inquiry</button>
        </form>
      </section>
    </div>
  );
};

export default CustomTours;
