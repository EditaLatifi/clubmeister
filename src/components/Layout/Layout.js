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
        <title>Clubmeister</title>
        <meta
          name="description"
          content=" !"
        />
        <meta
          name="keywords"
          content="CM"
        />
        <meta property="og:title" content="Clubmeister" />
        <meta
          property="og:description"
          content="Explore R&R Rent A Car for affordable and reliable car rentals. Book your vehicle today and enjoy exceptional service and a smooth ride!"
        />
        <meta property="og:image" content="/public/logo.png" /> {/* Replace with the path to your OG image */}
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Clubmeister" />
        <meta
          name="twitter:description"
          content="Clubmeister"
        />
        <meta name="twitter:image" content="/logo.png" /> {/* Replace with the path to your Twitter image */}
        <link rel="icon" href="/public/logo.png" /> {/* Replace with your favicon */}
        <link rel="canonical" href="Clubmeister" />
      </Head>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
