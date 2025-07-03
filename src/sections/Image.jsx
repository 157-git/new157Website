import "./../styles/Image.css";
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
  return (
    <div className="test1">
      <div className="imageheading">
        What Is Coming Next
      </div>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="image-card" key={index}>
            <img
              className="rotate"
              style={{ animationDelay: `${index}s` }}
              src={image.src}
              alt={image.title}
            />
            <div className="overlay">
              <p>{image.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
