import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  Scissors, Sparkles, Heart, Flower2, Hand, Palette,
  Wand2, Crown, Phone, MapPin, Clock, Star, ArrowRight, X, Check,
} from "lucide-react";
import heroImg from "@/assets/salon-hero.jpg";
import bridalSuiteImg from "@/assets/bridal-suite.jpg";
import makeup1 from "@/assets/makeup-1.jpg";
import makeup2 from "@/assets/makeup-2.jpg";
import makeup3 from "@/assets/makeup-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ABC Saloun — Luxury Hair, Skin & Beauty Studio" },
      { name: "description", content: "Explore every facility at ABC Saloun: signature haircuts, skin glow rituals, bridal styling, spa therapy, nails & more." },
    ],
  }),
  component: Index,
});

type Facility = {
  icon: typeof Scissors;
  title: string;
  desc: string;
  tag?: string;
  images: string[];
  services: { name: string; price: string }[];
  long: string;
};

const facilities: Facility[] = [
  {
    icon: Scissors, title: "Hair Studio", tag: "Most Loved",
    desc: "Precision cuts, balayage, keratin & couture color by master stylists.",
    long: "From editorial cuts to hand-painted balayage, our senior stylists work with Kérastase and Olaplex to sculpt hair that moves, shines and lasts.",
    images: [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=1200&q=80",
    ],
    services: [
      { name: "Signature Cut & Style", price: "₹1,800" },
      { name: "Global Color", price: "₹4,500" },
      { name: "Balayage / Ombré", price: "₹7,500" },
      { name: "Keratin Smoothening", price: "₹9,000" },
    ],
  },
  {
    icon: Sparkles, title: "Skin & Glow", tag: "New",
    desc: "HydraFacial, chemical peels, LED therapy and bespoke skin rituals.",
    long: "A clinical-grade skin bar blending HydraFacial technology, medical peels and LED therapy with calming rituals tailored to your skin diagnosis.",
    images: [
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=80",
      "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=1200&q=80",
    ],
    services: [
      { name: "Signature HydraFacial", price: "₹3,500" },
      { name: "Chemical Peel", price: "₹2,800" },
      { name: "LED Light Therapy", price: "₹1,500" },
      { name: "Korean Glass Facial", price: "₹4,200" },
    ],
  },
  {
    icon: Crown, title: "Bridal Suite",
    desc: "Pre-wedding glow plans, trials & on-the-day artistry in a private suite.",
    long: "A private suite dedicated to your bridal journey — from 90-day glow plans to airbrushed on-the-day artistry with your personal team of experts.",
    images: [
      bridalSuiteImg,
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&q=80",
    ],
    services: [
      { name: "Bridal Trial", price: "₹8,000" },
      { name: "Bridal Day Look (HD)", price: "₹25,000" },
      { name: "Engagement Look", price: "₹12,000" },
      { name: "90-day Glow Plan", price: "₹35,000" },
    ],
  },
  {
    icon: Flower2, title: "Spa & Massage",
    desc: "Aromatherapy, deep tissue & couples therapy in candle-lit rooms.",
    long: "Candle-lit therapy rooms, warm stones and hand-blended oils — an unhurried ritual designed to soften tension and re-centre the senses.",
    images: [
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80",
      "https://images.unsplash.com/photo-1583416750470-965b2707b355?w=1200&q=80",
    ],
    services: [
      { name: "Aromatherapy (60 min)", price: "₹2,500" },
      { name: "Deep Tissue (90 min)", price: "₹3,800" },
      { name: "Hot Stone Ritual", price: "₹4,200" },
      { name: "Couples Suite", price: "₹7,500" },
    ],
  },
  {
    icon: Hand, title: "Nail Lounge",
    desc: "Gel, chrome, French & nail art with luxury hand & foot treatments.",
    long: "A jewel-box nail lounge featuring OPI, Essie and chrome-finish gels — paired with paraffin hand rituals and pedicure thrones.",
    images: [
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&q=80",
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=1200&q=80",
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=1200&q=80",
    ],
    services: [
      { name: "Classic Manicure", price: "₹800" },
      { name: "Gel Extensions", price: "₹2,500" },
      { name: "Luxury Pedicure", price: "₹1,500" },
      { name: "Chrome / Nail Art", price: "₹1,800" },
    ],
  },
  {
    icon: Palette, title: "Makeup Bar",
    desc: "Editorial, party and HD bridal makeup using world-class brands.",
    long: "Airbrush, HD and editorial finishes crafted with Charlotte Tilbury, MAC and Huda — for red carpets, receptions or your favourite Saturday night.",
    images: [
      makeup1,
      makeup2,
      makeup3,
    ],
    services: [
      { name: "Party Makeup", price: "₹3,000" },
      { name: "HD Makeup", price: "₹5,500" },
      { name: "Airbrush Finish", price: "₹7,000" },
      { name: "Reception Look", price: "₹15,000" },
    ],
  },
  {
    icon: Wand2, title: "Hair Spa",
    desc: "Scalp diagnostics, keratin therapy and restorative protein rituals.",
    long: "Digital scalp diagnostics guide bespoke rituals — deep-conditioning masks, scalp massages and protein therapy that repair from the inside.",
    images: [
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80",
      "https://images.unsplash.com/photo-1560869713-7d0954430f60?w=1200&q=80",
      "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=1200&q=80",
    ],
    services: [
      { name: "Signature Hair Spa", price: "₹1,500" },
      { name: "Kérastase Ritual", price: "₹2,800" },
      { name: "Scalp Detox", price: "₹2,200" },
      { name: "Protein Therapy", price: "₹3,500" },
    ],
  },
  {
    icon: Heart, title: "Grooming for Him",
    desc: "Beard sculpting, hot-towel shaves and tailored skincare for men.",
    long: "A masculine grooming lounge — architectural cuts, hot-towel shaves and men's facials tuned for stronger skin and sharper style.",
    images: [
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&q=80",
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=1200&q=80",
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1200&q=80",
    ],
    services: [
      { name: "Men's Haircut", price: "₹800" },
      { name: "Beard Sculpt", price: "₹500" },
      { name: "Hot-Towel Shave", price: "₹700" },
      { name: "Men's Facial", price: "₹1,800" },
    ],
  },
];

