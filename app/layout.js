export const metadata = {
  title: "Welcome / The Wild Oasis",
  description: "Experience the ultimate luxury at The Wild Oasis, a premier cabin hotel nestled in nature's embrace. Enjoy unparalleled comfort and breathtaking views.",
};

import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
})
console.log(josefin);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefin.className} antialiased text-primary-100 bg-primary-950 min-h-screen flex flex-col`}>
        <Header />
        <div className="flex-1 px-8 py-12">
          <main className="max-w-7xl mx-auto bg-red-400">{children}</main>
        </div>
      </body>
    </html>
  );
}
