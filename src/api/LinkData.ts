import { AiFillGithub } from "solid-icons/ai";
import { ImLinkedin2 } from "solid-icons/im";
import { TbBrandFiverr } from "solid-icons/tb";
import { AiOutlineTwitter } from "solid-icons/ai";
import { AiOutlineDownload } from "solid-icons/ai";
import { SiMinutemailer } from "solid-icons/si";
import type { Component } from "solid-js";

interface Link {
  name: string;
  url: string;
  icon: Component;
}

const LinkData: Link[] = [
  {
    name: "github",
    icon: AiFillGithub,
    url: "https://github.com/radwanfahim",
  },
  {
    name: "twitter",
    icon: AiOutlineTwitter,
    url: "https://x.com/Radwan_Fahim0",
  },
  {
    name: "fiverr",
    icon: TbBrandFiverr,
    url: "https://www.fiverr.com/s/yvRq4pZ",
  },
  {
    name: "resume",
    icon: AiOutlineDownload,
    url: "https://drive.google.com/file/d/1WeNwkXR8nC1_1PbTFbHB1baaepbmQSsD/view?usp=sharing",
  },
  {
    name: "linkedin",
    icon: ImLinkedin2,
    url: "https://www.linkedin.com/in/radwan-fahim-dev/",
  },
  {
    name: "email",
    icon: SiMinutemailer,
    url: "trfahimdev@outlook.com",
  },
];

export default LinkData;
