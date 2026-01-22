import { motion } from "framer-motion";

const Contact = ({ darkMode }) => {
  return (
    <section
      id="contact"
      className={`py-24 px-6 ${
        darkMode
          ? "bg-linear-to-b from-gray-900 to-black text-white"
          : "bg-linear-to-b from-orange-50 to-white text-gray-900"
      }`}
    >
      <div className="max-w-xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6"
        >
          Let’s Work Together<span className="text-orange-500">.</span>
        </motion.h2>

        <p className="mb-10">
          I’m open to frontend developer roles, freelance work, and collaboration
          opportunities.
        </p>

        <motion.a
          href="mailto:shashipathak446@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-4 rounded-full bg-linear-to-r from-orange-500 to-amber-500 text-white font-semibold shadow-lg"
        >
          Hire Me
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
