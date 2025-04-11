import React from "react";
import Layout from "./Layout/Layout"; // Kontrollo rrugën e saktë të komponentit Layout nëse e ke të përfshirë.

import Image from "next/image";
import Hero from "./Homepage/Hero";
import Section2 from "./Homepage/Section2";
import Section3 from "./Homepage/Section3";
import Section4 from "./Homepage/Section4";
import Section5 from "./Homepage/Section5";
import Section7 from "./Homepage/Section7";
import Section8 from "./Homepage/Section8";


const Home = () => {

  return (
    <Layout>
   <Hero />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section8 />
    <Section7 />
    </Layout>
  );
};

export default Home;
