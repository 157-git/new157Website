import React from "react";
import ".././styles/About.css";


export default function About() {
  return (
    <section className="team-section" id="about">
      <h2 className="team-heading">Our Team</h2>

      <div className="team-container">
        {/* Left: Executive */}
        <div className="team-left">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Executive Director"
            className="executive-img"
          />
          <h4 className="executive-title">FOUNDER</h4>
          <p className="executive-name">Ajinkya</p>
        </div>

        {/* Vertical Line */}
        <div className="vertical-divider"></div>

        {/* Right: Team Cards */}
        <div className="team-right">
          {[
            {
              role: "Full stack developer",
              name: "Sahil",
              img: "https://randomuser.me/api/portraits/men/45.jpg",
            },
            {
              role: "Software Tester",
              name: "Ameet",
              img: "https://randomuser.me/api/portraits/men/47.jpg",
            },
            {
              role: "Java Developer Intern",
              name: "Sanskruti",
              img: "https://randomuser.me/api/portraits/women/48.jpg",
            },
            {
              role: "Java Developer Intern",
              name: "Nikita",
              img: "https://randomuser.me/api/portraits/women/48.jpg",
            },
            {
              role: "Java Developer Intern",
              name: "Sakshi",
              img: "https://randomuser.me/api/portraits/women/48.jpg",
            },
            {
              role: "Recruitment",
              name: "Aditi",
              img: "https://randomuser.me/api/portraits/women/49.jpg",
            },
          ].map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.img} alt={member.name} className="team-img" />
              <h4 className="team-role">{member.role}</h4>
              <p className="team-name">{member.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>


  );
}
