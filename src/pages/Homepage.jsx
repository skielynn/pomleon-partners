import React from "react";
import '../pages/Homepage.css';
import home1 from '../images/home1.jpg';
import owner1 from '../images/owner1.jpg';
import owner2 from '../images/owner2.png';
 

function Homepage() {
    return (
   <>
   {/* SKIP LINK 4 KEYBOARD USERS */}
   <a className="skip-link" href="#main-content">
    Skip to main content
   </a>
   
   <main id="main-content" className="homepage">

        {/* HERO SECTION ! */}
        <section className="hero" aria-labelledby="hero-title">
            <h1 id="hero-title">We Buy Houses in <span className="highlight-it">Oklahoma</span> !</h1>
            <p>Family-owned cash home buyers offering fair, fast and simple home sales in Pawhuska and Osage County.</p>
        </section>

         {/* ABOUT SUMMMARY */}
         <section className="aboutsection" aria-labelledby="about-title">
            <div className="about-photo">
                <img src={home1} alt="Pomleon Partners Purchased Home" loading="lazy" decoding="async" />
            </div>
         <div className="about-summary">
            <h2 id="about-title">About Pomleon Partners</h2>
            <p>Pomleon Partners LLC is a family-owned real estate investment company focused on buying, renovating and holding residential properties in Oklahoma.</p>
            <p>We don't flip homes for quick gains, we invest in homes the right way. Our approach is conservative, transparent and built on the responsible renovations that add long-term 
                value to the community. When you work with us, you get a simple, honest and a pressure free selling experience. </p>
            <a href="/about" className="learn-more">Learn More<span className="sr-only"> about Pomleon Partners</span></a>
            
         </div>
         </section>

         {/* BENEFITS SECTION ! */}
         <section className="benefits-section" aria-labelledby="benefits-title">
            <div className="benefit-header">
                    <h2 id="benefits-title">Why Choose<span className="highlight-it"> Us</span> ?</h2>
                </div>
            <div className="benefits">
            <div className="benefit-item">
                <span className="material-symbols-outlined icon" aria-hidden="true">real_estate_agent</span>
                <h3>We Make Selling Simple</h3>
                <p>No repairs, cleanings or showings required. We handle all renovations ourselves, so you can skip the stress, save money and move on your ouwn timeline!</p>
            </div>

            <div className="benefit-item">
                <span className="material-symbols-outlined icon" aria-hidden="true">payments</span>
                <h3>Fair Cash Offers You Can Feel Good About</h3>
                <p>No commissions, no hidden costs and no pushy tactics. Just a simple, honest cash offer from a family-owned team!</p>
            </div>

            <div className="benefit-item">
                <span className="material-symbols-outlined icon" aria-hidden="true">in_home_mode</span>
                <h3>Closing On Your Timeline</h3>
                <p>Whether you need to move quickly or want extra time, we work around your schedule. You choose the date and we make the process smooth, flexible and stress free!</p>
            </div>
            </div>
         </section>

         {/* AREA SECTION ! */}
         <section className="areas-section" aria-labelledby="areas-title">
            <div className="areas-content">
                <div className="areas-text">
                    <h2 id="areas-title">Areas We <span className="highlight-it"> Serve</span></h2>
                    <p>We primarily buy homes in Pawhuska, Osage County and nearby communities in Northeastern Oklahoma.
                        If you're not sure whether your property is in our service area, just reach out! We'll let you know quickly.
                    </p>
                    <ul>
                        <li>Pawhuska</li>
                        <li>Osage County</li>
                        <li>Bartlesville Area</li>
                        <li>Northeastern Oklahoma</li>
                    </ul>
                </div>
                
                <div className="areas-map">
                    <iframe
                       title="Map showing Pawhuska and surrounding service areas"
                       loading="lazy"
                       referrerPolicy="no-referrer-when-downgrade"
                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.971588014178!2d-96.337219!3d36.667567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b01d7b7a4f1a3d%3A0x52b1ff6f2a2f0a93!2sPawhuska%2C%20OK!5e0!3m2!1sen!2sus!4v1700000000000"
                       allowFullScreen
                       ></iframe>
                      </div> 
                      </div>
         </section>

         {/* OWNERS SECTION */}
         <section className="owners-preview" aria-labelledby="owners-title">
           <h2 id="owners-title">Meet The Family Behind <span className="highlight-it">Pomleon Partners</span></h2>
           <p> We're a small, family-owned home buying team. Our goal is simple, treat every homeowner with
            honesty, respect and transparency.
           </p>
        
        <div className="owner-photos">
            <div className="owner-card">
              <img src={owner1} alt="Stacey Pacas, Co-Founder of Pomleon Partners" loading="lazy" decoding="async"/>
              <h3>Stacey Pacas</h3>
              <p>Co-Founder</p>
            </div>
            <div className="owner-card">
               <img src={owner2} alt="Tony Pacas, Co-Founder of Pomleon Partners" loading="lazy" decoding="async"/>
               <h3>Tony Pacas</h3>
               <p>Co-Founder</p>
            </div>
        </div>

        <a href="/about" className="learn-more owners-link">Learn More About Us</a>
         </section>
          
          {/* MINI CONTACT SECTION */}
          <section className="quick-contact" aria-labelledby="contact-title">
            <div className="quick-contact-inner">
                <h2 id="contact-title">Get Your<span className="highlight-it"> Fair</span> Cash Offer</h2>
                <p>No pressure. No obligations. Just a simple conversation.</p>

                <form className="quick-contact-form">
                    {/* SCREEN READER FRIENDLY */}
                   <label className="sr-only" htmlFor="qc-name">Your name</label>
  <input
    id="qc-name"
    name="name"
    type="text"
    placeholder="Your Name"
    autoComplete="name"
    required
  />

  <label className="sr-only" htmlFor="qc-address">Property address</label>
  <input
    id="qc-address"
    name="address"
    type="text"
    placeholder="Property Address"
    autoComplete="street-address"
    required
  />

  <label className="sr-only" htmlFor="qc-phone">Phone number</label>
  <input
    id="qc-phone"
    name="phone"
    type="tel"
    placeholder="Phone Number"
    autoComplete="tel"
    inputMode="tel"
    required
  />

  <button type="submit">Request My Offer</button>

                </form>
            </div>
          </section>
           </main>
        </>
    );
}

export default Homepage;