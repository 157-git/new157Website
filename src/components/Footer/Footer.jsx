import "../../styles/Footer.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import rgLogo from '../../assets/logo/rgLogo.png'
import { useState } from "react";

const rights = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
     <style>
        body {
          font-family: Arial, sans-serif;
          padding: 20px;
          margin: 0;
          background-color: #fbf0e9;
          color: #000;
        }

        h1{
          color: black;
          font-weight: bold;
          margin-bottom: 10px;
          }
          
          
         h3 {
          color: #8d4217;
          font-weight: bold;
          margin-bottom: 10px;
        }

        ul {
          padding-left: 20px;
          margin-bottom: 20px;
        }

        ul li {
          margin-bottom: 6px;
          font-size: 0.9rem;
          line-height: 1.4;
        }

        .section-heading {
          background-color: #fbf0e9;
          padding: 10px;
          border-left: 4px solid #8d4217;
          margin-bottom: 20px;
        }

        .highlight {
          color: #a83030;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          body {
            font-size: 0.9rem;
            padding: 15px;
          }
        }
      </style>
    </head>
    <body>
    <h1>Rights And Istructions</h1>
      <h3>Instructions</h3>
      <ul>
        <li><span class='innerText'>Strictly use your assigned credentials to access the software platform. Multiple attempts on different devices will block System.</span></li>
        <li><span class='innerText'>Familiarize yourself with the dashboard and navigation menus for easy access to different functionalities.</span></li>
        <li><span class='innerText'>After Login, you can find four segments: 1.Client 2.Employee 3.Applicants 4.Vendor</span></li>
        <li><span class='headingPage'>1. Client</span></li>
        <li><span class='headingPage'>2. Employee</span></li>
        <li><span class='innerText'>After clicking Employee Section, it displays Recruiter, TeamLeader, Manager, Super User categories.</span></li>
        <li><span class='headingPage'>A. Recruiter</span></li>
        <li><span class='innerText'>Use your recruiter's credentials. The dashboard shows Job Description, Add Candidate, Find Candidate, Database.</span></li>
        <li><span class='headingPage'>Job Description</span> - Add/view jobs with filters (designation, experience, location).</li>
        <li><span class='headingPage'>Add Candidate</span> - Add candidates with resume and link to job ID.</li>
        <li><span class='headingPage'>Find Candidate</span> - Track status: Calling, Lineup, Selected, Hold, Rejected.</li>
        <li><span class='headingPage'>Database</span> - Upload/view files: Excel Calling/Lineup, Resume Data, Send Link.</li>
        <li><span class='headingPage'>B. TeamLeader</span> - Update, Delete, Block candidate.</li>
        <li><span class='headingPage'>C. Manager</span> - Same as TeamLeader plus view performance reports.</li>
        <li><span class='headingPage'>D. Super User</span> - All access including Recruiters, TLs, Managers.</li>
        <li><span class='headingPage'>3. Applicant</span></li>
        <li><span class='headingPage'>4. Vendor</span> - Add candidates and track them.</li>
        <li><span class='innerText'>Database gives all uploaded resumes. Resume menu creates resume. Reports are based on attendance/performance.</span></li>
        <li><span class='innerText'>Internal chat is available via chat section.</span></li>
      </ul>
    </body>
  </html>`
  ;

  const policy= 
  ` <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
        <style>
        body {
          font-family: Arial, sans-serif;
          padding: 20px;
          margin: 0;
          background-color: #fbf0e9;
          color: #000;
        }

        h1,h2,h3{
          color: black;
          font-weight: bold;
          margin-bottom: 10px;
          }
          
          
         h4, h5 {
          color: #8d4217;
          font-weight: bold;
          margin-bottom: 10px;
        }

        ul {
          padding-left: 20px;
          margin-bottom: 20px;
        }

        ul li {
          margin-bottom: 6px;
          font-size: 0.9rem;
          line-height: 1.4;
        }

        .section-heading {
          background-color: #fbf0e9;
          padding: 10px;
          border-left: 4px solid #8d4217;
          margin-bottom: 20px;
        }

        .highlight {
          color: #a83030;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          body {
            font-size: 0.9rem;
            padding: 15px;
          }
        }
      </style>
    </head>
    <body>
          <div className="policy-container">
      <div ref={policyRef} className="policy-containers" id="policy-containers">
        <div className="policy-header">
          <h1> Company Policy</h1>
        </div>
        <div className="policy-content">
          <h2>Equal opportunity policy</h2>
          <h5>Policy Statement:</h5>
          <ul>
            <li>
              The company is committed to providing equal employment
              opportunities to all employees and applicants without regard to
              race, color, religion, gender, national origin, age, disability,
              or any other legally protected status.
            </li>
          </ul>
          <h5>Scope:</h5>
          <ul>
            <li>
              This policy applies to all aspects of employment, including
              recruitment, hiring, training, promotion, compensation, benefits,
              and termination.
            </li>
          </ul>
          <h5>Non-Discrimination:</h5>
          <ul>
            <li>
              The company prohibits discrimination in any form and strives to
              create a work environment that is free from harassment and bias.
            </li>
          </ul>
          <h5>Diversity and Inclusion:</h5>
          <ul>
            <li>
              The company values diversity and inclusion, recognizing that
              diverse teams foster innovation and improve business outcomes.
            </li>
          </ul>
          <h5>Reasonable Accommodations:</h5>
          <ul>
            <li>
              The company will provide reasonable accommodations to employees
              with disabilities and religious practices, as required by law.
            </li>
          </ul>
          <h5>Reporting and Grievance Procedure:</h5>
          <ul>
            <li>
              Employees are encouraged to report any incidents of discrimination
              or harassment to their manager or HR department. All reports will
              be investigated promptly and confidentially.
            </li>
          </ul>
          <h5>Accountability:</h5>
          <ul>
            <li>
              The company provides regular training to employees on diversity,
              inclusion, and anti-discrimination practices.
            </li>
          </ul>
          <h5>Review and Monitoring:</h5>
          <ul>
            <li>
              The policy is reviewed regularly to ensure it remains current and
              effective. Monitoring is conducted to assess compliance and
              address any issues.
            </li>
          </ul>

          <h2>Workplace health and safety</h2>
          <h5>Policy Statement:</h5>
          <ul>
            <li>
              Our company is committed to providing a safe and healthy work
              environment for all employees, contractors, and visitors.
            </li>
          </ul>
          <h5>Responsibilities:</h5>
          <ul>
            <li>
              Management: Ensure compliance with safety regulations and provide
              resources for health and safety initiatives.
            </li>
            <li>
              Employees: Follow safety procedures and report hazards or
              incidents immediately.
            </li>
          </ul>
          <h5>Emergency Procedures:</h5>
          <ul>
            <li>
              Establish clear emergency procedures and conduct regular drills to
              ensure preparedness.
            </li>
          </ul>
          <h5>Health and Wellness:</h5>
          <ul>
            <li>
              Promote employee wellness programs to support mental and physical
              health.
            </li>
          </ul>
          <h5>Equipment and Maintenance:</h5>
          <ul>
            <li>
              Ensure all equipment is regularly inspected, maintained, and meets
              safety standards.
            </li>
          </ul>
          <h5>Continuous Improvement:</h5>
          <ul>
            <li>
              Review and update the safety policy regularly to incorporate best
              practices and comply with legal requirements.
            </li>
          </ul>

          <h2>Employee code of conduct policy:</h2>
          <h5>Introduction:</h5>
          <ul>
            <li>
              This policy outlines the expected behavior and standards for all
              employees to ensure a respectful and professional workplace.
            </li>
          </ul>
          <h5>Respectful Behavior:</h5>
          <ul>
            <li>
              Employees must treat colleagues, clients, and partners with
              respect and courtesy at all times.
            </li>
          </ul>
          <h5>Integrity and Honesty:</h5>
          <ul>
            <li>
              Maintain honesty and transparency in all business dealings. Avoid
              conflicts of interest and report any unethical behavior.
            </li>
          </ul>
          <h5>Confidentiality:</h5>
          <ul>
            <li>
              Protect confidential information and do not disclose it to
              unauthorized parties.
            </li>
          </ul>
          <h5>Compliance with Laws:</h5>
          <ul>
            <li>
              Adhere to all applicable laws and regulations relevant to the
              business and industry.
            </li>
          </ul>
          <h5>Professionalism:</h5>
          <ul>
            <li>
              Demonstrate professionalism in appearance, communication, and
              conduct.
            </li>
          </ul>
          <h5>Use of Company Resources:</h5>
          <ul>
            <li>
              Use company resources responsibly and for business purposes only.
            </li>
          </ul>
          <h5>Anti-Discrimination and Harassment:</h5>
          <ul>
            <li>
              Uphold a zero-tolerance policy for discrimination, harassment, or
              any form of bullying.
            </li>
          </ul>
          <h5>Health and Safety:</h5>
          <ul>
            <li>
              Follow health and safety guidelines to ensure a safe working
              environment for everyone.
            </li>
          </ul>
          <h5>Reporting Violations:</h5>
          <ul>
            <li>
              Demonstrate professionalism in appearance, communication, and
              conduct.
            </li>
          </ul>
          <h5>Disciplinary Action:</h5>
          <ul>
            <li>
              Violations of the code may result in disciplinary action, up to
              and including termination.
            </li>
          </ul>

          <h2>Attendance, vacation and time-off policies:</h2>
          <h3>Attendance Policy</h3>
          <h5>Punctuality:</h5>
          <ul>
            <li>
              Employees are expected to arrive on time and be prepared to start
              work at the beginning of their scheduled shift.
            </li>
          </ul>
          <h5>Absence Notification:</h5>
          <ul>
            <li>
              Notify your manager as soon as possible if you are unable to
              attend work due to illness or emergency.
            </li>
          </ul>
          <h5>Documentation:</h5>
          <ul>
            <li>
              Provide necessary documentation for absences when required (e.g.,
              doctor's note).
            </li>
          </ul>
          <h5>Consequences:</h5>
          <ul>
            <li>
              Excessive unexcused absences may lead to disciplinary action.
            </li>
          </ul>

          <h3>Vacation Policy</h3>
          <h5>Accrual:</h5>
          <ul>
            <li>
              Vacation days are accrued based on length of service and company
              policy.
            </li>
          </ul>
          <h5>Request Process:</h5>
          <ul>
            <li>
              Submit vacation requests in advance for approval by your manager,
              ensuring minimal disruption to operations.
            </li>
          </ul>
          <h5>Carryover:</h5>
          <ul>
            <li>
              Unused vacation days may be carried over to the next year, up to a
              specified limit.
            </li>
          </ul>
          <h5>Payout:</h5>
          <ul>
            <li>
              Upon leaving the company, employees will be paid for any unused
              vacation days.
            </li>
          </ul>

          <h3>Time-Off Policy</h3>
          <h5>Sick Leave:</h5>
          <ul>
            <li>
              Employees are entitled to a certain number of paid sick days per
              year. Notify your manager as soon as possible if you need to take
              a sick day.
            </li>
          </ul>
          <h5>Personal Days:</h5>
          <ul>
            <li>
              Personal days can be used for personal matters and should be
              scheduled in advance when possible.
            </li>
          </ul>
          <h5>Family and Medical Leave:</h5>
          <ul>
            <li>
              Eligible employees may take unpaid leave for family or medical
              reasons, in accordance with legal requirements.
            </li>
          </ul>
          <h5>Public Holidays:</h5>
          <ul>
            <li>
              The company observes all federal and state holidays, providing
              paid time off.
            </li>
          </ul>

          <h2>Employee disciplinary action policy:</h2>

          <h5>Purpose:</h5>
          <ul>
            <li>
              Ensure fair and consistent handling of employee misconduct and
              performance issues.
            </li>
          </ul>
          <h5>Scope:</h5>
          <ul>
            <li>
              Applies to all employees and covers behavior, performance, and
              conduct.
            </li>
          </ul>
          <h5>Purpose:</h5>
          <ul>
            <li>
              Ensure fair and consistent handling of employee misconduct and
              performance issues.
            </li>
          </ul>
          <h5>Steps of Disciplinary Action:</h5>
          <ul>
            <li>
              Verbal Warning: For minor infractions, a verbal warning will be
              issued and documented.
            </li>
            <li>
              Written Warning: For repeated or serious issues, a formal written
              warning will be given.
            </li>
            <li>
              Final Warning: Further issues may result in a final written
              warning, outlining potential consequences.
            </li>
            <li>
              Suspension: Temporary removal from work may be implemented, with
              or without pay.
            </li>
            <li>
              Termination: Persistent issues or severe misconduct may lead to
              termination.
            </li>
          </ul>
          <h5>Types of Misconduct:</h5>
          <ul>
            <li>
              Examples include but are not limited to: insubordination,
              harassment, theft, policy violations, and poor performance.
            </li>
          </ul>
          <h5>Investigation:</h5>
          <ul>
            <li>
              All allegations will be promptly investigated. Employees may be
              placed on leave during the investigation.
            </li>
          </ul>
          <h5>Employee Rights:</h5>
          <ul>
            <li>
              Employees have the right to respond to allegations and present
              their case.
            </li>
          </ul>
          <h5>Confidentiality:</h5>
          <ul>
            <li>
              All disciplinary actions and investigations will be conducted with
              confidentiality.
            </li>
          </ul>
          <h5>Appeal Process:</h5>
          <ul>
            <li>
              Employees may appeal disciplinary actions by submitting a written
              request for review.
            </li>
          </ul>
          <h5>Documentation:</h5>
          <ul>
            <li>
              All steps and outcomes will be documented and stored in the
              employee's personnel file.
            </li>
          </ul>

          <h2>Employee complaint policies:</h2>
          <h5>Purpose:</h5>
          <ul>
            <li>
              Provide a process for employees to raise concerns or complaints in
              a safe and constructive manner.
            </li>
          </ul>
          <h5>Scope:</h5>
          <ul>
            <li>
              Applicable to all employees regarding workplace issues, including
              harassment, discrimination, and policy violations.
            </li>
          </ul>
          <h5>Procedure:</h5>
          <ul>
            <li>
              Informal Resolution: Employees are encouraged to address concerns
              directly with the involved party if comfortable.
            </li>
            <li>
              Formal Complaint: Submit a written complaint to HR detailing the
              issue, including dates, times, and any witnesses.
            </li>
          </ul>
          <h5>Investigation:</h5>
          <ul>
            <li>
              HR will investigate all complaints promptly and impartially.
              Confidentiality will be maintained as much as possible.
            </li>
          </ul>
          <h5>Resolution:</h5>
          <ul>
            <li>
              After the investigation, HR will communicate findings and any
              actions taken to the complainant and involved parties.
            </li>
          </ul>
          <h5>Retaliation:</h5>
          <ul>
            <li>
              Retaliation against anyone filing a complaint or participating in
              an investigation is strictly prohibited and will result in
              disciplinary action.
            </li>
          </ul>
          <h5>Support:</h5>
          <ul>
            <li>
              Employees may seek support from HR throughout the process and are
              encouraged to speak up without fear.
            </li>
          </ul>

          <h2>Ethics Policy</h2>

          <h5>Purpose:</h5>
          <ul>
            <li>
              Promote integrity, accountability, and ethical behavior in all
              business activities.
            </li>
          </ul>
          <h5>Scope:</h5>
          <ul>
            <li>
              Applies to all employees, contractors, and representatives of the
              company.
            </li>
          </ul>
          <h5>Core Principles:</h5>
          <ul>
            <li>Integrity: Conduct business honestly and transparently.</li>
            <li>Respect: Treat all individuals with dignity and fairness.</li>
            <li>
              Accountability: Take responsibility for actions and decisions.
            </li>
          </ul>
          <h5>Conflicts of Interest:</h5>
          <ul>
            <li>
              Avoid situations where personal interests conflict with company
              interests. Disclose any potential conflicts to management.
            </li>
          </ul>
          <h5>Confidentiality:</h5>
          <ul>
            <li>
              Protect confidential and proprietary information. Do not share it
              without authorization.
            </li>
          </ul>
          <h5>Compliance:</h5>
          <ul>
            <li>Adhere to all laws, regulations, and company policies.</li>
          </ul>
          <h5>Fair Dealing:</h5>
          <ul>
            <li>
              Engage in fair and honest dealings with customers, suppliers, and
              competitors.
            </li>
          </ul>
          <h5>Reporting Violations:</h5>
          <ul>
            <li>
              Report any unethical behavior or policy violations to HR or a
              designated ethics officer.
            </li>
          </ul>
          <h5>Non-Retaliation:</h5>
          <ul>
            <li>
              Ensure no retaliation against individuals who report concerns in
              good faith.
            </li>
          </ul>
          <h5>Training:</h5>
          <ul>
            <li>
              Participate in regular ethics training to reinforce ethical
              standards.
            </li>
          </ul>

          <h2>Work Schedule And Rest Period Policies</h2>
          <h3>Work Schedule</h3>
          <h5>Standard Hours:</h5>
          <ul>
            <li>
              Employees are expected to work [insert standard hours, e.g., 9 AM
              to 5 PM], Monday through Friday.
            </li>
          </ul>
          <h5>Flexible Hours:</h5>
          <ul>
            <li>
              Flexible work arrangements may be available with manager approval.
            </li>
          </ul>
          <h5>Overtime:</h5>
          <ul>
            <li>
              Overtime requires prior approval and will be compensated in
              accordance with legal requirements.
            </li>
          </ul>
          <h5>Shift Work:</h5>
          <ul>
            <li>
              Shift schedules will be communicated in advance and rotations will
              be managed fairly.
            </li>
          </ul>
          <h3>Rest Periods</h3>
          <h5>Breaks:</h5>
          <ul>
            <li>
              Employees are entitled to [insert duration, e.g., 15-minute]
              breaks for every [insert hours, e.g., 4 hours] worked.
            </li>
          </ul>
          <h5>Lunch:</h5>
          <ul>
            <li>
              A [insert duration, e.g., 1-hour] lunch break is provided each
              workday.
            </li>
          </ul>
          <h5>Rest Days:</h5>
          <ul>
            <li>
              Employees are entitled to at least one full day of rest each week.
            </li>
          </ul>
          <h5>Compliance:</h5>
          <ul>
            <li>
              Rest periods comply with applicable labor laws and regulations.
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
    </body>
    </html>`;

    const issue=
    ` <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
        <style>
        body {
          font-family: Arial, sans-serif;
          padding: 20px;
          margin: 0;
          background-color: #fbf0e9;
          color: #000;
        }

       h1,h2,h3{
          color: black;
          font-weight: bold;
          margin-bottom: 10px;
          }
          
          
         h4, h5 {
          color: #8d4217;
          font-weight: bold;
          margin-bottom: 10px;
        }

        ul {
          padding-left: 20px;
          margin-bottom: 20px;
        }

        ul li {
          margin-bottom: 6px;
          font-size: 0.9rem;
          line-height: 1.4;
        }

        .section-heading {
          background-color: #fbf0e9;
          padding: 10px;
          border-left: 4px solid #8d4217;
          margin-bottom: 20px;
        }

        .highlight {
          color: #a83030;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          body {
            font-size: 0.9rem;
            padding: 15px;
          }
        }
      </style>
    </head>
    <body>
    
    <div className="issue-container">
      <div ref={policyRef} className="issue-containers" id="issue-containers">
        <div className="issue-header">
          <h1>Issue Solving</h1>
        </div>
        <div className="issue-content">
          <h2>1. Loss Of Data:</h2>
          <h5>Identify the Source of Data Loss:</h5>
          <ul>
            <li>
              Check Data Flow: Trace where and how data is being passed through
              the component. Verify if the data is being lost during state
              updates or between component re-renders.
            </li>
            <li>
              Review API Calls: Ensure that API requests are correctly handling
              responses and that data is properly fetched, stored, and used.
            </li>
            <li>
              Inspect Event Handlers: Confirm that event handlers (e.g., form
              submissions, input changes) are correctly managing and updating
              data.
            </li>
          </ul>
          <h5>State Management:</h5>
          <ul>
            <li>
              State Initialization: Ensure that the initial state is set up
              correctly and that it's not being overwritten unintentionally.
            </li>
            <li>
              State Updates: Verify that state updates (e.g., using setState or
              hooks) are happening as expected. Check if updates are
              asynchronous and properly handled.
            </li>
            <li>
              Persisting State: Consider using local storage or session storage
              to persist data across page reloads or component unmounts.
            </li>
          </ul>

          <h5>Error Handling:</h5>
          <ul>
            <li>
              Error Logging: Implement error logging to capture any issues that
              may be causing data loss.{" "}
            </li>
            <li>
              User Feedback: Provide feedback to users if data submission fails
              or if there's a problem retrieving data.
            </li>
          </ul>
          <h5>Testing:</h5>
          <ul>
            <li>
              Unit Tests: Write unit tests to verify that data is correctly
              handled in various scenarios.
            </li>
            <li>
              Integration Tests: Test the integration of components and API
              calls to ensure data is properly managed throughout the
              application.
            </li>
          </ul>
          <h5>Documentation and Code Review:</h5>
          <ul>
            <li>
              Review Code: Conduct code reviews to ensure that data handling
              practices are correct.
            </li>
            <li>
              Document Data Flow: Document how data flows through the component
              and where it is being managed, updated, or stored.
            </li>
          </ul>
          <h2>2. Duplication</h2>
          <h5>Identify Sources of Duplication:</h5>
          <ul>
            <li>
              Review Data Sources: Check if data duplication occurs when
              fetching from APIs, submitting forms, or updating state.
            </li>
            <li>
              Check Data Entry Points: Ensure that data entry points (e.g.,
              forms, imports) are not unintentionally causing duplicate entries.
            </li>
          </ul>

          <h5>API and Database Interactions:</h5>
          <ul>
            <li>
              Uniqueness Constraints: Ensure that backend systems or databases
              have constraints to prevent duplicate entries (e.g., unique
              indexes on fields).
            </li>
            <li>
              Idempotent API Calls: Ensure that API calls are idempotent,
              meaning repeated requests do not result in multiple entries.
            </li>
          </ul>
          <h5>Form Handling:</h5>
          <ul>
            <li>
              Debounce Inputs: Use debouncing techniques to prevent duplicate
              submissions caused by rapid user input or multiple clicks.
            </li>
            <li>
              Prevent Multiple Submissions: Disable submit buttons or add
              confirmation dialogs to prevent multiple submissions of the same
              form.
            </li>
          </ul>

          <h5>Data Processing:</h5>
          <ul>
            <li>
              Deduplication Logic: Implement deduplication logic when processing
              data. For example, filter out duplicates before displaying data or
              storing it.
            </li>
            <li>
              Normalize Data: Ensure that data is normalized and consistently
              formatted to avoid accidental duplicates.
            </li>
          </ul>

          <h5>User Interface:</h5>
          <ul>
            <li>
              Provide Feedback: Inform users if duplicate entries are detected
              or prevented. Provide clear messages and instructions.
            </li>
            <li>
              Highlight Duplicates: Use UI indicators to highlight potential
              duplicates or conflicts.
            </li>
          </ul>

          <h5>Logging and Monitoring:</h5>
          <ul>
            <li>
              Track Duplicates: Implement logging to track and analyze instances
              of data duplication.
            </li>
            <li>
              Monitor Data Flows: Use monitoring tools to detect patterns or
              issues leading to duplication.
            </li>
          </ul>

          <h5>Documentation and Best Practices:</h5>
          <ul>
            <li>
              Document Data Handling: Clearly document how data should be
              managed to avoid duplication.
            </li>
            <li>
              Follow Best Practices: Implement best practices for data handling
              and avoid common pitfalls that lead to duplication.
            </li>
          </ul>
          <h2>3.Auto-Mail Functionality</h2>
          <h5>Define Email Triggers:</h5>
          <ul>
            <li>
              Identify Triggers: Determine what events or conditions should
              trigger an automatic email (e.g., form submission, status update,
              new entry).
            </li>
            <li>
              Set Up Conditions: Define the conditions under which emails should
              be sent (e.g., only if a form is successfully submitted).
            </li>
          </ul>
          <h5>Configure Email Service:</h5>
          <ul>
            <li>
              Choose Email Service: Select an email service provider (e.g.,
              SendGrid, Mailgun, Amazon SES) that suits your needs.
            </li>
            <li>
              API Integration: Integrate the email service API into your
              application. Ensure you have the necessary credentials and
              permissions.
            </li>
          </ul>
          <h5> Handle Edge Cases:</h5>
          <ul>
            <li>
              Error Handling: Implement error handling for cases where email
              sending fails. Provide fallback mechanisms or notifications.
            </li>
            <li>
              Rate Limiting: Be aware of rate limits imposed by the email
              service provider and ensure your application adheres to them.
            </li>
          </ul>
          <h5>Monitor and Maintain:</h5>
          <ul>
            <li>
              Track Sent Emails: Keep logs of sent emails and their statuses
              (e.g., delivered, opened).
            </li>
            <li>
              Monitor Performance: Use monitoring tools to track the performance
              and reliability of your email sending system.
            </li>
          </ul>

          <h2> 4. Salary Calculation Based on Attendance</h2>
          <h5> Define Attendance and Salary Policies:</h5>
          <ul>
            <li>
              Attendance Rules: Determine how attendance is recorded (e.g.,
              hours worked, days present).
            </li>
            <li>
              Salary Policies: Define how salaries will be calculated based on
              attendance (e.g., per hour, per day).
            </li>
          </ul>
          <h5> Collect Attendance Data:</h5>
          <ul>
            <li>
              Attendance Tracking: Implement a system to track employee
              attendance. This could be through manual entry, timesheets, or
              automated systems (e.g., biometric systems, digital clock-ins).
            </li>
            <li>
              Data Storage: Store attendance data in a database, including
              details like clock-in and clock-out times.
            </li>
          </ul>
          <h5>Calculate Salary:</h5>
          <ul>
            <li>
              Determine Pay Rates: Define pay rates based on attendance data.
              This might include:
            </li>
            <li>
              Hourly Rates: Calculate salary based on the number of hours
              worked.
            </li>
            <li>
              Daily Rates: Calculate salary based on the number of days
              attended.
            </li>
            <li>Overtime: Handle overtime pay if applicable.</li>
          </ul>
          <h2> 5. Performance Indicators</h2>
          <h5>Define Key Performance Indicators (KPIs):</h5>
          <ul>
            <li>
              Identify Goals: Determine what you want to measure based on
              business objectives and job roles (e.g., productivity, quality of
              work, adherence to deadlines).
            </li>
            <li>
              Set KPIs: Define specific, measurable, achievable, relevant, and
              time-bound (SMART) KPIs for employees. Common KPIs include:
            </li>
            <li>
              Productivity Metrics: Output per hour, project completion rates.
            </li>
            <li>Quality Metrics: Error rates, customer satisfaction scores.</li>
            <li>Behavioral Metrics: Attendance, punctuality, teamwork.</li>
          </ul>
          <h5>Collect Data:</h5>
          <ul>
            <li>
              Data Sources: Identify sources of data for your KPIs (e.g.,
              project management tools, CRM systems, time tracking software).
            </li>
            <li>
              Data Collection Methods: Implement methods to collect data
              consistently (e.g., automated tracking, manual entry).
            </li>
          </ul>
          <h5>Implement Performance Tracking:</h5>
          <ul>
            <li>
              Tools and Software: Use performance management tools or HR
              software to track and analyze KPIs.
            </li>
            <li>
              Dashboard: Create a dashboard that provides real-time insights
              into performance indicators.
            </li>
          </ul>
          <h5>Evaluate Performance:</h5>
          <ul>
            <li>
              Regular Reviews: Schedule regular performance reviews (e.g.,
              quarterly, annually) to assess employee performance against KPIs.
            </li>
            <li>
              Comparison: Compare current performance to historical data,
              benchmarks, or targets.
            </li>
          </ul>

          <h5>Provide Feedback</h5>
          <ul>
            <li>
              Performance Reports: Generate detailed performance reports
              highlighting achievements, areas for improvement, and overall
              performance.
            </li>
            <li>
              Feedback Sessions: Conduct feedback sessions to discuss
              performance with employees, set goals, and address any issues.
            </li>
          </ul>
          <h5>Recognize and Reward Performance:</h5>
          <ul>
            <li>
              Recognition Programs: Implement programs to recognize and reward
              high performance (e.g., employee of the month, bonuses).
            </li>
            <li>
              Incentives: Offer incentives tied to achieving or exceeding
              performance targets.
            </li>
          </ul>

          <h2>6.Maintaining Reports</h2>
          <h5>Define Report Requirements:</h5>
          <ul>
            <li>
              Purpose: Determine the purpose of the report (e.g., performance
              evaluation, financial tracking, project status).
            </li>
            <li>
              Content: Specify the content and metrics to include in the report
              (e.g., KPIs, trends, data summaries).
            </li>
          </ul>
          <h5>Data Collection and Integration:</h5>
          <ul>
            <li>
              Data Sources: Identify and integrate data sources (e.g.,
              databases, spreadsheets, APIs).
            </li>
            <li>
              Data Accuracy: Ensure data is accurate, up-to-date, and
              consistently formatted.
            </li>
          </ul>
          <h5>Report Creation:</h5>
          <ul>
            <li>
              Tools and Software: Choose appropriate tools for report creation
              (e.g., Excel, Google Sheets, BI tools like Power BI, Tableau).
              Data Accuracy: Ensure data is accurate, up-to-date, and
              consistently formatted.
            </li>
            <li>
              Templates: Use or create templates to standardize report format
              and structure.
            </li>
          </ul>
          <h5>Report Maintenance:</h5>
          <ul>
            <li>
              Regular Updates: Schedule regular updates to keep reports current.
              Update data, adjust metrics, and revise content as needed.
            </li>
            <li>
              Version Control: Maintain version control to track changes and
              updates to reports. This helps in understanding historical changes
              and restoring previous versions if needed.
            </li>
          </ul>
          <h5>Data Validation and Accuracy:</h5>
          <ul>
            <li>
              Validation Checks: Implement validation checks to ensure data
              accuracy and consistency.
            </li>
          </ul>
          <h5>Archive and Backup:</h5>
          <ul>
            <li>
              Archiving: Archive old reports for historical reference and
              compliance. Maintain an organized archive system.
            </li>
            <li>
              Backup: Regularly back up reports and data to prevent loss and
              ensure data recovery in case of issues.
            </li>
          </ul>

          <h2>7.Search and Filter:</h2>
          <h5>Define Search and Filter Requirements</h5>
          <ul>
            <li>
              Purpose: Determine what users need to search and filter (e.g.,
              data records, report entries).
            </li>
            <li>
              Criteria: Identify the criteria or fields that should be
              searchable or filterable (e.g., name, date, status).
            </li>
          </ul>
          <h5>Design the User Interface:</h5>
          <ul>
            <li>
              Search Bar: Implement a search bar that allows users to enter
              keywords or phrases.
            </li>
            <li>
              Filter Options: Provide filter options (e.g., dropdowns,
              checkboxes, sliders) for users to narrow down results based on
              specific criteria.
            </li>
          </ul>
          <h5>Implement Search Functionality:</h5>
          <ul>
            <li>
              Search Algorithms: Use search algorithms to process user queries
              and return relevant results. Options include:
            </li>
            <li>Text Matching: Simple text matching or substring search.</li>
            <li>
              Full-Text Search: Advanced search using indexing and relevance
              scoring.
            </li>
          </ul>

          <h2>8.Excel to Database</h2>
          <h3>a. Initial Data Entry Challenges</h3>
          <h5>Manual Data Entry:</h5>
          <ul>
            <li>
              Initially, data was manually entered into the database. This
              process was time-consuming and prone to errors, requiring
              significant manual effort for data accuracy and consistency.
            </li>
          </ul>
          <h5>Data Entry Issues::</h5>
          <ul>
            <li>
              Manual data entry led to challenges such as data entry errors,
              inconsistencies, and inefficiencies. The process lacked
              scalability and was susceptible to human errors.
            </li>
          </ul>
          <h3>b.Introduction of Automated Data Integration</h3>
          <h5>Problem Resolution:</h5>
          <ul>
            <li>
              To address the inefficiencies and errors associated with manual
              data entry, a solution was implemented to automate the data
              integration process from Excel files to the database.
            </li>
          </ul>
          <h5>Direct Excel Upload:</h5>
          <ul>
            <li>
              The new approach involves uploading Excel files directly to the
              system. This method simplifies data integration by allowing users
              to import data from Excel files without manual entry.
            </li>
          </ul>
          <h3>c.Process of Excel to Database Integration</h3>
          <h5>File Upload Interface:</h5>
          <ul>
            <li>
              A user-friendly interface was developed to facilitate the direct
              upload of Excel files. Users can now upload their Excel documents
              directly through a web-based or application interface.
            </li>
          </ul>
          <h5>Data Parsing:</h5>
          <ul>
            <li>
              Upon receiving the uploaded Excel file, the system parses the file
              to extract data. This involves reading the contents of the file
              and converting it into a structured format suitable for database
              operations.
            </li>
          </ul>
          <h3>d. Benefits of Automated Data Integration</h3>
          <h5>Increased Efficiency:</h5>
          <ul>
            <li>
              Automating the data integration process from Excel to the database
              significantly reduces the time and effort required compared to
              manual data entry.
            </li>
          </ul>
          <h5>Enhanced Accuracy:</h5>
          <ul>
            <li>
              Automated processes minimize human errors, leading to more
              accurate and reliable data in the database.
            </li>
          </ul>
          <h3>e. Ongoing Maintenance and Support</h3>
          <h5>System Maintenance:</h5>
          <ul>
            <li>
              Regular maintenance is performed to ensure the smooth operation of
              the Excel to database integration system. This includes updates,
              bug fixes, and performance enhancements.
            </li>
          </ul>
          <h5>User Support:</h5>
          <ul>
            <li>
              Support is available for users to assist with any issues or
              questions related to the file upload and data integration process.
            </li>
          </ul>

          <h2>9.Database to Excel</h2>
          <h3>Introduction of Automated Data Export</h3>
          <h5>Problem Resolution:</h5>
          <ul>
            <li>
              To address the inefficiencies and potential errors associated with
              manual data export, an automated solution was implemented to
              streamline the generation of Excel files directly from the
              database.
            </li>
          </ul>
          <h5>Direct Excel File Generation:</h5>
          <ul>
            <li>
              The new approach involves automatically generating Excel files
              from the database. This method eliminates manual data handling and
              enables seamless and efficient export of data.
            </li>
          </ul>
          <h3> Benefits of Automated Data Export</h3>
          <h5>Enhanced Efficiency:</h5>
          <ul>
            <li>
              Automating the data export process from the database to Excel
              significantly reduces the time and effort required to generate
              reports compared to manual methods.
            </li>
          </ul>
          <h5>Improved Accuracy:</h5>
          <ul>
            <li>
              Automated processes ensure that data is accurately extracted and
              formatted, minimizing errors and inconsistencies in the exported
              files.
            </li>
          </ul>
          <h5>Scalability:</h5>
          <ul>
            <li>
              The automated approach supports exporting large volumes of data
              efficiently, making it suitable for handling extensive datasets.
            </li>
          </ul>
          <h5>Streamlined User Experience:</h5>
          <ul>
            <li>
              Users benefit from a straightforward process that simplifies data
              export, providing immediate access to Excel files without manual
              intervention.
            </li>
          </ul>
          <h3>Ongoing Maintenance and Support</h3>
          <h5>System Maintenance:</h5>
          <ul>
            <li>
              Regular maintenance is conducted to ensure the continued
              functionality and performance of the database to Excel integration
              system. This includes updates, bug fixes, and optimizations.
            </li>
          </ul>
          <h5>User Support:</h5>
          <ul>
            <li>
              Support is available for users to address any questions or issues
              related to the data export process. Assistance is provided to
              ensure a smooth experience with the automated system.
            </li>
          </ul>
          <h2>10.Video Creation Features</h2>
          <h5>Real-Time Application Tracking:</h5>
          <ul>
            <li>Feature: Capture real-time updates on application statuses.</li>
            <li>
              Video Creation: Show a live dashboard or interface where
              recruiters can view and track the status of applications in
              real-time.
            </li>
          </ul>
          <h5>Job Posting Integration:</h5>
          <ul>
            <li>
              Feature: Post job openings to multiple job boards and social media
              platforms.
            </li>
            <li>
              Video Creation: Show the process of posting job openings,
              including integration with job boards and social media channels.
            </li>
          </ul>
          <h5>Candidate Experience Enhancements:</h5>
          <ul>
            <li>
              Feature: Improve the candidate experience with user-friendly
              interfaces and easy application processes.
            </li>
            <li>
              Video Creation: Demonstrate the candidate experience from
              application submission to interview scheduling, highlighting ease
              of use and user-friendly design.
            </li>
          </ul>
          <h5>Resume Parsing:</h5>
          <ul>
            <li>
              Feature: Automatically extract and organize data from resumes.
            </li>
            <li>
              Video Creation: Demonstrate the system’s ability to parse resumes
              and extract key information, displaying how the data is organized
              and searchable.
            </li>
          </ul>
          <h2>11.Share EDM</h2>

          <h5>Automatic Data Download:</h5>
          <ul>
            <li>
              Automated Data Extraction: EDM systems facilitate the automatic
              extraction and download of data from various sources. This
              includes documents, forms, and reports that are stored or
              generated within the system.
            </li>
            <li>
              Data Synchronization: The EDM system ensures that data from
              different parts of the APS is synchronized and up-to-date. For
              example, when new application data is entered, relevant reports
              and summaries are automatically updated and downloaded.
            </li>
            <li>
              Scheduled Downloads: Users can configure the EDM system to perform
              scheduled data downloads at specific intervals. This ensures that
              data is consistently backed up and available without manual
              intervention.
            </li>
            <li>
              Data Aggregation: The EDM system aggregates information from
              multiple sources and compiles it into comprehensive reports or
              files. These files are then automatically downloaded or made
              available for further processing.
            </li>
            <li>
              Seamless Integration: EDM systems integrate with other tools and
              platforms to enable smooth data transfer. For example, data
              collected from forms can be automatically downloaded and processed
              by external systems or applications.
            </li>
          </ul>
          <h5>Automatic Video Generation:</h5>
          <ul>
            <li>
              Automated Video Creation: EDM systems can automatically generate
              videos using data and documents stored within the system. This is
              achieved by integrating video creation tools with the EDM system,
              allowing for the seamless conversion of data into video formats.
            </li>
            <li>
              Dynamic Content Integration: The EDM system pulls relevant data
              and documents to create personalized videos. For instance,
              application status updates, process overviews, or instructional
              content can be automatically compiled into a video format.
            </li>
            <li>
              Scheduled and Triggered Videos: Videos can be generated based on
              scheduled intervals or triggered by specific events within the
              APS. For example, a video summary of an application process might
              be automatically created and shared once an application reaches a
              particular milestone.
            </li>
            <li>
              Template-Based Videos: Users can set up video templates that
              define the layout, content, and style of the videos. The EDM
              system then populates these templates with real-time data and
              documents to produce the final video automatically.
            </li>
          </ul>
          <h5>Benefits:</h5>
          <ul>
            <li>
              Increased Efficiency: By automating video creation and data
              downloads, the EDM system reduces manual effort and accelerates
              processing times, leading to more efficient operations.
            </li>
            <li>
              Enhanced Accuracy: Automation minimizes the risk of human error in
              data handling and video production, ensuring accurate and
              consistent results.
            </li>
            <li>
              Time Savings: Automatic processes save time for users by
              eliminating repetitive tasks and allowing them to focus on more
              strategic activities.
            </li>
            <li>
              Improved Communication: Automated videos and data reports
              facilitate better communication and information sharing among
              stakeholders, enhancing transparency and engagement.
            </li>
          </ul>
        </div>
      </div>
    </div>
    </body>
    </html>`;

    const painarea=
    ` <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
        <style>
        body {
          font-family: Arial, sans-serif;
          padding: 20px;
          margin: 0;
          background-color: #fbf0e9;
          color: #000;
        }

       h1,h2,h3{
          color: black;
          font-weight: bold;
          margin-bottom: 10px;
          }
          
          
         h4, h5 {
          color: #8d4217;
          font-weight: bold;
          margin-bottom: 10px;
        }

        ul {
          padding-left: 20px;
          margin-bottom: 20px;
        }

        ul li {
          margin-bottom: 6px;
          font-size: 0.9rem;
          line-height: 1.4;
        }

        .section-heading {
          background-color: #fbf0e9;
          padding: 10px;
          border-left: 4px solid #8d4217;
          margin-bottom: 20px;
        }

        .highlight {
          color: #a83030;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          body {
            font-size: 0.9rem;
            padding: 15px;
          }
        }
      </style>
    </head>
    <body> 
    <div className="painarea-container">
      <div
        ref={policyRef}
        className="painarea-containers"
        id="painarea-containers"
      >
        <div className="painarea-header">
          <h1 className="painarea-header">Pain Area Solving</h1>
        </div>
        <div className="painarea-content">
          <h2>1.System Performance Issues</h2>
          <ul>
            <li>
              Description: Clients often face problems with system speed,
              responsiveness, and overall performance.
            </li>
          </ul>
          <h5>Pain Areas:</h5>
          <ul>
            <li>
              Slow Processing: Systems may lag or take too long to process
              requests or data.
            </li>
            <li>Downtime: Frequent outages or unavailability of services.</li>
            <li>
              Scalability: Difficulty in scaling systems to handle increased
              loads or growth.
            </li>
          </ul>
          <h5>Solutions:</h5>
          <ul>
            <li>Optimize code and infrastructure.</li>
            <li>
              Implement performance monitoring tools to proactively address
              issues.
            </li>
            <li>Upgrade hardware or cloud resources to improve scalability.</li>
          </ul>
          <h2>2.Integration Challenges</h2>
          <ul>
            <li>
              Description: Problems with integrating new systems or technologies
              with existing ones.
            </li>
          </ul>
          <h5>Pain Areas:</h5>
          <ul>
            <li>
              Compatibility Issues: Difficulties in ensuring different systems
              work together seamlessly.
            </li>
            <li>
              Data Silos: Fragmented data across multiple systems, leading to
              inefficiencies.
            </li>
            <li>
              Complex Integration Processes: High complexity in integrating
              various tools and platforms.
            </li>
          </ul>
          <h5>Solutions:</h5>
          <ul>
            <li>
              Develop and use middleware solutions to facilitate integration.
            </li>
            <li>
              Provide custom integration services to ensure compatibility.
            </li>
            <li>Implement data synchronization and integration frameworks.</li>
          </ul>
          <h2>3.User Experience (UX) Problems</h2>
          <ul>
            <li>
              Description: Issues related to the usability and functionality of
              systems from the end-user perspective.
            </li>
          </ul>
          <h5>Pain Areas:</h5>
          <ul>
            <li>
              Complex Interfaces: Difficult-to-navigate or non-intuitive user
              interfaces.
            </li>
            <li>
              Lack of Customization: Systems that do not cater to specific user
              needs or preferences.
            </li>
            <li>Poor Performance: Interfaces that are slow or unresponsive.</li>
          </ul>
          <h5>Solutions:</h5>
          <ul>
            <li>
              Conduct user research and usability testing to design intuitive
              interfaces.
            </li>
            <li>
              Implement customizable features to tailor the system to user
              needs.
            </li>
            <li>
              Optimize UI/UX to improve performance and user satisfaction.
            </li>
          </ul>
          <h2>4.Support and Maintenance</h2>
          <ul>
            <li>
              Description: Challenges related to the ongoing support and
              maintenance of IT systems.
            </li>
          </ul>
          <h5>Pain Areas:</h5>
          <ul>
            <li>
              Inadequate Support: Delays or insufficient support for resolving
              issues.
            </li>
            <li>
              Lack of Documentation: Insufficient or outdated documentation for
              systems.
            </li>
            <li>
              High Maintenance Costs: Expensive or time-consuming maintenance
              tasks.
            </li>
          </ul>
          <h5>Solutions:</h5>
          <ul>
            <li>Provide responsive and effective customer support services.</li>
            <li>
              Offer regular maintenance and updates to keep systems running
              smoothly.
            </li>
            <li>
              Ensure comprehensive and up-to-date documentation for clients.
            </li>
          </ul>
          <h2>5.Cost Management</h2>
          <ul>
            <li>
              Description: Concerns about the cost-effectiveness of IT solutions
              and services.
            </li>
          </ul>

          <h5>Pain Areas:</h5>
          <ul>
            <li>
              High Costs: Expensive initial investments or ongoing operational
              costs.
            </li>
            <li>
              ROI Concerns: Uncertainty about the return on investment for IT
              solutions.
            </li>
            <li>
              Unpredictable Expenses: Unexpected costs related to system
              failures or upgrades.
            </li>
          </ul>
          <h5>Solutions:</h5>
          <ul>
            <li>
              Offer flexible pricing models, including subscription-based or
              pay-as-you-go options.
            </li>
            <li>
              Provide cost-benefit analyses to demonstrate the value of
              solutions.
            </li>
            <li>Implement cost-control measures and budgeting tools.</li>
          </ul>
          <h2>6.Training and Adoption</h2>
          <ul>
            <li>
              Description: Issues related to the training of staff and the
              adoption of new technologies.
            </li>
          </ul>

          <h5>Pain Areas:</h5>
          <ul>
            <li>
              Lack of Training: Insufficient training leading to poor use of
              systems.
            </li>
            <li>
              Resistance to Change: Employees reluctant to adopt new
              technologies.
            </li>
            <li>
              Implementation Difficulties: Challenges in integrating new
              technologies into existing workflows.
            </li>
          </ul>
          <h5>Solutions:</h5>
          <ul>
            <li>Offer comprehensive training programs and resources.</li>
            <li>
              Implement change management strategies to facilitate adoption.
            </li>
            <li>
              Provide support during and after implementation to ensure smooth
              transitions.
            </li>
          </ul>
          <h2>7.Customization Needs</h2>
          <ul>
            <li>
              Description: Requirements for custom features or modifications to
              standard solutions.
            </li>
          </ul>

          <h5>Pain Areas:</h5>
          <ul>
            <li>
              Limited Flexibility: Off-the-shelf solutions may not meet specific
              business needs.
            </li>
            <li>
              High Customization Costs: Expensive or complex customization
              requirements.
            </li>

            <li>
              Long Development Times: Extended timelines for developing custom
              features.
            </li>
          </ul>
          <h5>Solutions:</h5>
          <ul>
            <li>Offer customizable solutions and modular designs.</li>
            <li>
              Provide consulting services to understand and address specific
              needs.
            </li>
            <li>
              Implement agile development practices to accelerate customization.
            </li>
          </ul>
          <h2>8.Data Security and Compliance</h2>
          <ul>
            <li>
              Description: Concerns about data breaches, security
              vulnerabilities, and regulatory compliance.
            </li>
          </ul>
          <h5>Pain Areas:</h5>
          <ul>
            <li>Data Breaches: Risk of unauthorized access or data loss.</li>
            <li>
              Compliance Issues: Difficulty in meeting industry-specific
              regulations.
            </li>
            <li>
              Inadequate Security Measures: Weak encryption, outdated security
              protocols.
            </li>
          </ul>
          <h5>Solutions:</h5>
          <ul>
            <li>
              Implement robust security measures, including encryption and
              access controls.
            </li>
            <li>
              Regularly update and patch systems to address vulnerabilities.
            </li>
            <li>Provide compliance consulting and auditing services.</li>
          </ul>
        </div>
      </div>
    </div>
    </body>
    </html>`;



const Footer = () => {
  const [activeDoc, setActiveDoc] = useState(null);

  const iframeMap = {
    rights: { doc: rights, title: "Rights & Instructions" },
    policy: { doc: policy, title: "Company Policy" },
    issue: { doc: issue, title: "Issue Solving" },
    painarea: { doc: painarea, title: "Recruiters Pain Area" },
  };

  const openFullScreen = (key) => setActiveDoc(key);
  const closeFullScreen = () => setActiveDoc(null);

  return (
    <>
      {/* ===== Footer Section ===== */}
      <section className="footer" id="contact">
        <div className="footer-grid">

          {/* Logo + Name */}
          <div className="footer-title">
            <img src={rgLogo} alt="Logo" className="logo" />
            <div className="text">
              <a className="home" href="#home">Recruiter's Gear</a>
            </div>
          </div>

          {/* ABOUT US */}
          <div className="footer-column">
            <h4>ABOUT US</h4>
            <ul>
              <li onClick={() => openFullScreen('rights')}>Rights & Instructions</li>
              <li onClick={() => openFullScreen('policy')}>Company Policy</li>
              <li onClick={() => openFullScreen('issue')}>Issues Solving</li>
              <li onClick={() => openFullScreen('painarea')}>Recruiters Pain Area</li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div className="footer-column">
            <h4>SUPPORT</h4>
            <ul>
              <li>Help Center</li>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Security</li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div className="footer-column">
            <h4>Follow Us</h4>
            <ul className="social">
              <li><a href="https://www.instagram.com/157careers.in?igsh=bnlzaTg4MnpnYWxw" target="_blank"><i className="fab fa-instagram"></i></a></li>
              <li><a href="https://whatsapp.com/channel/0029Vb6XhUcAu3aUGdCvsa0f" target="_blank"><i className="fab fa-whatsapp"></i></a></li>
              <li><a href="https://www.linkedin.com/company/157enterprises/" target="_blank"><i className="fab fa-linkedin"></i></a></li>
              <li><a href="http://www.youtube.com/@Recruitersgear" target="_blank"><i className="fab fa-youtube"></i></a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; 2024 157 Industries. All rights reserved.</p>
        </div>
      </section>

      {/* ===== Full Screen Iframe Modal ===== */}
      {activeDoc && (
       <>
    <div className="fullscreen-iframe-backdrop" onClick={closeFullScreen} />
    <div className="fullscreen-iframe-overlay">
      <button className="close-btn" onClick={closeFullScreen}>×</button>
      <iframe
        srcDoc={iframeMap[activeDoc].doc}
        title={iframeMap[activeDoc].title}
        width="100%"
        height="100%"
        style={{
          border: 'none',
          background: '#fff',
        }}
      />
    </div>
  </>
      )}
    </>
  );
};

export default Footer;
