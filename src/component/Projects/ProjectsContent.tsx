import cardBgImg from "../../assets/projects card bg.png";
import { createSignal, For, onMount } from "solid-js";
import { supabase } from "../../lib/supabaseClient";
import { FaSolidArrowRightLong } from "solid-icons/fa";

interface PortfolioItem {
  id: number;
  image_url: string;
  title: string;
  details: string;
  project_link: string;
}

const ProjectsContent = () => {
  const [data, setData] = createSignal<PortfolioItem[]>([]);

  onMount(async () => {
    const { data: portfolio, error } = await supabase
      .from("portfolio")
      .select("*");

    if (error) console.error("Fetch error:", error);
    else setData(portfolio as PortfolioItem[]);
  });

  return (
    <div class="container mx-auto pt-20 flex flex-col justify-center items-center text-[#e4ecff] relative z-10">
      <h1 class="capitalize text-3xl savate font-bold">
        My recent <span class="text-[#cbacf9]">projects</span>
      </h1>

      {/* card */}
      <div
        class="pt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-10"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <For each={data()}>
          {(item) => (
            <div class="bg-linear-to-tr from-[#04071D] to-[#0C0E23] border border-[#36374949] shadow-xl rounded-3xl h-[400px] w-96">
              <div class="bg-[#13162D] w-80 h-50 mt-5 block mx-auto rounded-xl relative overflow-clip">
                <img
                  class="absolute top-0 left-0 w-full h-[110%] object-cover rounded-xl"
                  src={cardBgImg}
                  alt=""
                />
                <div class="w-64 rotate-3 z-10 absolute top-8 right-1/2 transform translate-x-1/2">
                  <img
                    class="rounded-xl object-cover w-full h-[200px]"
                    src={item?.image_url}
                    alt={item?.title}
                  />
                </div>
              </div>
              <div class="px-10 py-5">
                <h1 class="font-bold text-xl">{item?.title}</h1>
                <h1 class="mt-4 mb-6 font-light text-sm text-justify line-clamp-2">
                  {item?.details}
                </h1>

                <a
                  href={item?.project_link}
                  target="_blank"
                  class="inline-flex items-center text-[#cbacf9] hover:underline transition-all duration-300 "
                >
                  <div class="mr-2 ">Check Live Site</div>
                  <FaSolidArrowRightLong class="text-sm -rotate-45" />
                </a>
              </div>
            </div>
          )}
        </For>
      </div>
    </div>
  );
};

export default ProjectsContent;
