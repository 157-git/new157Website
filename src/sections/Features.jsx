import React from "react";
import { useRef, useState } from "react";
import "../styles/Features.css";
import bulkresume from '../assets/features/applicantform.jpg';
import bulkexcel from '../assets/features/bulkexcelupload.jpeg';
import resumeparsing from '../assets/features/resumeparsing.jpg';
import distancecal from '../assets/features/distancecalculator.jpeg';
import salaryhike from '../assets/features/salaryhike.jpg';
import jd from '../assets/features/jdcreation.jpeg';
import recruiterperform from '../assets/features/recruiterperformanceandattendance.jpg';
import applicantform from '../assets/features/applicantform.jpg';
import multicolor from '../assets/features/multiplecolortheme.jpg';
import candidatenotify from '../assets/features/candidatenotificationsystem.jpg';
import activeinactive from '../assets/features/applicantform.jpg';

const techList = [
  { icon: bulkresume, label: "Bulk Resume Upload", video: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "Upload hundreds of resumes..." },
  { icon: bulkexcel, label: "Bulk Excel Upload", video: "https://www.youtube.com/embed/3fumBcKC6RE", description: "Seamlessly import structured..." },
  { icon: resumeparsing, label: "Resume Parsing", video: "https://www.youtube.com/embed/Z1BCujX3pw8", description: "Automatically extract..." },
  { icon: distancecal, label: "Distance Calculator", video: "https://www.youtube.com/embed/_JtPf8vL1w4", description: "Calculate the commute distance..." },
  { icon: salaryhike, label: "Salary Hike Calculator", video: "https://www.youtube.com/embed/tgbNymZ7vqY", description: "Auto-calculate expected hike..." },
  { icon: jd, label: "JD Creation", video: "https://www.youtube.com/embed/fLexgOxsZu0", description: "Build ATS-optimized job descriptions..." },
  { icon: recruiterperform, label: "Performance & Attendance", video: "https://www.youtube.com/embed/K4TOrB7at0Y", description: "Track team activities..." },
  { icon: applicantform, label: "Applicant Form", video: "https://www.youtube.com/embed/60ItHLz5WEA", description: "Dynamic form for collecting..." },
  { icon: multicolor, label: "Color Themes", video: "https://www.youtube.com/embed/yPYZpwSpKmA", description: "Theme customization for comfort..." },
  { icon: candidatenotify, label: "Notification System", video: "https://www.youtube.com/embed/IcrbM1l_BoI", description: "Keep candidates informed..." },
  { icon: activeinactive, label: "Active/Inactive Members", video: "https://www.youtube.com/embed/Pkh8UtuejGw", description: "Manage team activity status..." },
];

export default function Features() {
  const scrollRef = useRef(null);
  const cardRefs = useRef([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedInfo, setSelectedInfo] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };


  const handleIconClick = (video, description, label, index) => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
      setSelectedVideo(null);
      setSelectedInfo("");
      setSelectedTitle("");
      return;
    }

    setSelectedIndex(index);
    setSelectedVideo(video);
    setSelectedInfo(description);
    setSelectedTitle(label);

    const selectedCard = cardRefs.current[index];
    if (selectedCard) {
      selectedCard.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }

  };

  return (
    <section id="features" className="features">

      <h2>Features</h2>
      <div className="scrollcontainer">
        <button className="scrollbutton" onClick={() => scroll("left")}>←</button>

        <div className="icon-list" ref={scrollRef}>
          {/* <div className="scroll-spacer"  /> */}


          {techList.map(({ icon, label, video, description }, idx) => (
            <div
              key={idx}
              ref={(el) => (cardRefs.current[idx] = el)}
              className={`iconitem ${selectedIndex === idx ? "selected" : ""}`}
              onClick={() => handleIconClick(video, description, label, idx)}
            >
              <div className="feature-card">
                <img src={icon} alt={label} className="feature-icon" />
                <div className="feature-label">{label}</div>
              </div>
            </div>
          ))}

          {/* <div className="scroll-spacer"  />
          <div className="scroll-spacer" /> */}
        </div>

        <button className="scrollbutton" onClick={() => scroll("right")}>→</button>
      </div>

      {selectedVideo && (
        <div className="videoinfocontainer">
          <div className="alignitemscenter">
            <div className="feature-video">
              <iframe
                src={selectedVideo}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="feature-description">

              <h4>{selectedTitle}</h4>
              <p>{selectedInfo}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
