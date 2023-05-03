"use client";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import "../styles/globals.css";
import Header from "../components/Header";
import ContextProvider from "../context/provider";
import { Container } from "@mui/material";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {/* <Header /> */}
        <ContextProvider>
          <Container maxWidth="lg">{children}</Container>
        </ContextProvider>
        <Footer />
      </body>
    </html>
  );
}
