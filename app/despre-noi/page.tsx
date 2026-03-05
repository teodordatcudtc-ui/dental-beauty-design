import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Award,
  Users,
  Clock,
  Heart,
  Shield,
  Star,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Despre Noi",
  description:
    "Aflați povestea Dental Beauty Design Constanta — cabinetul stomatologic premium care combină medicina dentară modernă cu arta estetică.",
};

const teamMembers = [
  {
    name: "Dr. Alexandrina Popescu",
    role: "Medic Stomatolog Principal",
    specialization: "Estetică Dentară & Implanturi",
    experience: "12 ani experiență",
    description:
      "Specializată în estetică dentară și implantologie, Dr. Popescu transformă zâmbete cu precizie și pasiune. Absolventă a UMF Iași, cu cursuri internaționale de estetică dentară.",
    initials: "AP",
    color: "from-brand-pink to-brand-magenta",
  },
  {
    name: "Dr. Mihai Ionescu",
    role: "Medic Chirurg OMF",
    specialization: "Chirurgie Orală & Implantologie",
    experience: "9 ani experiență",
    description:
      "Expert în chirurgie orală și implantologie avansată. Utilizează tehnici miniinvazive pentru recuperare rapidă și confort maxim al pacientului.",
    initials: "MI",
    color: "from-brand-purple to-brand-violet",
  },
  {
    name: "Dr. Cristina Radu",
    role: "Medic Ortodont",
    specialization: "Ortodonție & Alinere",
    experience: "7 ani experiență",
    description:
      "Specialist în ortodonție modernă, inclusiv sisteme de alinere invizibile. Lucrează cu adulți și copii pentru corectarea discretă și eficientă a malocluziilor.",
    initials: "CR",
    color: "from-[#0ea5e9] to-brand-teal",
  },
];

const milestones = [
  {
    year: "2013",
    title: "Înfiițarea cabinetului",
    desc: "Dental Beauty Design deschide porțile în Constanța cu o viziune clară: stomatologie de calitate pentru toți.",
  },
  {
    year: "2016",
    title: "Extindere & Reutilare",
    desc: "Investiție majoră în echipamente de ultimă generație: tomograf CBCT, sistem CAD/CAM pentru coroane în o zi.",
  },
  {
    year: "2019",
    title: "Departament de Implantologie",
    desc: "Deschiderea departamentului dedicat implantologiei, cu protocoale internaționale și implanturi premium.",
  },
  {
    year: "2022",
    title: "Smile Design Digital",
    desc: "Implementarea sistemului DSD (Digital Smile Design) — proiectăm zâmbetul tău înainte de orice intervenție.",
  },
  {
    year: "2024",
    title: "1000+ Pacienți Mulțumiți",
    desc: "Depășim pragul de 1000 de pacienți tratați cu succes, continuând să creștem și să evoluăm.",
  },
];

const certifications = [
  "Membrii ai Colegiului Medicilor Stomatologi din România",
  "Certificare Nobel Biocare Partner (Implanturi)",
  "Cursuri internaționale de Estetică Dentară (New York, Milano)",
  "Sistem CAD/CAM pentru coroane în o zi",
  "Tomograf CBCT 3D pentru diagnostic precis",
  "Protocoale de sterilizare conform normelor europene",
];

const stats = [
  { val: "10+", label: "Ani Experiență" },
  { val: "1000+", label: "Pacienți Mulțumiți" },
  { val: "3", label: "Specialiști" },
  { val: "98%", label: "Rata de Succes" },
];

