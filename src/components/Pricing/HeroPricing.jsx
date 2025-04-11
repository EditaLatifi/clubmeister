'use client';

import { useState } from "react";
import { CheckCircle } from "lucide-react";

const pricingData = {
  monthly: [
    {
      title: "Basic plan",
      price: "CHF 10",
      users: "Basic features for up to 100 users.",
      features: [
        "Clubs up to 100 members",
        "Members Management",
        "Accounting & Invoicing",
        "Document Storage & DMS",
        "Basic chat and email support",
      ],
      tag: "Popular",
    },
    {
      title: "Plus plan",
      price: "CHF 20",
      users: "Growing teams up to 250 users.",
      features: [
        "Clubs up to 250 members",
        "Members Management",
        "Accounting & Invoicing",
        "Document Storage & DMS",
        "Basic chat and email support",
      ],
    },
    {
      title: "Premium plan",
      price: "CHF 40",
      users: "Growing teams up to 1000 users.",
      features: [
        "Clubs up to 1000 members",
        "Members Management",
        "Accounting & Invoicing",
        "Document Storage & DMS",
        "Basic chat and email support",
      ],
    },
  ],
  annual: [
    {
      title: "Basic plan",
      price: "CHF 100",
      users: "Basic features for up to 100 users.",
      features: [
        "Clubs up to 100 members",
        "Members Management",
        "Accounting & Invoicing",
        "Document Storage & DMS",
        "Basic chat and email support",
      ],
      tag: "Popular",
    },
    {
      title: "Plus plan",
      price: "CHF 200",
      users: "Growing teams up to 250 users.",
      features: [
        "Clubs up to 250 members",
        "Members Management",
        "Accounting & Invoicing",
        "Document Storage & DMS",
        "Basic chat and email support",
      ],
    },
    {
      title: "Premium plan",
      price: "CHF 400",
      users: "Growing teams up to 1000 users.",
      features: [
        "Clubs up to 1000 members",
        "Members Management",
        "Accounting & Invoicing",
        "Document Storage & DMS",
        "Basic chat and email support",
      ],
    },
  ],
};

const HeroPricing = () => {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className="max-w-[1350px] mx-auto px-4 py-[100px] text-center">
      <p className="text-[#6D011C] font-poppins font-medium text-[24px]">Pricing</p>
      <h2 className="text-[36px] md:text-[52px] font-poppins font-bold leading-[120%]">
        Club software for your club
      </h2>
      <p className="text-[#4A4A4A] text-[24px] font-poppins  mx-auto mt-4">
        Get started with our free trial. Free Trial is for one year and only for small clubs to 25 members.
      </p>
      <p className="text-[#4A4A4A] text-[24px] font-poppins  mx-auto mt-1">
        The Clubs having more than 1000 members can directly schedule a meeting.
      </p>

      <div className="mt-6 mb-8">
        <button className="bg-[#6D011C] hover:bg-[#500116] transition font-[500] text-white text-[16px] font-poppins px-8 py-3 lg:px-[100px] lg:py-[20px] rounded-md">
          Contact Us →
        </button>
      </div>

      <div className="flex items-center justify-center mt-6 mb-12">
  <div className="flex bg-[#F8F9FB] rounded-xl border border-[#E5E7EB] p-1 shadow-sm">
    <button
      onClick={() => setBilling("monthly")}
      className={`px-6 py-2 rounded-lg text-[16px] font-semibold transition ${
        billing === "monthly"
          ? "bg-white text-[#1E293B] shadow"
          : "text-[#64748B]"
      }`}
    >
      Monthly billing
    </button>
    <button
      onClick={() => setBilling("annual")}
      className={`px-6 py-2 rounded-lg text-[16px] font-semibold transition ${
        billing === "annual"
          ? "bg-white text-[#1E293B] shadow"
          : "text-[#64748B]"
      }`}
    >
      Annual billing
    </button>
  </div>
</div>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
  {pricingData[billing].map((plan, index) => (
    <div
      key={index}
      className="bg-white border border-[#E5E7EB] rounded-[16px] shadow-sm p-[32px] relative min-h-[640px] flex flex-col justify-between"
    >
      {plan.tag && (
        <span className="text-[10px] font-semibold bg-[#FCECEC] text-[#6D011C] px-2 py-[2px] rounded-full absolute top-4 right-4">
          {plan.tag}
        </span>
      )}
      <div>
        <p className="text-[18px] font-[600] text-[#475467]">{plan.title}</p>
        <h3 className="text-[60px] leading-[52px] font-bold font-montserrat mt-[16px] text-[#0F172A]">
          {plan.price}
          <span className="text-[16px] font-[500] ml-1 text-[#475467]">per month</span>
        </h3>
        <p className="text-[16px] text-[#475467] mt-[16px] mb-4 font-poppins">{plan.users}</p>

        <hr className="my-[32px]" />
        <p className="font-semibold text-[16px] mb-[24px]">FEATURES</p>
        <ul className="space-y-2 text-[16px] leading-[24px] font-poppins">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-[#1E1E1E]">
            <svg
  width="18"
  height="18"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="text-[#6D011C] flex-shrink-0 mt-[2px]"
>
  <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" />
  <path
    d="M7 12L11 16L17 9"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col gap-4">
        <button className="bg-[#6D011C] hover:bg-[#500116] transition text-white py-3 rounded-md text-[16px] font-semibold">
          Get started
        </button>
        <button className="border border-[#E5E7EB] text-[#1E1E1E] hover:shadow-sm transition py-3 rounded-md text-[16px] font-semibold">
          Free Trial
        </button>
      </div>
    </div>
  ))}
</div>

    </section>
  );
};

export default HeroPricing;