const WA = "https://wa.me/919035891110?text=Hi%20ABC%20Saloun!%20I'd%20like%20to%20book%20an%20appointment.";

function Index() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.3]);
  const [active, setActive] = useState<Facility | null>(null);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [active]);

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
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[var(--gradient-gold)] px-5 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition hover:scale-105"
          >
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
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">Tap any facility to step inside and see the space, rituals & pricing.</p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map((f, i) => (
              <motion.button
                key={f.title}
                type="button"
                onClick={() => setActive(f)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="glass group relative overflow-hidden rounded-3xl p-0 text-left cursor-pointer"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <img
                    src={f.images[0]}
                    alt={f.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  {f.tag && (
                    <span className="absolute right-3 top-3 rounded-full border border-primary/40 bg-background/60 backdrop-blur px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-primary">
                      {f.tag}
                    </span>
                  )}
                  <div className="absolute left-4 bottom-3 grid h-11 w-11 place-items-center rounded-2xl bg-[var(--gradient-gold)] text-primary-foreground shadow-[var(--shadow-glow)]">
                    <f.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="relative p-6 pt-4">
                  <h3 className="font-display text-2xl">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                  <div className="mt-5 inline-flex items-center gap-1 text-xs text-primary transition group-hover:gap-2">
                    Step inside <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </motion.button>
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
              { icon: MapPin, label: "Address", value: "Avalahalli, Doddaballapura Main Rd, behind sai baba temple, Avalahalli, Karnataka 560119" },
              { icon: Clock, label: "Hours", value: "Mon–Sun · 10AM – 9PM" },
              { icon: Phone, label: "Reserve", value: "+91 9035891110" },
            ].map((i) => (
              <div key={i.label} className="glass rounded-2xl p-5 text-left">
                <i.icon className="mb-3 h-5 w-5 text-primary" />
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{i.label}</div>
                <div className="mt-1 text-sm">{i.value}</div>
              </div>
            ))}
          </div>

          <a
            href={WA}
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

      <AnimatePresence>
        {active && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-background/70 backdrop-blur-xl p-4 sm:p-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.97 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong relative my-8 w-full max-w-5xl overflow-hidden rounded-[2rem]"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-background/60 backdrop-blur border border-white/10 hover:bg-background/80 transition"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                <motion.img
                  key={active.title}
                  src={active.images[0]}
                  alt={active.title}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                  <div>
                    <div className="mb-3 inline-grid h-12 w-12 place-items-center rounded-2xl bg-[var(--gradient-gold)] text-primary-foreground shadow-[var(--shadow-glow)]">
                      <active.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-4xl sm:text-5xl">{active.title}</h3>
                  </div>
                  {active.tag && (
                    <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[10px] uppercase tracking-wider text-primary">
                      {active.tag}
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6 sm:p-10 pt-6">
                <p className="max-w-2xl text-muted-foreground">{active.long}</p>

                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-2">
                  {active.images.slice(1).map((src, i) => (
                    <motion.div
                      key={src}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                      className="glass overflow-hidden rounded-2xl"
                    >
                      <img src={src} alt={`${active.title} ${i + 2}`} className="h-48 w-full object-cover hover:scale-105 transition-transform duration-700" />
                    </motion.div>
                  ))}
                </div>

                <div className="mt-10">
                  <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">Signature services</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {active.services.map((s, i) => (
                      <motion.div
                        key={s.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                        className="glass flex items-center justify-between rounded-2xl px-5 py-4"
                      >
                        <div className="flex items-center gap-3">
                          <span className="grid h-6 w-6 place-items-center rounded-full bg-primary/20 text-primary">
                            <Check className="h-3 w-3" />
                          </span>
                          <span className="text-sm">{s.name}</span>
                        </div>
                        <span className="text-sm font-medium text-gradient-gold">{s.price}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-6">
                  <p className="text-xs text-muted-foreground">Prices indicative — final quote given after consultation.</p>
                  <a
                    href={`https://wa.me/919035891110?text=${encodeURIComponent(`Hi ABC Saloun! I'd like to book ${active.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--gradient-gold)] px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition hover:scale-105"
                  >
                    <Phone className="h-4 w-4" /> Book {active.title}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
