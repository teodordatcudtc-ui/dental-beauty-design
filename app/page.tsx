import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  ArrowRight,
  Star,
  CheckCircle2,
  Sparkles,
  Shield,
  Heart,
  Zap,
  Instagram,
} from "lucide-react";
import Logo from "@/components/Logo";

const services = [
  {
    num: "01",
    title: "Albire Dentară",
    desc: "Albire profesională cu sisteme avansate. Rezultate vizibile din prima ședință.",
    icon: "✦",
  },
  {
    num: "02",
    title: "Fațete Dentare",
    desc: "Fațete ceramice sau din compozit pentru un zâmbet perfect și natural.",
    icon: "◈",
  },
  {
    num: "03",
    title: "Coroane Zirconiu",
    desc: "Coroane estetice și durabile, cu rezistență maximă și aspect natural.",
    icon: "◇",
  },
  {
    num: "04",
    title: "Implant Dentar",
    desc: "Soluția permanentă pentru dinții lipsă. Titan biologic, rată de succes 98%.",
    icon: "⟁",
  },
  {
    num: "05",
    title: "Igienizare & Detartraj",
    desc: "Curățare profesională. Baza oricărui tratament stomatologic de calitate.",
    icon: "◉",
  },
  {
    num: "06",
    title: "Chirurgie Orală",
    desc: "Extracții, rezecții, implantologie. Proceduri sigure, confort maxim.",
    icon: "✧",
  },
];

const testimonials = [
  {
    name: "Andreea M.",
    text: "Am venit pentru albire dentară și sunt uimită de rezultate. Personalul este extrem de profesionist și cabineta este impecabilă.",
    rating: 5,
    procedure: "Albire Dentară",
  },
  {
    name: "Cristian P.",
    text: "Am pus implant dentar și experiența a fost cu totul alta față de ce mă așteptam. Nu am simțit nicio durere și rezultatul e perfect.",
    rating: 5,
    procedure: "Implant Dentar",
  },
  {
    name: "Maria T.",
    text: "Fațetele dentare mi-au schimbat zâmbetul complet. Acum mă simt cu adevărat frumoasă. Mulțumesc echipei Dental Beauty Design!",
    rating: 5,
    procedure: "Fațete Dentare",
  },
];

