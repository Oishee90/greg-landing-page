import React, { useState } from "react";
import discover from "../../assets/discover.png";
import { BsArrowUpRightSquare, BsArrowRight } from "react-icons/bs";

const faqs = [
  {
    question: "Is Step Ouest completely free to use?",
    answer:
      "Probet is an innovative digital platform designed to streamline online betting experiences, offering real-time updates, secure transactions, and user-friendly interfaces.",
  },
  {
    question: "How accurate is the step counting?",
    answer:
      "Getting started with Probet is simple! Just visit our website, create an account, and explore our intuitive dashboard to start placing your bets or tracking analytics.",
  },
  {
    question: "Does the app drain my phone battery?",
    answer:
      "Probet offers real-time odds tracking, secure wallet integration, bet history analysis, intuitive UI, and responsive customer support.",
  },
  {
    question: "Can I sync my data across multiple devices?",
    answer:
      "Probet is free to join. We may offer premium features or add-ons in the future, but basic access to the platform is completely free.",
  },
  {
    question: "What devices and platforms are supported??",
    answer:
      "Probet is perfect for sports enthusiasts, casual bettors, and professionals looking for a clean and efficient platform to enhance their betting strategies.",
  },
  {
    question: "Can I track activities other than walking?",
    answer:
      "Absolutely. Probet uses industry-standard encryption and follows best practices to ensure your data and transactions are secure.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Second item expanded by default

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div id="faq">
      <div className="px-4 py-16 bg-[#F9FAFB] text-white md:px-10 lg:px-20 urbanist">
        <div className="max-w-4xl mx-auto text-center ">
          <h2 className="mb-4 text-4xl  md:text-5xl text-[#0A0A0A]">
            Frequently Asked{" "}
            <span className="bg-gradient-to-l from-[#9810FA] to-[#155DFC] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="max-w-2xl mx-auto mb-12 text-[#4A5565]">
            We’ve compiled a list of the most frequently asked questions about
            SmartNotes to help you get the information you need. If you have any
            other questions, feel free to reach out to our support team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={index}
                className={`rounded-xl border border-[#9a72b67e] transition-all duration-300  ${
                  isActive
                    ? "bg-[#FFFFFF] text-[#0A0A0A]"
                    : "bg-transparent text-[#0A0A0A]"
                }`}
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="flex items-center justify-between w-full px-6 py-5 text-lg font-bold text-left "
                >
                  {faq.question}
                  <span className="ml-4">
                    {isActive ? (
                      <BsArrowRight className="text-[#9810FA] text-xl" />
                    ) : (
                      <BsArrowUpRightSquare className="text-[#9810FA] text-xl" />
                    )}
                  </span>
                </button>
                {isActive && (
                  <div className="px-6 pb-5 text-sm font-normal leading-relaxed dm-sans">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
