import { motion } from "motion/react";
import { variants } from "../../services/config";

const langauges = [
  { lang: "Arabic", level: "Native" },
  { lang: "French", level: "Advanced (C1)" },
  { lang: "English", level: " Professional(B2)" },
];

function Languages() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className=""
    >
      {langauges.map((el, ndx) => (
        <div key={ndx} className="flex text-sm md:text-lg items-center">
          <p className=" font-medium text-slate-700">{el.lang} : </p>
          <p className="text-blue-700">{el.level}</p>
        </div>
      ))}
    </motion.section>
  );
}

export default Languages;
