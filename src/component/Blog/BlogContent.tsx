import { For, createSignal, onMount, onCleanup } from "solid-js";
import { AiOutlinePlus } from "solid-icons/ai";
import BlogData from "../../api/BlogData";
import { trackEvent } from "../../utils/analytics";

const PAGE_SIZE = 4; // 2-column grid, so load 2 rows at a time

const BlogCard = (props: { item: (typeof BlogData)[0]; index: number }) => {
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
      class="bg-linear-to-tr from-[#04071D] to-[#0C0E23] border border-[#36374949] shadow-xl rounded-xl flex justify-between md:flex-row flex-col-reverse gap-7 items-center relative overflow-hidden"
    >
      {/* plus corner decorators */}
      <div class="md:block hidden">
        <AiOutlinePlus class="absolute -top-[10px] -left-[10px] text-3xl text-white/10" />
        <AiOutlinePlus class="absolute -bottom-[10px] -left-[10px] text-3xl text-white/10" />
        <AiOutlinePlus class="absolute -top-[10px] -right-[10px] text-3xl text-white/10" />
        <AiOutlinePlus class="absolute -bottom-[10px] -right-[10px] text-3xl text-white/10" />
      </div>

      <div class="pt-8 pb-8 pl-6">
        <h2 class="text-2xl font-bold mb-4 capitalize">{props.item?.title}</h2>
        <p class="text-white/60 mb-4 line-clamp-2">{props.item?.description}</p>
        <a
          onClick={() =>
            trackEvent("blog_click", props.item?.title ?? "unknown")
          }
          // href={props.item.url}
          href={`/blog/${props.item.title.toLowerCase().replace(/\s+/g, "-")}`}
          // target="_blank"
          class="text-[#cbacf9] hover:underline capitalize"
        >
          Read more
        </a>
      </div>

      <div class="md:w-[300px] w-full h-[240px] md:rounded-r-3xl rounded-t-3xl md:rounded-t-none overflow-hidden flex-shrink-0">
        <img
          width={500}
          height={200}
          class="object-cover bg-cover bg-center w-full h-full"
          src={props.item.img}
          alt={props.item.title}
        />
      </div>
    </div>
  );
};

const BlogContent = () => {
  const [visibleCount, setVisibleCount] = createSignal(PAGE_SIZE);
  let sentinelRef: HTMLDivElement | undefined;

  const visibleBlogs = () => BlogData.slice(0, visibleCount());
  const hasMore = () => visibleCount() < BlogData.length;

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasMore()) {
          setVisibleCount((prev) =>
            Math.min(prev + PAGE_SIZE, BlogData.length),
          );
        }
      },
      { threshold: 0.1 },
    );

    if (sentinelRef) observer.observe(sentinelRef);
    onCleanup(() => observer.disconnect());
  });

  return (
    <div class="container mx-auto pt-20 pb-20 flex flex-col justify-center items-center text-[#e4ecff] relative z-10">
      <h1 class="capitalize text-3xl savate font-bold mb-12">
        My <span class="text-[#cbacf9]">blog</span>
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 md:mx-10 mx-5">
        <For each={visibleBlogs()}>
          {(item, index) => (
            <BlogCard item={item} index={index() % PAGE_SIZE} />
          )}
        </For>
      </div>

      {/* Sentinel */}
      <div ref={sentinelRef} class="mt-10 flex flex-col items-center gap-3">
        {hasMore() ? (
          <div class="flex items-center gap-2 text-white/40 text-sm">
            <span class="w-2 h-2 rounded-full bg-[#cbacf9] animate-ping" />
            Loading more posts...
          </div>
        ) : (
          <div class="text-white/30 text-sm">
            Showing {BlogData.length} posts
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogContent;
