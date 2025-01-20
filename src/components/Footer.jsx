import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" w-full bg-white text-blue-500 py-4 border border-t-gray-400 overflow-hidden">
      <div className="  flex flex-col sm:flex-row items-center justify-between px-4">
        {/* Logo or Title */}
        <div className="text-2xl font-semibold text-center sm:text-left">
          <span>Profile Explorer</span>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm mt-3 text-gray-400">
          <p>&copy; 2025 Profile Explorer. All Rights Reserved.</p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 mt-4 sm:mt-0">
          <a
            href="#"
            className="p-2 rounded-lg text-zinc-600 hover:text-blue-500 hover:bg-gray-200 transition"
          >
            <Facebook size={24} />
          </a>
          <a
            href="#"
            className="p-2 rounded-lg text-zinc-600 hover:text-black hover:bg-gray-200 transition"
          >
            <Twitter size={24} />
          </a>
          <a
            href="#"
            className="p-2 rounded-lg text-zinc-600 hover:text-pink-500 hover:bg-gray-200 transition"
          >
            <Instagram size={24} />
          </a>
          <a
            href="#"
            className="p-2 rounded-lg text-zinc-600 hover:text-blue-500 hover:bg-gray-200 transition"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
