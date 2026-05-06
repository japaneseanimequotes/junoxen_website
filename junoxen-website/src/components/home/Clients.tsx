export default function Clients() {
  const logos = [
    "/images/clients/logoipsum-408.svg",
    "/images/clients/logoipsum-410.svg",
    "/images/clients/logoipsum-412.svg",
    "/images/clients/logoipsum-414.svg",
    "/images/clients/logoipsum-416.svg",
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          Meet Our Clients
        </h2>
      </div>

      {/* SCROLL CONTAINER */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-scroll gap-15">

          {/* Duplicate logos for infinite effect */}
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="client logo"
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition"
            />
          ))}

        </div>
      </div>
    </section>
  );
}