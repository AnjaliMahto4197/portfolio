import { motion } from "framer-motion";
import { Code2, Database, Wrench, BrainCircuit } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-[#0f172a] text-white"
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-semibold mb-4"
        >
          About Me
        </motion.h2>

        {/* Subtitle */}
        <p className="text-gray-400 mb-12 text-sm tracking-wide">
          React Developer • Problem Solver • Continuous Learner
        </p>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto text-gray-300 leading-relaxed text-lg"
        >
          <p>
            I am a dedicated <span className="text-white font-medium">React Developer</span> 
            currently pursuing my Bachelor of Computer Applications, with hands-on 
            internship experience in developing scalable and user-focused web applications.
          </p>

          <p className="mt-4">
            I specialize in modern frontend technologies including 
            <span className="text-white font-medium"> ReactJS, Material UI, and Redux</span>, 
            along with a strong programming foundation in C, C++, Java, and Python.
          </p>

          <p className="mt-4">
            Currently, I am working on a 
            <span className="text-white font-medium"> real-world project</span>, 
            where I focus on building clean UI architecture, optimizing performance, 
            and implementing maintainable code practices.
          </p>

          <p className="mt-4">
            I have also contributed to a research project on 
            <span className="text-white font-medium"> hand gesture recognition</span>, 
            exploring machine learning approaches and real-world applications.
          </p>
        </motion.div>

  

      </div>
    </section>
  );
}