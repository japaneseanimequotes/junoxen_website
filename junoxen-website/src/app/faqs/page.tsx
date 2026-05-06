"use client";

import { useState } from "react";

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What services does Junoxen offer?",
      a: "We provide web development, app development, SEO, digital marketing, branding, and IT solutions.",
    },
    {
      q: "How can digital marketing help my business?",
      a: "It improves your online visibility, attracts potential customers, and increases conversions.",
    },
    {
      q: "Do you offer custom website development?",
      a: "Yes, we build fully customized and scalable websites tailored to your business needs.",
    },
    {
      q: "What industries do you work with?",
      a: "We work with startups, small businesses, and enterprises across various industries.",
    },
    {
      q: "How long does it take to build a website?",
      a: "It depends on the project complexity, but typically ranges from 2 to 6 weeks.",
    },
    {
      q: "Do you provide SEO services?",
      a: "Yes, we offer complete SEO services including on-page, off-page, and technical SEO.",
    },
    {
      q: "Can you manage social media accounts?",
      a: "Yes, we handle social media marketing, content creation, and ad campaigns.",
    },
    {
      q: "Do you provide ongoing support?",
      a: "Absolutely, we offer maintenance and support services after project completion.",
    },
    {
      q: "What is your pricing model?",
      a: "Our pricing depends on project requirements. We offer flexible and competitive pricing.",
    },
    {
      q: "How can I get started with Junoxen?",
      a: "You can contact us through our website or WhatsApp to discuss your project.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="pt-32 pb-20">

      {/* HEADER */}
      <section className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600">
          Find answers to common questions about our services
        </p>
      </section>

      {/* FAQ LIST */}
      <section className="w-[90%] md:w-[70%] mx-auto space-y-4">

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-xl overflow-hidden"
          >

            {/* QUESTION */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-5 font-medium flex justify-between items-center"
            >
              {faq.q}
              <span className="text-xl">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>

            {/* ANSWER */}
            {activeIndex === index && (
              <div className="px-5 pb-5 text-gray-600 text-sm">
                {faq.a}
              </div>
            )}

          </div>
        ))}

      </section>

    </main>
  );
}