export default function DespreNoiPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-plum-gradient min-h-[75vh] flex items-center overflow-hidden diagonal-bottom pt-20 pb-32">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-brand-pink/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-purple/12 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(212,49,122,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,49,122,1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-12 items-center pt-10">
          <div className="lg:col-span-3">
            <p className="section-label mb-5">Povestea noastră</p>
            <h1 className="heading-xl text-white mb-6">
              Pasiune pentru
              <br />
              <span className="text-gradient-pink">sănătatea ta</span>
              <br />
              <span className="text-white/20">dentară</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-xl mb-10">
              Din 2013, Dental Beauty Design este sinonimul excelenței
              stomatologice în Constanța. Combinăm tehnologia de vârf cu
              empatie autentică, pentru ca fiecare pacient să se simtă în
              siguranță și să plece zâmbind.
            </p>
            <Link href="/contact" className="btn-primary">
              Programează consultația
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Stats */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white/8 border border-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/12 transition-colors"
              >
                <div className="font-playfair text-4xl font-bold text-brand-pink mb-2">
                  {s.val}
                </div>
                <div className="text-white/50 text-xs tracking-wide leading-tight">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY SECTION ─────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-plum-deep via-plum-dark to-plum-mid overflow-hidden">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, white 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                <div className="w-24 h-24 rounded-full bg-brand-pink/20 border border-brand-pink/30 flex items-center justify-center mb-8">
                  <Heart size={40} className="text-brand-pink" />
                </div>
                <p className="font-playfair text-2xl text-white font-bold mb-4 italic">
                  &ldquo;Zâmbetul tău,
                  <br />
                  expertiza noastră.&rdquo;
                </p>
                <p className="text-white/50 text-sm">
                  — Misiunea Dental Beauty Design
                </p>
              </div>
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-6 bg-brand-pink rounded-2xl p-6 shadow-2xl">
              <p className="text-white font-playfair text-3xl font-bold">
                2013
              </p>
              <p className="text-white/80 text-xs mt-1 tracking-wide">
                Fundată în Constanța
              </p>
            </div>

            <div className="absolute -top-6 -left-6 bg-white border border-gray-100 rounded-2xl p-5 shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={14}
                    className="text-brand-pink fill-brand-pink"
                  />
                ))}
              </div>
              <p className="text-plum-deep text-xs font-semibold">
                Recenzii excelente
              </p>
              <p className="text-gray-400 text-xs">Google Reviews</p>
            </div>
          </div>

          {/* Text side */}
          <div>
            <p className="section-label mb-4">Cine suntem</p>
            <h2 className="heading-lg text-plum-deep mb-6">
              Mai mult decât un
              <br />
              <span className="text-gradient-pink">cabinet stomatologic</span>
            </h2>
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                Dental Beauty Design s-a născut din convingerea că îngrijirea
                dentară de calitate trebuie să fie accesibilă, plăcută și
                transformatoare. Nu tratăm doar dinți — construim zâmbete care
                inspiră încredere.
              </p>
              <p>
                Cabinetul nostru din Constanța este dotat cu echipamente de
                ultimă generație: tomograf CBCT 3D, sistem CAD/CAM pentru
                coroane în o zi și sisteme de albire de top. Fiecare detaliu
                este gândit pentru confortul și siguranța ta.
              </p>
              <p>
                Echipa noastră de medici specialiști se perfecționează
                continuu, participând la cursuri internaționale și congrese
                de specialitate pentru a aduce cele mai noi tehnici direct la
                tine.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              {[
                { icon: Award, text: "Echipamente Certificate" },
                { icon: Users, text: "Echipă Specializată" },
                { icon: Shield, text: "Sterilizare Europeană" },
                { icon: Clock, text: "Program Flexibil" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-pink/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-brand-pink" />
                  </div>
                  <span className="text-sm font-medium text-plum-deep">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ─────────────────────────────────────────────── */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Echipa noastră</p>
            <h2 className="heading-xl text-plum-deep">
              Specialiști care
              <br />
              <span className="text-gradient-pink">îți pasă de tine</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-3xl overflow-hidden group hover:shadow-2xl hover:shadow-brand-pink/10 transition-all duration-400 hover:-translate-y-1"
              >
                {/* Avatar header */}
                <div
                  className={`bg-gradient-to-br ${member.color} h-48 flex items-center justify-center relative overflow-hidden`}
                >
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, white 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <div className="w-20 h-20 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center">
                    <span className="font-playfair text-2xl font-bold text-white">
                      {member.initials}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="font-playfair text-xl font-bold text-plum-deep mb-1">
                    {member.name}
                  </h3>
                  <p className="text-brand-pink text-xs font-semibold tracking-wide mb-1">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-xs mb-4">
                    {member.specialization}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    {member.description}
                  </p>
                  <div className="flex items-center gap-2 text-brand-pink text-xs font-semibold">
                    <Clock size={12} />
                    {member.experience}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────────── */}
      <section className="py-24 bg-plum-deep relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-pink/8 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Evoluție</p>
            <h2 className="heading-xl text-white">
              Povestea
              <br />
              <span className="text-gradient-pink">noastră în timp</span>
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-pink/50 via-brand-pink/20 to-transparent hidden md:block" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className="flex gap-8 group"
                >
                  {/* Year dot */}
                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-brand-pink border-2 border-plum-deep ring-2 ring-brand-pink/30 mt-5 flex-shrink-0" />
                  </div>

                  <div className="flex-1 bg-white/5 border border-white/8 rounded-2xl p-7 hover:border-brand-pink/30 hover:bg-white/8 transition-all duration-300">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="font-playfair text-xl font-bold text-white">
                        {m.title}
                      </h3>
                      <span className="font-playfair text-lg font-bold text-brand-pink flex-shrink-0">
                        {m.year}
                      </span>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-4">Calitate garantată</p>
              <h2 className="heading-lg text-plum-deep mb-6">
                Certificări &
                <br />
                <span className="text-gradient-pink">standarde</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Suntem angajați să oferim cele mai înalte standarde de
                îngrijire dentară. Toate echipamentele, materialele și
                protocoalele noastre respectă normele europene stricte.
              </p>
              <Link href="/contact" className="btn-primary">
                Programează acum
                <ArrowRight size={16} />
              </Link>
            </div>
            <div>
              <ul className="space-y-4">
                {certifications.map((cert, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-brand-pink/10 border border-brand-pink/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Award size={14} className="text-brand-pink" />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pt-1">
                      {cert}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-pink-gradient py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/70 text-xs tracking-[0.3em] uppercase mb-4">
            Constanța, Bulevardul Alexandru Lăpușneanu 106
          </p>
          <h3 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Vino să ne cunoști
          </h3>
          <p className="text-white/70 mb-10">
            Programează o consultație gratuită și descoperă cum putem
            transforma zâmbetul tău.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0771438955"
              className="flex items-center justify-center gap-2 bg-white text-brand-pink font-bold px-8 py-4 rounded-full hover:bg-brand-cream transition-colors"
            >
              <Phone size={18} />
              0771 438 955
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 border-2 border-white/50 text-white font-medium px-8 py-4 rounded-full hover:border-white hover:bg-white/10 transition-colors"
            >
              <MapPin size={18} />
              Cum ajungi
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
