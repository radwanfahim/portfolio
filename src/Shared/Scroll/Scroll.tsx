import { createSignal, onMount, onCleanup } from "solid-js";
import { FaSolidArrowUp } from "solid-icons/fa";

const Scroll = () => {
  const [isVisible, setIsVisible] = createSignal(false);
  const [lastScrollY, setLastScrollY] = createSignal(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY() && currentScrollY > 100) {
      // Show on scroll down, and only after scrolling a bit
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
    setLastScrollY(currentScrollY);
  };

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
  });

  onCleanup(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  return (
    <section class="sora ">
      <button
        class={`cursor-pointer fixed z-50 animate-bounce bottom-4 right-5 bg-transparent bg-radial-[at_50%_50%] backdrop-blur-md from-white/10 to-white/5 to-100% text-[#e4ecff] p-3 rounded-full shadow-lg transition-transform duration-300 ease-out ${
          isVisible() ? "translate-y-0" : "translate-y-30 "
        }`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} // Example: Scroll to top on click
      >
        <div class="">
          <FaSolidArrowUp class="text-3xl" />
        </div>
      </button>
    </section>
  );
};

export default Scroll;
