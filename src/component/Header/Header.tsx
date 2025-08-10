import backgroundGrid from "../../assets/header-bg-grid.png";
import backgroundLightLeft from "../../assets/header-bg-light-left.png";
import backgroundLightRight from "../../assets/header-bg-light-right.png";
import HeaderContent from "./HeaderContent";

const Header = () => {
  return (
    <section
      class="sora h-screen w-full bg-[#02051b] bg-no-repeat bg-cover bg-center relative"
      style={"background-image:url(" + backgroundGrid + ")"}
    >
      {/* bg light */}
      <div
        class="absolute md:block hidden top-0 left-0 w-[50%] h-[60%] bg-no-repeat bg-cover"
        style={"background-image:url(" + backgroundLightLeft + ")"}
      ></div>{" "}
      <div
        class="absolute md:block hidden top-0 right-0 w-[50%] h-[60%] bg-no-repeat bg-cover"
        style={"background-image:url(" + backgroundLightRight + ")"}
      ></div>
      {/* header content */}
      <HeaderContent />
    </section>
  );
};

export default Header;
