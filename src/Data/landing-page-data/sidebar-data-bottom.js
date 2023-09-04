import { RiSettings5Fill } from "react-icons/ri";

import { BsDiscord, BsFillCollectionPlayFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";

const sideBarOptionBottom = [
  {
    name: "Saved",
    path: "/",
    icon: BsFillCollectionPlayFill,
  },
  {
    name: "Calender",
    path: "/",
    icon: SlCalender,
  },
  {
    name: "Profile",
    path: "/",
    icon: CgProfile,
  },
  {
    name: "Settings",
    path: "/",
    icon: RiSettings5Fill,
  },
  {
    name: "Discord",
    path: "/",
    icon: BsDiscord,
  },
  {
    name: "Logout",
    path: "/",
    icon: FiLogOut,
  },
];

export default sideBarOptionBottom;
