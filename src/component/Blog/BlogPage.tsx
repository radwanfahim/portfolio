import { useParams } from "@solidjs/router";
import { createMemo } from "solid-js";
import { marked } from "marked";
import BlogData from "../../api/BlogData";
import { Title, Meta } from "@solidjs/meta";

export default function BlogDetail() {
  const params = useParams();

  const blog = BlogData.find(
    (b) => b.title.toLowerCase().replace(/\s+/g, "-") === params.id,
  );

  if (!blog) return <p>Blog not found</p>;

  const htmlContent = createMemo(
    () => marked.parse(blog.description) as string,
  );

  return (
    <>
      {/* SEO */}
      <Title>{blog.title}</Title>

      <Meta name="description" content={blog.description.slice(0, 160)} />

      <Meta property="og:title" content={blog.title} />
      <Meta
        property="og:description"
        content={blog.description.slice(0, 160)}
      />
      <Meta property="og:image" content={blog.img} />
      <Meta property="og:type" content="article" />
      <Meta property="og:url" content={blog.url} />

      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content={blog.title} />
      <Meta
        name="twitter:description"
        content={blog.description.slice(0, 160)}
      />
      <Meta name="twitter:image" content={blog.img} />

      {/* page data */}
      <section class="sora w-full bg-[#02051b] bg-no-repeat bg-cover bg-center relative py-30">
        <div class="container mx-auto max-w-7xl px-4 sm:px-6">
          <div class="relative">
            <img
              class="w-full object-cover sm:aspect-[4/1.5] aspect-video rounded-2xl brightness-20"
              loading="lazy"
              src={blog.img}
              alt={blog.title}
            />
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h1 class="text-white sm:text-6xl/snug text-2xl/snug text-center capitalize">
                {blog.title}
              </h1>
            </div>
          </div>

          <div
            class="prose prose-invert prose-lg max-w-none pt-10
                 prose-headings:text-white
                 prose-p:text-gray-300
                 prose-strong:text-white
                 prose-a:text-blue-400 prose-a:underline hover:prose-a:text-blue-300
                 prose-li:text-gray-300
                 prose-ol:text-gray-300"
            innerHTML={htmlContent()}
          />
          <h1 class="text-blue-300 pt-10 overflow-hidden text-ellipsis">
            Article link:{" "}
            <a class="text-blue-600 " href={blog.url}>
              {blog.url}
            </a>
          </h1>
        </div>
      </section>
    </>
  );
}
