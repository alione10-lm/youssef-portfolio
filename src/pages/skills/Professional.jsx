import { motion } from "motion/react";
import { variants } from "../../services/config";
import { LuCheck } from "react-icons/lu";

const items = [
  " Python,MATLAB, Origin, Aspen Plus and HYSYS, COMSOL Multiphysics Gaussian",
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
            className="text-slate-700 flex items-center gap-1 md:gap-3 md:text-lg text-[0.8rem] "
            key={ndx}
          >
            <LuCheck color="#2563eb" />
            <span>{el}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default Professional;
