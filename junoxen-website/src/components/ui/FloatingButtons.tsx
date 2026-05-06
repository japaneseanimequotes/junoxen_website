"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* WhatsApp */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        <FaWhatsapp size={22} />
      </a>

      {/* Scroll Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 left-6 bg-black text-white px-3 py-2 rounded hover:bg-gray-800 transition"
      >
        ↑
      </button>
    </>
  );
}