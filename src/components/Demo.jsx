import Layout from "./Layout/Layout";
import Image from "next/image";
import dashboard from "/public/demo-dashboard.png";
import icon1 from "/public/icon1.png";
import icon2 from "/public/icon2.png";
import icon3 from "/public/icon3.png";
import LiveDemoIcon from "/public/livedemo.svg"; // if using @svgr/webpack


const Demo = () => {
  return (
    <Layout>
      <section className="max-w-[1350px] mx-auto px-4 py-[100px] space-y-[100px]">

        {/* Section 1 – Live Demo */}
        <div className="text-center max-w-[1350px] mx-auto space-y-8">
          {/* Top Badge */}
          <span className="inline-block text-[14px] text-[#6D011C] font-poppins border border-[#F6E9E1] bg-[#F6E9E1]/50 font-[500] rounded-full px-4 py-[6px] ">
            <span className=" text-[#6D011C] bg-[#FFFFFF] font-[500]  rounded-full px-2 py-1">LiveDemo</span>&nbsp;&nbsp;Register Now For the demo →
          </span>

          {/* Main Title */}
          <h2 className="text-[36px] md:text-[52px] font-bold text-[#0F172A] leading-tight font-poppins">
            Experience Clubmeister Club <br /> Software live
          </h2>

          {/* Subtext */}
          <p className="text-[24px] text-[#4B5563] font-poppins max-w-[820px] mx-auto leading-relaxed">
            The live demo is packed with examples of member data, invoices, and much more. With all this data, you'll experience what the Webling club software will look like once it's fully configured.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
          <button className="bg-white border border-[#CBD5E1] text-[#344054] px-6 py-3 rounded-lg font-poppins text-[16px] flex items-center gap-2 shadow-sm">
          <Image src={LiveDemoIcon} alt="Live Demo Icon" width={20} height={20} />
          Live Demo with sample Data
</button>
            <button className="bg-[#6D011C] text-white px-6 py-3 rounded-lg font-poppins text-[16px]">
              Test with your own data
            </button>
          </div>

          {/* Dashboard Image */}
          <div className="mt-12 lg:mt-[65px]">
            <Image
              src={dashboard}
              alt="Demo Dashboard"
              width={1200}
              height={700}
              className="mx-auto rounded-xl "
            />
          </div>
        </div>

  {/* Section 2 – Features and Benefits */}
<div className="relative text-center mt-[180px] mb-[100px] lg:mb-[180px]">
  {/* Title */}
  <div className="space-y-2 mb-[10px]">
  <span className="inline-block bg-[#F9F6FF] text-[#6D011C] text-[14px] font-[500] font-poppins px-4 py-2 rounded-full border border-[#F9F5FF]">
  Features
</span>

    <h2 className="text-[32px] md:text-[52px] font-bold text-[#0F172A] leading-snug font-poppins">
      Features and <span className="text-[#6D011C]">Benefits</span>
    </h2>
    <p className="text-[24px] text-[#4B5563] font-poppins max-w-[1000px] mx-auto">
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
    </p>
  </div>

  {/* Background image wrapper to control size */}
  <div className="lg:block hidden relative z-0 lg:w-[700px] lg:h-[450px] mx-auto mt-[50px]">
    <Image
      src={dashboard}
      alt="Demo Dashboard"
      layout="fill"
      objectFit="fill object-cover rounded-full lg:w-[700px] lg:h-[450px]"
      className="mx-auto"
    />
  </div>

  {/* Feature Cards – positioned lower */}
  <div className="lg:hidden block px-4">
    <div className="flex flex-col md:flex-row justify-center gap-6">
      {/* Card 1 */}
      <div className="bg-white rounded-[20px] shadow-md p-6 lg:px-[40px] lg:py-[60px] max-w-[380px] text-center space-y-4">
        <Image src={icon1} alt="Icon" width={48} height={48} className="mx-auto" />
        <h3 className="text-[#6D011C] font-[500] text-[24px] leading-snug">
          Which subscription is <br /> right for you?
        </h3>
        <p className="text-[#4B5563] text-[16px] font-poppins">
          Check how many member addresses you have and choose the plan with the next largest number of members.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-[20px] shadow-md p-6 lg:px-[40px] lg:py-[60px] max-w-[380px] text-center space-y-4">
        <Image src={icon2} alt="Icon" width={48} height={48} className="mx-auto" />
        <h3 className="text-[#6D011C] font-[500] text-[24px] leading-snug">
          Larger subscriptions
        </h3>
        <p className="text-[#4B5563] text-[16px] font-poppins">
          Subscriptions with more than 1,000 members have the same features as the Max subscription.
          For more than 10,000 members, send an email to{" "}
          <a href="mailto:support@Clubmeister.ch" className="underline text-[#6D011C]">
            support@Clubmeister.ch
          </a>.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-[20px] shadow-md p-6 lg:px-[40px] lg:py-[60px] max-w-[380px] items-center text-center space-y-4">
        <Image src={icon3} alt="Icon" width={48} height={48} className="mx-auto" />
        <h3 className="text-[#6D011C] font-[500] text-[24px] leading-snug">
          Subscriptions in euros
        </h3>
        <p className="text-[#4B5563] text-[16px] font-poppins">
          Are you from the EU? Click here for{" "}
          <span className="underline text-[#6D011C]">subscriptions in euros</span>
        </p>
      </div>
    </div>
  </div>

  <div className="lg:block hidden absolute top-[70%] left-1/2 transform -translate-x-1/2 w-full z-10 px-4">
    <div className="flex flex-col md:flex-row justify-center gap-6">
      {/* Card 1 */}
      <div className="bg-white rounded-[20px] shadow-md p-6 lg:px-[40px] lg:py-[60px] max-w-[380px] text-center space-y-4">
        <Image src={icon1} alt="Icon" width={48} height={48} className="mx-auto" />
        <h3 className="text-[#6D011C] font-[500] text-[24px] leading-snug">
          Which subscription is <br /> right for you?
        </h3>
        <p className="text-[#4B5563] text-[16px] font-poppins">
          Check how many member addresses you have and choose the plan with the next largest number of members.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-[20px] shadow-md p-6 lg:px-[40px] lg:py-[60px] max-w-[380px] text-center space-y-4">
        <Image src={icon2} alt="Icon" width={48} height={48} className="mx-auto" />
        <h3 className="text-[#6D011C] font-[500] text-[24px] leading-snug">
          Larger subscriptions
        </h3>
        <p className="text-[#4B5563] text-[16px] font-poppins">
          Subscriptions with more than 1,000 members have the same features as the Max subscription.
          For more than 10,000 members, send an email to{" "}
          <a href="mailto:support@Clubmeister.ch" className="underline text-[#6D011C]">
            support@Clubmeister.ch
          </a>.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-[20px] shadow-md p-6 lg:px-[40px] lg:py-[60px] max-w-[380px] items-center text-center space-y-4">
        <Image src={icon3} alt="Icon" width={48} height={48} className="mx-auto" />
        <h3 className="text-[#6D011C] font-[500] text-[24px] leading-snug">
          Subscriptions in euros
        </h3>
        <p className="text-[#4B5563] text-[16px] font-poppins">
          Are you from the EU? Click here for{" "}
          <span className="underline text-[#6D011C]">subscriptions in euros</span>
        </p>
      </div>
    </div>
  </div>
</div>

      </section>
    </Layout>
  );
};

export default Demo;
