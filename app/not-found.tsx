import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";
import Logo from "@/components/Logo";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-plum-deep flex items-center justify-center px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-pink/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-brand-purple/10 rounded-full blur-3xl" />
      </div>
      <div className="relative text-center max-w-lg">
        <Logo className="w-16 h-16 mx-auto mb-8 animate-float" />
        <p className="section-label mb-4">Eroare 404</p>
        <h1 className="font-playfair text-7xl font-bold text-white/10 mb-4">
          404
        </h1>
        <h2 className="font-playfair text-3xl font-bold text-white mb-4">
          Pagina nu a fost găsită
        </h2>
        <p className="text-white/50 mb-10">
          Pagina pe care o cauți nu există sau a fost mutată.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            <Home size={16} />
            Acasă
          </Link>
          <Link href="/contact" className="btn-outline">
            Contact
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
