import { PDFDownloadLink } from '@react-pdf/renderer';
import ResumeDocument from '../PDF-Layout/ResumeDocument';

const Resume = () => {
  return (
    <div className='sm:px-28 max-sm:px-4 py-11'>
      <p className='text-white font-palanquin font-bold text-4xl '>ABOUT ME</p>

      <div className='mt-5 flex flex-col sm:space-x-5'>
        <div className='sm:w-1/2 max-sm:w-full'>
          <p className='text-white font-bold font-palanquin text-2xl'>Summary</p>
          <div className='px-5 pt-2 space-y-3'>
            <p className='text-xl text-white font-palanquin font-semibold'>JOHN SIGFRIDO MAUR</p>
            <p className='text-white font-palanquin text-base italic'>I am a passionate developer with nearly two years of hands-on experience from my college days, building innovative and user-friendly mobile apps and web applications. Working with React, React Native, and Node.js, I create dynamic and responsive solutions that meet modern needs.</p>
            <ul class="list-disc pl-5">
              <li className='text-white text-base font-palanquin'>Metro Manila, Taguig City, Philippines</li>
              <li className='text-white text-base font-palanquin'>+639924271714</li>
              <li className='text-white text-base font-palanquin'>johnmaur8@gmail.com</li>
            </ul>

          </div>

          <p className='text-white font-bold font-palanquin text-2xl mt-8'>Education</p>

          <div className='px-5 pt-2 space-y-6'>
            <div className='space-y-3'>
              <div>
                <p className='text-xl text-white font-palanquin font-semibold'>TERTIARY</p>
                <p className='px-2 text-white font-semibold font-palanquin text-base'>2021-Present</p>
              </div>
              <p className='text-white font-palanquin text-base italic'>TECHNOLOGICAL UNIVERSITY OF THE PHILIPPINES</p>
              <p className='text-white text-base font-palanquin'>Bachelor of Technical Vocational Teacher Education major in ICT-Computer Programming</p>
            </div>

            <div className='space-y-3'>
              <div>
                <p className='text-xl text-white font-palanquin font-semibold'>UPPER SECONDARY</p>
                <p className='px-2 text-white font-semibold font-palanquin text-base'>2019 - 2021</p>
              </div>
              <p className='text-white font-palanquin text-base italic'>Noah's Academy</p>
              <p className='text-white text-base font-palanquin'>Information Communicatio Technology</p>
            </div>

            <div className='space-y-3'>
              <div>
                <p className='text-xl text-white font-palanquin font-semibold'>SECONDARY</p>
                <p className='px-2 text-white font-semibold font-palanquin text-base'>2015 - 2019</p>
              </div>
              <p className='text-white font-palanquin text-base italic'>MARIA ASUNCION RODRIGUEZ TINGA HIGH SCHOOL</p>
            </div>

            <div className='space-y-3'>
              <div>
                <p className='text-xl text-white font-palanquin font-semibold'>PRIMARY</p>
                <p className='px-2 text-white font-semibold font-palanquin text-base'>2009 - 2015</p>
              </div>
              <p className='text-white font-palanquin text-base italic'>UPPER BICUTAN ELEMENTARY SCHOOL</p>
            </div>
          </div>

        </div>

        <div className='sm:w-1/2 max-sm:w-full mt-4'>
          <p className='text-white font-palanquin font-bold text-2xl'>Professional Experience</p>
          <div className='space-y-3 pt-2 px-5'>
            <div>
              <p className='text-xl text-white font-palanquin font-semibold'>CUSTOMER SERVICE - PROCTOR</p>
              <p className='px-2 text-white font-semibold font-palanquin text-base'>May 2023 – August 2023</p>
            </div>
            <p className='text-white font-palanquin text-base italic'>The Peak Tower 107 L.P Liveste Street, Makati City</p>
            <ul class="list-disc pl-5">
              <li className='text-white text-base font-palanquin'>Provided clear and concise instructions to test takers, ensuring they understood the exam process.</li>
              <li className='text-white text-base font-palanquin'>Addressed and resolved any technical or procedural issues that arose during exams.</li>
              <li className='text-white text-base font-palanquin'>Handled two test takers at once while providing consistent and attentive service.</li>
              <li className='text-white text-base font-palanquin'>Monitored up to 10 test takers during their exams to ensure compliance with exam protocols.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='flex justify-end px-5 py-2 max-sm:mt-4'>
        <p className='text-gray-300 font-palanquin text-base'>Click 'Download PDF' to download my resume</p>
      </div>
      <div className='flex justify-end px-5 '>
        <PDFDownloadLink
          document={<ResumeDocument />}
          fileName="JOHN_MAUR-Resume.pdf"
          className="text-white bg-[#2C1250] py-2.5 px-9 rounded-md font-palanquin text-base font-semibold hover:bg-[#371765] active:opacity-45"
        >
          {({ loading }) => (loading ? 'Loading Document...' : 'Download PDF')}
        </PDFDownloadLink>
      </div>

    </div>
  )
}

export default Resume