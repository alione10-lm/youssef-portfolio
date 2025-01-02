import { motion } from "motion/react";
import { variants } from "../services/config";
import { LuLocate, LuLocateOff } from "react-icons/lu";

const data = [
  {
    title: "DUT Project",
    duration: "6 Months",
    local: "Casablanca Higher School of Technology",
    projectTile:
      "Simulation and optimization of a Binary Mixture Distillation Column using McCabe and Thiele's Graphical and Numerical Methods",
    goals: [
      " Studied the characteristics of binary mixtures",
      "Analyzed a binary mixture distillation column using graphical and numerical methods with MATLAB",
    ],
  },
  {
    title: "DUT Internship",
    duration: "2 Months",
    local: "COSUMAR, OULAD AYAD",
    projectTile:
      "Implementation of Quality Approach and Process Control at PKF Station",
    goals: [
      " Studied the characteristics of all unit operations used in sugar processes",
      " Suggested a complete sugar process",
      "Disigned a lab-scale filtration process",
    ],
  },
  {
    title: "LST Project",
    duration: "3 Months",
    local: "Faculty of Sciences and techniques Beni Mellal",
    projectTile: "Modeling a Continuous Distillation Process ‘",
    goals: [
      "Studied the characteristics of continuous distillation",
      "Modeled a continuous distillation column with MATLAB",
    ],
  },
  {
    title: "MST Project ",
    duration: "6 Months",
    local:
      "Faculty of Sciences and techniques Beni Mellal and university autonomous of madrid",
    projectTile:
      "Introduction to the theoretical study of the reactivity of the Glycerol molecule",
    goals: [
      " Theoretical Approach to the Reactivity of Glycerol and Water",
      "Determining the chemical properties of both molecules using Gaussian 09",
      "Theoretical Structural and Spectroscopic Study of Glycerol and Water using the DFT Method",
    ],
  },
];

function Experiences() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="grid grid-cols-1 py-10 md:py-20   md:grid-cols-2 w-full gap-4"
    >
      {data.map((el, ndx) => (
        <div className="border md:p-3 p-1 rounded-md border-blue-400" key={ndx}>
          <div className="flex justify-between md:mb-3 mb-2 items-center">
            <p className="text-blue-700 font-medium">{el.title}</p>
            <p className="text-xs md:text-sm text-blue-700 bg-blue-100 rounded-md p-1">
              {el.duration}
            </p>
          </div>
          <p className="text-sx md:text-sm text-slate-500 ">{el.local}</p>
          <p className="text-slate-800">{el.projectTile}</p>
          <ul className="list-disc ">
            {el.goals.map((goal) => (
              <li key={ndx} className="text-xs">
                {goal}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </motion.section>
  );
}

export default Experiences;
