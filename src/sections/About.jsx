import ".././styles/About.css";
import office from '../assets/aboutTeam/office.jpg';

export default function About() {
  return (
    <section className="team-section">
  <h2 className="team-heading">OUR TEAM</h2>

  <div className="team-container">
    {/* Left: Executive */}
    <div className="team-left">
      <img
        src="https://randomuser.me/api/portraits/men/32.jpg"
        alt="Executive Director"
        className="executive-img"
      />
      <h4 className="executive-title">EXECUTIVE DIRECTOR</h4>
      <p className="executive-name">Dr. Joseph Smith</p>
    </div>

    {/* Vertical Line */}
    <div className="vertical-divider"></div>

    {/* Right: Team Cards */}
    <div className="team-right">
      {[
        {
          role: "SOFTWARE TEST ENGINEER",
          name: "SINGH AMEET UPENDRA",
          img: office,
        },
        {
          role: "PROGRAMMING",
          name: "Daniel Andrews",
          img: "https://randomuser.me/api/portraits/men/47.jpg",
        },
        {
          role: "DESIGN",
          name: "Mona Rolanda",
          img: "https://randomuser.me/api/portraits/women/48.jpg",
            },
            {
              role: "DESIGN",
              name: "Mona Rolanda",
              img: "https://randomuser.me/api/portraits/women/48.jpg",
            },
            {
              role: "DESIGN",
              name: "Mona Rolanda",
              img: "https://randomuser.me/api/portraits/women/48.jpg",
            },
        {
          role: "MARKETING",
          name: "Julia Applegate",
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
