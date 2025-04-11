import React from 'react';

const PricingSection1 = () => {
  return (
    <section className="max-w-[1350px] mx-auto px-4 mb-[180px]">  {/* Container: centered with some horizontal padding */}
      {/* Grid layout: 1 column on mobile, 2 columns on large screens */}
      <div className="text-center mb-[40px]">
        <h2 className="text-[48px] font-bold text-[#0F172A] font-poppins">
          Features <span className="text-[#6D011C]">& Benefits</span>
        </h2>
        <p className="text-[#1E1E1E] text-[20px] font-poppins mt-1">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[740px_minmax(0,1fr)] gap-6">
        {/* Card 1 */}
        <div className="bg-white h-[243px] py-[14px] px-[25px] rounded-[25px] [box-shadow:0_0_4px_0_rgba(0,0,0,0.25)] 
                        flex items-center gap-[25px] w-full lg:w-[740px]">
          {/* Icon circle */}
          <div className="w-[60px] h-[60px] rounded-full bg-[#6D011C] flex items-center justify-center">
            <img src="/icon-users.png" alt="Users Icon" className="w-8 h-8" />
          </div>
          {/* Vertical divider line */}
          <div className="w-px bg-gray-300 self-stretch"></div>
          {/* Text content */}
          <div>
            <h3 className="text-[20px] lg:text-[32px] font-semibold text-[#6D011C] mb-2">
              Which subscription is for you?
            </h3>
            <p className="text-gray-600 text-[14px] lg:text-[24px]">
              Check how many member addresses you have<br></br> and choose the plan with the next largest<br></br> number of members.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white h-[243px] py-[14px] px-[25px] rounded-[25px] [box-shadow:0_0_4px_0_rgba(0,0,0,0.25)] 
                        flex items-center gap-[25px] w-full">
          {/* Icon circle */}
          <div className="w-[60px] h-[60px] rounded-full bg-[#6D011C] flex items-center justify-center">
            <img src="/icon-currency.png" alt="Currency Icon" className="w-8 h-8" />
          </div>
          {/* Vertical divider */}
          <div className="w-px bg-gray-300 self-stretch"></div>
          {/* Text content */}
          <div>
            <h3 className="text-[20px] lg:text-[32px] font-semibold text-[#6D011C] mb-2">
              Subscriptions in euros
            </h3>
            <p className="text-gray-600 text-[14px] lg:text-[24px]">
              Are you from the EU? Click<br></br> here for <a href="#" className=" underline">subscriptions in euros</a>
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white h-[243px] py-[14px] px-[25px] rounded-[25px] [box-shadow:0_0_4px_0_rgba(0,0,0,0.25)] 
                        flex items-center gap-[25px] w-full lg:col-span-2">
          {/* Icon circle */}
          <div className="w-[60px] h-[60px] rounded-full bg-[#6D011C] flex items-center justify-center">
            <img src="/icon-users.png" alt="Users Icon" className="w-8 h-8" />
          </div>
          {/* Vertical divider */}
          <div className="w-px bg-gray-300 self-stretch"></div>
          {/* Text content */}
          <div>
            <h3 className="text-[20px] lg:text-[32px] font-semibold text-[#6D011C] mb-2">
              Larger subscriptions
            </h3>
            <p className="text-gray-600 text-[14px] lg:text-[24px] lg:block hidden ">
              Subscriptions with more than 1,000 members have the same features as the Max subscription. <br></br>
              For subscriptions with more than 10,000 members, send an email to <a href="mailto:support@Clubmeister.ch" className=" underline">support@Clubmeister.ch</a>.
            </p>
            <p className="text-gray-600 text-[14px] lg:text-[24px] lg:hidden block">
              Subscriptions with more than<br></br> 1,000 members have the same<br></br> features as the Max subscription.<br></br> 
              For subscriptions with more <br></br>than 10,000 members,<br></br> send an email to <a href="mailto:support@Clubmeister.ch" className=" underline">support@Clubmeister.ch</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection1;
