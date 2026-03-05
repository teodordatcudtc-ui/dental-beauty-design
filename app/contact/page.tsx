"use client";

import { useState } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Send,
  CheckCircle,
  ChevronDown,
} from "lucide-react";

const services = [
  "Igienizare & Detartraj",
  "Albire Dentară",
  "Fațete Dentare",
  "Coroane din Zirconiu",
  "Implant Dentar",
  "Chirurgie Orală",
  "Ortodonție",
  "Estetică Dentară",
  "Consultație generală",
  "Alt serviciu",
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-plum-gradient min-h-[55vh] flex items-center overflow-hidden diagonal-bottom pt-20 pb-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 right-0 w-[500px] h-[500px] bg-brand-pink/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-brand-purple/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 pt-10">
          <p className="section-label mb-5">Suntem la dispoziția ta</p>
          <h1 className="heading-xl text-white mb-6">
            Contactează-ne &
            <br />
            <span className="text-gradient-pink">programează-te</span>
          </h1>
          <p className="text-white/55 text-lg max-w-xl leading-relaxed">
            Fă primul pas spre zâmbetul tău ideal. Consultația inițială este
            gratuită — te așteptăm!
          </p>
        </div>
      </section>

      {/* ── MAIN CONTACT SECTION ─────────────────────────────── */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-12">
          {/* Form (3/5) */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-gray-100">
              <h2 className="font-playfair text-3xl font-bold text-plum-deep mb-2">
                Trimite o cerere
              </h2>
              <p className="text-gray-400 text-sm mb-10">
                Completează formularul și te contactăm în maxim 24 ore.
              </p>

              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} className="text-green-500" />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-plum-deep mb-3">
                    Cerere trimisă!
                  </h3>
                  <p className="text-gray-500 mb-8">
                    Mulțumim! Te vom contacta în cel mai scurt timp posibil.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        name: "",
                        phone: "",
                        email: "",
                        service: "",
                        message: "",
                      });
                    }}
                    className="btn-outline-dark"
                  >
                    Trimite o altă cerere
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="group">
                      <label className="block text-xs font-semibold text-gray-400 tracking-widest uppercase mb-2">
                        Nume complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        placeholder="Ion Popescu"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-plum-deep placeholder-gray-300 focus:outline-none focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/10 transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 tracking-widest uppercase mb-2">
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        required
                        placeholder="07XX XXX XXX"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-plum-deep placeholder-gray-300 focus:outline-none focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/10 transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 tracking-widest uppercase mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="email@exemplu.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-plum-deep placeholder-gray-300 focus:outline-none focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/10 transition-all"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 tracking-widest uppercase mb-2">
                      Serviciu dorit
                    </label>
                    <div className="relative">
                      <select
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                        className="w-full appearance-none border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-plum-deep focus:outline-none focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/10 transition-all bg-white"
                      >
                        <option value="" className="text-gray-300">
                          Selectează serviciul...
                        </option>
                        {services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 tracking-widest uppercase mb-2">
                      Mesaj / Detalii
                    </label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Descrieți pe scurt problema sau întrebarea dumneavoastră..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-plum-deep placeholder-gray-300 focus:outline-none focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/10 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Se trimite...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Trimite Cererea
                      </>
                    )}
                  </button>

                  <p className="text-center text-gray-400 text-xs">
                    Sau sună direct:{" "}
                    <a
                      href="tel:0771438955"
                      className="text-brand-pink font-semibold hover:underline"
                    >
                      0771 438 955
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Info (2/5) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick call */}
            <div className="bg-pink-gradient rounded-3xl p-8 text-white">
              <p className="text-white/70 text-xs tracking-widest uppercase mb-3">
                Sunați direct
              </p>
              <a
                href="tel:0771438955"
                className="font-playfair text-3xl font-bold text-white hover:text-white/90 transition-colors block mb-2"
              >
                0771 438 955
              </a>
              <p className="text-white/60 text-sm">
                Disponibili Luni–Vineri 09:00–19:00
              </p>
            </div>

            {/* Address */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-pink/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-brand-pink" />
                </div>
                <div>
                  <h3 className="font-semibold text-plum-deep mb-2">Adresă</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Bulevardul Alexandru Lăpușneanu 106,
                    <br />
                    bl. L1, sc. B
                    <br />
                    900407 Constanța, România
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-pink/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-brand-pink" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-plum-deep mb-4">
                    Program
                  </h3>
                  <div className="space-y-2">
                    {[
                      { day: "Luni – Vineri", hours: "09:00 – 19:00", open: true },
                      { day: "Sâmbătă", hours: "09:00 – 14:00", open: true },
                      { day: "Duminică", hours: "Închis", open: false },
                    ].map(({ day, hours, open }) => (
                      <div
                        key={day}
                        className="flex items-center justify-between"
                      >
                        <span className="text-gray-500 text-sm">{day}</span>
                        <span
                          className={`text-sm font-medium ${
                            open ? "text-plum-deep" : "text-gray-300"
                          }`}
                        >
                          {hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100">
              <h3 className="font-semibold text-plum-deep mb-5">
                Social Media
              </h3>
              <div className="space-y-3">
                <a
                  href="https://www.instagram.com/dental__beauty__design/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-gray-600 hover:text-brand-pink transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#833ab4] to-[#fcb045] flex items-center justify-center">
                    <Instagram size={16} className="text-white" />
                  </div>
                  <span className="group-hover:underline">
                    @dental__beauty__design
                  </span>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100063062808139"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-gray-600 hover:text-brand-pink transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#1877f2] flex items-center justify-center">
                    <Facebook size={16} className="text-white" />
                  </div>
                  <span className="group-hover:underline">
                    Dental Beauty Design
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GOOGLE MAPS ──────────────────────────────────────── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label mb-3">Locație</p>
            <h2 className="heading-lg text-plum-deep">
              Unde ne{" "}
              <span className="text-gradient-pink">găsești</span>
            </h2>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2860.432653836777!2d28.629378176651805!3d44.19815481701417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40bafbcf8d0d23cd%3A0x27203e423c4d8eef!2sDental%20Beauty%20Design%20Constanta!5e0!3m2!1sen!2sro!4v1772702911897!5m2!1sen!2sro"
              width="100%"
              height="480"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dental Beauty Design Constanta - Locatie Google Maps"
            />
          </div>

          {/* Quick info below map */}
          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            {[
              {
                icon: MapPin,
                title: "Adresă",
                val: "Bd. Alexandru Lăpușneanu 106, bl. L1, sc. B, Constanța",
              },
              {
                icon: Phone,
                title: "Telefon",
                val: "0771 438 955",
                href: "tel:0771438955",
              },
              {
                icon: Clock,
                title: "Program",
                val: "Luni–Vineri: 09–19 · Sâmbătă: 09–14",
              },
            ].map(({ icon: Icon, title, val, href }) => (
              <div
                key={title}
                className="flex items-start gap-4 bg-brand-cream rounded-2xl p-6 border border-gray-100"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-pink/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-brand-pink" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-1">
                    {title}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm font-semibold text-plum-deep hover:text-brand-pink transition-colors"
                    >
                      {val}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-plum-deep">{val}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK ACTIONS STRIP ──────────────────────────────── */}
      <section className="bg-plum-deep py-14 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-4">
            <a
              href="tel:0771438955"
              className="flex items-center gap-4 bg-brand-pink/15 border border-brand-pink/25 rounded-2xl px-7 py-5 hover:bg-brand-pink/25 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-pink flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Phone size={18} className="text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Sună acum</p>
                <p className="text-white/50 text-xs">0771 438 955</p>
              </div>
            </a>

            <a
              href="https://www.instagram.com/dental__beauty__design/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-7 py-5 hover:bg-white/10 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#833ab4] to-[#fcb045] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Instagram size={18} className="text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Instagram</p>
                <p className="text-white/50 text-xs">@dental__beauty__design</p>
              </div>
            </a>

            <a
              href="https://maps.google.com/?q=Dental+Beauty+Design+Constanta"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-7 py-5 hover:bg-white/10 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <MapPin size={18} className="text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">
                  Deschide în Maps
                </p>
                <p className="text-white/50 text-xs">Bd. Lăpușneanu 106</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
