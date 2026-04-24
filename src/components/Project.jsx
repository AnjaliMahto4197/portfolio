import { motion } from "framer-motion";
import { FolderKanban, Code2, Laptop } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-semibold mb-4"
        >
          Projects
        </motion.h2>

        <p className="text-gray-400 mb-12 text-sm tracking-wide">
          Some of the work I’ve built and contributed to
        </p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* ERP Project */}
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            className="bg-[#1e293b] p-6 rounded-xl border border-gray-700 hover:border-gray-500 transition text-left"
          >
            <FolderKanban className="text-blue-400 mb-4" size={30} />
            <h3 className="text-lg font-semibold">ERP System (Real Project)</h3>
            <p className="text-sm text-gray-400 mt-2 leading-relaxed">
              Developed and contributed to a real-world ERP-based system for managing 
              student data, courses, and administrative workflows. Focused on building 
              scalable UI components, API integration, and improving user experience.
            </p>

            <p className="text-xs text-gray-500 mt-4">
              React • Redux • Material UI • MSSQL
            </p>
          </motion.div>

          {/* Current Project */}
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            className="bg-[#1e293b] p-6 rounded-xl border border-gray-700 hover:border-gray-500 transition text-left"
          >
            <Laptop className="text-green-400 mb-4" size={30} />
            <h3 className="text-lg font-semibold">Ongoing Project</h3>
            <p className="text-sm text-gray-400 mt-2 leading-relaxed">
              Currently working on a real-world application, focusing on performance 
              optimization, clean architecture, and scalable frontend development 
              using modern React practices.
            </p>

            <p className="text-xs text-gray-500 mt-4">
              React • API Integration • UI Optimization
            </p>
          </motion.div>

          {/* Notepad Project */}
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            className="bg-[#1e293b] p-6 rounded-xl border border-gray-700 hover:border-gray-500 transition text-left"
          >
            <Code2 className="text-purple-400 mb-4" size={30} />
            <h3 className="text-lg font-semibold">Notepad Application</h3>
            <p className="text-sm text-gray-400 mt-2 leading-relaxed">
              Built a responsive note-taking application with CRUD functionality, 
              allowing users to create, edit, and delete notes efficiently with 
              a clean and intuitive UI.
            </p>

            <p className="text-xs text-gray-500 mt-4">
              React • Local Storage • UI Design
            </p>
          </motion.div>

        </div>

        {/* Extra Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 text-gray-400 text-sm"
        >
          + Built several smaller projects focusing on UI design, API handling, 
          and frontend development to strengthen practical skills.
        </motion.div>

      </div>
    </section>
  );
}