import Link from "next/link";
import { Phone, MapPin, Instagram, Facebook, Clock } from "lucide-react";
import Logo from "./Logo";

const services = [
  "Albire Dentară",
  "Fațete Dentare",
  "Coroane din Zirconiu",
  "Implant Dentar",
  "Igienizare & Detartraj",
  "Chirurgie Orală",
  "Ortodonție",
  "Estetică Dentară",
];

const pages = [
  { href: "/", label: "Acasă" },
  { href: "/servicii", label: "Servicii" },
  { href: "/despre-noi", label: "Despre Noi" },
  { href: "/galerie", label: "Galerie" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-plum-deep text-white">
      {/* Top CTA strip */}
      <div className="bg-pink-gradient py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white/80 text-sm uppercase tracking-widest font-medium mb-1">
              Zâmbetul tău, expertiza noastră
            </p>
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-white">
              Programează-te astăzi
            </h3>
          </div>
          <a
            href="tel:0771438955"
            className="flex items-center gap-3 bg-white text-brand-pink font-bold text-xl px-8 py-4 rounded-full hover:bg-brand-cream transition-colors shadow-2xl"
          >
            <Phone size={22} />
            0771 438 955
          </a>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center gap-3 mb-6 group">
            <Logo className="h-12 w-12" />
            <div>
              <div className="font-playfair text-base font-bold leading-tight">
                Dental Beauty
              </div>
              <div className="text-brand-pink text-[10px] tracking-[0.25em] uppercase font-medium">
                Design Constanța
              </div>
            </div>
          </Link>
          <p className="text-white/50 text-sm leading-relaxed mb-6">
            Cabinet de medicină dentară & estetică orală. Implantologie, Protetică, Chirurgie orală.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/dental__beauty__design/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:border-brand-pink hover:text-brand-pink transition-colors"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100063062808139"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:border-brand-pink hover:text-brand-pink transition-colors"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>

        {/* Pages */}
        <div>
          <h4 className="text-xs tracking-[0.25em] uppercase text-brand-pink font-semibold mb-6">
            Navigare
          </h4>
          <ul className="space-y-3">
            {pages.map((page) => (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className="text-white/55 text-sm hover:text-white transition-colors hover:pl-1 inline-block"
                >
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xs tracking-[0.25em] uppercase text-brand-pink font-semibold mb-6">
            Servicii
          </h4>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s}>
                <Link
                  href="/servicii"
                  className="text-white/55 text-sm hover:text-white transition-colors hover:pl-1 inline-block"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs tracking-[0.25em] uppercase text-brand-pink font-semibold mb-6">
            Contact
          </h4>
          <ul className="space-y-5">
            <li className="flex items-start gap-3">
              <MapPin
                size={16}
                className="text-brand-pink mt-0.5 flex-shrink-0"
              />
              <p className="text-white/55 text-sm leading-relaxed">
                Bulevardul Alexandru Lăpușneanu 106,
                <br />
                bl. L1, sc. B, 900407 Constanța
              </p>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-brand-pink flex-shrink-0" />
              <a
                href="tel:0771438955"
                className="text-white/55 text-sm hover:text-brand-pink transition-colors"
              >
                0771 438 955
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock
                size={16}
                className="text-brand-pink mt-0.5 flex-shrink-0"
              />
              <div className="text-white/55 text-sm leading-relaxed">
                <p>Luni – Vineri: 09:00 – 19:00</p>
                <p>Sâmbătă: 09:00 – 14:00</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8 px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-white/30 text-xs">
          <p>
            © {new Date().getFullYear()} Dental Beauty Design Constanța. Toate drepturile rezervate.
          </p>
          <p>
            Cabinet de Medicină Dentară & Estetică Orală
          </p>
        </div>
      </div>
    </footer>
  );
}
