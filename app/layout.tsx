import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ascone | Change the way you use your money",
  description:
    "From your everyday spending, to planning for your future with savings and investments. Ascone helps you get more from your money.",
  openGraph: {
    title: "Ascone | Change the way you use your money",
    description:
      "From your everyday spending, to planning for your future with savings and investments.",
    type: "website",
  },
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="en" className="scroll-smooth">
    <body className="antialiased">{children}</body>
  </html>
);

export default RootLayout;
