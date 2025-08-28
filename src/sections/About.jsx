import React from "react";
import ".././styles/About.css";
import ameet from '../assets/aboutTeam/ameet.jpg';
import nikita from '../assets/aboutTeam/nikita.jpg';
import samrudhhi from '../assets/aboutTeam/samrudhhi.jpg';
import sakshi from '../assets/aboutTeam/sakshi.jpg';



export default function About() {
  return (
    <section className="team-section" id="about">
      <h2 className="team-heading">Our Team</h2>

      <div className="team-container">
        {/* Left: Executive */}
        <div className="team-left">
          <img id="founder1"
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Executive Director"
            className="executive-img"
          />
          <h4 className="executive-title">FOUNDER</h4>
          <p className="executive-name">Ajinkya</p>
           <img id="founder2"
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Executive Director"
            className="executive-img"
          />
          <h4 className="executive-title">FOUNDER</h4>
          <p className="executive-name">Ashok</p>
        </div>
        

        {/* Vertical Line */}
        <div className="vertical-divider"></div>

        {/* Right: Team Cards */}
        <div className="team-right">
          {[
            {
              role: "Recruitment HR",
              name: "Aditi",
              img: "https://randomuser.me/api/portraits/women/49.jpg",
            },
            {
              role: "Software Tester",
              name: "Ameet Singh",
              img: ameet,
            },
            {
              role: "Java Developer Intern",
              name: "Sakshi Kashid",
              img: sakshi,
            },
            {
              role: "Java Developer Intern",
              name: "Nikita Shirsath",
              img: nikita,
            },
            {
              role: "Java Developer Intern",
              name: "Samruddhi Patole",
              img: samrudhhi,
            },
            {
              role: "Full Stack Developer",
              name: "Aarshad",
              img: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              role: "Full Stack Developer",
              name: "Sahil",
              img: "https://randomuser.me/api/portraits/men/32.jpg",
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
