import Header from "../components/Header";
import Footer from "../components/Footer";
import type { AppProps } from "next/app";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Header title="YOU VS AI" />
      <body>{children}</body>
      <Footer />
    </html>
  );
}
import "../styles/globals.css";
