import { PDFDownloadLink } from '@react-pdf/renderer';
import ResumeDocument from '../PDF-Layout/ResumeDocument';

const Resume = ({ isDarkMode }) => {
  const textPrimary = isDarkMode ? "text-white" : "text-gray-900";
  const textSecondary = isDarkMode ? "text-gray-300" : "text-gray-700";
  const borderColor = isDarkMode ? "border-cyan-400" : "border-indigo-400";
  const accentBg = isDarkMode ? "bg-[#2C1250]" : "bg-purple-600";

  return (
    <div className={`sm:px-28 max-sm:px-4 py-11 ${isDarkMode ? "bg-primary" : "bg-gray-100"}`}>
      
      {/* ABOUT ME */}
      <p className={`font-palanquin font-bold text-4xl ${textPrimary}`}>
        ABOUT ME
      </p>

      <div className="max-sm:w-full">
        <div className="px-5 pt-2 space-y-3">
          <p className={`text-xl font-palanquin font-semibold ${textPrimary}`}>
            JOHN SIGFRIDO MAUR
          </p>

          <p className={`font-palanquin text-base italic ${textSecondary}`}>
            I’m a passionate developer with four years of experience building mobile apps and web applications.
            I’ve done some freelancing, which helped me improve not only my coding skills but also how I communicate
            with clients and deliver what they need. I work with React, React Native, and Node.js to create responsive
            and user-friendly solutions.
          </p>

          <ul className="list-disc pl-5">
            <li className={`text-base font-palanquin ${textPrimary}`}>
              Metro Manila, Taguig City, Philippines
            </li>
            <li className={`text-base font-palanquin ${textPrimary}`}>
              +639924271714
            </li>
            <li className={`text-base font-palanquin ${textPrimary}`}>
              johnmaur8@gmail.com
            </li>
          </ul>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mt-5 flex sm:space-x-5 max-sm:flex-col">
        
        {/* LEFT COLUMN */}
        <div className="sm:w-1/2 max-sm:w-full mt-8">
          
          {/* SKILLS */}
          <p className={`font-palanquin font-bold text-2xl ${textPrimary}`}>
            Professional Skills
          </p>

          <div className="flex space-x-4 mt-3">
            <div className="flex flex-col items-center">
              <div className={`bg-transparent border-2 ${borderColor} rounded-full w-4 h-4`}></div>
              <div className={`border-l-2 ${borderColor} h-full`}></div>
            </div>

            <ul className="list-disc pl-5">
              <li className={`text-base font-palanquin ${textPrimary}`}>
                Proficient in both front-end and back-end development using React, React Native, and Node.js.
              </li>
              <li className={`text-base font-palanquin ${textPrimary}`}>
                Skilled in JavaScript and modern programming practices.
              </li>
              <li className={`text-base font-palanquin ${textPrimary}`}>
                Experienced in Git and GitHub for version control and collaboration.
              </li>
              <li className={`text-base font-palanquin ${textPrimary}`}>
                Experienced with Tailwind CSS and Bootstrap for responsive UI design.
              </li>
            </ul>
          </div>

          {/* WORK EXPERIENCE */}
          <p className={`font-palanquin font-bold text-2xl mt-5 ${textPrimary}`}>
            Work Experience
          </p>

          {/* JOB 1 */}
          <div className="flex space-x-4 mt-3">
            <div className="flex flex-col items-center mt-2">
              <div className={`bg-transparent border-2 ${borderColor} rounded-full w-4 h-4`}></div>
              <div className={`border-l-2 ${borderColor} h-full`}></div>
            </div>

            <div className="space-y-3">
              <div>
                <p className={`text-xl font-palanquin font-semibold ${textPrimary}`}>
                  CUSTOMER SERVICE – PROCTOR
                </p>
                <p className={`px-2 font-semibold font-palanquin text-base ${textSecondary}`}>
                  May 2023 – August 2023
                </p>
              </div>

              <p className={`font-palanquin text-base italic ${textSecondary}`}>
                The Peak Tower, Makati City
              </p>

              <ul className="list-disc pl-5">
                <li className={`text-base font-palanquin ${textPrimary}`}>
                  Provided clear instructions to test takers.
                </li>
                <li className={`text-base font-palanquin ${textPrimary}`}>
                  Resolved technical and procedural issues.
                </li>
                <li className={`text-base font-palanquin ${textPrimary}`}>
                  Handled multiple test takers efficiently.
                </li>
                <li className={`text-base font-palanquin ${textPrimary}`}>
                  Monitored exams to ensure compliance.
                </li>
              </ul>
            </div>
          </div>

          {/* JOB 2 */}
          <div className="flex space-x-4 mt-3">
            <div className="flex flex-col items-center mt-2">
              <div className={`bg-transparent border-2 ${borderColor} rounded-full w-4 h-4`}></div>
              <div className={`border-l-2 ${borderColor} h-full`}></div>
            </div>

            <div className="space-y-3">
              <div>
                <p className={`text-xl font-palanquin font-semibold ${textPrimary}`}>
                  Sales Management / Support
                </p>
                <p className={`px-2 font-semibold font-palanquin text-base ${textSecondary}`}>
                  January 2025 – February 2026
                </p>
              </div>

              <p className={`font-palanquin text-base italic ${textSecondary}`}>
                McKinley Hill, Taguig City
              </p>

              <ul className="list-disc pl-5">
                <li className={`text-base font-palanquin ${textPrimary}`}>
                  Supported sales teams and client operations.
                </li>
                <li className={`text-base font-palanquin ${textPrimary}`}>
                  Resolved order and service-related issues.
                </li>
                <li className={`text-base font-palanquin ${textPrimary}`}>
                  Tracked orders through multiple service stages.
                </li>
                <li className={`text-base font-palanquin ${textPrimary}`}>
                  Prepared reports and documentation.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="sm:w-1/2 max-sm:w-full">
          <p className={`font-bold font-palanquin text-2xl mt-8 ${textPrimary}`}>
            Education
          </p>

          <div className="px-5 pt-2 space-y-5">
            {[
              ["TERTIARY", "2021–2025", "TECHNOLOGICAL UNIVERSITY OF THE PHILIPPINES", "BTVTE – ICT Computer Programming"],
              ["UPPER SECONDARY", "2019–2021", "Noah's Academy", "Information Communication Technology"],
              ["SECONDARY", "2015–2019", "Maria Asuncion Rodriguez Tinga High School"],
              ["PRIMARY", "2009–2015", "Upper Bicutan Elementary School"]
            ].map(([level, year, school, course], i) => (
              <div key={i} className="flex space-x-3">
                <div className="flex flex-col items-center mt-2">
                  <div className={`bg-transparent border-2 ${borderColor} rounded-full w-4 h-4`}></div>
                  <div className={`border-l-2 ${borderColor} h-full`}></div>
                </div>
                <div>
                  <p className={`text-xl font-palanquin font-semibold ${textPrimary}`}>{level}</p>
                  <p className={`px-2 font-semibold font-palanquin text-base ${textSecondary}`}>{year}</p>
                  <p className={`font-palanquin text-base italic ${textSecondary}`}>{school}</p>
                  {course && (
                    <p className={`text-base font-palanquin ${textPrimary}`}>{course}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DOWNLOAD */}
      <div className="flex justify-end px-5 py-2 max-sm:mt-4">
        <p className={`font-palanquin text-base ${textSecondary}`}>
          Click 'Download PDF' to download my resume
        </p>
      </div>

      <div className="flex justify-end px-5">
        <PDFDownloadLink
          document={<ResumeDocument />}
          fileName="JOHN_MAUR-Resume.pdf"
          className={`text-white ${accentBg} py-2.5 px-9 rounded-md font-palanquin text-base font-semibold hover:opacity-90 active:opacity-70`}
        >
          {({ loading }) => (loading ? 'Loading Document...' : 'Download PDF')}
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default Resume;
