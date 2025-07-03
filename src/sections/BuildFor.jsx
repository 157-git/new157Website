import "../styles/BuildFor.css";

const BuildFor = () => {
  const cardItems = [
    "Recruitment Agencies",
    "Corporate HR Teams (Mid to Large Enterprises)",
    "Staffing & RPO (Recruitment Process Outsourcing) Providers",
    "Freelance Recruiters & Independent Talent Consultants",
    "HR Tech Product Resellers or Partners",
    "Colleges & Training Institutes (Placement Cells)",
  ];

  return (
    <div className="section buildfor" id="buildfor">
      <h2 className="buildfor-title">We Build For</h2>
      <div className="buildfor-scroll-wrapper">
        <div className="buildfor-scroll-track">
          {cardItems.map((item, index) => (
            <div key={index} className="buildfor-card">
              <p className="buildfor-text">{item}</p>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {cardItems.map((item, index) => (
            <div key={`clone-${index}`} className="buildfor-card">
              <p className="buildfor-text">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuildFor;
