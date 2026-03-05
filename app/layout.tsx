import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "700", "900"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Dental Beauty Design Constanta | Cabinet Stomatologic Premium",
    template: "%s | Dental Beauty Design",
  },
  description:
    "Cabinet de medicină dentară & estetică orală în Constanța. Implantologie, Protetică, Chirurgie orală, Albire dentară, Fațete, Coroane. Zâmbetul tău, expertiza noastră.",
  keywords: [
    "stomatologie constanta",
    "dentist constanta",
    "albire dentara",
    "implant dentar",
    "fatete dentare",
    "coroane zirconiu",
    "cabinet stomatologic constanta",
    "dental beauty design",
  ],
  openGraph: {
    title: "Dental Beauty Design Constanta",
    description: "Cabinet de medicină dentară & estetică orală în Constanța.",
    locale: "ro_RO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ro"
      className={`${playfair.variable} ${dmSans.variable}`}
    >
      <body className="font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
