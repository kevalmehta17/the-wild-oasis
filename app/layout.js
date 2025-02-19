export const metadata = {
  title: "Welcome / The Wild Oasis",
  description: "Experience the ultimate luxury at The Wild Oasis, a premier cabin hotel nestled in nature's embrace. Enjoy unparalleled comfort and breathtaking views.",
};

import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
})
console.log(josefin);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefin.className} text-primary-100 bg-primary-950 min-h-screen`}>
        <header>
          <Logo />
          <Navigation />
        </header>

        <main>{children}</main>
        <footer>Copyright by Me</footer>
      </body>
    </html>
  );
}
