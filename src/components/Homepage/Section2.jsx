import Image from "next/image";
import icon from "/public/bg-icon.png"; // Update with your actual icon path

const Section2 = () => {
  return (
    <section className="max-w-[1350px] mx-auto px-4 py-16 mt-[180px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      
      {/* Left Text Content */}
      <div className="flex items-center justify-center lg:justify-start h-full">
  <div className="space-y-[16px] text-center justify-center flex flex-col lg:text-left">
  <p className="text-[#6D011C] font-poppins font-[500] text-[24px] leading-[150%] ">
  Our clients – numbers
</p>
    <h2 className="text-black text-[36px] md:text-[52px] font-montserrat font-bold leading-[130%]">
      Powering Clubs with <br />
      <span className="text-[#6D011C]">Data-Driven Success</span>
    </h2>
    <p className="text-[#616161] text-[18px] lg:text-[24px] font-poppins max-w-[550px] mx-auto lg:mx-0">
    Empowering clubs with seamless management, financial control, and secure document storage - see how we’re making a difference.
    </p>
  </div>
</div>


      {/* Right Grid of Stats + Icon */}
      <div className="grid grid-cols-2 gap-[10px]">
        {/* 500+ Card */}
        <div className="bg-white border border-gray-200 rounded-[10px] shadow-sm w-[100%] h-[240px] flex flex-col justify-center items-center px-[7px] text-center">
          <p className="text-[#6D011C] font-inter font-semibold text-[60px] leading-[72px]">500+</p>
          <p className="text-gray-900 font-poppins text-[18px] leading-[100%] mt-2">
            Clubs Managed on <br></br>Clubmeister
          </p>
        </div>

        {/* Icon Card */}
        <div className="bg-white rounded-[10px] w-[100%] h-[240px] flex justify-center items-center">
          <Image
            src={icon}
            alt="Icon"
            width={160}
            height={160}
          />
        </div>

        {/* 10k+ Card */}
        <div className="bg-white border border-gray-200 rounded-[10px] shadow-sm w-[100%] h-[240px] flex flex-col justify-center items-center px-[7px] text-center">
          <p className="text-[#6D011C] font-inter font-semibold text-[60px] leading-[72px]">10k+</p>
          <p className="text-gray-900 font-poppins text-[18px] leading-[100%] mt-2">
            Active Members on<br></br> Clubmeister
          </p>
        </div>

        {/* 50k+ Card */}
        <div className="bg-white border border-gray-200 rounded-[10px] shadow-sm w-[100%] h-[240px] flex flex-col justify-center items-center px-[7px] text-center">
          <p className="text-[#6D011C] font-inter font-semibold text-[60px] leading-[72px]">50k+</p>
          <p className="text-gray-900 font-poppins text-[18px] leading-[100%] mt-2">
            Documents Securely<br></br> Stored on Clubmeister
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section2;
