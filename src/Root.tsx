import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";
import Blog from "./component/Blog/Blog";
import Contact from "./component/Contact/Contact";
import Header from "./component/Header/Header";
import Projects from "./component/Projects/Projects";
import Skills from "./component/Skills/Skills";
import WorkExp from "./component/WorkExp/WorkExp";

const Root = () => {
  return (
    <MetaProvider>
      {/* SEO Meta Tags */}
      <Title>Radwan Fahim — Frontend Developer</Title>
      <Meta charset="utf-8" />
      <Meta name="viewport" content="width=device-width, initial-scale=1" />
      <Meta
        name="description"
        content="Radwan Fahim is a frontend developer skilled in React, SolidJS and modern web technologies. View my projects, skills and experience."
      />
      <Meta name="robots" content="index, follow" />
      <Meta name="author" content="Radwan FAhim" />

      {/* Open Graph */}
      <Meta property="og:type" content="website" />
      <Meta property="og:title" content="Radwan Fahim — Frontend Developer" />
      <Meta
        property="og:description"
        content="Frontend developer skilled in React, SolidJS and modern web technologies."
      />
      <Meta property="og:url" content="https://radwan-fahim.netlify.app/" />
      <Meta property="og:image" content="/logo.png" />

      {/* Twitter Card */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:site" content="@Radwan_Fahim0" />
      <Meta name="twitter:title" content="Radwan_Fahim0" />
      <Meta name="twitter:description" content={`console.log("Hello There")`} />

      <Meta
        name="twitter:image"
        content="https://pbs.twimg.com/profile_images/1516784618250203136/wHqxFSvD_400x400.jpg"
      />
      {/* Canonical */}
      <Link rel="canonical" href="https://radwan-fahim.netlify.app/" />

      {/* Your Components */}
      <Header />
      <Projects />
      <WorkExp />
      <Skills />
      <Blog />
      <Contact />
    </MetaProvider>
  );
};

export default Root;
