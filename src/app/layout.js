import { Inter } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Lucy Holmes web development portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen">
        <Header />
        {children}
      </body>
    </html>
  );
}
