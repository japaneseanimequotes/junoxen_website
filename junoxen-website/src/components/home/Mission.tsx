export default function Mission() {
  return (
    <section className="mt-20 py-20 bg-white">
      <div className="w-[90%] md:w-[85%] mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Mission as a Growth-Focused IT & Digital Marketing Agency
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            At Junoxen, our mission is to empower businesses with innovative IT solutions 
            and data-driven digital marketing strategies. We focus on delivering measurable 
            results, improving online visibility, and helping brands scale sustainably.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-3 text-gray-700">
            <li>✔ Result-driven digital strategies</li>
            <li>✔ Custom IT and marketing solutions</li>
            <li>✔ Scalable and future-ready technology</li>
            <li>✔ Transparent and reliable support</li>
          </ul>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center">
          <img
            src="/images/undraw_work-time_1ogn.svg"
            alt="Our Mission"
            className="w-full max-w-md"
          />
        </div>

      </div>
    </section>
  );
}