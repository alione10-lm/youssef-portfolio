import { motion } from "motion/react";
import { variants } from "../services/config";

function Experiences() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="w-full flex flex-col-reverse md:flex-row gap-5 py-10 md:px-10  items-center justify-between "
    >
      Experiences
    </motion.section>
  );
}

export default Experiences;
