import Link from "next/link";

const services = [
  {
    title: "Digital Marketing",
    link: "/services/digital-marketing",
  },
  {
    title: "App Development",
    link: "/services/app-development",
  },
  {
    title: "Virtual Admin",
    link: "/services/virtual-admin",
  },
  {
    title: "Web Development",
    link: "/services/web-development",
  },
  {
    title: "UAE Company Formation",
    link: "/services/uae-company-formation",
  },
];

export default function Services() {
  return (
    <main className="pt-32 pb-20">

      {/* HEADER */}
      <section className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Our Services
        </h1>
        <p className="text-gray-600">
          Explore our complete range of IT and digital solutions
        </p>
      </section>

      {/* CARDS */}
      <section className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {services.map((service, index) => (
          <Link
            key={index}
            href={service.link}
            className="p-6 border rounded-xl hover:shadow-xl hover:-translate-y-2 transition"
          >
            <h3 className="text-lg font-semibold mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">
              Learn more about our {service.title.toLowerCase()} services.
            </p>
          </Link>
        ))}

      </section>

    </main>
  );
}