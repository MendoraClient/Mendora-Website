"use client";

import React, { useState } from "react";
import Navbar from "@/components/NavBar";
import FaqComp from "@/components/FaqComp"; // adjust path as necessary

const faqData = [
  {
    question: "What is Mendora Client?",
    answer:
      "Mendora Client is an optimized Minecraft launcher designed for low-end PCs to improve FPS and gameplay experience.",
  },
  {
    question: "Does this support cracked?",
    answer: "✅ Yes, but there is no skins supported Yet.",
  },
  {
    question: "💻 Minimum Requirements",
    answer:
      "Intel Duo 2 Core, 3GB Ram, Storage: 2GB HDD, OS: Windows 7+ (64-bit) ",
  },
  {
    question: "💻 Recommended Requirements?",
    answer:
      "CPU: Intel Core i5 / AMD Ryzen 5, RAM: 8 GB+, GPU: GTX 1050 / RX 560 Storage: SSD preferred, OS: Windows 10/11 (64-bit)",
  },
  // Add more FAQ entries here
];

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <section className="min-h-screen text-white py-16 px-6 max-w-4xl mx-auto font-space-mono">
        <h1 className="text-4xl font-bold mb-12 text-center">
          Frequently Asked Questions
        </h1>
        <div className="space-y-6">
          {faqData.map(({ question, answer }, index) => (
            <FaqComp
              key={index}
              index={index}
              question={question}
              answer={answer}
              isOpen={openIndex === index}
              onToggle={toggleFaq}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default FaqPage;
