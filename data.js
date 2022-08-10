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
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
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
      "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
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
  {
    Icon: RiComputerLine,
    title: "Whatever",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
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
    name: "Django",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "55",
  },
];

export const tools= [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
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
    category: ["node"],
    key_techs: ["Nodejs", "bootstrap", "django"],
  },
  {
    id:2,
    name: "Instagrame clone",
    image_path: "/images/instagrame.png",
    deployed_url: "instagrame2-0.vercel.app/",
    github_url: "https://github.com/yassineoo/Instagrame-2.0",
    category: ["react"],
    description:
   ' Typical Social Media App where one can post,like ,comment etc ' ,
     key_techs: ["React", "firebase", "Framer Motion"],
  },

  {
    id:3,
    name: "hulu movies",
    image_path: "/images/hulu-2.png",
    deployed_url: "hulumoviesseconde.vercel.app/",
    github_url: "https://github.com/yassineoo/hulu-movies",
    category: ["node", "mongo", "react"],
    description:
      "muvies website shows the lateste movies in cinima using dbm Api",
    key_techs: [
      "React",
      "Redux",
      "Node",
      "Express",
      "Mongo",
      "REST API",
      "Bootstrap",
    ],
  },

  {
    id:4,
    name: "Google search clone",
    image_path: "/images/google-1.png",
    deployed_url: "google-search-seven.vercel.app/",
    github_url: "https://github.com/yassineoo/google-search-Engine",
    category: ["node", "react"],
    description:
      "google search engine clone using google api ",
    key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
  },

  {
    id:5,
    name: "rehlaty admin",
    image_path: "/images/rehlaty.png",
    deployed_url: "dztraveling.herokuapp.com/places",
    github_url: "https://github.com/yassineoo/Admin-RehLaty-Web-app",
    category: ["django", "react"],
    description:
      "admin web site for e-tourisme in algeria",
    key_techs: ["React", "Django", "Django REST API"],
  },

  {

    id:6,
    name: "hackadon",
    image_path: "/images/hackadon.png",
    deployed_url: "https://hackadon.herokuapp.com/",
    github_url: "https://github.com/yassineoo/Hckadon-esms2",
    category: ["express"],
    description:
      "event website for a charity hackathon with Cse clube ",
    key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
  },
 /* {
    id:7,
    name: "YouTube using YouTube ",
    image_path: "/images/youtubeClone.png",
    deployed_url: "https://not-utube.web.app/",
    github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
    category: ["express"],
    description:
      'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
    key_techs: [
      "React",
      "Redux",
      "Firebase Auth",
      "YouTube API",
      "Sass",
      "Bootstrap",
    ],
  },
  {
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