import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle2, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Servicii Stomatologice",
  description:
    "Descoperă gama completă de servicii stomatologice oferite de Dental Beauty Design Constanta: albire, fațete, implante, coroane, igienizare și chirurgie orală.",
};

const services = [
  {
    id: "igienizare",
    num: "01",
    title: "Igienizare & Detartraj",
    subtitle: "Baza sănătății orale",
    description:
      "Igienizarea profesională este primul pas spre un zâmbet sănătos și frumos. Procedura include detartraj ultrasonic, periaj profesional și lustruit, îndepărtând tartrul și petele acumulate. Recomandat la fiecare 6 luni.",
    features: [
      "Detartraj ultrasonic complet",
      "Periaj profesional Air-Flow",
      "Fluorizare protectoare",
      "Consultație și recomandări personalizate",
      "Durată: 60 min",
    ],
    price: "De la 200 LEI",
    accentColor: "from-brand-pink to-brand-magenta",
    category: "Preventivă",
  },
  {
    id: "albire",
    num: "02",
    title: "Albire Dentară",
    subtitle: "Strălucire instantă",
    description:
      "Albirea dentară profesională utilizează sisteme avansate de albire care garantează rezultate vizibile din prima ședință. Procedurul este sigur, supravegheată de specialiști, cu efecte durabile de până la 2 ani.",
    features: [
      "Albire în cabinet – rezultate imediate",
      "Kit de menținere acasă",
      "Sistem BeyondWhite sau Zoom",
      "Până la 8 tonuri mai alb",
      "Durată: 90 min",
    ],
    price: "De la 300 LEI",
    accentColor: "from-brand-magenta to-brand-purple",
    category: "Estetică",
  },
  {
    id: "fatete",
    num: "03",
    title: "Fațete Dentare",
    subtitle: "Perfecțiunea zâmbetului",
    description:
      "Fațetele dentare sunt învelișuri subțiri din ceramică sau compozit, aplicate pe suprafața dinților pentru a corecta forma, culoarea și alinierea. Rezultatul: un zâmbet de Hollywood, natural și elegant.",
    features: [
      "Fațete ceramice e.max",
      "Fațete din compozit direct",
      "Fațete ultra-subțiri (No-prep / Minimal-prep)",
      "Design personalizat al zâmbetului",
      "Garanție 5 ani",
    ],
    price: "De la 600 LEI / dinte",
    accentColor: "from-brand-purple to-brand-violet",
    category: "Estetică",
  },
  {
    id: "coroane",
    num: "04",
    title: "Coroane din Zirconiu",
    subtitle: "Rezistență și estetică",
    description:
      "Coroanele din zirconiu combină rezistența maximă cu estetica superioară. Biocompatibile, rezistente la colorare și cu transluciditate naturală, sunt soluția ideală atât pentru dinții frontali cât și pentru molari.",
    features: [
      "Zirconiu monolitic de înaltă rezistență",
      "Aspect identic dinților naturali",
      "Fără margine metalică",
      "Biocompatibil 100%",
      "Garanție 10 ani",
    ],
    price: "De la 800 LEI / coroană",
    accentColor: "from-[#0ea5e9] to-brand-teal",
    category: "Protetică",
  },
  {
    id: "implant",
    num: "05",
    title: "Implant Dentar",
    subtitle: "Soluția permanentă",
    description:
      "Implantul dentar este singura soluție permanentă pentru înlocuirea dinților lipsă. Implantul de titan se integrează în os (osteointegrare), oferind stabilitate și funcționalitate identice cu dintele natural.",
    features: [
      "Implanturi Nobel Biocare / Straumann",
      "Proteză provizorie imediată",
      "Mini-implanturi pentru proteză totală",
      "Rată de succes 98%",
      "Garanție pe viață pe implant",
    ],
    price: "De la 2500 LEI / implant",
    accentColor: "from-brand-teal to-[#06b6d4]",
    category: "Implantologie",
  },
  {
    id: "chirurgie",
    num: "06",
    title: "Chirurgie Orală",
    subtitle: "Precizie și siguranță",
    description:
      "Departamentul de chirurgie orală oferă o gamă completă de intervenții: extracții simple și complicate (inclusiv molari de minte), rezecții apicale, augmentări osoase și frenectomii, în condiții de maximă siguranță.",
    features: [
      "Extracții simple și chirurgicale",
      "Extracție molar de minte",
      "Rezecție apicală",
      "Augmentare osoasă (sinus lift)",
      "Anestezie locală modernă",
    ],
    price: "De la 300 LEI",
    accentColor: "from-[#8b5cf6] to-brand-purple",
    category: "Chirurgie",
  },
  {
    id: "ortodontie",
    num: "07",
    title: "Ortodonție",
    subtitle: "Alinierea perfectă",
    description:
      "Corectarea poziției dinților cu aparate dentare moderne. Oferim soluții pentru toate vârstele, de la aparate clasice metalice până la alinere estetice invizibile — discrete, confortabile și eficiente.",
    features: [
      "Aparate fixe metalice (copii & adulți)",
      "Aparate ceramice estetice",
      "Alinere invizibile (Invisalign / Clear)",
      "Retenere post-tratament",
      "Consultație ortodontică inclusă",
    ],
    price: "De la 150 LEI / ședință",
    accentColor: "from-brand-pink to-[#f472b6]",
    category: "Ortodonție",
  },
  {
    id: "estetica",
    num: "08",
    title: "Estetică Dentară",
    subtitle: "Arta zâmbetului",
    description:
      "Serviciile de estetică dentară completează transformarea zâmbetului: restaurări directe din compozit, bonding estetic, remodelare gingivală și smile design — proiectăm zâmbetul tău ideal înainte de orice intervenție.",
    features: [
      "Smile Design digital (DSD)",
      "Bonding estetic compozit",
      "Remodelare gingivală (laser)",
      "Restaurări estetice directe",
      "Mock-up înainte de tratament",
    ],
    price: "De la 250 LEI",
    accentColor: "from-brand-magenta to-brand-rose",
    category: "Estetică",
  },
];

