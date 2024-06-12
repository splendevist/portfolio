import { Quicksand } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

const quicksand = Quicksand({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Portfolio",
  description: "Lucy Holmes web development portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <div className="h-screen">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
