import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 text-center">
      
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-6"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-2xl mx-auto text-gray-400"
      >
        I am a passionate React Developer with hands-on internship experience,
        skilled in building scalable and user-friendly applications. I enjoy
        solving real-world problems and continuously improving my technical skills.
      </motion.p>

    </section>
  );
}