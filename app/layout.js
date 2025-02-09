import {  Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
 
const inter = Inter({subsets: ['latin']});

 

export const metadata = {
  title: "welth",
  description: "one stop for  financial platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${inter.className} `}
      >
        {/* {Headers} */}
        <Header />
        {/* {Main Content} */}
        <main className="min-h-screen">{children}</main>
       
        {/* {Footers} */}
        <footer className="bg-blue-50 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
             <p>Made With ❤️ by Shubham mishra.</p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
