import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/10
"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        
        <h1 className="text-xl font-bold tracking-wide">
          Anjali M.K
        </h1>

        <div className="space-x-6 hidden md:block">
          <a href="#home" className="hover:text-blue-400">Home</a>
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>

      </div>
    </motion.nav>
  );
}