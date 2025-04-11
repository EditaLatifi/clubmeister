import Image from "next/image";
import Layout from "./Layout/Layout"; 

import functionImg from "/public/function.png"; // replace with your actual image

const features = [
  {
    tag: "Members",
    title: "Register and Manage Members",
    description:
      "Register your club’s members and manage everything from member data to permissions—all in one place. Handle everything in a scalable way without endless spreadsheets or syncing solutions.",
    button: "Try it now →",
    image: functionImg,
  },
  {
    tag: "Structure",
    title: "Organize club structure in groups",
    description:
      "Group members into departments and sub-categories (like teams or committees) and handle club finances per group. Simplify responsibilities and efficiency within your club’s internal structure.",
    button: "Try it now →",
    image: functionImg,
  },
  {
    tag: "Members",
    title: "Register and Manage Members",
    description:
      "Register your club’s members and manage everything from member data to permissions—all in one place. Handle everything in a scalable way without endless spreadsheets or syncing solutions.",
    button: "Try it now →",
    image: functionImg,
  },
  {
    tag: "Structure",
    title: "Organize club structure in groups",
    description:
      "Group members into departments and sub-categories (like teams or committees) and handle club finances per group. Simplify responsibilities and efficiency within your club’s internal structure.",
    button: "Try it now →",
    image: functionImg,
  },
];

const Functions = () => {
  return (
    <Layout>

    <section className="max-w-[1350px] mx-auto px-4 py-[100px]">
      {/* Header Section */}
      <div className="text-center max-w-[900px] mx-auto mb-16">
        <p className="text-[#6D011C] font-poppins font-medium text-[24px]">Features</p>
        <h2 className="text-[36px] md:text-[52px] font-poppins font-bold leading-[120%]">
          Powerful Features to Simplify Club Management
        </h2>
        <p className="text-[#475467] text-[24px] font-poppins  mx-auto mt-2">
          ClubMeister brings together the most important tools your club needs—whether it’s organizing members, structuring teams or communicating with ease.
        </p>
        <button className="mt-8 bg-[#6D011C] text-white px-8 py-3 lg:px-[100px] lg:py-[20px] rounded-md font-poppins">
          Check it out →
        </button>
      </div>

      {/* Feature Items */}
      <div className="lg:space-y-[80px] space-y-[20px] lg:px-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center gap-[60px]`}
          >
            {/* Text */}
            <div className="flex-1 space-y-[20px] max-w-[600px]">
              <p className="text-[#6D011C] font-poppins font-semibold text-[24px] uppercase">{feature.tag}</p>
              <h3 className="text-[34px] md:text-[52px] font-semibold text-[#0F172A] leading-tight">
                {feature.title}
              </h3>
              <p className="text-[#4B5563] text-[24px] font-poppins">{feature.description}</p>
              <button className="mt-4 bg-[#6D011C] text-white px-5 py-2 lg:px-[100px] lg:py-[20px] rounded-md font-poppins text-[16px]">
                {feature.button}
              </button>
            </div>

            {/* Image */}
            <div className="flex justify-center items-center lg:h-[500px]"> {/* Outer flex container with height */}
  <div className="flex justify-center items-center max-w-[589px] w-full h-full">
    <Image
      src={feature.image}
      alt={feature.title}
      width={589}
      height={500}
    />
  </div>
</div>


          </div>
        ))}
      </div>
    </section>
    </Layout>

  );
};

export default Functions;
