import { motion } from "framer-motion";

const skills = [
  "React",
  "JavaScript",
  "Redux",
  "Node.js",
  "MSSQL",
  "C++",
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 text-center">
      
      <h2 className="text-4xl font-bold mb-10">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            className="p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/10"
          >
            {skill}
          </motion.div>
        ))}
      </div>

    </section>
  );
}