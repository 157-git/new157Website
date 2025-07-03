import { useRef, useState } from "react";
import "../styles/Features.css"
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

export default function Features() {
  const scrollRef = useRef(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedInfo, setSelectedInfo] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,

        behavior: "smooth",
      });
    }
  };

  const techList = [
    {
      icon: bulkresume,
      label: "Bulk Resume Upload",
      video: "/videos/react.mp4",
      description:
        "Upload hundreds of resumes at once and let the system automatically parse and organize them, reducing manual work and saving recruiter time.",
    },
    {
      icon: bulkexcel,
      label: "Bulk Excel Upload",
      video: "/videos/node.mp4",
      description:
        "Seamlessly import structured candidate data from Excel files. Ideal for placement teams, consultancies, or agencies handling mass recruitment.",
    },
    {
      icon: resumeparsing,
      label: "Resume Parsing & Auto-Fill",
      video: "/videos/database.mp4",
      description:
        "Automatically extract candidate details (name, contact, skills, education, etc.) from resumes — and auto-fill the candidate form in seconds.",
    },
    {
      icon: distancecal,
      label: "Distance Calculator",
      video: "/videos/html.mp4",
      description:
        "Calculate the commute distance between candidate and office using pin codes or location data. Great for location-sensitive roles.",
    },
    {
      icon: salaryhike,
      label: "Salary Hike Calculator",
      video: "/videos/css.mp4",
      description:
        "Auto-calculate expected hike % based on current CTC and offered package. Ensures transparency in offers and helps with salary benchmarking.",
    },
    {
      icon: jd,
      label: "JD Creation & Sharing",
      video: "/videos/js.mp4",
      description:
        "Build ATS-optimized job descriptions and share them with clients or teams through secure links, email, or PDF exports.",
    },
    {
      icon: recruiterperform,
      label: "Performance & Attendance",
      video: "/videos/js.mp4",
      description:
        "Track team activities like attendance, call logs, line-ups scheduled, and candidates managed — boosting accountability and performance.",
    },
    {
      icon: applicantform,
      label: "Applicant Form",
      video: "/videos/js.mp4",
      description:
        "A user-friendly, dynamic form for collecting candidate details.",
    },
    {
      icon: multicolor,
      label: "Multiple Color Themes",
      video: "/videos/js.mp4",
      description:
        "Choose how your platform looks and feels — your way.Our application offers built-in theme customization to ensure visual comfort.",
    },
    {
      icon: candidatenotify,
      label: "Notification System",
      video: "/videos/js.mp4",
      description:
        "Keep candidates informed and engaged throughout the hiring journey — automatically.Our platform sends timely, status-based notifications to candidates based on their position in the hiring process, with the flexibility to trigger messages at each hierarchical level of recruitment."
    },
    {
      icon: activeinactive,
      label: "Active & Inactive Members",
      video: "/videos/js.mp4",
      description:
        "Easily monitor and manage your recruitment team’s activity status.Our platform gives Admins and Managers full visibility into team members who are currently active, inactive, or not contributing — helping you stay organized and accountable.",
    },

  ];

  const handleIconClick = (video, description, label) => {
    setSelectedVideo(video);
    setSelectedInfo(description);
    setSelectedTitle(label);
  };

  return (
    <section id="features" className="features">
      <h2>Features</h2>

      {/* Scrollable Icon Area */}
      <div className="scrollcontainer">
        <button className="scrollbutton" onClick={() => scroll("left")}>←</button>

        <div ref={scrollRef} className="icon-list">
          {techList.map(({ icon,label, video, description }, idx) => (
            <div
              key={idx}
              className="iconitem"
              style={{ animation: hoveredIndex === idx ? "bounce 0.6s" : "none" }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleIconClick(video, description, label)}
            >
              {hoveredIndex === idx ? (
                <div className="spinnerborder" role="status" />
              ) : (
                <div className="feature-card">
                   <img src={icon} alt={label} className="feature-icon" />
                <div className="feature-label">{label}</div>
                </div>

              )}
              {/* <p >{label}</p> */}
            </div>
          ))}
        </div>

        <button className="scrollbutton" onClick={() => scroll("right")}> →</button>
      </div>

      {/* Video & Info Section */}
      {selectedVideo && (
        <div className="videoinfocontainer">
          <div className="alignitemscenter">
            <div className="col-md-6 text-center mb-4 mb-md-0">
              <video
                key={selectedVideo}
                controls
                autoPlay
                className="video"
              >
                <source src={selectedVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="col-md-6 info">
              <h4>{selectedTitle}</h4>
              <p>{selectedInfo}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
