import React from "react";
import { useRef } from "react";
import "../styles/WhyWeAre.css";
import expertImg from '../assets/whereweare/endtoend.jpg';
import scalableImg from '../assets/whereweare/scalable.jpg';
import clientImg from '../assets/whereweare/bulkupload.jpg';
import agileImg from '../assets/whereweare/rolebased.jpg';
import autoImg from '../assets/whereweare/client.jpg';
import secureImg from '../assets/whereweare/secure.jpg';
import deliveryImg from '../assets/whereweare/perftracking.jpg'

const cardData = [
  {
    image: expertImg,
    title: "End-to-End Hiring Workflow",
    desc: "From resume upload to 90-day post-joining tracking — we cover the entire recruitment journey in one seamless platform.",
  },
  {
    image: scalableImg,
    title: "Smart Automations That Save Time",
    desc: "Auto-filled candidate forms from resumes or Excel.Instant salary hike calculation.Distance calculator to assess commute feasibility",
  },
  {
    image: clientImg,
    title: "Bulk Handling Made Easy",
    desc: "Whether you’re uploading 10 or 100 resumes — our system is built for speed, scale, and reliability.",
  },
  {
    image: agileImg,
    title: "Role-Based Workflows",
    desc: "Custom access for recruiters, HR leads, clients, and interviewers.Everyone sees only what they need — keeping things clean and efficient.",
  },
  {
    image: deliveryImg,
    title: "Performance Tracking for Recruiters",
    desc: "Built-in dashboards track:Recruiter logins,Candidate activity,Conversion ratios,Attendance & call logs",
  },
  {
    image: autoImg,
    title: "Automated Candidate Notifications",
    desc: "Keep candidates engaged and informed at every step — from “Application Received” to “Offer Sent” — with zero manual follow-ups."
  },
  {
    image: secureImg,
    title: "Secure & Compliant",
    desc: "Role-based access controls,GDPR-friendly data handling,Encrypted document uploads."
  }
];

const WhyWeAre = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (

    <section className="section section-blue whyweare" id="WhyUs">
      <h2 className="whyweare-title">Why We Are Different</h2>
      <div className="whyweare-carousel-wrapper">
        <button className="whyweare-arrow left" onClick={() => scroll("left")}>
          &larr;{/* <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" /></svg> */}
        </button>

        <div className="whyweare-carousel" ref={scrollRef}>
          {cardData.map((card, index) => (
            <div className="whyweare-card" key={index}>
              <img src={card.image} alt={card.title} className="whyweare-image" />
              <h3 className="whyweare-card-title">{card.title}</h3>
              <p className="whyweare-card-desc">{card.desc}</p>
            </div>
          ))}
        </div>

        <button className="whyweare-arrow right" onClick={() => scroll("right")}>

          &rarr;
        </button>
      </div>
    </section>

  );
};

export default WhyWeAre;
