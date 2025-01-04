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
      className="w-full flex flex-col-reverse md:flex-row gap-5 pt-10 md:pt-16 md:px-10  items-start justify-between "
    >
      <div className="flex flex-col gap-2  md:items-start py-2">
        <h1 className="text-slate-800 text-xl md:text-2xl mb-2 font-semibold">
          I'm
          <span className="text-blue-600 font-bold "> Youssef Aitnaceur</span>
        </h1>
        <p className="text-sm md:text-lg text-slate-600">
          As a student specializing in Organic Materials, Polymers, and
          Formulation Engineering, combined with my expertise in Process
          Engineering, I have developed a versatile skill set that bridges
          material science and industrial processes. I am adept at synthesizing
          macromolecules, analyzing complex processes, and designing and
          implementing experimental setups. My proficiency extends to modeling
          and optimizing industrial processes, utilizing tools such as Aspen
          Plus, MATLAB, COMSOL,and OpenLCA, to enhance efficiency and
          sustainability. I have a strong foundation in industrial management,
          understanding the thermal and mechanical properties of materials, and
          characterizing the thermodynamics of matter. This interdisciplinary
          expertise enables me to approach ambitious projects with a holistic
          perspective, fostering innovation and ensuring practical, scalable
          solutions. Motivated to excel, I am eager to contribute to projects
          that challenge me to grow personally and professionally while
          addressing real-world challenges.
        </p>

        <p className="text-slate-400 text-xs md:text-sm ">
          From Polydisciplinary Faculty , Sultan Moulay Slimane University ,
          Beni Mellal .
        </p>
        <div className="flex flex-col gap-2 md:mt-8 ">
          <div className="flex  items-center  text-xs md:text-sm gap-2 md:gap-3 cursor-pointer hover:text-blue-700 transition-all duration-200">
            <FaLinkedin size={20} />
            <a href="https://www.linkedin.com/in/youssef-aitnaceur-b61874209/">
              youssef-aitnaceur
            </a>
          </div>
          <div className="flex  items-center text-xs md:text-sm  gap-2 md:gap-3 cursor-pointer hover:text-blue-700 transition-all duration-200">
            <MdEmail size={20} />
            <a href="mailto:aitnaceuryoussef6@gmail.com">
              aitnaceuryoussef6@gmail.com
            </a>
          </div>
          <div className="flex  items-center  text-xs md:text-sm gap-2 md:gap-3 cursor-pointer hover:text-blue-700 transition-all duration-200">
            <BiPhone size={20} />
            <a href="tel:+1234567890">+212 6 90 86 17 83</a>
          </div>
        </div>
      </div>
      <img className="w-[20rem] md:w-[30rem] rounded-full" src="/u.jpeg" />
    </motion.section>
  );
}

export default Home;
