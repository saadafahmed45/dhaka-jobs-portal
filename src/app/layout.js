import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ContextProvider } from "./Context/Contex";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Discover the best job",
  description: "Best place to choose your Job",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ContextProvider>
          <Navbar />
          <ToastContainer />
          {children}
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}
