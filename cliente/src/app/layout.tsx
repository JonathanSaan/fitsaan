import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const oswald = Oswald({
  weight: "500",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "fitsaan",
  description: "Welcome to Fitsaan, the ultimate hub for the fitness and wellness community! This isn't just an exercise website; it's a dynamic environment where enthusiasts come together to train, motivate, and progress collectively. Envision a virtual space where you can create, share, and engage in personalized workouts, connect with other members, and establish challenges that propel everyone towards new achievements.",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <NextTopLoader color="#da272c" showSpinner={false}/>
        {children}
      </body>
    </html>
  );
}
