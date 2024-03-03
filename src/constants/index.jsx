import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm, FiSettings, FiHelpCircle } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";

export const categories = [
  {
    name: "Home",
    icon: <AiFillHome />,
    type: "home",
  },
  {
    name: "Trend",
    icon: <MdLocalFireDepartment />,
    type: "trending",
  },
  {
    name: "Music",
    icon: <CgMusicNote />,
    type: "category",
  },
  {
    name: "Movies",
    icon: <FiFilm />,
    type: "category",
  },
  {
    name: "Live",
    icon: <MdLiveTv />,
    type: "category",
  },
  {
    name: "Game",
    icon: <IoGameControllerSharp />,
    type: "category",
  },
  {
    name: "News",
    icon: <ImNewspaper />,
    type: "category",
  },
  {
    name: "Sports",
    icon: <GiDiamondTrophy />,
    type: "home",
  },
  {
    name: "Education",
    icon: <RiLightbulbLine />,
    type: "home",
  },
  {
    name: "Fashion & Beauty",
    icon: <GiEclipse />,
    type: "home",
    divider: true,
  },
  {
    name: "Settings",
    icon: <FiSettings />,
    type: "menu",
  },
  {
    name: "Report History",
    icon: <AiOutlineFlag />,
    type: "menu",
  },
  {
    name: "Help",
    icon: <FiHelpCircle />,
    type: "menu",
  },
  {
    name: "Send Feedback",
    icon: <RiFeedbackLine />,
    type: "menu",
  },
];
