import { motion } from "motion/react";
import { variants, variantsLeft } from "../../services/config";

const items = ["Management", "Leadership", "Realiability", "Creativity"];
function Personal() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variantsLeft}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <ul className="">
        {items.map((el, ndx) => (
          <li className="text-blue-400" key={ndx}>
            {el}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default Personal;
