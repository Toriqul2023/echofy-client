import Image from "next/image";
import Topbar from "./Components/Topbar/Topbar";
import Navbar from "./Components/Navbar/Navbar";
import Mainbar from "./Components/Mainbar/Mainbar";
import FrontAbout from "./Components/FrontAbout/FrontAbout";

import FrontServices from "./Components/FrontServices/FrontServices";
import FrontSkills from "./Components/FrontSkills/FrontSkills";

export default function Home() {
  return (
   <>
      <Mainbar/>
      <FrontAbout/>
      <FrontServices/>
      <FrontSkills/>
   </>
  );
}