const categories = ["Toate", "Estetică", "Preventivă", "Protetică", "Implantologie", "Chirurgie", "Ortodonție"];

export default function ServiciiPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-plum-gradient min-h-[70vh] flex items-center overflow-hidden diagonal-bottom pt-20 pb-32">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 right-0 w-[500px] h-[500px] bg-brand-pink/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-purple/10 rounded-full blur-3xl" />
          {/* Decorative type */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 font-playfair text-[180px] font-bold text-white/2 select-none leading-none hidden xl:block">
            S
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-10">
          <div className="max-w-3xl">
            <p className="section-label mb-5">Dental Beauty Design</p>
            <h1 className="heading-xl text-white mb-6">
              Servicii complete
              <br />
              <span className="text-gradient-pink">de stomatologie</span>
            </h1>
            <p className="text-white/55 text-lg max-w-xl leading-relaxed">
              De la igienizare preventivă la transformări estetice complexe —
              oferim tot ce ai nevoie pentru un zâmbet sănătos și frumos, sub
              un singur acoperiș.
            </p>
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2 mt-10">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide border transition-colors ${
                  cat === "Toate"
                    ? "bg-brand-pink border-brand-pink text-white"
                    : "border-white/20 text-white/50 hover:border-brand-pink/50 hover:text-white/80 cursor-pointer"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ─────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          {services.map((service, i) => (
            <div
              key={service.id}
              id={service.id}
              className={`group grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-brand-pink/10 transition-all duration-500 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Content */}
              <div className="p-10 md:p-12 flex flex-col justify-between bg-white group-hover:bg-brand-cream transition-colors duration-300">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs text-gray-300 font-mono tracking-widest">
                      {service.num}
                    </span>
                    <span className="h-px flex-1 bg-gray-100 max-w-[60px]" />
                    <span className="text-xs text-brand-pink font-semibold tracking-widest uppercase bg-brand-pink/8 border border-brand-pink/20 px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>

                  <h2 className="font-playfair text-3xl md:text-4xl font-bold text-plum-deep mb-2">
                    {service.title}
                  </h2>
                  <p className="text-brand-pink font-medium text-sm mb-6">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-8 text-base">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-gray-600"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-brand-pink mt-0.5 flex-shrink-0"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400 mb-1 tracking-wide uppercase">
                      Preț
                    </p>
                    <p className="font-playfair text-2xl font-bold text-brand-pink">
                      {service.price}
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 bg-brand-pink text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-brand-magenta transition-all hover:shadow-lg hover:shadow-brand-pink/30"
                  >
                    Programare
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Visual panel */}
              <div
                className={`relative min-h-[280px] lg:min-h-0 bg-gradient-to-br ${service.accentColor} flex items-center justify-center overflow-hidden`}
              >
                {/* Background pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, white 1.5px, transparent 1.5px)",
                    backgroundSize: "25px 25px",
                  }}
                />
                <div className="absolute inset-0 bg-black/20" />

                {/* Big number */}
                <div className="relative text-center">
                  <span className="font-playfair text-[120px] md:text-[160px] font-bold text-white/15 leading-none select-none block">
                    {service.num}
                  </span>
                  <p className="text-white font-playfair text-xl md:text-2xl font-bold -mt-8 relative z-10">
                    {service.title}
                  </p>
                  <p className="text-white/60 text-sm mt-1">{service.subtitle}</p>
                </div>

                {/* Corner badge */}
                <div className="absolute top-6 right-6 bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2 text-white">
                  <p className="text-xs text-white/60">Preț</p>
                  <p className="font-bold text-sm">{service.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── OFERTA SPECIALA ────────────────────────────────────── */}
      <section className="bg-brand-cream py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-label mb-4">Oferta Specială</p>
          <h3 className="heading-lg text-plum-deep mb-4">
            Pachet{" "}
            <span className="text-gradient-pink">Igienizare + Albire</span>
          </h3>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Combina igienizarea profesională cu albirea dentară la prețul
            special de primăvară.
          </p>
          <div className="inline-flex items-center gap-6 bg-white border border-brand-pink/20 rounded-3xl p-8 shadow-xl mb-8">
            <div className="text-center">
              <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Pachet complet</p>
              <p className="font-playfair text-5xl font-bold text-brand-pink">400 LEI</p>
            </div>
            <div className="w-px h-16 bg-gray-200" />
            <ul className="text-left space-y-2">
              {["Igienizare profesională", "Albire dentară", "Consultație inclusă"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 size={14} className="text-brand-pink" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Rezervă Pachetul
              <ArrowRight size={16} />
            </Link>
            <a href="tel:0771438955" className="btn-outline-dark">
              <Phone size={16} />
              Sună: 0771 438 955
            </a>
          </div>
        </div>
      </section>

      {/* ── QUICK CTA ──────────────────────────────────────────── */}
      <section className="bg-plum-deep py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="heading-md text-white mb-2">
              Ai întrebări despre un tratament?
            </h3>
            <p className="text-white/50 text-sm">
              Suntem disponibili pentru consultații și sfaturi.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:0771438955"
              className="flex items-center gap-2 bg-brand-pink text-white font-semibold px-7 py-3.5 rounded-full hover:bg-brand-magenta transition-colors"
            >
              <Phone size={16} />
              0771 438 955
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-2 border border-white/20 text-white font-medium px-7 py-3.5 rounded-full hover:border-brand-pink hover:text-brand-pink transition-colors"
            >
              Formular de Contact
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
