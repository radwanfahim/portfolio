import cardBgImg from "../../assets/projects card bg.png";
import { For, createSignal, onMount, onCleanup } from "solid-js";
import { FaSolidArrowRightLong } from "solid-icons/fa";
import PortFolioData from "../../api/PortFolioData";
import { trackEvent } from "../../utils/analytics";

const PAGE_SIZE = 3;

const ProjectCard = (props: {
  item: (typeof PortFolioData)[0];
  index: number;
}) => {
  let cardRef: HTMLDivElement | undefined;
  const [visible, setVisible] = createSignal(false);

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    if (cardRef) observer.observe(cardRef);
    onCleanup(() => observer.disconnect());
  });

  return (
    <div
      ref={cardRef}
      style={{
        transition: `opacity 0.6s ease ${props.index * 100}ms, transform 0.6s ease ${props.index * 100}ms`,
        opacity: visible() ? 1 : 0,
        transform: visible() ? "translateY(0px)" : "translateY(40px)",
      }}
      class="bg-linear-to-tr from-[#04071D] to-[#0C0E23] border border-[#36374949] shadow-xl rounded-3xl h-[400px] w-96"
    >
      <div class="bg-[#13162D] w-80 h-50 mt-5 block mx-auto rounded-xl relative overflow-clip">
        <img
          class="absolute top-0 left-0 w-full h-[110%] object-cover rounded-xl"
          src={cardBgImg}
          alt=""
        />
        <div class="w-64 rotate-3 z-10 absolute top-8 right-1/2 transform translate-x-1/2">
          <img
            width={200}
            height={200}
            class="rounded-xl object-cover w-full h-[200px]"
            src={props.item?.image}
            alt={props.item?.title}
          />
        </div>
      </div>
      <div class="px-10 py-5">
        <h1 class="font-bold text-xl">{props.item?.title}</h1>
        <h1 class="mt-4 mb-6 font-light text-sm text-justify line-clamp-2">
          {props.item?.description}
        </h1>
        <a
          href={props.item?.link}
          target="_blank"
          class="inline-flex items-center text-[#cbacf9] hover:underline transition-all duration-300"
          onClick={() =>
            trackEvent("project_click", props.item?.title ?? "unknown")
          }
        >
          <div class="mr-2">Check Live Site</div>
          <FaSolidArrowRightLong class="text-sm -rotate-45" />
        </a>
      </div>
    </div>
  );
};

const ProjectsContent = () => {
  const [visibleCount, setVisibleCount] = createSignal(PAGE_SIZE);
  let sentinelRef: HTMLDivElement | undefined;

  const visibleProjects = () => PortFolioData.slice(0, visibleCount());
  const hasMore = () => visibleCount() < PortFolioData.length;

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasMore()) {
          setVisibleCount((prev) =>
            Math.min(prev + PAGE_SIZE, PortFolioData.length),
          );
        }
      },
      { threshold: 0.1 },
    );

    if (sentinelRef) observer.observe(sentinelRef);
    onCleanup(() => observer.disconnect());
  });

  return (
    <div class="container mx-auto pt-20 flex flex-col justify-center items-center text-[#e4ecff] relative z-10">
      <h1 class="capitalize text-3xl savate font-bold">
        My recent <span class="text-[#cbacf9]">projects</span>
      </h1>

      <div class="pt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-10">
        <For each={visibleProjects()}>
          {(item, index) => (
            <ProjectCard item={item} index={index() % PAGE_SIZE} />
          )}
        </For>
      </div>

      {/* Sentinel */}
      <div ref={sentinelRef} class="mt-10 flex flex-col items-center gap-3">
        {hasMore() ? (
          <div class="flex items-center gap-2 text-white/40 text-sm">
            <span class="w-2 h-2 rounded-full bg-[#cbacf9] animate-ping" />
            Loading more projects...
          </div>
        ) : (
          <div class="text-white/30 text-sm">
            Showing {PortFolioData.length} projects
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsContent;
