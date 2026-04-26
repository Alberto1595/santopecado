import type { Metadata } from "next";
import { Cinzel, Cinzel_Decorative, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { negocio } from "@/config";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cinzel",
});

const cinzelDeco = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-cinzel-deco",
});

const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-baskerville",
});

export const metadata: Metadata = {
  title: `${negocio.nombre} — Menú`,
  description: negocio.tagline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${cinzel.variable} ${cinzelDeco.variable} ${baskerville.variable} font-baskerville`}>
        {children}
      </body>
    </html>
  );
}
