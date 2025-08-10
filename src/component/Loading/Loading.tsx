const Loading = () => {
  return (
    <section class=" bg-black h-screen w-full ">
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div class="loader-wrapper">
          <span class="loader-letter">L</span>
          <span class="loader-letter">o</span>
          <span class="loader-letter">a</span>
          <span class="loader-letter">d</span>
          <span class="loader-letter">i</span>
          <span class="loader-letter">n</span>
          <span class="loader-letter">g</span>

          <div class="loader"></div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
