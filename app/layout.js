export const metadata = {
  title: "Welcome / The Wild Oasis",
  description: "Welcome to the wild oasis. A paradise on earth.",
};

import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import "@/app/_styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-primary-100 bg-primary-950 min-h-screen">
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
