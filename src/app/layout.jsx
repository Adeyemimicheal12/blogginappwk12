import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blogging app",
  description: "It is just a website which blog about sport,game,eduaction,technology and Fashion to people.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <div className="min-h-[80vh]">
        {children}
        </div>
            <Footer/>
            

        </body>
    </html>
  );
}
