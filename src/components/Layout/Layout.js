import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>R&R Rent A Car - Affordable & Reliable Car Rentals</title>
        <meta
          name="description"
          content="Explore R&R Rent A Car for affordable and reliable car rentals. Book your vehicle today and enjoy exceptional service and a smooth ride!"
        />
        <meta
          name="keywords"
          content="R&R Rent A Car, car rentals, affordable cars, reliable car hire, rent a car Kosovo, vehicle rental service"
        />
        <meta property="og:title" content="R&R Rent A Car - Affordable & Reliable Car Rentals" />
        <meta
          property="og:description"
          content="Explore R&R Rent A Car for affordable and reliable car rentals. Book your vehicle today and enjoy exceptional service and a smooth ride!"
        />
        <meta property="og:image" content="/logo.png" /> {/* Replace with the path to your OG image */}
        <meta property="og:url" content="https://rr-rentacar.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="R&R Rent A Car - Affordable & Reliable Car Rentals" />
        <meta
          name="twitter:description"
          content="Explore R&R Rent A Car for affordable and reliable car rentals. Book your vehicle today and enjoy exceptional service and a smooth ride!"
        />
        <meta name="twitter:image" content="/logo.png" /> {/* Replace with the path to your Twitter image */}
        <link rel="icon" href="/logo.png" /> {/* Replace with your favicon */}
        <link rel="canonical" href="https://rr-rentacar.com" />
      </Head>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
