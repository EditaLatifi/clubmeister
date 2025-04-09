import React from "react";
import Layout from "./Layout/Layout"; // Kontrollo rrugën e saktë të komponentit Layout nëse e ke të përfshirë.

import Image from "next/image";


const Home = () => {

  return (
    <Layout>
      <section className="bg-white">
        <div className="relative w-full h-[300px] md:h-[400px]">
          <Image
            src="/slideImage/car.webp" 
            alt="Rreth Nesh"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold uppercase">
         dd
            </h1>
          </div>
        </div>

      </section>
      <section className="max-w-screen-2xl mx-auto p-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start px-4 md:px-12 lg:px-24 py-12 gap-8">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-6">  eqwe</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
       eqwe
            </p>

          </div>

          <div className="relative flex-1">
            <div className="w-full h-auto relative rounded-tl-[150px] rounded-br-[150px] overflow-hidden shadow-lg">
              <Image
                src="" 
                alt="Villa Rexhes"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    
    </Layout>
  );
};

export default Home;
