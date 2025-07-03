import { useState } from "react";
import "../styles/DemoForm.css";
import demoImg from '../assets/demo/demo.jpg';
import axios from "axios";

export default function DemoForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    demo_date: "",
    address: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Submitted Form Data:", formData);
    try {
      axios.post("http://localhost:8080/api/send-email", formData);
      alert("Demo booked and email sent to the company!");
    } catch (error) {
      console.error(error);
      alert("Error sending email.");
    }
    setFormData({
      name: "",
      contact: "",
      email: "",
      demo_date: "",
      address: "",
    });
  };

  return (
    <section className="demo-section">
      <div className="demo-container">
        <div className="demo-image-wrapper">
          <img src={demoImg} alt="Demo Visual" className="demo-image" />
        </div>
        <div className="demo-form-wrapper">
          <h2 className="demo-title">Request a Demo</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Contact Number"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <input
              type="date"
              name="demo_date"
              value={formData.demo_date}
              onChange={handleChange}
              required
            />
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              rows={3}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}
