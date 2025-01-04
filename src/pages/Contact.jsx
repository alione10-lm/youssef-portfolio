import { motion } from "motion/react";
import { LuSend } from "react-icons/lu";
import { variants } from "../services/config";
import toast from "react-hot-toast";
import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    reset,
    formState: { isSubmitting },
    register,
    handleSubmit,
  } = useForm();

  function sendEmail(data) {
    setIsLoading(true);
    const templateParams = {
      from_email: data.email,
      from_name: `${data.firstName} ${data.lastName}`,
      message: data.message,
    };

    emailjs
      .send(
        "oussama_10",
        "template_sz4mrnr",
        templateParams,
        "uf3cFIi9qU3Ke4C5O"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsLoading(false);
          toast.success(`thanks for your message,${data.firstName}`);
          reset();
          // Handle success (e.g., show a success message)
        },
        (error) => {
          console.error(error.text);
        }
      );
  }

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="h-full w-full py-10 md:pt-20"
    >
      <div>
        <h1 className="text-center md:mb-6 mb-4 font-semibold text-blue-600 md:text-xl text-sm">
          Get in touch
        </h1>
        <div className="grid md:grid-cols-2  md:place-items-center md:gap-4  gap-3  grid-cols-1 w-full ">
          <img
            className="rounded-md"
            // src="https://images.pexels.com/photos/955395/pexels-photo-955395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            src="/contact.webp"
          />
          <form className="" onSubmit={handleSubmit(sendEmail)}>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  className="block transition-all w-full duration-200 px-5 py-3 rounded-lg border-none bg-slate-100 focus:ring focus:ring-blue-700 focus:outline-none focus:ring-offset-2 text-slate-800"
                  placeholder="First name"
                  required
                  {...register("firstName")}
                />
                {/* <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="First name"
                  required
                  {...register("firstName")}
                /> */}
                {/* <label
                  htmlFor="floating_first_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First name
                </label> */}
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_last_name"
                  id="floating_last_name"
                  // className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  className="block transition-all w-full duration-200 px-5 py-3 rounded-lg border-none bg-slate-100 focus:ring focus:ring-blue-700 focus:outline-none focus:ring-offset-2 text-slate-800"
                  placeholder="Last name "
                  required
                  {...register("lastName")}
                />
                {/* <label
                  htmlFor="floating_last_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Last name
                </label> */}
              </div>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block transition-all w-full duration-200 px-5 py-3 rounded-lg border-none bg-slate-100 focus:ring focus:ring-blue-700 focus:outline-none focus:ring-offset-2 text-slate-800"
                placeholder="Email address"
                required
                {...register("email")}
              />
              {/* <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label> */}
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <textarea
                className="block transition-all w-full duration-200 px-5 py-3 rounded-lg border-none bg-slate-100 focus:ring focus:ring-blue-700 focus:outline-none focus:ring-offset-2 text-slate-800"
                required
                placeholder="Message"
                {...register("message")}
              />
              {/* <label
                htmlFor="floating_repeat_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Message
              </label> */}
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="text-white disabled:cursor-not-allowed flex items-center justify-center gap-2  bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {isLoading ? (
                <>sending . . .</>
              ) : (
                <>
                  send
                  <LuSend />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
