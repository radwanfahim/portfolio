import { SolidTyper } from "solid-typer";
import { AiFillGithub } from "solid-icons/ai";
import { ImLinkedin2 } from "solid-icons/im";
import { AiOutlineDownload } from "solid-icons/ai";
import { links } from "../../lib/linkStorage";

const HeaderContent = () => {
  const githubLink = () => links().find((l) => l.name === "github")?.url || "#";
  const linkedinLink = () =>
    links().find((l) => l.name === "linkedin")?.url || "#";
  const resumeLink = () => links().find((l) => l.name === "resume")?.url || "#";

  return (
    <div class="container mx-auto flex flex-col items-center justify-center h-full text-center">
      <h1 class="text-[#e4ecff] text-xl md:mx-0 mx-5 savate">
        Hi! I'm <span>Radwan Fahim</span>, a{" "}
        <SolidTyper
          text={["Frontend", "Backend", "WordPress"]}
          backspaceSpeed={30}
          typingSpeed={100}
          loop={true}
        />{" "}
        Developer
      </h1>
      <p class="lg:text-7xl md:text-5xl text-3xl font-bold mt-4 leading-snug bg-gradient-to-r from-blue-500 to-[#cbacf9] inline-block text-transparent bg-clip-text md:mx-0 mx-5">
        Transforming Concepts <br /> into Seamless User Experiences
      </p>

      {/* btn social*/}

      <div class="mt-10 flex gap-5">
        {/* github */}
        <a href={githubLink()} target="_blank" rel="noopener noreferrer">
          <button class=" relative overflow-hidden text-[#e4ecff] text-4xl  p-3 rounded-2xl bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.2)] border backdrop:blur-2xl shadow-2xl transition-all duration-300 hover:bg-[rgba(255,255,255,0.2)] hover:cursor-pointer hover:scale-105">
            <span
              class={`absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.3)] to-transparent opacity-0 hover:opacity-100  transition-all duration-300`}
            ></span>
            <AiFillGithub />
          </button>
        </a>

        {/* linkedin */}
        <a href={linkedinLink()} target="_blank" rel="noopener noreferrer">
          <button class=" relative overflow-hidden text-[#e4ecff] text-4xl p-3 rounded-2xl bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.2)] border backdrop:blur-2xl shadow-2xl transition-all duration-300 hover:bg-[rgba(255,255,255,0.2)] hover:cursor-pointer hover:scale-105">
            <span
              class={`absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.3)] to-transparent opacity-0 hover:opacity-100  transition-all duration-300`}
            ></span>
            <ImLinkedin2 />
          </button>
        </a>
      </div>

      {/* resume */}
      <a href={resumeLink()} target="_blank" rel="noopener noreferrer">
        <button class="md:mt-20 mt-10 bg-gradient-to-tl hover:cursor-pointer from-white/10 to-[#02051b]  rounded-2xl text-white px-7 py-3 flex items-center gap-3 hover:scale-105 transition-all duration-300 shadow-2xl">
          <div class="text-[#e4ecff]">Download Resume</div>
          <AiOutlineDownload class="text-2xl animate-bounce" />
        </button>
      </a>
    </div>
  );
};

export default HeaderContent;
