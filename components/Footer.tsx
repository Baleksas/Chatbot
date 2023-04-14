import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";
import NextLink from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <NextLink href="https://aleksas.dev/" target="_blank">
        Made by
        <span className={styles.logo}>
          <Image src="/logo.png" alt="Alex logo" width={60} height={30} />
        </span>
      </NextLink>
      <code
        style={{
          textAlign: "center",
        }}
      >
        <span style={{ lineHeight: 1.5 }}>
          Also try:
          <NextLink href="https://game-spot.netlify.app/" target="_blank">
            <b>gamespot</b>
          </NextLink>
        </span>
      </code>
    </footer>
  );
};

export default Footer;
