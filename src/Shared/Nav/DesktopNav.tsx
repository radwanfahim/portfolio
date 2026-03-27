import { A } from "@solidjs/router";
import { For } from "solid-js";
import NavData from "../../api/NavData";

const DesktopNav = () => {
  // const scrollToSection = (id: any) => {
  //   const section = document.getElementById(id);
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <div class="absolute left-1/2 transform -translate-x-1/2 text-white/80 mt-5 bg-white/5 backdrop-blur-xl rounded-lg px-7 py-4 shadow-lg md:block hidden">
      <ul class="flex items-center justify-center space-x-5">
        <For each={NavData}>
          {(nav) => {
            return (
              <li
                class="cursor-pointer hover:text-[#cbacf9] transition duration-700 ease-in-out"
                // onClick={() => scrollToSection(`${navData.link}`)}
              >
                <A href={`#${nav.link}`}>{nav.text}</A>
              </li>
            );
          }}
        </For>
      </ul>
    </div>
  );
};

export default DesktopNav;
