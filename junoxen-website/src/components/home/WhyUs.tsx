import { FaRocket, FaUsers, FaChartLine, FaShieldAlt } from "react-icons/fa";

export default function WhyUs() {
  const points = [
    {
      icon: <FaRocket size={26} />,
      title: "Strategy with IT Driven Results",
      desc: "We focus on measurable results like SEO visibility, lead generation, and brand trust using data-driven methods.",
    },
    {
      icon: <FaUsers size={26} />,
      title: "Emotionally Intelligent Digital Branding",
      desc: "We craft messaging that connects, resonates, and builds strong brand identity.",
    },
    {
      icon: <FaChartLine size={26} />,
      title: "Hands-On Execution with Scalable Tech Solutions",
      desc: "Clean builds, responsive layouts, and SEO-optimized scalable systems.",
    },
    {
      icon: <FaShieldAlt size={26} />,
      title: "Private, Secure and Reliable IT Support in India",
      desc: "Secure, transparent, and reliable processes for long-term trust.",
    },
  ];

  return (
    <section className="bg-white pt-20 pb-40">
      {/* 🔵 NAVY SECTION (IMPORTANT: relative added) */}
      <div className="relative bg-[#0f172a] text-white py-20 text-center">
        <div className="w-[90%] md:w-[75%] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why our IT and Digital Marketing Agency Stands Apart in India
          </h2>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Junoxen is recognised as a leading IT and Digital Marketing Agency
            in India, helping businesses grow with modern technology and
            strategic marketing. However, we consistently focus on innovation to
            stay ahead of industry trends. Also, we prioritise measurable
            outcomes that drive real business value. Beyond that, we enhance
            digital visibility and strengthen brand identity across platforms.
            Meanwhile, our approach supports long-term scalability for
            sustainable growth. Consequently, our strategies create meaningful
            impact and improve user engagement. Ultimately, we deliver
            consistent success while providing complete end-to-end IT support.
          </p>
        </div>

        {/* 🧊 CARDS (NOW INSIDE NAVY SECTION) */}
        <div className="absolute left-0 right-0 -bottom-16 md:-bottom-45">
          <div className="w-[90%] md:w-[85%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {points.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >
                <div className="flex justify-center mb-4 text-blue-600">
                  {item.icon}
                </div>

                <h3 className="text-center font-semibold text-lg mb-3 text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
