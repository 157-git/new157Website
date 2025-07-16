import "../styles/Workflow.css";

const Workflow = () => {
  return (
    <div className="step-container">
      <h2 className="workflow-title">Workflow</h2>

      {/* Row 1 */}
      <div className="row">
        <div className="box multi-tooltip" data-top="Add Candidate Form" data-left="Excel and Resume Upload">
          Add Candidate
          <div className="tooltip-bottom">Applicant Form</div>
        </div>
        <div className="arrow">→</div>
        <div className="box">Calling Tracker</div>
        <div className="arrow">→</div>
        <div className="box">Lineup</div>
      </div>

      {/* Arrow Row 1–2 */}
      <div className="row down-arrow">
        <div className="arrow-down">↓</div>
      </div>

      {/* Row 2 - Reverse */}
      <div className="row reverse">
        <div className="box">Interview Feedback</div>
        <div className="arrow">←</div>

        <div className="box multi-tooltip" data-top="Rejected ❌" data-left="Selected ✔" data-bottom="Hold ❌">
          Shortlisted
          <div className="tooltip-bottom">Hold ❌</div>
        </div>

        <div className="arrow">←</div>
        <div className="box">Offer Letter</div>
      </div>

      {/* Arrow Row 2–3 */}
      <div className="row down-arrow-left">
        <div className="arrow-down">↓</div>
      </div>

      {/* Row 3 */}
      <div className="row">
        <div className="box">Joining Letter</div>
        <div className="arrow">→</div>
        <div className="box">Documentation</div>
        <div className="arrow">→</div>
        <div className="box">Observation 90 Days</div>
      </div>
    </div>
  );
};

export default Workflow;
