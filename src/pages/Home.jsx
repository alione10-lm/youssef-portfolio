import { BiPhone } from "react-icons/bi";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Home() {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row gap-5 py-10 md:px-10  items-center justify-between ">
      <div className="flex flex-col gap-2 items-center md:items-start py-2">
        <h1 className="text-slate-800 text-xl md:text-2xl mb-5 font-semibold">
          Welcome to the PhD student
          <span className="text-blue-500 font-bold ">
            ,Youssef Aitnaceur 👋
          </span>
        </h1>
        <p className="text-slate-700 text-sm  md:text-lg">
          PhD student /Department of chemistry /Laboratory of Chemical Processes
          and Applied Materials (LCPAM)
        </p>
        <p className="text-slate-600 text-xs md:text-sm">
          From Polydisciplinary Faculty , Sultan Moulay Slimane University ,
          Beni Mellal .
        </p>
        <div className="flex gap-4 mt-10 ">
          <a href="">
            <FaFacebook size={27} />
          </a>
          <a href="">
            <FaLinkedin size={27} />
          </a>
          <a href="">
            <MdEmail size={27} />
          </a>
          <a href="">
            <BiPhone size={27} />
          </a>
        </div>
      </div>
      <img className="w-[20rem] md:w-[30rem] rounded-full" src="/u.jpeg" />
    </div>
  );
}

export default Home;
