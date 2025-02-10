import { motion } from "motion/react";
import { variants } from "../../services/config";
import { LuCheck } from "react-icons/lu";

const items = [
  "Aspen Plus and HYSYS, OpenLCA, MATLAB, Origin Pro, Python, COMSOL and Multiphysics Gaussian",
  " Ms Office: Excel, Word, PowerPoint",
  "Adobe: Photoshop, Illustrator",
];
function Professional() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1, ease: "easeInOut" }}
      className=""
    >
      <ul>
        {items.map((el, ndx) => (
          <li
            className="text-slate-700 font-medium flex items-center gap-1 mb-2 md:gap-3 md:text-lg text-[0.8rem] "
            key={ndx}
          >
            <div>
              <LuCheck className="" color="#2563eb" />
            </div>
            <span>{el}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default Professional;
