import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const lightColors = {
    navBg: "bg-gradient-to-br from-orange-200 to-white",
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-800",
    textHover: "hover:text-orange-500",
    textActive: "text-orange-600",
    button: "from-orange-500 to-amber-500",
  };

  const darkColors = {
    navBg: "bg-gradient-to-br from-gray-800 to-black",
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    textHover: "hover:text-orange-400",
    textActive: "text-orange-400",
    button: "from-orange-500 to-amber-500",
  };

  const colors = darkMode ? darkColors : lightColors;

  const handleNavClick = (name) => {
    setActiveSection(name.toLowerCase());
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center mt-4">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`${colors.navBg} backdrop-blur-lg rounded-2xl px-6 lg:px-10 py-3 shadow-lg w-[90%] max-w-6xl`}
      >
        <div className="flex items-center justify-between">

          {/* Logo */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            className={`text-xl font-bold ${colors.textPrimary}`}
          >
            Portfolio<span className="text-orange-500">.</span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => handleNavClick(item.name)}
                className="relative"
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className={`font-medium transition-colors ${
                    activeSection === item.name.toLowerCase()
                      ? colors.textActive
                      : colors.textSecondary
                  } ${colors.textHover}`}
                >
                  {item.name}
                </motion.span>

                {activeSection === item.name.toLowerCase() && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"
                  />
                )}
              </a>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center space-x-3">

            {/* Dark Mode */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              }`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </motion.button>

            {/* Hire Me */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`hidden lg:block px-6 py-2 font-semibold rounded-full bg-gradient-to-r ${colors.button} text-white shadow-md`}
            >
              Hire Me
            </motion.a>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg ${
                  darkMode ? "bg-gray-700" : "bg-gray-200"
                }`}
              >
                {isMenuOpen ? (
                  <X className={`w-5 h-5 ${colors.textPrimary}`} />
                ) : (
                  <Menu className={`w-5 h-5 ${colors.textPrimary}`} />
                )}
              </motion.button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 space-y-4"
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={() => handleNavClick(item.name)}
                  className={`block text-center font-medium ${
                    activeSection === item.name.toLowerCase()
                      ? colors.textActive
                      : colors.textSecondary
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </motion.nav>
    </div>
  );
};

export default Navbar;
