import { AiFillGithub } from "solid-icons/ai";
import { ImLinkedin2 } from "solid-icons/im";
import { TbBrandFiverr } from "solid-icons/tb";
import { AiOutlineTwitter } from "solid-icons/ai";
import { links } from "../../lib/linkStorage";

const Footer = () => {
  const githubLink = () => links().find((l) => l.name === "github")?.url || "#";
  const linkedinLink = () =>
    links().find((l) => l.name === "linkedin")?.url || "#";
  const fiverrLink = () => links().find((l) => l.name === "fiverr")?.url || "#";
  const twitterLink = () =>
    links().find((l) => l.name === "twitter")?.url || "#";

  return (
    <footer class="container mx-auto relative ">
      <div class="absolute bottom-0 text-[#e4ecff] flex flex-between md:flex-row flex-col md:gap-0 gap-5 items-center justify-between w-full md:px-10 px-0">
        <h1 class="text-sm">Copyright ©2025 Radwan Fahim</h1>
        {/* social */}
        <div class="flex gap-4">
          <a href={githubLink()} target="_blank" rel="noopener noreferrer">
            {/* github */}
            <button class=" relative overflow-hidden text-[#e4ecff]  p-3 rounded-2xl bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.2)] border backdrop:blur-2xl shadow-2xl transition-all duration-300 hover:bg-[rgba(255,255,255,0.2)] hover:cursor-pointer hover:scale-105">
              <span
                class={`absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.3)] to-transparent opacity-0 hover:opacity-100  transition-all duration-300`}
              ></span>
              <AiFillGithub class="text-xl" />
            </button>
          </a>
          {/* linkedin */}
          <a href={linkedinLink()} target="_blank" rel="noopener noreferrer">
            <button class=" relative overflow-hidden text-[#e4ecff]  p-3 rounded-2xl bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.2)] border backdrop:blur-2xl shadow-2xl transition-all duration-300 hover:bg-[rgba(255,255,255,0.2)] hover:cursor-pointer hover:scale-105">
              <span
                class={`absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.3)] to-transparent opacity-0 hover:opacity-100  transition-all duration-300`}
              ></span>
              <ImLinkedin2 class="text-xl" />
            </button>
          </a>{" "}
          {/* fiverr */}
          <a href={fiverrLink()} target="_blank" rel="noopener noreferrer">
            <button class=" relative overflow-hidden text-[#e4ecff]  p-3 rounded-2xl bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.2)] border backdrop:blur-2xl shadow-2xl transition-all duration-300 hover:bg-[rgba(255,255,255,0.2)] hover:cursor-pointer hover:scale-105">
              <span
                class={`absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.3)] to-transparent opacity-0 hover:opacity-100  transition-all duration-300`}
              ></span>
              <TbBrandFiverr class="text-xl" />
            </button>
          </a>
          {/* twitter */}
          <a href={twitterLink()} target="_blank" rel="noopener noreferrer">
            <button class=" relative overflow-hidden text-[#e4ecff]  p-3 rounded-2xl bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.2)] border backdrop:blur-2xl shadow-2xl transition-all duration-300 hover:bg-[rgba(255,255,255,0.2)] hover:cursor-pointer hover:scale-105">
              <span
                class={`absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.3)] to-transparent opacity-0 hover:opacity-100  transition-all duration-300`}
              ></span>
              <AiOutlineTwitter class="text-xl" />
            </button>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
