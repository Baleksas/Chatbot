import Head from "next/head";
import React from "react";

const Header = ({ title }) => {
  return (
    <Head>
      <title>{title} | by alex</title>
      <meta name="description" content={`${title} | by alex`} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Header;
