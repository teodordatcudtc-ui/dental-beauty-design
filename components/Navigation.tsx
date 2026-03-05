"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, Instagram } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Acasă" },
  { href: "/servicii", label: "Servicii" },
  { href: "/despre-noi", label: "Despre Noi" },
  { href: "/galerie", label: "Galerie" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isHomePage = pathname === "/";
  // light nav = homepage + neScrollat (hero alb)
  const isLight = isHomePage && !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isLight
            ? "bg-white border-b border-gray-100 shadow-sm"
            : "bg-plum-deep/97 backdrop-blur-lg shadow-xl shadow-black/30"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Logo className="h-11 w-11 transition-transform duration-300 group-hover:scale-105" />
            <div className="hidden sm:block">
              <div className={`font-playfair text-sm font-bold leading-tight tracking-wide ${isLight ? "text-gray-900" : "text-white"}`}>
                Dental Beauty
              </div>
              <div className="text-brand-pink text-[10px] tracking-[0.25em] uppercase font-medium">
                Design Constanța
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative text-sm font-semibold tracking-wide transition-colors duration-200 group ${
                    pathname === link.href
                      ? "text-brand-pink"
                      : isLight
                      ? "text-gray-900 hover:text-brand-pink"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-brand-pink transition-all duration-300 ${
                      pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + Social + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/dental__beauty__design/"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:flex items-center transition-colors hover:text-brand-pink ${isLight ? "text-gray-500" : "text-white/50"}`}
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>

            <a
              href="tel:0771438955"
              className="hidden md:flex items-center gap-2 bg-brand-pink text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-brand-magenta transition-all duration-300 hover:shadow-lg hover:shadow-brand-pink/30 tracking-wide"
            >
              <Phone size={14} />
              0771 438 955
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2 transition-colors hover:text-brand-pink ${isLight ? "text-gray-900" : "text-white"}`}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 z-40 bg-plum-deep transition-all duration-500 lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-pink/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-brand-purple/10 rounded-full blur-2xl" />

        <div className="relative flex flex-col h-full pt-24 px-8 pb-12">
          <ul className="space-y-1 flex-1">
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                className={`transition-all duration-300 ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                style={{ transitionDelay: menuOpen ? `${i * 80}ms` : "0ms" }}
              >
                <Link
                  href={link.href}
                  className={`block py-4 text-3xl font-playfair font-bold border-b border-white/10 transition-colors ${
                    pathname === link.href ? "text-brand-pink" : "text-white hover:text-brand-pink"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="space-y-3">
            <a
              href="tel:0771438955"
              className="flex items-center justify-center gap-3 bg-brand-pink text-white py-4 rounded-2xl font-semibold tracking-wide"
            >
              <Phone size={18} />
              0771 438 955
            </a>
            <a
              href="https://www.instagram.com/dental__beauty__design/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 border border-white/20 text-white/70 py-4 rounded-2xl font-medium"
            >
              <Instagram size={18} />
              @dental__beauty__design
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
