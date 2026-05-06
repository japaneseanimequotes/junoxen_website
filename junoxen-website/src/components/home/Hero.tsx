import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white pt-24">
      <div className="w-[90%] md:w-[85%] mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold uppercase leading-tight mb-4">
            YOUR STRATEGIC PARTNER IN DIGITAL MARKETING SUCCESS
          </h1>

          <p className="text-gray-600 text-sm md:text-base mb-6">
            Your Trusted IT and Digital Marketing Agency in India
          </p>

          <div className="flex gap-4">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Get Started
            </Link>

            <Link
              href="/services"
              className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              View Services
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center">
          <img
            src="/images/charminar.png"
            alt="charminar"
            className="w-full max-w-md"
          />
        </div>

      </div>
    </section>
  );
}