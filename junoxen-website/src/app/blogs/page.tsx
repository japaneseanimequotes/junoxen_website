const blogs = [
  {
    title: "Top Web Development Trends in 2026",
    desc: "Explore the latest technologies shaping modern web development including AI integration and performance optimization.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "SEO Strategies That Actually Work",
    desc: "Learn proven SEO techniques to improve your website ranking and drive organic traffic.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1251&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Why Your Business Needs a Website",
    desc: "Understand the importance of having a professional website in today’s digital world.",
    image: "https://plus.unsplash.com/premium_photo-1661758211006-d41106e4be4d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Social Media Marketing Tips for Growth",
    desc: "Boost your brand visibility with effective social media marketing strategies.",
    image: "https://images.unsplash.com/photo-1683721003111-070bcc053d8b?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Mobile App Development Guide",
    desc: "Everything you need to know before building your first mobile application.",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Digital Marketing Trends to Watch",
    desc: "Stay ahead with the latest trends in digital marketing and online branding.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Blogs() {
  return (
    <main className="pt-32 pb-20">

      {/* HEADER */}
      <section className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Our Blogs
        </h1>
        <p className="text-gray-600">
          Insights, tips, and updates from our experts
        </p>
      </section>

      {/* BLOG GRID */}
      <section className="w-[90%] md:w-[85%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {blogs.map((blog, index) => (
          <div
            key={index}
            className="border rounded-xl overflow-hidden hover:shadow-xl transition duration-300"
          >
            {/* IMAGE */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />

            {/* CONTENT */}
            <div className="p-5">
              <h3 className="font-semibold text-lg mb-2">
                {blog.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                {blog.desc}
              </p>

              <button className="text-blue-600 font-medium hover:underline">
                Read More →
              </button>
            </div>
          </div>
        ))}

      </section>

    </main>
  );
}