import React from 'react';
import '../pages/AboutPage.css';



function AboutPage() {
   return (
    <main className="about-page">
     <header className="about-hero">
        <h1><span className="highlight-it">Who</span> We Are</h1>
        <p>Pomleon Partners is a family-owned home buying company focused on making selling simple
            for Oklahoma homeowners. We offer fair, no obligation cacsh offers and flexible closing 
            timelines without repairs, showings or stress.
        </p>
     </header>

     <section className="about-section">
       <div className="about-card">
         <h2>Our Story</h2>
         <p> We started Pomleon Partners with one goal, create a smoother way for people
            to sell their homes when life changes fast. Whether you're dealing with an 
            inherited property, a move, repairs you don't want to take on, or simply
            want a quick sale, we're here to help.
         </p>
         <p> We're approachable and transparent. That means you'll always know what
            to expect and you'll never feel pressured. Just real conversations and 
            real solutions.
         </p>
       </div>
     </section>

     <section className="about-section">
        <h2 className="section-title">Meet The Owners</h2>

       <div className="owners-wrap">
        <div className="owner-card">
            <div className="owner-photo" aria-hidden="true">
                <h3>Owner Name</h3>
                <p>ABOUT OWNER FILLER .... </p>
            </div>

         <div className="owner-card">
            <div className="owner-photo" aria-hidden="true">
                <h3>Owner Name</h3>
                <p>ABOUT OWNER FILLER .... </p>
            
         </div>
        </div>
       </div>
</div>
     </section>


    </main>
   )

}


export default AboutPage;