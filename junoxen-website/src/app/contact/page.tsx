"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Form submitted (dummy)");
  };

  return (
    <main className="pt-32 pb-20">
      {/* HEADER */}
      <section className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600">
          Get in touch with our team for any queries or projects
        </p>
      </section>

      {/* CONTENT */}
      <section className="w-[90%] md:w-[85%] mx-auto grid md:grid-cols-2 gap-12">
        {/* LEFT: INFO */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

          <div className="space-y-4 text-gray-600">
            <p>
              <strong>Address:</strong> Hyderabad, India
            </p>
            <p>
              <strong>Phone:</strong> +91 1234567890
            </p>
            <p>
              <strong>Email:</strong> info@junoxen.com
            </p>
          </div>

          {/* MAP */}
          <div className="mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.279242504668!2d78.50506607494653!3d17.350291083530585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99002fbcd3db%3A0x3e9ff99a5be6dfe6!2sJunoXen%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1777973330579!5m2!1sen!2sin"
              className="w-full h-64 md:h-80 rounded-lg border"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* RIGHT: FORM */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
