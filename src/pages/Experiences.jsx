import { motion } from "motion/react";
import { variants } from "../services/config";
import { LuCheck, LuLocate, LuLocateOff } from "react-icons/lu";

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
    local: "Cosumar, Oulad Ayad",
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
    projectTile: "Modeling a Continuous Distillation Process ",
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
      className="grid grid-cols-1 py-10  md:pt-20 gap-4 md:grid-cols-2 w-full "
    >
      {data.map((el, ndx) => (
        <div
          className="md:p-4  flex flex-col md:border-l border-b  items-start gap-4 cursor-pointer hover:bg-transparent transition-all duration-200"
          key={ndx}
        >
          <div className="font-medium text-blue-700 text-sm md:text-lg">
            <span className="">{el.projectTile} </span>(<span>{el.title}</span>)
            , {el.duration} .
          </div>
          <span className="text-slate-900">{el.local} .</span>
          <ul className="flex flex-col gap-1">
            {el.goals.map((goal) => (
              <li key={ndx} className="text-slate-600">
                <span>{goal}.</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </motion.section>
  );
}

export default Experiences;
