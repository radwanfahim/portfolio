import { createSignal } from "solid-js";
import { AiOutlineMenu, AiOutlineClose } from "solid-icons/ai";

const MobileNav = () => {
  const [isOpen, setIsOpen] = createSignal(false);

  const scrollToSection = (id: any) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav class="absolute top-0 left-0 w-full md:hidden z-50">
      {/* Hamburger / Close Button */}
      <button
        class={`fixed top-5 left-5 z-60 p-2 rounded-md focus:outline-none transition-colors duration-300 ${
          isOpen() ? "bg-gray-800 text-white shadow-lg" : "text-white"
        }`}
        onClick={() => setIsOpen(!isOpen())}
        aria-label="Toggle Menu"
      >
        {isOpen() ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
      </button>

      {/* Backdrop */}
      <div
        class={`fixed inset-0 bg-[#02051b] bg-opacity-40 transition-opacity duration-300 ${
          isOpen()
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div
        class={`fixed top-14 left-0 w-full shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen()
            ? "translate-y-0 opacity-100"
            : "-translate-y-20 opacity-0 pointer-events-none"
        }`}
      >
        <ul class="flex flex-col items-center gap-6 py-6 text-white text-lg font-medium select-none">
          <li
            onClick={() => {
              scrollToSection("projects");
              setIsOpen(false);
            }}
            class="cursor-pointer transition-colors duration-200 hover:text-[#cbacf9]"
          >
            Projects
          </li>
          <li
            onClick={() => {
              scrollToSection("work-experience");
              setIsOpen(false);
            }}
            class="cursor-pointer transition-colors duration-200 hover:text-[#cbacf9]"
          >
            Work Experience
          </li>
          <li
            onClick={() => {
              scrollToSection("skills");
              setIsOpen(false);
            }}
            class="cursor-pointer transition-colors duration-200 hover:text-[#cbacf9]"
          >
            Skills
          </li>
          <li
            onClick={() => {
              scrollToSection("blog");
              setIsOpen(false);
            }}
            class="cursor-pointer transition-colors duration-200 hover:text-[#cbacf9]"
          >
            Blog
          </li>
          <li
            onClick={() => {
              scrollToSection("contact");
              setIsOpen(false);
            }}
            class="cursor-pointer transition-colors duration-200 hover:text-[#cbacf9]"
          >
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
