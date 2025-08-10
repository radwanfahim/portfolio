import { createSignal, For, onMount } from "solid-js";
import { supabase } from "../../lib/supabaseClient";

interface WorkExpContentProps {
  logo: string;
  company_name: string;
  description: string;
  duration: string;
  position: string;
}

const WorkExpContent = () => {
  const [data, setData] = createSignal<WorkExpContentProps[]>([]);

  onMount(async () => {
    const { data: portfolio, error } = await supabase
      .from("work_exp")
      .select("*");

    if (error) console.error("Fetch error:", error);
    else setData(portfolio as WorkExpContentProps[]);
  });
  return (
    <div class="container mx-auto pt-20 flex flex-col justify-center items-center text-[#e4ecff] relative z-10">
      <h1 class="capitalize text-3xl savate font-bold">
        My <span class="text-[#cbacf9]">work experience </span>
      </h1>

      {/* card */}
      <div
        class="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10 md:mx-0 mx-5"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <For each={data()}>
          {(item) => (
            <div class="md:flex items-center gap-5 bg-linear-to-tr from-[#04071D] to-[#0C0E23] border border-[#36374949] shadow-xl rounded-3xl md:h-[200px] md:w-[700px] p-5 relative z-10">
              {/* glowing effect */}

              <img
                class="w-32 h-32 mx-auto object-cover"
                src={item?.logo}
                alt=""
              />

              <div class="md:mt-0 mt-10">
                <h1 class="text-2xl font-bold">
                  {item?.company_name}{" "}
                  <span class="text-sm font-light ml-3">{item?.duration}</span>
                </h1>
                <h1 class="mt-2">{item?.position}</h1>
                <p class="mt-3 text-white/60">{item?.description}</p>
              </div>
            </div>
          )}
        </For>
      </div>
    </div>
  );
};

export default WorkExpContent;
