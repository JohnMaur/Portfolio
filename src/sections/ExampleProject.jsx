import { useRef } from 'react';
import useOnScreen from '../custom-hook/useOnScreen';
import ProjectCard from "../components/ProjectCard"

const ExampleProject = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      className={`sm:px-28 max-sm:px-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="flex space-x-7 items-center py-5">
        <div className="sm:w-1/2">
          <ProjectCard
            title="MACTs"
            projectCard={true}
            description="The Multifunctional Access Control and Tracking System through RFID-Driven Technology presents a comprehensive system designed to enhance access control and tracking capabilities across in the university settings. Leveraging RFID (Radio-Frequency Identification) technology, this innovative system offers multifaceted solutions for classroom attendance, gatepass issuance, library in/out records management, gym in/out records management, and registrar student information management."
          />
        </div>


        <div className="max-sm:hidden border border-white mt-10 h-52 sm:w-1/2 rounded-lg cursor-pointer hover:h-60 transition-all duration-500">

        </div>
      </div>

      <div className="flex sm:space-x-5 justify-center py-5">
        <div className="max-sm:hidden border border-white mt-10 h-52 w-1/2 rounded-lg cursor-pointer hover:h-60 transition-all duration-500">

        </div>
        <div className="sm:w-1/2 max-sm:w-full">
          <ProjectCard
            title="MACTs"
            projectCard={true}
            description="The Multifunctional Access Control and Tracking System through RFID-Driven Technology presents a comprehensive system designed to enhance access control and tracking capabilities across in the university settings. Leveraging RFID (Radio-Frequency Identification) technology, this innovative system offers multifaceted solutions for classroom attendance, gatepass issuance, library in/out records management, gym in/out records management, and registrar student information management."
          />
        </div>
      </div>

      <div className="flex space-x-7 items-center py-5">
        <div className="sm:w-1/2 max-sm:w-full">
          <ProjectCard
            title="MACTs"
            projectCard={true}
            description="The Multifunctional Access Control and Tracking System through RFID-Driven Technology presents a comprehensive system designed to enhance access control and tracking capabilities across in the university settings. Leveraging RFID (Radio-Frequency Identification) technology, this innovative system offers multifaceted solutions for classroom attendance, gatepass issuance, library in/out records management, gym in/out records management, and registrar student information management."
          />
        </div>


        <div className="max-sm:hidden border border-white mt-10 h-52 w-1/2 rounded-lg cursor-pointer hover:h-60 transition-all duration-500">

        </div>
      </div>
    </div>
  )
}

export default ExampleProject