import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Cake,
  Cookie,
  Sparkles,
  Star,
  MapPin,
  Phone,
  MessageCircle,
  Instagram,
  Facebook,
  Heart,
  ShoppingBag,
} from "lucide-react";
import heroImg from "@/assets/pasteleria-jehu-ad.jpg";
import chocoImg from "@/assets/pastel-chocolate.jpg";
import customImg from "@/assets/pastel-personalizado.jpg";
import cookiesImg from "@/assets/galletas.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP =
  "https://wa.me/525562838465?text=Hola%20Pasteler%C3%ADa%20Jehu%2C%20me%20interesa%20ordenar%20un%20pastel";
const MAPS = "https://maps.google.com/?q=Bellas+Artes+128,+Metropolitana+2da+Secc,+Nezahualc%C3%B3yotl";

const products = [
  {
    img: chocoImg,
    icon: Cake,
    name: "Pasteles de Chocolate",
    desc: "Esponjosos, con relleno cremoso y cobertura de ganache. El favorito de la casa.",
  },
  {
    img: customImg,
    icon: Sparkles,
    name: "Pasteles Personalizados",
    desc: "Diseñamos tu pastel para cumpleaños, bodas o eventos especiales.",
  },
  {
    img: cookiesImg,
    icon: Cookie,
    name: "Galletas Caseras",
    desc: "Recién horneadas, crujientes por fuera y suaves por dentro.",
  },
];

