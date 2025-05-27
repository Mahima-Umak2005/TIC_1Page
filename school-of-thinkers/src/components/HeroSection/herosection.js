import React from 'react';
import './HeroSection.css';
import heroImage from '../assets/images/image3.png';

const HeroSection = () => {
  return (
    <section className="sot-section sot-section-dark">
      <div className="w3-container">
        <div className="w3-row">
          <div className="w3-col m6 desktop-padding">
            <h1><strong>Welcome to School of Entrepreneurs</strong></h1>
            <p>
              In this era of entrepreneurship, how can you afford being left
              behind? Anyone can become an entrepreneur, why can't you?
            </p>
            <p>
              Owning a successful venture has never been easier. The market is
              ready, The investors are ready, The consumers are ready, Are you
              ready?
            </p>
            <div className="w3-container">
              <a href="#thinkers-club" className="sot-btn w3-margin-right">
                Join Thinkers Club
              </a>
              <a href="#investors-table" className="sot-btn">
                Explore Investors
              </a>
            </div>
          </div>
          <div className="w3-col m6">
            <img
              src={heroImage}
              alt="Entrepreneurs collaborating"
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;