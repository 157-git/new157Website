import "../styles/Home.css";
import rgLogo from '../assets/logo/rgLogo.png';
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";

export default function Home() {
  const [typingDone, setTypingDone] = useState(false);
  const [cycleKey, setCycleKey] = useState(0);

  const fullText =
    "Like a Superhero needs their suit, you need Recruiter’s Gear to boost hiring power!";

  useEffect(() => {
    const typingDuration = fullText.length * 50 + 1000;
    const timeout = setTimeout(() => {
      setTypingDone(true);
    }, typingDuration);

    return () => clearTimeout(timeout);
  }, [cycleKey]);

  const handleTypingDone = () => {
    setTypingDone(true);
  };

  const getHighlightedText = () => (
    <span className="dimmed-text">
      Like a <span className="highlight">Superhero</span> needs their suit, you
      need <span className="highlight">Recruiter’s Gear</span> to boost hiring
      power!
    </span>
  );

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">


        <div className="hero-content">
          <p className="description hometext1">
            {!typingDone ? (
              <Typewriter
                key={cycleKey}
                words={[fullText]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={0}
                delaySpeed={500}
                onLoopDone={handleTypingDone}
              />
            ) : (
              getHighlightedText()
            )}
          </p>
        </div>
        <div className="hero-image">
          <img src={rgLogo} alt="Logo" className="logo-img" />
        </div>
      </div>
    </section>
  );
}
