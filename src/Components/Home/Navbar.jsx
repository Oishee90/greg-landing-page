import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { CgArrowTopRightR } from "react-icons/cg";
import { BsArrowRight } from "react-icons/bs";
import { Link, useNavigate, useLocation } from "react-router-dom";

const menuItems = [
  { name: "Home", id: "home" },
  { name: "Features", id: "features" },
  { name: "Challenges", id: "challenges" },
  { name: "Leaderboard", id: "leadership" },
  { name: "FAQ", id: "faq" },
  { name: "About", id: "about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Scroll spy
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);

      menuItems.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Handle menu click
  const handleScroll = (id) => {
    setIsOpen(false);

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          isScrolled
            ? "backdrop-blur-xl bg-[#0B0F1A]/70 border-b border-white/10"
            : "bg-[#2B2B2B66]"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 mx-auto lg:px-16">
          {/* Logo */}
          <img src={logo} alt="logo" />

          {/* Desktop Menu */}
          <ul className="hidden gap-8 lg:flex text-white/80">
            {menuItems.map(({ name, id }) => (
              <li key={id}>
                <button
                  onClick={() => handleScroll(id)}
                  className={`relative transition-all duration-300
                  ${
                    activeSection === id
                      ? "text-white after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-purple-500 font-medium"
                      : "hover:text-white"
                  }`}
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>

          {/* Download */}
          <div className="hidden lg:block">
            <Link
              to="https://play.google.com/store/games?device=windows"
              target="_blank"
            >
              <button className="flex items-center gap-2 px-5 py-2 text-white transition rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105">
                Download
                <span className="relative w-4 h-4">
                  <CgArrowTopRightR className="absolute inset-0" />
                  <BsArrowRight className="absolute inset-0 opacity-0 group-hover:opacity-100" />
                </span>
              </button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="text-white lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed top-[72px] left-0 w-full z-40 px-4">
          <div className="bg-[#0F1224] rounded-2xl p-6 shadow-xl">
            <ul className="flex flex-col gap-4 text-white">
              {menuItems.map(({ name, id }) => (
                <li key={id}>
                  <button
                    onClick={() => handleScroll(id)}
                    className={`w-full text-left px-3 py-2 rounded-lg
                    ${
                      activeSection === id
                        ? "bg-purple-600"
                        : "hover:bg-white/10"
                    }`}
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>

            <Link
              to="https://play.google.com/store/games?device=windows"
              target="_blank"
            >
              <button className="flex justify-center w-full gap-2 py-3 mt-6 text-white rounded-full bg-gradient-to-r from-purple-600 to-blue-600">
                Download <BsArrowRight />
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
