import type { Metadata } from "next";
import { Noto_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  weight: ["400", "500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://al-toque-dun.vercel.app/'), // Temporal hasta tener el dominio
  title: {
    default: "Al Toque | Cafetería en Ferrol",
    template: "%s | Al Toque"
  },
  description: "Tu parada rápida y sabrosa en el corazón de Ferrol. Cafetería Pet Friendly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${notoSerif.variable} ${plusJakartaSans.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
