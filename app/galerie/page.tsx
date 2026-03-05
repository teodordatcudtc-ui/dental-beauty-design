import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Instagram, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Galeria Dental Beauty Design Constanta — imagini din cabinet, echipă și rezultatele tratamentelor noastre stomatologice.",
};

const photos = [
  {
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=700&h=700&fit=crop&q=80",
    alt: "Zâmbet alb și sănătos",
    label: "Rezultat Albire",
    tag: "Estetică",
    size: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=700&h=500&fit=crop&q=80",
    alt: "Cabinet stomatologic Constanța",
    label: "Sala de Tratament",
    tag: "Cabinet",
    size: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=700&h=500&fit=crop&q=80",
    alt: "Medic stomatolog",
    label: "Echipa Noastră",
    tag: "Echipă",
    size: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=700&h=700&fit=crop&q=80",
    alt: "Pacient mulțumit",
    label: "Pacient Mulțumit",
    tag: "Rezultate",
    size: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?w=700&h=500&fit=crop&q=80",
    alt: "Echipamente dentare moderne",
    label: "Echipamente Moderne",
    tag: "Cabinet",
    size: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=700&h=500&fit=crop&q=80",
    alt: "Tratament dentar",
    label: "Tratament Dentar",
    tag: "Proceduri",
    size: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1502224562085-639556652f33?w=700&h=400&fit=crop&q=80",
    alt: "Zâmbet frumos",
    label: "Fațete Ceramice",
    tag: "Estetică",
    size: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=700&h=500&fit=crop&q=80",
    alt: "Consultație stomatologică",
    label: "Consultație",
    tag: "Cabinet",
    size: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1607400201515-c2c41c7d10c9?w=700&h=500&fit=crop&q=80",
    alt: "Zâmbet perfect",
    label: "Smile Design",
    tag: "Estetică",
    size: "normal",
  },
];

const instagramPosts = [
  { type: "Reels", title: "Dinți albi și sănătoși", metric: "▶ 2.1k", color: "from-plum-dark to-brand-purple" },
  { type: "Post", title: "Coroane din Zirconiu", metric: "♥ 24", color: "from-brand-pink to-brand-rose" },
  { type: "Post", title: "Fațete Dentare", metric: "♥ 18", color: "from-brand-purple to-brand-violet" },
  { type: "Reels", title: "Igienizare & Albire", metric: "▶ 1.4k", color: "from-brand-teal to-[#0369a1]" },
  { type: "Post", title: "Implant Dentar", metric: "♥ 31", color: "from-brand-magenta to-brand-pink" },
  { type: "Post", title: "Smile Design", metric: "♥ 42", color: "from-plum-mid to-brand-purple" },
];

export default function GaleriePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-plum-gradient min-h-[60vh] flex items-center overflow-hidden diagonal-bottom pt-20 pb-32">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-pink/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-purple/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-10">
          <p className="section-label mb-5">Imagini reale</p>
          <h1 className="heading-xl text-white mb-6">
            Galeria
            <br />
            <span className="text-gradient-pink">noastră</span>
          </h1>
          <p className="text-white/55 text-lg max-w-xl leading-relaxed">
            Cabinet, echipă și rezultate — imagini din activitatea zilnică
            a clinicii Dental Beauty Design din Constanța.
          </p>
        </div>
      </section>

      {/* ── MAIN PHOTO GRID ──────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="section-label mb-4">Fotografii</p>
              <h2 className="heading-xl text-plum-deep">
                Clinica &
                <br />
                <span className="text-gradient-pink">rezultatele noastre</span>
              </h2>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Adaugă propriile fotografii ale clinicii pentru un impact maxim.
            </p>
          </div>

          {/* Symmetric grid – toate pozele aceeași dimensiune */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {photos.map((photo, i) => (
              <div
                key={i}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-brand-pink/15 transition-all duration-400 hover:-translate-y-1"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Overlay mereu vizibil – subtil */}
                <div className="absolute inset-0 bg-gradient-to-t from-plum-deep/55 via-transparent to-transparent" />
                {/* Label mereu vizibil jos */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-white font-semibold text-sm drop-shadow">{photo.label}</p>
                    <span className="text-[10px] text-white font-semibold bg-brand-pink px-2.5 py-1 rounded-full">
                      {photo.tag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <p className="text-gray-400 text-sm mb-6">
              * Fotografiile de mai sus sunt reprezentative. Înlocuiește-le cu imagini reale ale clinicii.
            </p>
            <Link href="/contact" className="btn-primary">
              Programează-te acum
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM FEED ─────────────────────────────────────── */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-label mb-4">Social Media</p>
            <h2 className="heading-xl text-plum-deep">
              Urmărește-ne pe
              <br />
              <span className="text-gradient-pink">Instagram</span>
            </h2>
            <a
              href="https://www.instagram.com/dental__beauty__design/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-pink font-medium text-sm mt-4 hover:gap-4 transition-all"
            >
              @dental__beauty__design
              <ExternalLink size={14} />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {instagramPosts.map((post, i) => (
              <a
                key={i}
                href="https://www.instagram.com/dental__beauty__design/"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square rounded-xl overflow-hidden group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${post.color}`} />
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                  <Instagram size={20} className="text-white mb-1" />
                  <p className="text-white text-[9px] text-center font-medium">{post.title}</p>
                  <p className="text-white/70 text-[9px]">{post.metric}</p>
                </div>
                <div className="absolute top-2 right-2 bg-black/30 rounded px-1.5 py-0.5">
                  <span className="text-white text-[8px]">{post.type}</span>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://www.instagram.com/dental__beauty__design/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
            >
              <Instagram size={20} />
              Vezi toate postările pe Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-plum-deep py-20 px-6 diagonal-top">
        <div className="max-w-3xl mx-auto text-center pt-8">
          <p className="section-label mb-4">Pasul următor</p>
          <h3 className="heading-lg text-white mb-6">
            Transformarea ta
            <br />
            <span className="text-gradient-pink">poate fi următoarea</span>
          </h3>
          <p className="text-white/50 mb-10 max-w-xl mx-auto">
            Sute de pacienți au ales Dental Beauty Design pentru transformarea
            zâmbetului lor. Acum e rândul tău.
          </p>
          <Link href="/contact" className="btn-primary text-base px-10">
            Programează Consultația
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
