import "./../styles/Image.css";
import { useEffect, useRef } from "react";

import aiintegration from '../assets/whatiscomingnext/aiintegration.jpeg';
import jobportal from '../assets/whatiscomingnext/jobportal.jpeg';
import vendormanagement from '../assets/whatiscomingnext/vendor.jpeg';
import clientmanagement from '../assets/whatiscomingnext/clientmanagement.jpeg';

const images = [
  { src: aiintegration, title: "AI Integration" },
  { src: jobportal, title: "Job Portal" },
  { src: vendormanagement, title: "Vendor Management" },
  { src: clientmanagement, title: "Client Management" }
];

export default function Image() {
  const sectionRef = useRef();
  const textRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          textRefs.current.forEach((el, i) => {
            if (el) {
              el.classList.remove("scroll-in");
              void el.offsetWidth; // trigger reflow
              el.classList.add("scroll-in");
            }
          });
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div className="test1" ref={sectionRef}>
      <div className="imageheading">What Is Coming Next</div>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="image-card" key={index}>
            <img className="rotate" src={image.src} alt={image.title} />
            <div className="overlay full always-visible">
              <div
                className="overlay-text"
                ref={(el) => (textRefs.current[index] = el)}
              >
                {image.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

