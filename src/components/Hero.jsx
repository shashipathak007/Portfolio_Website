import { motion } from "framer-motion";
import { ArrowDown, Download, Code, Cpu, Server } from "lucide-react";

const Hero = ({ darkMode }) => {
  return (
    <section
      id="home"
      className={`pt-16 sm:pt-20 min-h-[calc(100vh-4rem)] flex items-center justify-center px-6 ${
        darkMode
          ? "bg-linear-to-b from-black via-gray-900 to-black text-white"
          : "bg-linear-to-b from-white via-orange-50 to-white text-gray-900"
      }`}
    >
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-orange-500 font-semibold tracking-wide"
          >
            Hello, I’m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Shashi Shekhar <br />
            <span className="bg-linear-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Frontend Developer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className={`max-w-xl ${
              darkMode ? "text-gray-300" : "text-gray-600"
            } text-sm sm:text-base`}
          >
            Computer Engineering graduate passionate about building modern,
            high-performance web applications using React, Tailwind CSS, and
            clean UI/UX principles.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full bg-linear-to-r from-orange-500 to-amber-500 text-white font-semibold shadow-lg"
            >
              View Projects
            </motion.a>

            <motion.a
              href="/Shashi_Shekhar_Pathak_CV.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold flex items-center gap-2 ${
                darkMode
                  ? "border border-gray-700 text-gray-200 hover:bg-gray-800"
                  : "border border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Download size={18} /> Download CV
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT ANIMATION VISUAL */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center mt-12 lg:mt-0"
        >
          {/* Background blur circle */}
          <div className="absolute w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full bg-linear-to-br from-orange-500 to-amber-500 blur-3xl opacity-30" />

          {/* Floating tech icons */}
          <motion.div className="absolute w-full h-full top-0 left-0">
            {/* Code Icon */}
            <motion.div
              className="absolute top-0 left-1/2"
              animate={{ y: [-20, 20, -20], x: [-20, 20, -20] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <Code size={32} color="#f97316" />
            </motion.div>

            {/* CPU Icon */}
            <motion.div
              className="absolute bottom-0 right-1/3"
              animate={{ y: [20, -20, 20], x: [20, -20, 20] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <Cpu size={28} color="#facc15" />
            </motion.div>

            {/* Server Icon */}
            <motion.div
              className="absolute top-1/2 right-0"
              animate={{ y: [-10, 10, -10], x: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <Server size={28} color="#38bdf8" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 flex flex-col items-center text-orange-500"
      >
        <span className="text-xs sm:text-sm mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
