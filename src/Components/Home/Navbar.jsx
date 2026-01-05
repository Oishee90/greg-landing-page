import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { CgArrowTopRightR } from "react-icons/cg";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { name: "Home", id: "home" },
  { name: "Features", id: "features" },
  { name: "Challenges", id: "review" },
  { name: "Leaderboard", id: "leaderboard" },
  { name: "FAQ", id: "faq" },
  { name: "About", id: "about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);

      menuItems.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300  urbanist
        ${
          isScrolled
            ? "backdrop-blur-xl bg-[#0B0F1A]/70 border-b border-white/10"
            : "bg-[#2B2B2B66]"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 mx-auto lg:px-16 ">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" />
          </div>

          {/* Desktop Menu */}
          <ul className="items-center hidden gap-8 text-base lg:flex text-white/80">
            {menuItems.map(({ name, id }) => (
              <li key={id}>
                <button
                  onClick={() => handleScroll(id)}
                  className={`relative transition-all duration-300
                    ${
                      activeSection === id
                        ? "text-[#FFFFFF] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-purple-500 font-medium"
                        : "hover:text-[#FFFFFF]"
                    }`}
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>

          {/* Download Button */}
          <div className="hidden lg:block">
            <button className="flex items-center gap-2 px-5 py-2 text-base font-medium text-white transition-all duration-300 rounded-full group bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105">
              Download
              <span className="relative w-4 h-4">
                <CgArrowTopRightR className="absolute inset-0 transition-opacity opacity-100 group-hover:opacity-0" />
                <BsArrowRight className="absolute inset-0 transition-opacity opacity-0 group-hover:opacity-100" />
              </span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="text-white lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="lg:hidden fixed top-[72px] left-0 w-full z-40 px-4 mt-7">
          <div className="bg-[#0F1224] rounded-2xl p-6 shadow-xl">
            <ul className="flex flex-col gap-4 text-white">
              {menuItems.map(({ name, id }) => (
                <li key={id}>
                  <button
                    onClick={() => handleScroll(id)}
                    className={` text-left px-3 py-2 rounded-lg
                    ${
                      activeSection === id
                        ? "bg-purple-600 text-white"
                        : "hover:bg-white/10"
                    }`}
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>

            <button className="flex items-center justify-center gap-2 px-6 py-3 mt-6 font-medium text-white rounded-full bg-gradient-to-r from-purple-600 to-blue-600">
              Download
              <BsArrowRight />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
