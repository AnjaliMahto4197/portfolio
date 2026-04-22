import { motion } from "framer-motion";
import Image from "../assets/Image.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 md:px-20"
    >
      <div className="grid md:grid-cols-2 gap-10 items-center w-full">

        {/* LEFT SIDE */}
        <div className="text-center md:text-left">

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif leading-tight"
          >
            Hi there, I'm <br />
            <span className="font-bold">Anjali!</span>
          </motion.h1>

          {/* Sub Heading */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl mt-4"
          >
            I love to{" "}
            <span className="text-pink-300 font-semibold">
              build & design
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-gray-400 max-w-md"
          >
            React Developer with internship experience, building clean,
            scalable and user-friendly web applications. Passionate about
            solving real-world problems.
          </motion.p>

          {/* EMAIL + SOCIAL */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-8 flex flex-col gap-4 items-center md:items-start"
          >
            {/* Email */}
            <a
              href="mailto:anjaliku7947@gmail.com"
              className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition text-sm"
            >
              {/* Mail Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>

              anjaliku7947@gmail.com
            </a>

            {/* Social Icons */}
            <div className="flex gap-5">

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/anjali-mahto-b532b62a4"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-blue-400 transition flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.06C12.66 9.1 14.1 8 16.2 8 21 8 22 11.1 22 15.2V24h-5v-7.9c0-1.88-.03-4.3-2.62-4.3-2.63 0-3.03 2.05-3.03 4.17V24H7.5V8z" />
                </svg>
                LinkedIn
              </a>

            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE (IMAGE) */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex justify-center"
        >
          <img
            src={Image}
            alt="Anjali"
            className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] object-cover rounded-full border-4 border-white/20 shadow-xl hover:scale-105 transition duration-300"
          />
        </motion.div>

      </div>
    </section>
  );
}