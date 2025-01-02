import { motion } from "motion/react";
import { variants, variantsLeft } from "../../services/config";
import { LuCheck } from "react-icons/lu";

const items = ["Management", "Leadership", "Realiability", "Creativity"];
function Personal() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <ul className="">
        {items.map((el, ndx) => (
          <li
            className="text-slate-700 flex md:text-lg items-center gap-1 md:gap-3 text-sm"
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

export default Personal;
