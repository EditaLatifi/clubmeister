import Image from "next/image";
import bgImage from "/public/bg-imagee.png"; // Make sure it's the clean red version

const Section3 = () => {
  return (
    <section className="relative w-full min-h-[500px] mt-[180px] py-[120px] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <Image
        src={bgImage}
        alt="background"
        fill
        priority
        className="absolute inset-0 object-cover z-0 opacity-80"
      />

      {/* Content Overlay */}
      <div className="relative z-10 max-w-[800px] px-4 text-center space-y-[16px]">
        {/* Title */}
        <h2 className="text-white font-montserrat font-bold text-[52px] leading-[100%]">
          Test Clubmeister <span className="text-[#F5E7B8]">without Obligation</span>
        </h2>

        {/* Subtext */}
        <p className="text-white font-poppins text-[24px] leading-[150%] max-w-[750px] mx-auto">
          Test our club software now for 30 days without obligation using your own member data.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-8">
          {/* Prices Button */}
          <button className="w-[215px] h-[60px] border-2 border-[#F5E7B8] rounded-[7.5px] px-[6.25px] py-[3.13px] font-poppins text-[#F5E7B8] text-[16px] hover:bg-[#F5E7B8]/10 transition">
            Prices →
          </button>

          {/* Try For Free Button */}
          <button className="w-[215px] h-[60px] bg-[#F5E7B8] text-[#6D011C] rounded-[7.5px] px-[6.25px] py-[3.13px] font-poppins text-[16px] hover:bg-[#e6d58a] transition">
            Try For Free →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section3;
