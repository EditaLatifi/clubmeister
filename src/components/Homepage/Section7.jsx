'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet consectetur. Lectus a in sit ut.",
    answer: "Lorem ipsum dolor sit amet consectetur. At quis lobortis sapien fermentum dapibus.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Ac eget ultrices α.",
    answer: "Lorem ipsum dolor sit amet consectetur. At quis lobortis sapien fermentum dapibus.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur.",
    answer: "Lorem ipsum dolor sit amet consectetur. At quis lobortis sapien fermentum dapibus.",
  },
  {
    question: "Lorem ipsum dolor sit amet",
    answer: "Lorem ipsum dolor sit amet consectetur. At quis lobortis sapien fermentum dapibus.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur ultrices α.",
    answer: "Lorem ipsum dolor sit amet consectetur. At quis lobortis sapien fermentum dapibus.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Ac eget ultrices α.",
    answer: "Lorem ipsum dolor sit amet consectetur. At quis lobortis sapien fermentum dapibus.",
  },
];

const Section7 = () => {
  const [openIndex, setOpenIndex] = useState(0); // first open by default

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-[1000px] mx-auto px-4 py-[100px]">
      {/* Heading */}
      <div className="text-center mb-[80px] space-y-[16px]">
        <p className="text-[#6D011C] text-[24px] font-poppins font-medium">FAQ’s</p>
        <h2 className="text-black text-[36px] md:text-[52px] font-poppins font-bold leading-[120%]">
          <span className="text-[#6D011C]">Frequently asked questions</span><br />
          about the Clubmeister software
        </h2>
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-[35px]">
        {faqs.map((faq, index) => (
          <div key={index} >
            <div
              className="flex justify-between items-start cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="font-poppins text-[24px] font-[500] leading-[28px] text-[#222] max-w-[100%]">
                {faq.question}
              </h3>
              <div className="min-w-[24px] text-[#6D011C]">
                {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
              </div>
            </div>
            {openIndex === index && faq.answer && (
              <p className="text-[#616161] text-[16px] pr-6 lg:pr-2 lg:text-[20px] leading-[24px] mt-2 font-poppins">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-[80px] text-center">
        <button className="bg-[#6D011C] text-white font-poppins text-[16px] px-[80px] py-[20px] rounded-md hover:bg-[#500016] transition">
          Get Started →
        </button>
      </div>
    </section>
  );
};

export default Section7;
