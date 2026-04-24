import { motion } from "framer-motion";
import Image from "../assets/Image.jpeg";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 md:px-20">
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
            <span className="text-pink-300 font-semibold">build & design</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-gray-400 max-w-md"
          >
            React Developer with internship experience, building clean, scalable
            and user-friendly web applications. Passionate about solving
            real-world problems.
          </motion.p>
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
            className="w-[320px] h-[320px] md:w-[360px] md:h-[360px] object-cover object-top rounded-full border-4 border-white/20 shadow-xlhover:scale-105 transition duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
}
