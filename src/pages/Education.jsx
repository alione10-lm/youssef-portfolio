import { motion } from "motion/react";
import { variants } from "../services/config";

function Education() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="grid grid-cols-1 gap-4 md:gap-12 md:grid-cols-2 py-10 md:py-20 md:px-16"
    >
      <Item>
        <Heading>
          <p className="text-blue-700 font-semibold">
            Faculty of Sciences and Techniques of Beni Mellal
          </p>
          <Label>2022-2024</Label>
        </Heading>
        <p className="text-slate-600 text-sm md:text-lg">
          Master's Degree in Organic Materials, Polymers, and Formulation
          Engineering
        </p>
      </Item>
      <Item>
        <Heading>
          <p className="text-blue-700 font-semibold">
            Faculty of Sciences and Techniques of Beni Mellal
          </p>
          <Label>2021-2022</Label>
        </Heading>
        <p className="text-slate-600 text-sm md:text-lg">
          Bachelor's Degree in Chemical Engineering of Materials
        </p>
      </Item>
      <Item>
        <Heading>
          <p className="text-blue-700 font-semibold">
            Casablanca Higher School of Technology
          </p>
          <Label>2019-2021</Label>
        </Heading>
        <p className="text-slate-600 text-sm md:text-lg">
          University Diploma in Technology in Process Engineering
        </p>
      </Item>
      <Item>
        <Heading>
          <p className="text-blue-700 font-semibold">
            Hight school Moulay Rachid in Kasba Tadla
          </p>
          <Label>2015-2018</Label>
        </Heading>
        <p className="text-slate-600 text-sm md:text-lg">
          Baccalaureate in Mathematical Sciences A
        </p>
      </Item>
    </motion.section>
  );
}
function Item({ children }) {
  return (
    <div className="border  flex flex-col text-slate-600 p-4 cursor-pointer hover:bg-blue-50 transition-all duration-200  rounded-xl text-sm md:text-lg border-blue-700">
      {children}
    </div>
  );
}
function Label({ children }) {
  return (
    <span className="italic  text-xs text-blue-500 bg-blue-100  w-fit p-1 rounded-md ">
      {children}
    </span>
  );
}
function Heading({ children }) {
  return <div className=" mb-4 flex flex-col gap-2 w-full ">{children}</div>;
}

export default Education;
