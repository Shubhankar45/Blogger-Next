import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/Components/Footer";

// Use only one overlay font
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export const metadata = {
  title: "Blogger",
  description: "An app for Bloggers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
             
        {children}
        <Footer/>

      </body>
    </html>
  );
}
