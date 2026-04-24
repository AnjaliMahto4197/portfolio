import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section    id="contact" className="py-24 px-6 bg-[#0f172a] text-white text-center">
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-serif mb-4"
        >
          Let’s Connect!
        </motion.h2>

        {/* Subtitle */}
        <p className="text-gray-400 mb-8 text-lg">
          Feel free to get in touch for collaborations or just to say hello.
        </p>

        {/* Email */}
        <motion.a
          href="mailto:anjaliku7947@gmail.com"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex items-center justify-center gap-3 text-orange-400 hover:text-orange-300 transition text-lg mb-8"
        >
          <Mail size={20} />
          anjaliku7947@gmail.com
        </motion.a>

        {/* Social Icons */}
        <div className="flex justify-center gap-8">

          {/* Instagram */}
          <a
            href="https://www.instagram.com/i_t_s_m_a_s_t_e_r"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-pink-500 transition"
          >
            <FaInstagram size={28} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/anjali-mahto-b532b62a4"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-blue-500 transition"
          >
            <FaLinkedin size={28} />
          </a>

        </div>

      </div>
    </section>
  );
}