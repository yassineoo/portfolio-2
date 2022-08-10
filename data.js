import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";


import { BsCircleFill } from "react-icons/bs";

export const services = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>Next.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>Expressjs</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },

];

export const languages = [
  {
    Icon: BsCircleFill,
    name: "javaScript",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Nextjs ",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Nodejs",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Mongo and MySQL",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "ReactNative ",
    level: "55",
  },
  {
    Icon: BsCircleFill,
    name: "flutter ",
    level: "55",
  },
  {
    Icon: BsCircleFill,
    name: "TailWind  ",
    level: "55",
  },
];

export const tools= [
  {
    Icon: BsCircleFill,
    name: "git",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "canva",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "figma",
    level: "35",
  },
  {
    Icon: BsCircleFill,
    name: "svn",
    level: "45",
  },
];

export const projects = [
  { 
    id:1,
    name: "IDE Intelx8086",
    description:
      "This app is a emulator + compiler for intel assembly i8086",
    image_path: "/images/idei8086.png",
    deployed_url: "https://idrist11.github.io/8086-Online-IDE/",
    github_url: "https://github.com/yassineoo/vgath8086-fullbackend-in-nodejs-express-mongodb",
    category: ["Node","Mongo"],
    key_techs: ["Nodejs", "bootstrap", 'express'],
  },
  {
    id:2,
    name: "Instagrame clone",
    image_path: "/images/instagrame.png",
    deployed_url: "instagrame2-0.vercel.app/",
    github_url: "https://github.com/yassineoo/Instagrame-2.0",
    category: ["Nextjs"],
    description:
   ' Typical Social Media App where one can post,like ,comment etc ' ,
     key_techs: ["Nextjs", "firebase", "tailwindcss"],
  },

  {
    id:3,
    name: "hulu movies",
    image_path: "/images/hulu-2.png",
    deployed_url: "hulumoviesseconde.vercel.app/",
    github_url: "https://github.com/yassineoo/hulu-movies",
    category: ["Nextjs"],
    description:
      "muvies website shows the lateste movies in cinima using dbm Api",
    key_techs: [
      "Nextjs", "tailwindcss"
    ],
  },

  {
    id:4,
    name: "Google search clone",
    image_path: "/images/google-1.png",
    deployed_url: "google-search-seven.vercel.app/",
    github_url: "https://github.com/yassineoo/google-search-Engine",
    category: ["Nextjs", "react"],
    description:
      "google search engine clone using google api ",
    key_techs: ["Nextjs", "tailwindcss"],
  },

  {
    id:5,
    name: "rehlaty admin",
    image_path: "/images/rehlaty.png",
    deployed_url: "dztraveling.herokuapp.com/places",
    github_url: "https://github.com/yassineoo/Admin-RehLaty-Web-app",
    category: [ "Express","Node" , "Mongo"],
    description:
      "admin web site for e-tourisme in algeria",
    key_techs: ["Node", "Express", "REST API" ,"Bootstrap" ,],
  },

  {

    id:6,
    name: "hackadon",
    image_path: "/images/hackadon.png",
    deployed_url: "https://hackadon.herokuapp.com/",
    github_url: "https://github.com/yassineoo/Hckadon-esms2",
    category: ["Express","Node" , "Mongo"],
    description:
      "event website for a charity hackathon with Cse clube ",
    key_techs: ["Node", "Express", "REST API" ,"Bootstrap" ,],
  
  },
 {
    id:7,
    name: "Portfolio",
    image_path: "/images/portfolio.png",
    deployed_url: "https://priceless-spence-cb4844.netlify.app/",
    github_url: "https://github.com/yassineoo/portfolio",
    category: ["express"],
    description:
      'Quik Portfolio coding in 2 days as a chalenge from SOAI club ',
    key_techs: [
      "React",
    ],
  },
 /* {
    id:8,
    name: "Football App",
    image_path: "/images/football.png",
    deployed_url: "https://o-my-goal.web.app/",
    github_url: "https://github.com/Dey-Sumit/football-app",
    category: ["react"],
    description:
      "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
    key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
  },
  */
];