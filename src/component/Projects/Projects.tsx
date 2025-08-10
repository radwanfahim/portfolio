import backgroundGrid from "../../assets/header-bg-grid.png";
import ProjectsContent from "./ProjectsContent";

const Projects = () => {
  return (
    <section
      id="projects"
      class="sora w-full bg-[#02051b] bg-no-repeat bg-cover bg-center relative "
      style={"background-image:url(" + backgroundGrid + ")"}
    >
      {/* gradient */}
      <div class="bg-linear-to-t from-[#02051b] to-transparent w-full h-[100%] absolute z-0 top-0 left-0"></div>

      {/* content */}
      <ProjectsContent />
    </section>
  );
};

export default Projects;
