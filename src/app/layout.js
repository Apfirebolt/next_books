import { Geist, Geist_Mono } from "next/font/google";
import Header from "../components/header";
import Footer from "../components/footer";
import AuthProvider from "@/components/AuthProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Books App",
  description: "List of books and authors from an API",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">

        <body>
          <Header />
          <div
            className={`${geistSans.variable} ${geistMono.variable} font-sans`}
          >
            {children}
          </div>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}