const values = [
  {
    icon: Shield,
    title: "Siguranță",
    desc: "Echipamente de ultimă generație, sterilizare conform standardelor europene.",
  },
  {
    icon: Sparkles,
    title: "Estetică",
    desc: "Fiecare detaliu contează. Perfecționăm zâmbetul tău cu precizie artistică.",
  },
  {
    icon: Heart,
    title: "Empatie",
    desc: "Te înțelegem. Tratăm fiecare pacient cu grijă, răbdare și respect.",
  },
  {
    icon: Zap,
    title: "Eficiență",
    desc: "Rezultate maxime în timp minim. Respectăm programările și timpul tău.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen bg-white flex items-center overflow-hidden diagonal-bottom">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full bg-brand-pink/8 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full bg-brand-purple/6 blur-3xl" />
          <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-brand-mint/20 blur-3xl" />
          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(212,49,122,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,49,122,1) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
          {/* Diagonal accent lines */}
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-brand-pink/15 to-transparent rotate-12" />
          <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-brand-pink/8 to-transparent -rotate-6" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[1.15fr,0.85fr] gap-10 items-center pt-28 pb-32">
          {/* Left: Typography – mai la stânga */}
          <div className="lg:pr-4">
            <h1 className="font-playfair leading-[1.02] mb-6">
              <span className="block text-[clamp(3rem,8vw,5.5rem)] font-bold text-plum-deep">
                Dental Beauty
              </span>
              <span className="block text-[clamp(3rem,8vw,5.5rem)] font-bold text-gradient-pink">
                Design
              </span>
            </h1>

            <p className="text-plum-deep/60 text-lg max-w-lg mb-10 leading-relaxed">
              Zâmbetul tău, expertiza noastră. Medicina dentară modernă
              întâlnește arta estetică — pentru un zâmbet care inspiră
              încredere.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/contact" className="btn-primary">
                Programare gratuită
                <ArrowRight size={16} />
              </Link>
              <Link href="/servicii" className="btn-outline-dark">
                Servicii
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex gap-10">
              {[
                { val: "10+", label: "Ani Experiență" },
                { val: "1000+", label: "Pacienți" },
                { val: "98%", label: "Satisfacție" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-playfair text-3xl font-bold text-brand-pink">
                    {s.val}
                  </div>
                  <div className="text-plum-deep/40 text-xs tracking-wide mt-0.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Photo */}
          <div className="hidden lg:block relative">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-brand-pink/15">
              <Image
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=700&fit=crop&q=80"
                alt="Zâmbet frumos – Dental Beauty Design Constanța"
                fill
                className="object-cover"
                priority
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-plum-deep/30 via-transparent to-transparent" />
            </div>

            {/* Floating stat cards */}
            <div className="absolute -top-5 -left-6 bg-white rounded-2xl shadow-xl shadow-brand-pink/15 p-5 text-center min-w-[120px] animate-float">
              <div className="font-playfair text-3xl font-bold text-brand-pink">10+</div>
              <div className="text-plum-deep/50 text-xs mt-1">Ani Experiență</div>
            </div>
            <div
              className="absolute -bottom-5 -right-6 bg-white rounded-2xl shadow-xl shadow-brand-pink/15 p-5 text-center min-w-[130px] animate-float"
              style={{ animationDelay: "1.8s" }}
            >
              <div className="font-playfair text-3xl font-bold text-brand-pink">1000+</div>
              <div className="text-plum-deep/50 text-xs mt-1">Pacienți Mulțumiți</div>
            </div>

            {/* Pink accent border */}
            <div className="absolute -bottom-3 -left-3 w-24 h-24 rounded-2xl border-4 border-brand-pink/20 -z-10" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-plum-deep/25">
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-plum-deep/25 to-transparent" />
        </div>
      </section>

      {/* ── MARQUEE STRIP ──────────────────────────────────────── */}
      <section className="bg-brand-pink py-4 overflow-hidden">
        <div className="marquee-track gap-0">
          {Array(8)
            .fill(null)
            .map((_, i) => (
              <span
                key={i}
                className="flex items-center gap-0 text-white font-semibold text-sm tracking-widest uppercase whitespace-nowrap px-8"
              >
                ALBIRE DENTARĂ
                <span className="mx-6 text-white/40">◆</span>
                IMPLANTE
                <span className="mx-6 text-white/40">◆</span>
                FAȚETE CERAMICE
                <span className="mx-6 text-white/40">◆</span>
                COROANE ZIRCONIU
                <span className="mx-6 text-white/40">◆</span>
                IGIENIZARE
                <span className="mx-6 text-white/40">◆</span>
                ESTETICĂ ORALĂ
                <span className="mx-6 text-white/40">◆</span>
              </span>
            ))}
        </div>
      </section>

      {/* ── SERVICES PREVIEW ───────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="section-label mb-4">Ce facem noi</p>
              <h2 className="heading-xl text-plum-deep">
                Servicii de
                <br />
                <span className="text-gradient-pink">excelență dentară</span>
              </h2>
            </div>
            <Link
              href="/servicii"
              className="group flex items-center gap-2 text-brand-pink font-medium text-sm tracking-wide hover:gap-4 transition-all"
            >
              Vezi toate serviciile
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
            {services.map((service, i) => (
              <Link
                key={i}
                href="/servicii"
                className="bg-white p-8 group hover:bg-plum-deep transition-all duration-500 cursor-pointer block"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-3xl text-brand-pink/30 group-hover:text-brand-pink/50 transition-colors font-playfair select-none">
                    {service.icon}
                  </span>
                  <span className="text-xs text-gray-300 group-hover:text-white/20 transition-colors font-mono tracking-widest">
                    {service.num}
                  </span>
                </div>
                <h3 className="font-playfair text-xl font-bold text-plum-deep group-hover:text-white transition-colors mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 group-hover:text-white/60 transition-colors text-sm leading-relaxed">
                  {service.desc}
                </p>
                <div className="mt-6 flex items-center gap-2 text-brand-pink text-xs font-semibold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Află mai mult</span>
                  <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROMO BANNER ───────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="bg-pink-gradient diagonal-both py-24 px-6">
          {/* Texture overlay */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
          <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-white/70 text-xs font-semibold tracking-[0.4em] uppercase mb-4">
                Oferta de Primăvară
              </p>
              <h2 className="font-playfair text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                Igienizare
                <br />& Albire
                <br />
                <span className="text-white/30">Dentară</span>
              </h2>
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-brand-mint/20 border border-brand-mint/40 rounded-full px-6 py-3">
                  <span className="text-white font-bold text-3xl font-playfair">
                    400 LEI
                  </span>
                </div>
                <span className="text-white/50 text-sm">Pachet complet</span>
              </div>
              <ul className="space-y-3 mb-10">
                {[
                  "Igienizare profesională completă",
                  "Albire cu sistem avansat",
                  "Consultație inclusă",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/80 text-sm">
                    <CheckCircle2 size={16} className="text-brand-mint flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-brand-pink font-bold px-8 py-4 rounded-full hover:bg-brand-cream transition-colors text-sm tracking-wide uppercase shadow-2xl"
              >
                Rezervă acum
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                {/* Big decorative price circle */}
                <div className="w-72 h-72 rounded-full bg-white/10 border-2 border-white/20 flex flex-col items-center justify-center text-center backdrop-blur-sm">
                  <p className="text-white/60 text-xs tracking-widest uppercase mb-2">
                    Doar
                  </p>
                  <p className="font-playfair text-7xl font-bold text-white leading-none">
                    400
                  </p>
                  <p className="text-white text-2xl font-semibold mt-1">LEI</p>
                  <p className="text-white/50 text-xs mt-3 tracking-wide">
                    Igienizare + Albire
                  </p>
                </div>
                <div className="absolute -top-4 -right-4 bg-brand-mint/30 border border-brand-mint/50 rounded-xl px-4 py-2 text-white font-semibold text-sm backdrop-blur-sm">
                  Ofertă Limitată
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY US ─────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-plum-deep relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-pink/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-purple/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-label mb-4">De ce Dental Beauty Design</p>
            <h2 className="heading-xl text-white">
              Valorile care
              <br />
              <span className="text-gradient-pink">ne definesc</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group border border-white/8 rounded-2xl p-8 hover:border-brand-pink/40 hover:bg-white/5 transition-all duration-400"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-pink/15 border border-brand-pink/20 flex items-center justify-center mb-6 group-hover:bg-brand-pink/25 transition-colors">
                  <Icon size={22} className="text-brand-pink" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-white mb-3">
                  {title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLINIC PHOTOS STRIP ────────────────────────────────── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <p className="section-label mb-3">Clinica noastră</p>
              <h3 className="heading-md text-plum-deep">
                Un mediu <span className="text-gradient-pink">premium</span> pentru tine
              </h3>
            </div>
            <Link href="/galerie" className="group flex items-center gap-2 text-brand-pink text-sm font-medium hover:gap-4 transition-all">
              Vezi galeria completă <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Mare stânga */}
            <div className="md:col-span-2 relative h-72 md:h-80 rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=900&h=500&fit=crop&q=80"
                alt="Cabinet stomatologic Dental Beauty Design Constanța"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum-deep/40 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <p className="text-white font-semibold text-sm">Sala de Tratament</p>
                <p className="text-white/60 text-xs">Echipamente de ultimă generație</p>
              </div>
            </div>

            {/* Dreapta: 2 poze stivuite */}
            <div className="flex flex-col gap-4">
              <div className="relative h-36 rounded-2xl overflow-hidden shadow-lg group">
                <Image
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&h=300&fit=crop&q=80"
                  alt="Medic stomatolog Dental Beauty Design"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <p className="text-white font-semibold text-xs">Echipa Noastră</p>
                </div>
              </div>
              <div className="relative h-36 rounded-2xl overflow-hidden shadow-lg group">
                <Image
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=500&h=300&fit=crop&q=80"
                  alt="Rezultate albire dentară"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-pink/40 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <p className="text-white font-semibold text-xs">Rezultate Reale</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE REVERSE ────────────────────────────────────── */}
      <section className="bg-plum-mid py-4 overflow-hidden border-y border-brand-pink/20">
        <div className="marquee-track-reverse gap-0">
          {Array(8)
            .fill(null)
            .map((_, i) => (
              <span
                key={i}
                className="flex items-center gap-0 text-white/20 font-light text-sm tracking-[0.3em] uppercase whitespace-nowrap px-8"
              >
                ZÂMBET FRUMOS
                <span className="mx-6 text-brand-pink/50">·</span>
                SĂNĂTATE ORALĂ
                <span className="mx-6 text-brand-pink/50">·</span>
                ÎNCREDERE
                <span className="mx-6 text-brand-pink/50">·</span>
                CONSTANȚA
                <span className="mx-6 text-brand-pink/50">·</span>
                PROFESIONALISM
                <span className="mx-6 text-brand-pink/50">·</span>
              </span>
            ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Recenzii Pacienți</p>
            <h2 className="heading-xl text-plum-deep">
              Ce spun
              <br />
              <span className="text-gradient-pink">pacienții noștri</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-brand-cream border border-gray-100 rounded-3xl p-8 group hover:shadow-2xl hover:shadow-brand-pink/10 transition-all duration-400 hover:-translate-y-1"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array(t.rating)
                    .fill(null)
                    .map((_, j) => (
                      <Star
                        key={j}
                        size={16}
                        className="text-brand-pink fill-brand-pink"
                      />
                    ))}
                </div>

                {/* Quote mark */}
                <div className="font-playfair text-6xl text-brand-pink/15 leading-none -mt-2 mb-3 select-none">
                  &ldquo;
                </div>

                <p className="text-plum-dark/70 text-sm leading-relaxed mb-8">
                  {t.text}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-plum-deep text-sm">
                      {t.name}
                    </p>
                    <p className="text-brand-pink text-xs mt-0.5 tracking-wide">
                      {t.procedure}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-brand-pink/10 border border-brand-pink/20 flex items-center justify-center">
                    <Heart size={14} className="text-brand-pink" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM SECTION ──────────────────────────────────── */}
      <section className="py-20 bg-plum-deep overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="section-label mb-3">Urmărește-ne</p>
            <h3 className="heading-lg text-white mb-2">
              <span className="text-gradient-pink">@dental__beauty__design</span>
            </h3>
            <p className="text-white/50 text-sm mt-2">
              244 urmăritori · Transformări, sfaturi, oferte
            </p>
          </div>
          <a
            href="https://www.instagram.com/dental__beauty__design/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity text-sm"
          >
            <Instagram size={20} />
            Urmărește pe Instagram
          </a>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────────────── */}
      <section className="relative bg-brand-cream py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-brand-pink/40 to-transparent" />
        </div>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Logo className="w-16 h-16 mx-auto mb-8" />
          <p className="section-label mb-4">Pasul următor</p>
          <h2 className="heading-xl text-plum-deep mb-6">
            Începe transformarea
            <br />
            <span className="text-gradient-pink">zâmbetului tău</span>
          </h2>
          <p className="text-plum-dark/60 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Programează o consultație gratuită și descoperă ce putem face
            împreună pentru zâmbetul tău ideal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-base px-10 py-4">
              Programează Consultație
              <ArrowRight size={18} />
            </Link>
            <a
              href="tel:0771438955"
              className="btn-outline-dark text-base px-10 py-4"
            >
              <Phone size={18} />
              0771 438 955
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
