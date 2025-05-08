import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

export const metadata = {
  title: "Mon Abi Gabi",
  description: "A Classic French Bistro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} antialiased`}
        >
          <Nav />
          {children}
          <Footer />
        </body>
    </html>
  );
}
