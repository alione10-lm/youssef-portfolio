import { motion } from "motion/react";
import { BiPhone } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { variants } from "../services/config";

function Home() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="w-full flex flex-col-reverse md:flex-row gap-5 py-10 md:px-10  items-center justify-between "
    >
      <div className="flex flex-col gap-2  md:items-start py-2">
        <h1 className="text-slate-800 text-xl md:text-2xl md:mb-5 mb-2 font-semibold">
          Welcome to the PhD student
          <span className="text-blue-600 font-bold ">
            ,Youssef Aitnaceur 👋
          </span>
        </h1>

        <p className="text-sm md:text-lg text-slate-600">
          As a student in Organic Materials, Polymers, and Formulation
          Engineering, I have developed skills to synthesize macromolecules,
          analyze processes, and implement experimental designs. I am also
          proficient in industrial management, understanding the thermal
          properties of materials, and characterizing the thermodynamics of
          matter. I am motivated to participate in ambitious projects that will
          allow me to grow both personally and professionally.
        </p>

        <p className="text-slate-400 text-xs md:text-sm ">
          From Polydisciplinary Faculty , Sultan Moulay Slimane University ,
          Beni Mellal .
        </p>
        <div className="flex flex-col gap-3 mt-4 md:mt-10 ">
          <div className="flex items-center  text-xs md:text-sm gap-2 md:gap-4 cursor-pointer hover:text-blue-700 transition-all duration-200">
            <FaLinkedin size={20} />
            <a href="https://www.linkedin.com/in/youssef-aitnaceur-b61874209/">
              linkedin.com/in/youssef-aitnaceur-b61874209
            </a>
          </div>
          <div className="flex items-center text-xs md:text-sm  gap-2 md:gap-4 cursor-pointer hover:text-blue-700 transition-all duration-200">
            <MdEmail size={20} />
            <span>aitnaceuryoussef6@gmail.com</span>
          </div>
          <div className="flex items-center  text-xs md:text-sm gap-2 md:gap-4 cursor-pointer hover:text-blue-700 transition-all duration-200">
            <BiPhone size={20} />
            <span>+212 6 90 86 17 83</span>
          </div>
        </div>
      </div>
      <img className="w-[20rem] md:w-[30rem] rounded-full" src="/u.jpeg" />
    </motion.section>
  );
}

export default Home;
