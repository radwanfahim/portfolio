import { For } from "solid-js";
import { AiOutlinePlus } from "solid-icons/ai";
import BlogData from "../../api/BlogData";

const BlogContent = () => {
  return (
    <div class="container mx-auto pt-20 pb-20 flex flex-col justify-center items-center text-[#e4ecff] relative z-10">
      <h1 class="capitalize text-3xl savate font-bold mb-12">
        My <span class="text-[#cbacf9]">blog </span>
      </h1>

      {/* card */}
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 md:mx-10 mx-5 "
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <For each={BlogData}>
          {(item) => (
            <div class="bg-linear-to-tr from-[#04071D] to-[#0C0E23] border border-[#36374949] shadow-xl rounded-3xl flex justify-between md:flex-row flex-col-reverse gap-7 items-center relative  ">
              {/* plus */}
              <div class="md:block hidden">
                <AiOutlinePlus class="absolute -top-[10px] -left-[10px] text-3xl text-white/10" />
                <AiOutlinePlus class="absolute -bottom-[10px] -left-[10px] text-3xl text-white/10" />
                <AiOutlinePlus class="absolute -top-[10px] -right-[10px] text-3xl text-white/10" />
                <AiOutlinePlus class="absolute -bottom-[10px] -right-[10px] text-3xl text-white/10" />
              </div>
              <div class="pt-8 pb-8 pl-6 ">
                <h2 class="text-2xl font-bold mb-4 capitalize">
                  {item?.title}
                </h2>
                <p class="text-white/60 mb-4 line-clamp-2">
                  {item?.description}
                </p>
                <a
                  href={item.url}
                  target="_blank"
                  class="text-[#cbacf9] hover:underline capitalize"
                >
                  Read more
                </a>
              </div>

              <img
                width={200}
                height={200}
                class="object-fill bg-cover bg-center md:w-[300px] w-full  h-[240px] md:rounded-r-3xl rounded-t-3xl md:rounded-t-none"
                src={item.img}
                alt=""
              />
            </div>
          )}
        </For>
      </div>
    </div>
  );
};

export default BlogContent;
