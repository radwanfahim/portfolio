import Blog from "./component/Blog/Blog";
import Contact from "./component/Contact/Contact";
import Header from "./component/Header/Header";
import Projects from "./component/Projects/Projects";
import Skills from "./component/Skills/Skills";
import WorkExp from "./component/WorkExp/WorkExp";

const Root = () => {
  return (
    <>
      <Header />
      <Projects />
      <WorkExp />
      <Skills />
      <Blog />
      <Contact />
    </>
  );
};

export default Root;
