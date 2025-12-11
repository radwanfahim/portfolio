import { For, type Component } from "solid-js";
import LinkData from "../../api/LinkData";

const Footer = () => {
  return (
    <footer class="container mx-auto relative ">
      <div class="absolute bottom-0 text-[#e4ecff] flex flex-between md:flex-row flex-col md:gap-0 gap-5 items-center justify-between w-full md:px-10 px-0">
        <h1 class="text-sm">Copyright ©2025 Radwan Fahim</h1>
        {/* social */}
        <div class="flex gap-4">
          {
            <For
              each={LinkData.filter((f) =>
                ["github", "twitter", "fiverr", "linkedin", "email"].includes(
                  f.name
                )
              )}
            >
              {(item) => {
                const Icon = item?.icon as Component;
                return (
                  <a href={item?.url} target="_blank" rel="noopener noreferrer">
                    <button class=" relative overflow-hidden text-[#e4ecff]  p-3 rounded-2xl bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.2)] border backdrop:blur-2xl shadow-2xl transition-all duration-300 hover:bg-[rgba(255,255,255,0.2)] hover:cursor-pointer hover:scale-105">
                      <span
                        class={`absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.3)] to-transparent opacity-0 hover:opacity-100  transition-all duration-300`}
                      ></span>
                      {/* icon */}
                      <Icon />
                    </button>
                  </a>
                );
              }}
            </For>
          }
        </div>
      </div>
    </footer>
  );
};

export default Footer;
