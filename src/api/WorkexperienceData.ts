interface WorkExperience {
  companyName: string;
  position: string;
  duration: string;
  logo: string;
  description: string;
}

const WorkExperienceData: WorkExperience[] = [
  {
    companyName: "Staff Asia",
    position: "Customer Success",
    duration: "April 2024 - July 2025",
    logo: "/staff-asia-logo.png",
    description:
      "Talking directly with clients. Exchanging emails for various issues. Real-time text-based conversation on a website using Zendesk or liveChat.",
  },
  {
    companyName: "Enuva IT",
    position: "Front-End Developer",
    duration: "April 2021- February 2024",
    logo: "/Enuva-IT-logo.png",
    description:
      "Developed and maintained web applications using WordPress, HTML, CSS. Collaborated with cross-functional teams to deliver high-quality website solutions.",
  },
];

export default WorkExperienceData;