const reviews = [
  { name: "María G.", text: "Excelente servicio, pasteles muy ricos. ¡Volveremos!", stars: 5 },
  { name: "Carlos R.", text: "Muy económicos y deliciosos. Sabor casero auténtico.", stars: 5 },
  { name: "Ana L.", text: "El pastel de chocolate es una delicia. 100% recomendados.", stars: 5 },
];

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Index() {
  useScrollReveal();
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 font-bold text-lg">
            <Cake className="text-accent" size={26} />
            <span style={{ fontFamily: "Playfair Display, serif" }}>
              Pastelería <span className="text-accent">Jehu</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-7 text-sm font-semibold">
            <a href="#productos" className="hover:text-accent transition-colors">Productos</a>
            <a href="#opiniones" className="hover:text-accent transition-colors">Opiniones</a>
            <a href="#contacto" className="hover:text-accent transition-colors">Contacto</a>
          </div>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="bg-primary hover:bg-primary/90 rounded-full">
              <ShoppingBag size={16} /> Ordenar
            </Button>
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="hero"
        ref={heroRef}
        className="relative min-h-screen flex items-center pt-20 pb-12 px-5"
      >
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Pastel de chocolate Pastelería Jehu"
            className="w-full h-full object-cover"
            width={928}
            height={1152}
          />
          <div
            className="absolute inset-0"
            style={{ background: "var(--gradient-hero)" }}
          />
        </div>
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">
          <div className="text-cream animate-[fade-in_0.9s_ease-out]" style={{ color: "var(--cream)" }}>
            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-1.5 text-xs font-semibold mb-6">
              <Sparkles size={14} /> Hechos con amor en Nezahualcóyotl
            </span>
            <h1
              className="text-5xl md:text-7xl font-black leading-[1.05] mb-5"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              ¡Pasteles deliciosos
              <br />
              <span className="text-gradient-warm">a buen precio!</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95 italic" style={{ fontFamily: "Playfair Display, serif" }}>
              y 100% recomendados
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-6 text-base shadow-warm hover:scale-105 transition-transform"
                >
                  <ShoppingBag /> Ordenar ahora
                </Button>
              </a>
              <a href="#productos">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:text-white px-8 py-6 text-base"
                >
                  Ver productos
                </Button>
              </a>
            </div>
            <div className="flex items-center gap-6 mt-10 text-sm">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} className="fill-accent text-accent" />
                ))}
              </div>
              <span className="opacity-90">+200 clientes felices</span>
            </div>
          </div>
        </div>
        {/* scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-xs animate-float">
          ↓ Descubre más ↓
        </div>
      </section>

      {/* PRODUCTOS */}
      <section id="productos" className="py-24 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 reveal">
            <p className="text-accent font-bold uppercase tracking-widest text-sm mb-2">Nuestro menú</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Endulzamos tus momentos</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Productos caseros elaborados día a día con ingredientes seleccionados.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {products.map((p, i) => {
              const Icon = p.icon;
              return (
                <Card
                  key={p.name}
                  className="group reveal overflow-hidden border-border/60 bg-card hover:-translate-y-2 hover:shadow-warm transition-all duration-500 p-0"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      width={1024}
                      height={1024}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 w-11 h-11 rounded-full bg-background/90 backdrop-blur flex items-center justify-center text-accent shadow-card">
                      <Icon size={20} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.desc}</p>
                    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" className="px-0 text-accent hover:text-accent hover:bg-transparent">
                        Pedir ahora →
                      </Button>
                    </a>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* OPINIONES */}
      <section
        id="opiniones"
        className="py-24 px-5"
        style={{ backgroundColor: "var(--secondary)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 reveal">
            <p className="text-accent font-bold uppercase tracking-widest text-sm mb-2">Opiniones</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Lo que dicen nuestros <span className="text-gradient-warm">clientes</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <Card
                key={r.name}
                className="reveal p-7 bg-card border-border/60 hover:shadow-card transition-shadow"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.stars }).map((_, idx) => (
                    <Star key={idx} size={18} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-base leading-relaxed mb-5 italic">"{r.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border/60">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-primary-foreground font-bold"
                    style={{ background: "var(--gradient-warm)" }}
                  >
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{r.name}</p>
                    <p className="text-xs text-muted-foreground">Reseña verificada</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-24 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 reveal">
            <p className="text-accent font-bold uppercase tracking-widest text-sm mb-2">Contacto</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Visítanos o haz tu pedido</h2>
            <p className="text-muted-foreground">Estamos listos para endulzar tu día.</p>
          </div>
          <Card className="reveal p-8 md:p-12 shadow-warm border-border/60">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-accent/15 text-accent flex items-center justify-center">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="font-bold mb-1">Dirección</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Bellas Artes 128, Metropolitana 2da Secc, Nezahualcóyotl, Estado de México
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-accent/15 text-accent flex items-center justify-center">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="font-bold mb-1">Teléfono</p>
                    <a href="tel:5562838465" className="text-muted-foreground text-sm hover:text-accent">
                      55 6283 8465
                    </a>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button
                      size="lg"
                      className="w-full rounded-full bg-[#25D366] hover:bg-[#1fb957] text-white font-bold"
                    >
                      <MessageCircle /> WhatsApp
                    </Button>
                  </a>
                  <a href={MAPS} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button size="lg" variant="outline" className="w-full rounded-full border-2">
                      <MapPin /> Google Maps
                    </Button>
                  </a>
                </div>
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-card">
                <iframe
                  title="Mapa Pastelería Jehu"
                  src="https://maps.google.com/maps?q=Bellas+Artes+128,+Metropolitana+2da+Secc,+Nezahualc%C3%B3yotl&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-12 px-5 text-cream"
        style={{ backgroundColor: "var(--chocolate-deep)", color: "var(--cream)" }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
              Pastelería <span style={{ color: "var(--gold)" }}>Jehu</span>
            </h3>
            <p className="text-sm opacity-80">Hecho con <Heart size={14} className="inline fill-current" /> en Neza.</p>
          </div>
          <div className="flex justify-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-accent hover:scale-110 transition-all flex items-center justify-center"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-accent hover:scale-110 transition-all flex items-center justify-center"
            >
              <Facebook size={18} />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-accent hover:scale-110 transition-all flex items-center justify-center"
            >
              <MessageCircle size={18} />
            </a>
          </div>
          <p className="text-xs opacity-70 md:text-right">
            © {new Date().getFullYear()} Pastelería Jehu. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* WhatsApp flotante */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-warm pulse-ring hover:scale-110 transition-transform"
      >
        <MessageCircle size={28} />
      </a>
    </main>
  );
}
