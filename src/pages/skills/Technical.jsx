import { motion } from "motion/react";
import { variants } from "../../services/config";
import { LuCheck } from "react-icons/lu";

const items = [
  {
    title: "Process Engineering:",
    content: [
      "Process Modeling and Simulation",
      "Study, Sizing, and Performance Improvement of Industrial Processes",
      "Unit Operations, Chemical Reactor, Heat Transfer, Matter, Energy, and Motion",
      "Fluid Mechanics, Rheology of Complex Fluids, Physical and Chemical Thermodynamics",
    ],
  },
  {
    title: "Polymers, Formulation, and IndustrialChemistry :",
    content: [
      "Polymers, Macromolecular and Organic Synthesis,Adhesives,Packaging, Paints, Varnishes",
      "Formulation of Polymers",
      "Materials, Electrochemistry, Corrosion and Surface Treatment",
      "Management of Quality",
      "Analytical Methods (UV-Visible, IR,NMR, XRD, X-rays, etc.)",
    ],
  },
];

function Technical() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10"
    >
      {items.map((el, ndx) => (
        <Item key={ndx} ndx={ndx} title={el.title} content={el.content} />
      ))}
    </motion.div>
  );
}
function Item({ title, content }) {
  return (
    <div className="">
      <p className="font-semibold mb-2 md:mb-4 text-sm md:text-[1rem] text-blue-700">
        {title}
      </p>
      <ul className="flex divide-y  flex-col  items-start  ">
        {content.map((el, ndx) => (
          <li key={ndx} className=" py-2 text-slate-700 text-xs md:text-[1rem]">
            {el}.
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Technical;
