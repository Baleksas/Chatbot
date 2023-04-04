import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import "../styles/globals.css";
import Header from "../components/Header";
import ContextProvider from "../context/provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {/* <Header /> */}
        <ContextProvider>{children}</ContextProvider>
        <Footer />
      </body>
    </html>
  );
}
