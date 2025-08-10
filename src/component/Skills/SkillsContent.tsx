import createEmblaCarousel from "embla-carousel-solid";
import { onMount } from "solid-js";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import styles from "./skills.module.css";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiSolid,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiFigma,
  SiAdobephotoshop,
  SiGit,
} from "solid-icons/si";
import { BiLogosMongodb, BiLogosTailwindCss } from "solid-icons/bi";
import { FaBrandsBootstrap, FaBrandsWordpress } from "solid-icons/fa";

const SkillsContent = () => {
  const [emblaRef, emblaApi] = createEmblaCarousel(
    () => ({ loop: true }),
    () => [Autoplay(), Fade()]
  );

  onMount(() => {
    const api = emblaApi();
    if (api) {
      console.log(api.slideNodes()); // Access API
    }
  });

  // json
  const skills = {
    slides: [
      [
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: SiCss3, color: "#1572B6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Tailwindcss", icon: BiLogosTailwindCss, color: "#00bcff" },
        { name: "Bootstrap", icon: FaBrandsBootstrap, color: "#8a12fc" },
      ],
      [
        { name: "React", icon: SiReact, color: "#58c4dc" },
        { name: "Solid Js", icon: SiSolid, color: "#315997" },
        { name: "Node Js", icon: SiNodedotjs, color: "#538c47" },
        { name: "Express Js", icon: SiExpress, color: null },
        { name: "Wordpress", icon: FaBrandsWordpress, color: null },
      ],
      [
        { name: "Mongodb", icon: BiLogosMongodb, color: "#00ed64" },
        { name: "SQL", icon: SiMysql, color: "#00758f" },
        { name: "Git", icon: SiGit, color: "#e84d31" },
        { name: "Figma", icon: SiFigma, color: "#9d56f7" },
        { name: "Adobephotoshop", icon: SiAdobephotoshop, color: "#0a1941" },
      ],
    ],
  };

  return (
    <div class="container mx-auto md:pt-20 pt-10 flex flex-col justify-center items-center text-[#e4ecff] relative z-10">
      <h1 class="capitalize text-3xl savate font-bold">
        My <span class="text-[#cbacf9]">Skills </span>
      </h1>

      <div
        class={`${styles.embla} w-full md:mt-10`}
        ref={emblaRef}
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <div
          class={`${styles.embla} w-full mt-10 px-4`} // Added px-4 for mobile padding
          ref={emblaRef}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <div class={styles.embla__container}>
            {skills.slides.map((slide) => (
              <div
                class={`${styles.embla__slide} flex flex-wrap md:flex-nowrap items-center justify-center gap-6 sm:gap-10 md:gap-20 lg:gap-40`}
              >
                {slide.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div class="flex flex-col items-center justify-center">
                      <Icon
                        class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20"
                        color={item.color ?? "currentColor"}
                      />
                      <p class="mt-2 text-sm sm:text-base md:text-lg">
                        {item.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsContent;
