import Image from "next/image";
import icon1 from "/public/icon1.png";
import icon2 from "/public/icon2.png";
import icon3 from "/public/icon3.png";
import icon4 from "/public/icon4.png";

const Section4 = () => {
  return (
    <section className="max-w-[1350px] mx-auto px-4 py-[100px]">
      {/* Title */}
      <div className="text-center space-y-4 mb-12">
        <p className="text-[#6D011C] text-[24px] font-poppins font-medium">What Choose Us</p>
        <h2 className="font-poppins font-semibold text-[40px] lg:text-[52px] leading-[100%]">
          Why Choose <span className="text-[#6D011C]">ClubMeister</span>?
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="rounded-[15px] border border-[#EAEAEA] lg:py-[60px] lg:px-[80px] p-[30px] flex flex-col items-center text-center lg:text-left lg:items-start gap-4 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
          <Image src={icon1} alt="icon" width={80} height={80} />
          <p className="text-[#6D011C] font-poppins text-[24px] lg:text-[32px] font-[500] leading-[120%]">
            Time saving, User-friendly <br /> & easy to use interface
          </p>
        </div>

        {/* Card 2 */}
        <div className="rounded-[15px] border border-[#EAEAEA] lg:py-[60px] lg:px-[80px] p-[30px] flex flex-col items-center text-center lg:text-left lg:items-start gap-4 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
          <Image src={icon2} alt="icon" width={80} height={80} />
          <p className="text-[#6D011C] font-poppins text-[24px] lg:text-[32px] font-[500] leading-[120%]">
            CH-Datenschutz konform
          </p>
        </div>

        {/* Card 3 */}
        <div className="rounded-[15px] border border-[#EAEAEA] lg:py-[60px] lg:px-[80px] p-[30px] flex flex-col items-center text-center lg:text-left lg:items-start gap-4 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
          <Image src={icon3} alt="icon" width={80} height={80} />
          <p className="text-[#6D011C] font-poppins text-[24px] lg:text-[32px] font-[500] leading-[120%]">
            Automated invoicing and reminders
          </p>
        </div>

        {/* Card 4 */}
        <div className="rounded-[15px] border border-[#EAEAEA] lg:py-[60px] lg:px-[80px] p-[30px] flex flex-col items-center text-center lg:text-left lg:items-start gap-4 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
          <Image src={icon4} alt="icon" width={80} height={80} />
          <p className="text-[#6D011C] font-poppins text-[24px] lg:text-[32px] font-[500] leading-[120%]">
            Scalable for clubs of all<br></br> sizes
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section4;
