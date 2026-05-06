"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  // Close dropdown on route change
  useEffect(() => {
    setServicesOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50">
      <div className="w-[95%] md:w-[85%] mx-auto bg-white shadow-lg rounded-full px-8 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img src="/images/logo.png" alt="logo" className="h-12 md:h-10 w-auto" />
          <span className="font-bold text-lg md:text-xl">JUNOXEN</span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 relative">

          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about" className="nav-link">About</Link>

          {/* SERVICES DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="nav-link cursor-pointer"
            >
              Services ▾
            </button>

            {servicesOpen && (
              <div className="absolute top-full mt-2 bg-white shadow-lg rounded-lg w-56">
                <ul className="text-sm text-gray-700">

                  <li>
                    <Link href="/services/digital-marketing" className="block px-4 py-2 hover:bg-gray-100">
                      Digital Marketing
                    </Link>
                  </li>

                  <li>
                    <Link href="/services/app-development" className="block px-4 py-2 hover:bg-gray-100">
                      App Development
                    </Link>
                  </li>

                  <li>
                    <Link href="/services/virtual-admin" className="block px-4 py-2 hover:bg-gray-100">
                      Virtual Admin
                    </Link>
                  </li>

                  <li>
                    <Link href="/services/web-development" className="block px-4 py-2 hover:bg-gray-100">
                      Web Development
                    </Link>
                  </li>

                  <li>
                    <Link href="/services/uae-company-formation" className="block px-4 py-2 hover:bg-gray-100">
                      UAE Company Formation
                    </Link>
                  </li>

                </ul>
              </div>
            )}
          </div>

          <Link href="/blogs" className="nav-link">Blogs</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
          <Link href="/faqs" className="nav-link">FAQs</Link>

        </div>

        {/* MOBILE ICON */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden mt-3 w-[95%] mx-auto bg-white shadow-lg rounded-xl p-5 space-y-4">

          <Link href="/" className="block" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" className="block" onClick={() => setMenuOpen(false)}>About</Link>

          {/* MOBILE SERVICES */}
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full text-left"
            >
              Services ▾
            </button>

            {servicesOpen && (
              <div className="pl-4 mt-2 space-y-2 text-sm">
                <Link href="/services/digital-marketing">Digital Marketing</Link>
                <Link href="/services/app-development">App Development</Link>
                <Link href="/services/virtual-admin">Virtual Admin</Link>
                <Link href="/services/web-development">Web Development</Link>
                <Link href="/services/uae-company-formation">UAE Company Formation</Link>
              </div>
            )}
          </div>

          <Link href="/blogs" onClick={() => setMenuOpen(false)}>Blogs</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="/faqs" onClick={() => setMenuOpen(false)}>FAQs</Link>

        </div>
      )}
    </nav>
  );
}