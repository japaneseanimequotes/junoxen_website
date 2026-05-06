export default function About() {
  return (
    <main className="pt-32">

      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 text-center">
        <div className="w-[90%] md:w-[70%] mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            About Junoxen
          </h1>
          <p className="text-gray-600">
            Your Trusted IT and Digital Marketing Agency in India
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20">
        <div className="w-[90%] md:w-[80%] mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Junoxen is a growth-focused IT and Digital Marketing Agency in India, 
              dedicated to helping businesses build a strong digital presence. 
              We combine technology, creativity, and strategy to deliver impactful solutions 
              that drive measurable results.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="/images/undraw_control-panel_s0j2.svg"
              alt="About us"
              className="w-full max-w-md"
            />
          </div>

        </div>
      </section>

      {/* OUR MISSION */}
      <section className="py-20 bg-gray-50">
        <div className="w-[90%] md:w-[70%] mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to empower businesses with innovative IT solutions 
            and result-driven digital marketing strategies. We aim to enhance 
            online visibility, improve engagement, and create sustainable growth 
            through smart technology and strategic execution.
          </p>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-20">
        <div className="w-[90%] md:w-[80%] mx-auto text-center">

          <h2 className="text-2xl md:text-3xl font-bold mb-12">
            Our Values
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

            <div className="p-6 border rounded-xl hover:shadow-lg transition">
              <h3 className="font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">
                We embrace new ideas and technologies to stay ahead.
              </p>
            </div>

            <div className="p-6 border rounded-xl hover:shadow-lg transition">
              <h3 className="font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600 text-sm">
                We believe in transparency and ethical practices.
              </p>
            </div>

            <div className="p-6 border rounded-xl hover:shadow-lg transition">
              <h3 className="font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600 text-sm">
                We deliver high-quality solutions with precision.
              </p>
            </div>

            <div className="p-6 border rounded-xl hover:shadow-lg transition">
              <h3 className="font-semibold mb-2">Growth</h3>
              <p className="text-gray-600 text-sm">
                We focus on long-term success for our clients.
              </p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}