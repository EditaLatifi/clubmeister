import Image from "next/image";
import img1 from "/public/member-management.png";
import img2 from "/public/accounting.png";
import img3 from "/public/document.png";

const Section5 = () => {
  return (
    <section className="max-w-[1350px] mx-auto px-4 py-[100px] space-y-[50px]">
      {/* Header */}
      <div className="text-center space-y-4">
        <p className="text-[#6D011C] text-[18px] font-poppins font-medium">What we Offer</p>
        <h2 className="text-[36px] md:text-[52px] font-poppins font-bold leading-[120%]">
          All-in-One Club Management – <br />
          <span className="text-[#6D011C]">Simplified & Efficient.</span>
        </h2>
      </div>

      {/* Feature 1 */}
      <div className="max-w-[1250px] mx-auto rounded-[30px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] p-[20px] lg:px-[112px] lg:py-[89px] flex flex-col lg:flex-row gap-[30px] lg:gap-[60px] items-center">
      {/* Text */}
        <div className="flex-1 space-y-4">
          <h3 className="text-[30px] lg:text-[36px] font-semibold font-poppins text-[#6D011C]">
            1. Member Management
          </h3>
          <p className="font-poppins font-[500] text-[20px] text-[#333]">
            Effortlessly handle memberships, track renewals, and communicate with members—all in one place.
          </p>
          <ul className="text-[#333] font-poppins font-[500] text-[18px] lg:text-[20px] space-y-2">
          <li>✅  Automated Membership Renewals</li>
            <li>✅  Member Directory & Profiles
            </li>
            <li>✅  Custom Access Levels</li>
          </ul>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
          <Image src={img1} alt="Member Management" width={500} height={400} />
        </div>
      </div>

      {/* Feature 2 */}
      <div className="lg:block hidden max-w-[1250px] mx-auto rounded-[30px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] p-[20px] lg:px-[112px] lg:py-[89px] lg:flex flex-col lg:flex-row gap-[30px] lg:gap-[60px] items-center">
      <div className="flex-1 flex justify-center">
          <Image src={img2} alt="Accounting & Invoicing" width={500} height={400} />
        </div>
      <div className="flex-1 space-y-4">
          <h3 className="text-[30px] lg:text-[36px] font-semibold font-poppins text-[#6D011C]">
            2. Accounting & Invoicing
          </h3>
          <p className="font-poppins font-[500] text-[20px] text-[#333]">
            Keep your club’s finances in check with automated invoicing and real-time financial tracking.
          </p>
          <ul className="text-[#333] font-poppins font-[500] text-[18px] lg:text-[20px] space-y-2">
            <li>✅  Automated Membership Renewals</li>
            <li>✅  Member Directory & Profiles
            </li>
            <li>✅  Custom Access Levels</li>
          </ul>
        </div>

      
      </div>

      <div className="lg:hidden block max-w-[1250px] mx-auto rounded-[30px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] p-[20px] lg:px-[112px] lg:py-[89px] flex flex-col lg:flex-row gap-[30px] lg:gap-[60px] items-center">
    
      <div className="flex-1 space-y-4">
          <h3 className="text-[30px] lg:text-[36px] font-semibold font-poppins text-[#6D011C]">
            2. Accounting & Invoicing
          </h3>
          <p className="font-poppins font-[500] text-[20px] text-[#333]">
            Keep your club’s finances in check with automated invoicing and real-time financial tracking.
          </p>
          <ul className="text-[#333] font-poppins font-[500] text-[18px] lg:text-[20px] space-y-2">
            <li>✅  Automated Membership Renewals</li>
            <li>✅  Member Directory & Profiles
            </li>
            <li>✅  Custom Access Levels</li>
          </ul>
        </div>

        <div className="flex-1 flex justify-center">
          <Image src={img2} alt="Accounting & Invoicing" width={500} height={400} />
        </div>
      </div>

      {/* Feature 3 */}
      <div className="max-w-[1250px] mx-auto rounded-[30px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] p-[20px] lg:px-[112px] lg:py-[89px] flex flex-col lg:flex-row gap-[30px] lg:gap-[60px] items-center">
      <div className="flex-1 space-y-4">
          <h3 className="text-[36px] font-semibold font-poppins text-[#6D011C]">
            3. Document Storage & DMS
          </h3>
          <p className="font-poppins font-[500] text-[20px] text-[#333]">
            Securely store, manage, and access club documents anytime, anywhere.
          </p>
          <ul className="text-[#333] font-poppins font-[500] text-[20px] space-y-2">
          <li>✅  Automated Membership Renewals</li>
            <li>✅  Member Directory & Profiles
            </li>
            <li>✅  Custom Access Levels</li>
          </ul>
        </div>

        <div className="flex-1 flex justify-center">
          <Image src={img3} alt="Document Storage & DMS" width={500} height={400} />
        </div>
      </div>
    </section>
  );
};

export default Section5;
