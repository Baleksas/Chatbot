import Head from "next/head";
import React from "react";

const Header = ({ title }: any) => {
  return (
    <Head>
      <title>YOU VS AI| by alex</title>
      <meta name="description" content={`YOU VS AI | by alex`} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Header;
