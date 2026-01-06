import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { MapPin, Mail } from "lucide-react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#101828] text-white pt-20 pb-10">
      <div className="px-6 py-4 mx-auto lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo, Description, and Social Icons */}
        <div className="col-span-2 flex flex-col gap-4">
          <div className="flex items-center">
            <img src={logo} alt="logo" />
          </div>
          <p className="text-[#99A1AF] text-base md:max-w-sm">
            A smart fitness app to track steps, calories, challenges, and daily water intake  all in one place.
          </p>
          <div className="flex gap-4 text-[#B3B3B3]">
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="hover:text-white p-[10px] bg-[#1E2939] rounded-[10px] size-10" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-white p-[10px] bg-[#1E2939] rounded-[10px] size-10" />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="hover:text-white p-[10px] bg-[#1E2939] rounded-[10px] size-10" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-[#D1D5DC] text-base">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/challenges">Challenges</Link>
            </li>
            <li>
              <Link to="/leaderboard">Leaderboard</Link>
            </li>
            <li>
              <Link to="/download">Download</Link>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
          <ul className="space-y-2 text-[#D1D5DC] text-base">
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-of-service">Terms of Service</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-6 py-4 mx-auto lg:px-16 flex flex-col md:flex-row justify-between items-center gap-4 mt-10 border-t border-t-[#1E2939]">
        <p className="text-sm text-[#6A7282]">
          © 2025 Step Quest App. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-sm text-[#D1D5DC]">
          <a href="mailto:support@stepquest.com">
          <div className="flex items-center gap-1">
            <Mail size={16} />
            support@stepquest.com
          </div>
          </a>
          <div className="flex items-center gap-1">
            <MapPin size={16} />
            San Francisco, CA
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;