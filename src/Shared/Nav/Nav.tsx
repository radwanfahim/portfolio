import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
// import styles from "./nav.module.css";

const Nav = () => {
  return (
    <>
      <nav class="relative z-50 w-full sora">
        <DesktopNav />
        <MobileNav />
      </nav>
    </>
  );
};

export default Nav;
