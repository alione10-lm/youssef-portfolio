import { motion } from "motion/react";
import { variants } from "../services/config";
import { NavLink, Outlet } from "react-router-dom";
import { LuLanguages, LuPersonStanding, LuWrench } from "react-icons/lu";
import { GiSchoolBag } from "react-icons/gi";

function Skills() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="skills_navigation flex flex-col  items-start w-full pt-16 md:pt-20 "
    >
      <div className="flex items-center gap-5 text-xm md:text-lg text-slate-400">
        <NavLink
          className="text-xs pb-2 flex-col md:flex-row md:text-[1rem] flex gap-1 items-center"
          to="personal"
        >
          <LuPersonStanding />
          Peronal
        </NavLink>
        <NavLink
          className="text-xs pb-2 flex-col md:flex-row md:text-[1rem] flex items-center gap-1 md:gap-2"
          to="technical"
        >
          <LuWrench />
          technical
        </NavLink>
        <NavLink
          to="professional"
          className="text-xs pb-2 flex-col md:flex-row md:text-[1rem] flex items-center gap-1"
        >
          <GiSchoolBag />
          Professional
        </NavLink>
        <NavLink
          to="languages"
          className="text-xs pb-2 flex-col md:flex-row md:text-[1rem] flex items-center gap-1"
        >
          <LuLanguages />
          Languages
        </NavLink>
      </div>
      <div className="py-2 md:p-10 overflow-scroll max-h-[70vh]  w-full min-h-[10rem]">
        <Outlet />
      </div>
    </motion.section>
  );
}

function StyledNavLink({ children }) {
  return (
    <NavLink className="flex items-center gap-0 md:gap-1 text-sx md:text-sm">
      {children}
    </NavLink>
  );
}
export default Skills;
