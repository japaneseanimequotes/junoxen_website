import { FaSearch, FaMobileAlt, FaCode, FaBullhorn } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaSearch size={28} />,
      title: "Digital Marketing",
      desc: "SEO, social media, and paid ads to grow your brand online.",
    },
    {
      icon: <FaMobileAlt size={28} />,
      title: "App Development",
      desc: "Custom mobile apps for Android & iOS platforms.",
    },
    {
      icon: <FaCode size={28} />,
      title: "Web Development",
      desc: "Modern, fast, and scalable websites for your business.",
    },
    {
      icon: <FaBullhorn size={28} />,
      title: "Virtual Admin",
      desc: "Professional admin support to streamline operations.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="w-[90%] md:w-[80%] mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Our Comprehensive IT & Digital Services
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed text-sm md:text-base">
          As an experienced IT and Digital Marketing Agency in India, we deliver
          customised solutions including web development, app development, SEO,
          and branding. Additionally, we provide digital marketing services, IT
          solutions, website design, and mobile app development to meet diverse
          business needs. Furthermore, we support social media marketing, PPC
          advertising, content creation, and online branding with a
          results-driven approach. Consequently, our SEO optimisation and
          complete digital strategy support help businesses achieve stronger
          visibility and consistent growth.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <div className="text-blue-600 mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
