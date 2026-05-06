import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white pt-16 pb-8">
      <div className="w-[90%] md:w-[85%] mx-auto grid md:grid-cols-3 gap-10">

        {/* Company */}
        <div>
          <h2 className="text-xl font-bold mb-4">Junoxen</h2>
          <p className="text-gray-400 text-sm">
            Your trusted IT and Digital Marketing Agency in India, delivering 
            growth-driven solutions for modern businesses.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" target="_blank"><FaFacebook /></a>
            <a href="#" target="_blank"><FaInstagram /></a>
            <a href="#" target="_blank"><FaLinkedin /></a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm mt-10">
        © 2026 Junoxen. All rights reserved.
      </div>
    </footer>
  );
}