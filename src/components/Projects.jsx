import { motion } from "framer-motion";

const projects = [
  {
    title: "ShopMe – E-commerce App",
    desc: "React-based e-commerce platform with filtering, cart, and API integration.",
    link: "https://shopmeecommerce.netlify.app/",
  },
  {
    title: "Mind and Brain",
    desc: "Mental health counseling platform with responsive UI and smooth UX.",
    link: "https://mindandbrain.netlify.app/",
  },
  {
    title: "Genvest Ventures",
    desc: "Corporate website with SEO optimization and modern UI.",
    link: "https://genvestpvtltd.netlify.app/",
  },
];

const Projects = ({ darkMode }) => {
  return (
    <section
      id="projects"
      className={`py-24 px-6 ${
        darkMode ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Projects<span className="text-orange-500">.</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              whileHover={{ y: -8 }}
              className={`p-6 rounded-2xl shadow-lg ${
                darkMode ? "bg-gray-900" : "bg-orange-50"
              }`}
            >
              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>
              <p
                className={`text-sm ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {project.desc}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
