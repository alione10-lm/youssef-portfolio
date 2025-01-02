import { motion } from "motion/react";
import { variants } from "../services/config";
import { Link, NavLink, Outlet } from "react-router-dom";
import { LuPersonStanding, LuWrench } from "react-icons/lu";
import { GiSchoolBag } from "react-icons/gi";

function Skills() {
  return (
    <div className="skills_navigation flex flex-col items-start w-full pt-10  md:pt-20 ">
      <div className="flex items-center gap-5  text-sm md:text-lg text-slate-400">
        <NavLink className="flex gap-1 items-center" to="personal">
          <LuPersonStanding />
          Peronal
        </NavLink>
        <NavLink className="flex items-center gap-1 md:gap-2" to="technical">
          <LuWrench />
          technical
        </NavLink>
        <NavLink to="professional" className="flex items-center gap-1">
          <GiSchoolBag />
          Professional
        </NavLink>
        <NavLink to="languages">Languages</NavLink>
      </div>
      <div className="p-5  w-full min-h-[10rem]">
        <Outlet />
      </div>
    </div>
    // <motion.section
    //   initial="hidden"
    //   animate="visible"
    //   variants={variants}
    //   transition={{ duration: 0.8, ease: "easeInOut" }}
    //   className="w-full  bg-slate-100   grid gap-4 grid-cols-2"
    // >
    //   <Title>Professional</Title>
    //   <Content>
    //     <p>
    //       MATLAB, Python, Origin, Aspen Plus and HYSYS, COMSOL Multiphysics,
    //       Gaussian
    //     </p>
    //     <p>Ms Office: Excel, Word, PowerPoint</p>
    //     <p>Adobe: Photoshop, Illustrator</p>
    //   </Content>
    //   <Content>
    //     Management <br /> Leadership <br /> Realiability <br /> Creativity
    //   </Content>
    //   <Title>Personal</Title>
    //   <Title>languages</Title>
    //   <Content>
    //     Arabic: Native <br />
    //     French: Advanced (C1) <br />
    //     English: Professional (B2) <br />
    //   </Content>
    //   <Content>content</Content>
    //   <Title>title</Title>
    // </motion.section>
  );
}

function Title({ children }) {
  return <p className="w-full h-full uppercase text-center   ">{children}</p>;
}
function Content({ children }) {
  return <div className="bg-blue-200 w-full h-full ">{children}</div>;
}

export default Skills;
