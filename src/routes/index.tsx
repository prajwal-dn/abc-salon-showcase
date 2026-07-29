import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  Scissors, Sparkles, Heart, Flower2, Hand, Palette,
  Wand2, Crown, Phone, MapPin, Clock, Star, ArrowRight,
} from "lucide-react";
import heroImg from "@/assets/salon-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ABC Saloun — Luxury Hair, Skin & Beauty Studio" },
      { name: "description", content: "Explore every facility at ABC Saloun: signature haircuts, skin glow rituals, bridal styling, spa therapy, nails & more." },
    ],
  }),
  component: Index,
});

const facilities = [
  { icon: Scissors, title: "Hair Studio", desc: "Precision cuts, balayage, keratin & couture color by master stylists.", tag: "Most Loved" },
  { icon: Sparkles, title: "Skin & Glow", desc: "HydraFacial, chemical peels, LED therapy and bespoke skin rituals.", tag: "New" },
  { icon: Crown, title: "Bridal Suite", desc: "Pre-wedding glow plans, trials & on-the-day artistry in a private suite." },
  { icon: Flower2, title: "Spa & Massage", desc: "Aromatherapy, deep tissue & couples therapy in candle-lit rooms." },
  { icon: Hand, title: "Nail Lounge", desc: "Gel, chrome, French & nail art with luxury hand & foot treatments." },
  { icon: Palette, title: "Makeup Bar", desc: "Editorial, party and HD bridal makeup using world-class brands." },
  { icon: Wand2, title: "Hair Spa", desc: "Scalp diagnostics, keratin therapy and restorative protein rituals." },
  { icon: Heart, title: "Grooming for Him", desc: "Beard sculpting, hot-towel shaves and tailored skincare for men." },
];

function Index() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.3]);

  return (
    <div ref={ref} className="min-h-screen overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <motion.div
          className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]"
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 -right-40 h-[600px] w-[600px] rounded-full bg-[oklch(0.6_0.18_30)]/15 blur-[140px]"
          animate={{ x: [0, -50, 0], y: [0, -60, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[min(1100px,92vw)]"
      >
        <nav className="glass-strong flex items-center justify-between rounded-full px-6 py-3">
          <a href="#" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--gradient-gold)] text-primary-foreground font-display text-lg font-semibold">A</span>
            <span className="font-display text-xl tracking-wide">ABC <span className="text-gradient-gold">Saloun</span></span>
          </a>
          <div className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#facilities" className="hover:text-foreground transition">Facilities</a>
            <a href="#experience" className="hover:text-foreground transition">Experience</a>
            <a href="#visit" className="hover:text-foreground transition">Visit</a>
          </div>
          <a href="#visit" className="rounded-full bg-[var(--gradient-gold)] px-5 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition hover:scale-105">
            Book
          </a>
        </nav>
      </motion.header>

      <section className="relative flex min-h-screen items-center justify-center px-6 pt-32">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 -z-10">
          <img src={heroImg} alt="ABC Saloun interior" className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </motion.div>

        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass mx-auto mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            <Star className="h-3 w-3 fill-primary text-primary" />
            Est. 2008 — Luxury beauty studio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-5xl leading-[1.05] sm:text-7xl md:text-8xl"
          >
            Where beauty becomes
            <br />
            an <span className="text-gradient-gold italic">art form</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground"
          >
            From signature haircuts to skin-changing facials and bridal couture —
            every facility at ABC Saloun is crafted around you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a href="#facilities" className="group glass-strong inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition hover:bg-white/15">
              Explore facilities
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a href="#visit" className="inline-flex items-center gap-2 rounded-full bg-[var(--gradient-gold)] px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition hover:scale-105">
              Book your visit
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-20 grid grid-cols-3 gap-4 sm:gap-8"
          >
            {[["16+", "Years"], ["8K+", "Happy clients"], ["20+", "Master artists"]].map(([n, l]) => (
              <div key={l} className="glass rounded-2xl px-4 py-5">
                <div className="text-gradient-gold font-display text-3xl sm:text-4xl">{n}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="facilities" className="relative px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="mb-16 text-center"
          >
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">Our facilities</p>
            <h2 className="text-4xl sm:text-6xl">Eight worlds, <span className="italic text-gradient-gold">one studio</span>.</h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">Every service runs on premium products, trained artists and timeless craft.</p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="glass group relative overflow-hidden rounded-3xl p-6"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:bg-primary/30" />
                {f.tag && (
                  <span className="absolute right-4 top-4 rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-primary">
                    {f.tag}
                  </span>
                )}
                <div className="relative">
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-[var(--gradient-gold)] text-primary-foreground shadow-[var(--shadow-glow)]">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-2xl">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                  <div className="mt-5 inline-flex items-center gap-1 text-xs text-primary opacity-0 transition group-hover:opacity-100">
                    Learn more <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="relative px-6 py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-strong overflow-hidden rounded-[2rem] p-2">
              <img src={heroImg} alt="Salon ambience" className="rounded-[1.6rem] object-cover" loading="lazy" />
            </div>
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="glass-strong absolute -bottom-6 -right-6 w-56 rounded-2xl p-4"
            >
              <div className="flex items-center gap-1 text-primary">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary" />)}
              </div>
              <p className="mt-2 text-sm">"Felt like stepping into a private atelier. Pure indulgence."</p>
              <p className="mt-1 text-xs text-muted-foreground">— Aanya R.</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">The experience</p>
            <h2 className="text-4xl sm:text-5xl">A sanctuary for the <span className="italic text-gradient-gold">senses</span>.</h2>
            <p className="mt-5 text-muted-foreground">Marble counters, warm gold lighting and bespoke fragrance — every detail at ABC Saloun is designed to slow you down.</p>
            <ul className="mt-8 space-y-4">
              {[
                "Private suites for bridal & VIP clients",
                "World-class brands: Kérastase, Olaplex, Dermalogica",
                "Hygiene-first sterilization protocols",
                "Complimentary beverages & lounge",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/20 text-primary">
                    <Sparkles className="h-3 w-3" />
                  </span>
                  <span className="text-sm">{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section id="visit" className="relative px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-strong relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] p-10 sm:p-16 text-center"
        >
          <div className="absolute inset-0 -z-10 bg-[var(--gradient-radial)]" />
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">Visit us</p>
          <h2 className="text-4xl sm:text-6xl">Step into <span className="italic text-gradient-gold">ABC Saloun</span></h2>
          <p className="mx-auto mt-5 max-w-md text-muted-foreground">Walk-ins welcome — appointments preferred for the full ritual.</p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { icon: MapPin, label: "Address", value: "42 Boulevard Lane, City Center" },
              { icon: Clock, label: "Hours", value: "Mon–Sun · 10AM – 9PM" },
              { icon: Phone, label: "Reserve", value: "+91 98765 43210" },
            ].map((i) => (
              <div key={i.label} className="glass rounded-2xl p-5 text-left">
                <i.icon className="mb-3 h-5 w-5 text-primary" />
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{i.label}</div>
                <div className="mt-1 text-sm">{i.value}</div>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/919876543210?text=Hi%20ABC%20Saloun!%20I'd%20like%20to%20book%20an%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[var(--gradient-gold)] px-8 py-4 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition hover:scale-105"
          >
            <Phone className="h-4 w-4" /> Book your appointment
          </a>
        </motion.div>
      </section>

      <footer className="border-t border-white/5 px-6 py-10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} ABC Saloun. Crafted with care.
      </footer>
    </div>
  );
}
