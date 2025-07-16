import { useState } from "react";
import "./../styles/Faq.css";


const faqData = [
  {
    question: "Can I track team performance and monitor attendance from your platform?",
    answer: "Yes! Our platform offers insights into team productivity and attendance logs, helping you measure recruiter efficiency and optimize team output",
  },
  {
    question: "Do recruiters have to manually enter all their details?",
    answer: "No. We offer smart auto-fill using resume parsing — candidate details like name, skills, experience, and education are filled in automatically from their uploaded resume.",
  },
  {
    question: "Can we upload multiple resumes at once?",
    answer: "Absolutely! You can upload hundreds of resumes in bulk. Our system will parse them instantly and analyze each for ATS compliance.",
  },
  {
    question: "We have candidate data in Excel sheets. Can we upload that directly?",
    answer: "Yes, just add more items to the `faqData` array.Yes, our platform supports structured Excel uploads so you can seamlessly import and manage candidate data in bulk.",
  },
  {
    question: "Will the system notify candidates about their application status?",
    answer: "Yes. Automated notifications can be sent to candidates when their application is received, shortlisted, rejected, or moved to the next stage.",
  },
  {
    question: "How can I share candidate details with clients or team members?",
    answer: "You can share candidate profiles through a email directly — no login required on the receiver’s side.",
  },
  {
    question: "Can the platform calculate how far a candidate lives from our office?",
    answer: "Yes, we offer automatic distance calculation. This helps assess commute feasibility and filter candidates accordingly.Useful for hybrid/on-site roles and regional hiring decisions."
  },
  {
    question: "Can we estimate and suggest salary hikes during hiring?",
    answer: "Yes. Our platform can automatically calculate expected salary hikes based on the candidate's current CTC and the offered package, helping you maintain competitive offers."
  }
];


export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-wrapper">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggle(index)}>
              <span>{faq.question}</span>
              <span className="faq-icon">{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
