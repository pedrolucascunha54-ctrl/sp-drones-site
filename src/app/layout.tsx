import type { Metadata } from "next";
import { Inter, Anton, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SP Drones | Pulverização Aérea Agrícola em Lavras, MG",
  description:
    "Pulverização aérea com drone DJI Agras T50 em Lavras-MG. Aplicação de precisão, redução de desperdício e mais produtividade para sua lavoura. Fale no WhatsApp.",
  openGraph: {
    title: "SP Drones | Pulverização Aérea Agrícola",
    description:
      "Pulverização aérea com drone DJI Agras T50 em Lavras-MG. Aplicação de precisão e mais produtividade.",
    images: ["/images/WhatsApp Image 2026-06-25 at 11.23.09 AM.jpeg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${anton.variable} ${spaceMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col font-sans text-ink bg-cloud antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
