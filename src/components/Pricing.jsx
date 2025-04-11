import React from "react";
import Layout from "./Layout/Layout"; 

import Image from "next/image";
import HeroPricing from "./Pricing/HeroPricing";
import PricingSection1 from "./Pricing/PricingSection1";
import PricingSection2 from "./Pricing/PricingSection2";
import PricingSection3 from "./Pricing/PricingSection3";
import PricingSection4 from "./Pricing/PricingSection4";
import Section7 from "./Homepage/Section7";




const Pricing = () => {

  return (
    <Layout>
     <HeroPricing />
    <PricingSection1 />
    <PricingSection2 />
    <PricingSection3 />
    <PricingSection4 />
    <Section7 />
    </Layout>
  );
};

export default Pricing;
