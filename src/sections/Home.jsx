import "../styles/Home.css"
import rgLogo from '../assets/logo/rgLogo.png'

export default function Home() {
  return (
    <div id="home" className="hero-section">
      <div className="hero-container">
        {/* Left Image / Logo */}
        <div className="hero-image">
          <img src={rgLogo} alt="Logo" className="logo-img" />
        </div>

        {/* Right Content */}
        <div className="hero-content">
          <p className="description">
            Like a<br/> <span className="hometext1">Superhero</span> needs their suit,<br/>you need<br/>
            <span className="hometext1"> Recruiter’s Gear</span> <br/>to boost hiring power !!!!!!!
          </p>
        </div>
      </div>
    </div>
  );
}