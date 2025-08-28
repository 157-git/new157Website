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
  {
    icon: bulkresume, label: "Bulk Resume Upload",
    video: "https://www.youtube.com/embed/amWwcwBYV24",
    description: "In this video, we walk you through how recruiters and HR teams can quickly upload multiple resumes at once, saving valuable time in the hiring process. With this module, you can\n"
    +"✅ Upload multiple resumes in a single step\n" +
     "✅ Automatically organize and process candidate profiles\n" + 
     "✅ Reduce manual effort and speed up shortlisting" },
  {
    icon: bulkexcel, label: "Bulk Excel Upload",
    video: "https://www.youtube.com/embed/Vi5C4n1kAFk",
    description: "Easily manage and upload large amounts of data with our Bulk Excel Upload Module.🚀\n"+
      "✅ Upload multiple entries in one go\n"+
      "✅ Ensure accuracy with automated validation\n"+
      "✅ Improve efficiency for your business operations"
  },
  {
    icon: resumeparsing, label: "Resume Parsing",
    video: "https://www.youtube.com/embed/-2eQzFYjZF0",
    description: "In this video, I showcase the Resume Parsing module that I developed, which automatically extracts key information such as name, contact details, skills, education, and experience from resumes." +
      "This feature helps streamline the recruitment process by converting unstructured CV data into a structured format, " +
      "making it easier for HR teams and recruiters to filter and analyze candidate information.\n"+
    "✅ Automatic extraction of resume data\n"+
    "✅ Supports multiple formats (PDF/DOCX)\n"+
    "✅ Structured output for easy integration\n"+
    "✅ Time-saving solution for recruiters & HR"
    
  },
  {
    icon: distancecal, label: "Distance Calculator",
    video: "https://www.youtube.com/embed/M5dSUVw5hb8",
    description: "This feature calculates the distance between a client’s job location (JD) and a candidate’s location, helping recruiters and hiring teams make better decisions based on proximity\n"+
    "✅ Calculates distance between Client JD location and Candidate location\n"+
    "✅ Helps recruiters in location-based candidate shortlisting"
  },
  { icon: salaryhike, label: "Salary Hike Calculator", video: "https://www.youtube.com/embed/tgbNymZ7vqY", description: "Auto-calculate expected hike..." },
  {
    icon: jd, label: "JD Creation",
    video: "https://www.youtube.com/embed/clnhwsMPU0Y",
    description: "🚀 In this video, I’ll walk you through the Job Description Module of our project.\n"+
                  "This feature allows you to:\n"+
                  "✅ Add a new Job Description with ease\n"+
                  "✅ View all Job Descriptions in a clear, structured format\n" +
                  "✅ Share Job Descriptions in different formats\n"+
                  "✅ Manage job-related details in one place"
  },
  {
    icon: recruiterperform, label: "Performance & Attendance",
    video: "https://www.youtube.com/embed/bT9AYgGqg1U", 
    description: "🚀 In this video, I walk you through the Performance and Attendance Module of our system.\n"+
"This module is designed to make it easy to track employee performance, monitor attendance, and generate insights that help improve productivity and efficiency across the team."+

"✨ Key Features Covered in the Video:\n"+

"✅ Performance tracking for individual team members\n"+

"✅ Attendance monitoring and reporting\n"+

"✅ Dashboard with real-time insights\n"+

"✅ User-friendly interface for managers and employees"
  },
  { icon: applicantform, label: "Applicant Form", video: "https://www.youtube.com/embed/60ItHLz5WEA", description: "Dynamic form for collecting..." },
  {
    icon: multicolor, label: "Color Themes",
    video: "https://www.youtube.com/embed/wwOAb7dzaBE",
    description: "🎨 In this video, I’ll show you how to use Color Themes in your project/module to make your application look more professional,"+
    " user- friendly, and customizable.You’ll learn how to switch between different themes,"+
      " apply consistent styles, and create a smooth user experience with color variations.\n" +
    "✅ Switching between light/dark modes (and more!)\n"+
    "✅ Best practices for UI/UX with themes"
  },
  { icon: candidatenotify, label: "Notification System", video: "https://www.youtube.com/embed/IcrbM1l_BoI", description: "Keep candidates informed..." },
  {
    icon: activeinactive, label: "Active/Inactive Members",
    video: "https://www.youtube.com/embed/z6QEWOkXfCQ",
    description: "Team Activity Status Management Module designed to help track and manage team performance in real-time. This feature allows managers and team leads to monitor activities,"+
      " update statuses, and ensure smooth collaboration within a project.\n" +
   "✅ Real-time tracking of team activity status\n"+

"✅ Easy monitoring of individual and team progress\n"+

"✅ Supports better team collaboration and productivity"
  },
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
