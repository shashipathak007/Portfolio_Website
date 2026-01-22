import { motion } from "framer-motion";

const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`py-24 px-6 ${
        darkMode ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-8"
        >
          About Me<span className="text-orange-500">.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`leading-relaxed max-w-3xl ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          I’m a Computer Engineering graduate and Frontend Developer specializing
          in building responsive, high-performance web applications using React,
          Tailwind CSS, and modern JavaScript. I enjoy turning complex problems
          into clean, user-friendly interfaces and continuously improving UI/UX
          through performance optimization and best practices.
        </motion.p>
      </div>
    </section>
  );
};

export default About;