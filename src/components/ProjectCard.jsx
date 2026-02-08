import { solidClick } from "../constant/index"

const ProjectCard = ({ title, description, projectCard }) => {
  return (
    <div>
      <p className="text-textColor font-semibold font-palanquin text-base">Featured Project</p>
      <p className="text-white font-bold text-3xl font-palanquin">{title}</p>

      {projectCard ? (
        <div className="border border-white mt-4 h-52 w-full rounded-lg cursor-pointer hover:h-60 transition-all duration-500"></div>
      ) : null }
      

      <div className="bg-[#201335] rounded-lg p-4 px-5 mt-5 w-auto h-36 overflow-hidden hover:overflow-y-auto bg-custom-scrollbar">
        <p className="text-white text-base font-palanquin">{description}</p>
      </div>

      <div className="flex py-3 space-x-2">
        <img 
          src={solidClick}
          className="w-5 h-5"
        />
        <img 
          src={solidClick}
          className="w-5 h-5"
        />
      </div>
    </div>
  )
}

export default ProjectCard