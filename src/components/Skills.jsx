import { motion } from "framer-motion";

const skills = [
  "React.js",
  "JavaScript (ES6+)",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Git & GitHub",
  "REST APIs",
  "Responsive Design",
];

const Skills = ({ darkMode }) => {
  return (
    <section
      id="skills"
      className={`py-24 px-6 ${
        darkMode ? "bg-gray-900 text-white" : "bg-orange-50 text-gray-900"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12"
        >
          Skills<span className="text-orange-500">.</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ scale: 1.05 }}
              className={`p-4 rounded-xl text-center font-semibold shadow-md ${
                darkMode
                  ? "bg-gray-800 text-gray-200"
                  : "bg-white text-gray-800"
              }`}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
