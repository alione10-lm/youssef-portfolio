import { motion } from "motion/react";
import { variants } from "../../services/config";
import { LuCheck } from "react-icons/lu";

const items = [
  "  MATLAB, Python, Origin, Aspen Plus and HYSYS, COMSOL Multiphysics Gaussian",
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
    >
      <ul>
        {items.map((el, ndx) => (
          <li
            className="text-slate-700 flex items-center gap-1 md:gap-3 md:text-lg text-sm font-medium"
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
