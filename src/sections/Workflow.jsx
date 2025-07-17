// import "../styles/Workflow.css";

// const Workflow = () => {
//   return (
//     <div className="step-container">
//       <h2 className="workflow-title">Workflow</h2>

//       {/* Row 1 */}
//       <div className="row">
//         <div className="box multi-tooltip" data-top="Add Candidate Form" data-left="Excel and Resume Upload">
//           Add Candidate
//           <div className="tooltip-bottom">Applicant Form</div>
//         </div>
//         <div className="arrow">→</div>
//         <div className="box">Calling Tracker</div>
//         <div className="arrow">→</div>
//         <div className="box">Lineup</div>
//       </div>

//       {/* Arrow Row 1–2 */}
//       <div className="row down-arrow">
//         <div className="arrow-down">↓</div>
//       </div>

//       {/* Row 2 - Reverse */}
//       <div className="row reverse">
//         <div className="box">Interview Feedback</div>
//         <div className="arrow">←</div>

//         <div className="box multi-tooltip" data-top="Rejected ❌" data-left="Selected ✔" data-bottom="Hold ❌">
//           Shortlisted
//           <div className="tooltip-bottom">Hold ❌</div>
//         </div>

//         <div className="arrow">←</div>
//         <div className="box">Offer Letter</div>
//       </div>

//       {/* Arrow Row 2–3 */}
//       <div className="row down-arrow-left">
//         <div className="arrow-down">↓</div>
//       </div>

//       {/* Row 3 */}
//       <div className="row">
//         <div className="box">Joining Letter</div>
//         <div className="arrow">→</div>
//         <div className="box">Documentation</div>
//         <div className="arrow">→</div>
//         <div className="box">Observation 90 Days</div>
//       </div>
//     </div>
//   );
// };

// export default Workflow;

import "../styles/Workflow.css";

const Workflow = () => {
  return (
    <div className="workflow-container">
      <h2 className="workflow-title">Workflow</h2>

      <div className="workflow-grid">
        {/* Row 1 */}
        <div className="step add-candidate">Add Candidate</div>
        <div className="arrow right-arrow-1">→</div>
        <div className="step calling-tracker">Calling Tracker</div>

        {/* Row 2 */}
        <div className="empty-box"></div>
        <div className="empty-box"></div>
        <div className="arrow down-arrow-1">↓</div>
        <div className="step lineup-1">Lineup</div>
        <div className="empty-box-1"></div>
        {/* <div className="empty-box"></div> */}

        {/* Row 3 */}
        <div className="empty-box-1"></div>
        <div className="empty-box-1"></div>
        <div className="empty-box-1"></div>
         <div className="arrow left-arrow-1-1">←</div>
         <div className="step offer-letter-1">Offer Letter</div>
          <div className="arrow down-arrow-2-2">↓</div>
          <div className="step shortlisted-1">Shortlisted</div>
          <div className="arrow right-arrow-2-2">→</div>
        <div className="step interview-feedback">Interview Feedback</div>
        <div className="arrow left-arrow-1">←</div>
        <div className="step lineup">Lineup</div>
        {/* <div className="empty-box-1"></div> */}
        {/* <div className="empty-box-1"></div> */}

        {/* Row 4 */}
        {/* <div className="empty-box"></div> */}
        {/* <div className="empty-box-1"></div> */}
        <div className="arrow down-arrow-3-3">↓</div>
        <div className="arrow down-arrow-2">↓</div>
        <div className="empty-box"></div>

        {/* Row 5 */}
        <div className="empty-box"></div>
        <div className="step shortlisted">Shortlisted</div>
        <div className="arrow right-arrow-2">→</div>

        {/* Row 6 */}
        
        <div className="step offer-letter">Offer Letter</div>
        <div className="empty-box"></div>
        <div className="empty-box"></div>
        <div className="arrow down-arrow-3">↓</div>
        {/* <div className="empty-box"></div> */}

        {/* Row 7 */}
        <div className="empty-box-1"></div>
        <div className="empty-box-1"></div>
        <div className="empty-box-1"></div>
        <div className="empty-box-1"></div>
        <div className="step joining-letter">Joining Letter</div>
         <div className="arrow left-arrow-2-2">←</div>
         <div className="arrow left-arrow-2">←</div>
        {/* <div className="empty-box"></div> */}

        {/* Row 8 */}
        <div className="step documentation">Documentation</div>
       
        {/* <div className="empty-box"></div> */}

        {/* Row 9 */}
        {/* <div className="empty-box"></div> */}
        <div className="arrow down-arrow-4-4">↓</div>
        <div className="arrow down-arrow-4">↓</div>
        <div className="empty-box"></div>

        {/* Row 10 */}
        <div className="empty-box"></div>
        <div className="step observation">Observation 90 Days</div>
        <div className="empty-box"></div>
      </div>
    </div>
  );
};

export default Workflow;
