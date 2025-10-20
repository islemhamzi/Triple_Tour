// src/components/Contact.js
import React from "react";
import "./ContactUs.css";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Header */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We’re here to help you plan your unforgettable Tunisia experience!</p>
      </div>

      {/* Contact Info */}
      <div className="contact-info">
        <div className="info-item">
          <h3>Address</h3>
          <p>123 Main Street, Tunis, Tunisia</p>
        </div>
        <div className="info-item">
          <h3>Email</h3>
          <p>info@tripletour.com</p>
        </div>
        <div className="info-item">
          <h3>Phone</h3>
          <p>+216 12 345 678</p>
        </div>
      </div>

      {/* Contact Form and Map */}
      <div className="contact-form-section">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message" rows="6" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-map">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.389448392701!2d10.192452915207017!3d36.81897037995057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd34b1d5e31a05%3A0x94a7d7b2f06b3c5d!2sTunis%2C%20Tunisia!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
