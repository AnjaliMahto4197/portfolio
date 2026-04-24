import { motion } from "framer-motion";
import { Code2, BrainCircuit, Database, Wrench } from "lucide-react";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-[#0f172a] text-white"
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-semibold mb-4"
        >
          Skills
        </motion.h2>

        {/* Subtitle */}
        <p className="text-gray-400 mb-12 text-sm tracking-wide">
          Technologies & Tools I Work With
        </p>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-4 gap-6">

          {/* Programming */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-[#1e293b] p-6 rounded-xl border border-gray-700 hover:border-gray-500 transition"
          >
            <Code2 className="mx-auto mb-4 text-blue-400" size={28} />
            <h3 className="font-medium text-lg">Programming</h3>
            <p className="text-sm text-gray-400 mt-2">
              C, C++, Java, Python
            </p>
          </motion.div>

          {/* Frontend */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-[#1e293b] p-6 rounded-xl border border-gray-700 hover:border-gray-500 transition"
          >
            <BrainCircuit className="mx-auto mb-4 text-purple-400" size={28} />
            <h3 className="font-medium text-lg">Frontend</h3>
            <p className="text-sm text-gray-400 mt-2">
              ReactJS, Material UI, Redux
            </p>
          </motion.div>

          {/* Database */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-[#1e293b] p-6 rounded-xl border border-gray-700 hover:border-gray-500 transition"
          >
            <Database className="mx-auto mb-4 text-green-400" size={28} />
            <h3 className="font-medium text-lg">Database</h3>
            <p className="text-sm text-gray-400 mt-2">
              MS SQL, PostgreSQL, Data Handling
            </p>
          </motion.div>

          {/* Tools */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-[#1e293b] p-6 rounded-xl border border-gray-700 hover:border-gray-500 transition"
          >
            <Wrench className="mx-auto mb-4 text-orange-400" size={28} />
            <h3 className="font-medium text-lg">Tools</h3>
            <p className="text-sm text-gray-400 mt-2">
              Git, Docker, Postman, Figma, VS Code, Jenkins, Linux, ClickUp, Overleaf
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}