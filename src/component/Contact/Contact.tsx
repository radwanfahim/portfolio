import { For } from "solid-js";
import LinkData from "../../api/LinkData";
import bgContact from "../../assets/contact-bg.png";
import Footer from "../../Shared/Footer/Footer";

const Contact = () => {
  return (
    <section
      id="contact"
      class="sora h-screen w-full bg-[#02051b] bg-no-repeat bg-cover bg-center relative pb-5"
      style={"background-image:url(" + bgContact + ")"}
    >
      {/* content */}
      <div
        class="flex flex-col items-center justify-center h-full text-[#e4ecff] md:mx-0 mx-5"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <h1 class="font-bold md:text-[48px] text-3xl mb-5 text-center leading-relaxed capitalize">
          Ready to take <span class="text-[#cbacf9]">your</span> digital
          <br />
          presence to the next level?
        </h1>

        <p class="text-center  text-[#C1C2D3] capitalize">
          Reach out to me today and let's discuss how I can help you achieve
          your goals.
        </p>

        {/* email btn */}
        {
          <For each={LinkData.filter((f) => ["email"].includes(f.name))}>
            {(item) => {
              return (
                <a href={`mailto:${item?.url}`} rel="noopener noreferrer">
                  <button class="mt-10 bg-gradient-to-tl hover:cursor-pointer from-[#161A31] to-[#06091F] rounded-md text-white px-7 py-3 flex items-center gap-3 hover:scale-105 transition-all duration-300 shadow-2xl">
                    <div class="text-[#e4ecff]">Contact Me</div>
                  </button>
                </a>
              );
            }}
          </For>
        }
      </div>

      {/* footer */}
      <Footer />
    </section>
  );
};

export default Contact;
