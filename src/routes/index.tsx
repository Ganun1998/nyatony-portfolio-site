import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import wreath from "@/assets/wreath.png";
import nyagoa from "@/assets/nyagoa.jpg";

import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:image", content: gallery1 },
      { name: "twitter:image", content: gallery1 },
    ],
  }),
  component: NyatonyPage,
});

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#contents", label: "Contents" },
  { href: "#introduction", label: "Introduction" },
  { href: "#early-life", label: "Early Life" },
  { href: "#education", label: "Education" },
  { href: "#qualities", label: "Qualities" },
  { href: "#career", label: "Career" },
  { href: "#family", label: "Family" },
  { href: "#lessons", label: "Lessons" },
  { href: "#tribute", label: "Tribute" },
  { href: "#legacy", label: "Legacy" },
];

function NyatonyPage() {
  useReveal();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav open={menuOpen} setOpen={setMenuOpen} />
      <Hero />
      <Introduction />
      <EarlyLife />
      <Education />
      <Qualities />
      <CareerAchievements />
      <FamilyReflections />
      <WhatMakesDifferent />
      <QualitiesAdmired />
      <Lessons />
      <Tribute />
      <Legacy />
      <Conclusion />
      <Footer />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Navigation                                                         */
/* ------------------------------------------------------------------ */
function Nav({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#home" className="font-script text-2xl gold-text leading-none">
          Nyatony
        </a>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-1 text-[11px] uppercase tracking-[0.2em] text-foreground/75">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3 py-2 transition-colors hover:bg-accent hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden grid h-10 w-10 place-items-center rounded-full border border-border"
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute inset-x-0 top-0 h-px bg-foreground transition-transform ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute inset-x-0 bottom-0 h-px bg-foreground transition-transform ${
                open ? "-translate-y-1 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-500 ${
          open ? "max-h-[80vh]" : "max-h-0"
        }`}
      >
        <div className="mx-4 mb-3 rounded-2xl border border-border bg-white p-4 shadow-[var(--shadow-soft)]">
          <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-full px-3 py-2 text-[11px] uppercase tracking-[0.2em] text-foreground/80 hover:bg-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  Section header                                                     */
/* ------------------------------------------------------------------ */
function SectionHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: ReactNode;
}) {
  return (
    <div className="reveal mx-auto max-w-3xl text-center">
      <p className="font-script text-3xl gold-text sm:text-4xl">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl leading-tight text-foreground sm:text-5xl">
        {title}
      </h2>
      <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
      {intro && (
        <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {intro}
        </p>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full">
      <div className="absolute inset-0">
        <img
          src={gallery1}
          alt="Portrait of Nyatony Kai Tut"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-28 pb-20 text-center">
        <p className="font-display text-3xl text-white drop-shadow sm:text-4xl">
          The Journey of
        </p>

        <h1 className="mt-4 font-display text-5xl leading-[1] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)] sm:text-7xl md:text-8xl">
          Nyatony Kai Tut
        </h1>

        <p className="mt-6 max-w-2xl font-display text-lg italic text-white/95 sm:text-xl">
          "A Journey of Courage, Education, Faith, and Love."
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 px-5 py-2.5 text-xs uppercase tracking-[0.22em] text-white backdrop-blur-md">
            🎓 University Graduate 2026
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 px-5 py-2.5 text-xs uppercase tracking-[0.22em] text-white backdrop-blur-md">
            💍 Celebrating Marriage
          </span>
        </div>

        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-white/95 sm:text-base">
          From humble beginnings in Wan, Ayod, South Sudan, to becoming the first girl in
          her family to graduate from university, Nyatony's story is one of perseverance,
          determination, faith, and inspiration.
        </p>

        <div className="mt-10">
          <a
            href="#introduction"
            className="inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-[11px] uppercase tracking-[0.3em] text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.04]"
          >
            Discover Her Story
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/80">
        <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em]">
          Scroll
          <span className="block h-10 w-px animate-pulse bg-white/80" />
        </div>
      </div>
    </section>
  );
}


/* ------------------------------------------------------------------ */
/*  Introduction                                                       */
/* ------------------------------------------------------------------ */
function Introduction() {
  const traits = ["Curiosity", "Determination", "Compassion", "Resilience", "Leadership"];
  return (
    <section id="introduction" className="relative px-6 py-24 sm:py-32 bg-accent/40">
      <div className="mx-auto max-w-6xl grid gap-14 md:grid-cols-2 md:items-center">
        <div className="reveal relative">
          <div className="overflow-hidden rounded-[2rem] shadow-[var(--shadow-elegant)]">
            <img
              src={gallery1}
              alt="Nyatony Kai Tut"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="reveal">
          <p className="font-display text-3xl gold-text">Introduction</p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-foreground sm:text-5xl">
            Meet Nyatony Kai Tut
          </h2>
          <div className="mt-5 h-px w-24 bg-gradient-to-r from-primary to-transparent" />
          <p className="mt-6 leading-relaxed text-foreground/80">
            Nyatony was born and raised in <strong>Wan, Ayod, South Sudan</strong>, in a
            loving, caring, and supportive family that valued education, hard work,
            integrity, and respect for others.
          </p>
          <p className="mt-4 leading-relaxed text-foreground/80">
            From an early age she displayed curiosity, determination, compassion, and
            leadership potential. Her parents, grandmother, siblings, and extended family
            members in Ethiopia and Uganda helped shape her character and encouraged her
            educational journey.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {traits.map((t) => (
              <span
                key={t}
                className="rounded-full border border-primary/40 bg-white px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Early Life                                                         */
/* ------------------------------------------------------------------ */
const EARLY = [
  { title: "Wan, Ayod", text: "Growing up in Wan, Ayod, South Sudan surrounded by family and community." },
  { title: "Family Values", text: "Traditions of hard work, honesty, and respect passed through generations." },
  { title: "Early Friendships", text: "A cheerful personality that drew others in and made every day brighter." },
  { title: "School Beginnings", text: "First taste of learning — the classroom quickly became her favourite place." },
  { title: "Community Life", text: "Helping neighbours and elders taught her compassion from a young age." },
  { title: "Childhood Dreams", text: "Big dreams of education, service, and a bright future beyond the horizon." },
];

function EarlyLife() {
  return (
    <section id="early-life" className="relative px-6 py-24 sm:py-32">
      <SectionHeader
        eyebrow="Early Life"
        title="Where the story begins"
        intro="Her cheerful personality, kindness, and willingness to help others made her beloved by family and friends."
      />
      <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-3">
        {EARLY.map((e) => (
          <article
            key={e.title}
            className="reveal rounded-2xl border border-border bg-white p-7 shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1"
          >
            <h3 className="mt-4 font-display text-2xl text-foreground">{e.title}</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">{e.text}</p>
          </article>
        ))}
      </div>

      <div className="reveal mx-auto mt-14 max-w-5xl overflow-hidden rounded-3xl shadow-[var(--shadow-elegant)]">
        <img src={gallery1} alt="Childhood memory" className="h-80 w-full object-cover" loading="lazy" />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Education                                                          */
/* ------------------------------------------------------------------ */
const EDUCATION = [
  {
    year: "2004",
    school: "Malakal Primary School",
    title: "Primary School",
    text:
      "Joined school at age 7. Built strong foundations in reading, writing, and mathematics. Recognised as one of the most disciplined students and frequently ranked among the top ten.",
  },
  {
    year: "—",
    school: "Secondary School",
    title: "High School Years",
    text:
      "Academic growth, personal development, leadership experiences, teamwork, and lasting friendships. She balanced her studies with school activities and grew in confidence and character.",
  },
  {
    year: "2026",
    school: "New Generation University College · Addis Ababa, Ethiopia",
    title: "University · Bachelor of Global Studies",
    text:
      "Academic growth and professional development. Learning independence, resilience, and shaping a vision for community impact.",
    highlight: "⭐ First girl in the family to attend and graduate from university.",
  },
];

function Education() {
  return (
    <section id="education" className="relative px-6 py-24 sm:py-32 bg-accent/40">
      <SectionHeader
        eyebrow="Educational Journey"
        title="From primary school to a university degree"
        intro="A story of dedication, perseverance, and a lifelong commitment to learning."
      />

      <div className="relative mx-auto mt-14 max-w-4xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent md:left-6" />
        <ol className="space-y-10">
          {EDUCATION.map((e) => (
            <li key={e.title} className="reveal relative pl-14 md:pl-20">
              <span className="absolute left-2.5 top-3 h-3 w-3 rounded-full bg-primary shadow-[0_0_0_6px_var(--color-accent)] md:left-[1.15rem]" />
              <div className="rounded-2xl border border-border bg-white p-6 shadow-[var(--shadow-soft)] sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-script text-3xl gold-text">{e.year}</p>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    {e.school}
                  </p>
                </div>
                <h3 className="mt-2 font-display text-2xl text-foreground sm:text-3xl">
                  {e.title}
                </h3>
                <p className="mt-3 leading-relaxed text-foreground/80">{e.text}</p>
                {e.highlight && (
                  <p className="mt-4 rounded-xl border border-primary/40 bg-primary/5 px-4 py-3 text-sm font-medium text-foreground">
                    {e.highlight}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="reveal mx-auto mt-14 max-w-5xl overflow-hidden rounded-3xl shadow-[var(--shadow-elegant)]">
        <img src={nyagoa} alt="Graduation" className="h-85 w-full object-cover" loading="lazy" />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Personal Qualities                                                 */
/* ------------------------------------------------------------------ */
const QUALITIES = [
  { title: "Determined", text: "She remained focused on her goals despite obstacles." },
  { title: "Resilient", text: "She turned challenges into opportunities for growth." },
  { title: "Compassionate", text: "She consistently supported and encouraged others." },
  { title: "Respectful", text: "She treats everyone with dignity and humility." },
  { title: "Independent", text: "She developed into a self-reliant and responsible woman." },
  { title: "Inspirational", text: "She motivates younger generations through her achievements." },
];

function Qualities() {
  return (
    <section id="qualities" className="relative px-6 py-24 sm:py-32">
      <SectionHeader eyebrow="Personal Qualities" title="The character that defines her" />
      <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {QUALITIES.map((q) => (
          <article
            key={q.title}
            className="reveal rounded-2xl border border-border bg-white p-8 text-center shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1"
          >
            <h3 className="mt-5 font-display text-2xl text-foreground">{q.title}</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">{q.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Career & Achievements                                              */
/* ------------------------------------------------------------------ */
const ACHIEVEMENTS = [
  { k: "1st", v: "Female university graduate in the family" },
  { k: "2026", v: "Bachelor of Global Studies" },
  { k: "Top 10", v: "Consistent primary school ranking" },
  { k: "∞", v: "Lives inspired across generations" },
];

function CareerAchievements() {
  const items = [
    "Commitment to lifelong learning",
    "Academic excellence",
    "Leadership development",
    "Community impact",
    "Personal growth",
    "Educational advocacy",
  ];
  return (
    <section id="career" className="relative px-6 py-24 sm:py-32 bg-accent/40">
      <SectionHeader
        eyebrow="Career & Achievements"
        title="A milestone for a whole family"
        intro="Her greatest achievement — becoming the first female university graduate in the family — is a historic moment that inspires every generation to follow."
      />

      <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ACHIEVEMENTS.map((a) => (
          <div
            key={a.k}
            className="reveal rounded-2xl border border-border bg-white p-6 text-center shadow-[var(--shadow-soft)]"
          >
            <p className="font-display text-4xl text-primary">{a.k}</p>
            <p className="mt-2 text-sm text-muted-foreground">{a.v}</p>
          </div>
        ))}
      </div>

      <div className="reveal mx-auto mt-12 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-xl border border-border bg-white px-5 py-4"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-primary/15 text-primary">
              ✓
            </span>
            <span className="text-sm text-foreground">{i}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Family Reflections                                                 */
/* ------------------------------------------------------------------ */
const REFLECTIONS = [
  {
    name: "Nyakoang Ker Wuol",
    word: "Educated",
    reason:
      "Because she has pursued education with dedication and achieved academic excellence.",
  },
  {
    name: "Nyamuoka Tap Jock",
    word: "Confident",
    reason:
      "Because she believes in herself and draws strength from the guidance, encouragement, and values instilled by her father.",
  },
  {
    name: "Nyathach Nyot chung",
    word: "Confident",
    reason: "Because she carries herself with self-assurance, courage, and determination.",
  },
  {
    name: "Yak Chuol Tut",
    word: "Patient",
    reason:
      "Because she has demonstrated remarkable patience, resilience, and perseverance throughout her journey.",
  },
  {
    name: "Nyayin Mawaii Chuol · Grandmother",
    word: "Independent",
    reason:
      "Because she has grown into a strong, self-reliant, and responsible young woman.",
  },
  {
    name: "Nyamai Yak Chuol Tut",
    word: "Educated",
    reason:
      "Because her commitment to learning and academic excellence has been truly inspiring.",
  },
  {
    name: "Chuol Par Tai",
    word: "Respectful",
    reason:
      "Because she respects herself and treats others with dignity, humility, and integrity.",
  },
  {
    name: "Galam Kai Chuol Tut",
    word: "Golden",
    reason:
      "Because she is precious, exceptional, and a source of pride, joy, and inspiration to the family and everyone who knows her.",
  },
];

function FamilyReflections() {
  return (
    <section id="family" className="relative px-6 py-24 sm:py-32">
      <SectionHeader
        eyebrow="Family Reflections"
        title="How family describes Nyatony"
        intro="One word from each loved one — and the reason it fits."
      />
      <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {REFLECTIONS.map((r) => (
          <article
            key={r.name}
            className="reveal rounded-2xl border border-border bg-white p-6 shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              {r.name}
            </p>
            <p className="mt-3 font-script text-4xl gold-text">"{r.word}"</p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">{r.reason}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  What Makes Different (accordion)                                   */
/* ------------------------------------------------------------------ */
const DIFFERENT = [
  {
    q: "Nyawuol",
    a: "Nyatony stands out because of her dedication to education and her unwavering commitment to academic excellence.",
  },
  {
    q: "Nyatap",
    a: "Nyatony is distinguished by her confidence in herself and the strong values, guidance, and encouragement she has received from her father.",
  },
  {
    q: "Nyachung",
    a: "Nyatony's confidence, determination, and positive outlook set her apart from her peers.",
  },
  {
    q: "Yak",
    a: "Nyatony is exceptional because of her remarkable patience, resilience, and perseverance in the face of life's challenges.",
  },
  {
    q: "Grandmother",
    a: "Nyatony is unique because she has grown into a strong, responsible, and independent young woman.",
  },
  {
    q: "Nyamai",
    a: "Nyatony distinguishes herself through her commitment to education and her determination to achieve academic success.",
  },
  {
    q: "Chuol",
    a: "Nyatony stands out because she values self-respect and consistently treats herself and others with dignity, humility, and integrity.",
  },
];

function WhatMakesDifferent() {
  return (
    <section className="relative px-6 py-24 sm:py-32 bg-accent/40">
      <SectionHeader
        eyebrow="Family Voices"
        title="What makes Nyatony different?"
        intro="Answers from family, on what sets her apart from friends and classmates."
      />
      <div className="reveal mx-auto mt-12 max-w-3xl rounded-2xl border border-border bg-white p-2 shadow-[var(--shadow-soft)] sm:p-4">
        <Accordion type="single" collapsible className="w-full">
          {DIFFERENT.map((d, i) => (
            <AccordionItem key={d.q} value={`d-${i}`} className="border-border">
              <AccordionTrigger className="px-4 text-left font-display text-lg text-foreground">
                {d.q}
              </AccordionTrigger>
              <AccordionContent className="px-4 text-foreground/80">{d.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Qualities Most Admired (accordion)                                 */
/* ------------------------------------------------------------------ */
const ADMIRED = [
  {
    q: "Nyawuol",
    a: "I admire her willingness to uplift and inspire others through her actions and achievements.",
  },
  {
    q: "Nyatap",
    a: "I admire her faithfulness, integrity, and steadfast commitment to her values.",
  },
  {
    q: "Nyachung",
    a: "I admire the way she serves as a positive role model, inspiring others through her character, determination, and achievements.",
  },
  {
    q: "Grandmother",
    a: "I admire her love for everyone and her unique personality, which makes her a cherished member of the family.",
  },
  {
    q: "Yak",
    a: "I admire her patience, perseverance, and unwavering faith throughout the many years she waited for the right time to marry.",
  },
];

function QualitiesAdmired() {
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <SectionHeader
        eyebrow="Most Admired"
        title="What quality do you admire most?"
      />
      <div className="reveal mx-auto mt-12 max-w-3xl rounded-2xl border border-border bg-white p-2 shadow-[var(--shadow-soft)] sm:p-4">
        <Accordion type="single" collapsible className="w-full">
          {ADMIRED.map((d, i) => (
            <AccordionItem key={d.q} value={`a-${i}`} className="border-border">
              <AccordionTrigger className="px-4 text-left font-display text-lg text-foreground">
                {d.q}
              </AccordionTrigger>
              <AccordionContent className="px-4 text-foreground/80">{d.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Lessons Learned                                                    */
/* ------------------------------------------------------------------ */
const LESSONS = [
  {
    who: "Nyawuol",
    text: "I have learned the importance of maintaining faith and hope, even during difficult times. Nyatony's resilience has taught me to remain steadfast despite life's challenges.",
  },
  {
    who: "Nyatap",
    text: "I have learned the value of being true to oneself and the importance of hard work, dedication, and perseverance in achieving one's goals.",
  },
  {
    who: "Yak",
    text: "I have learned the importance of respecting, honoring, and remaining committed to one's family, as Nyatony has consistently demonstrated through her character and actions.",
  },
];

function Lessons() {
  const pillars = [
    "Faith during difficult times",
    "Perseverance despite obstacles",
    "Commitment to family",
    "Hard work and dedication",
    "Staying true to personal values",
    "Respect and integrity",
  ];
  return (
    <section id="lessons" className="relative px-6 py-24 sm:py-32 bg-accent/40">
      <SectionHeader
        eyebrow="Lessons Learned"
        title="What her example teaches us"
      />

      <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-3">
        {LESSONS.map((l) => (
          <blockquote
            key={l.who}
            className="reveal rounded-2xl border border-border bg-white p-8 shadow-[var(--shadow-soft)]"
          >
            <p className="font-display text-5xl gold-text leading-none">“</p>
            <p className="mt-2 leading-relaxed text-foreground/85 italic">{l.text}</p>
            <footer className="mt-4 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              — {l.who}
            </footer>
          </blockquote>
        ))}
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2">
        {pillars.map((p) => (
          <div
            key={p}
            className="reveal flex items-center gap-3 rounded-xl border border-primary/30 bg-white px-5 py-3"
          >
            <span className="text-sm text-foreground">{p}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Tribute — Graduation & Wedding                                     */
/* ------------------------------------------------------------------ */
const MESSAGES = [
  {
    who: "Nyawuol",
    text: "I wish her every success as she celebrates both her graduation and her wedding. May these milestones mark the beginning of a joyful, prosperous, and fulfilling future.",
  },
  {
    who: "Nyatap",
    text: "I have no message to share at this moment, but I look forward to expressing my heartfelt congratulations and best wishes when both occasions are celebrated.",
  },
  {
    who: "Yak",
    text: "Thank you for being an exceptional role model to your younger siblings and to our family across Uganda and Ethiopia. Your achievement as the first young woman in our family to graduate from university is a source of immense pride and inspiration. I wish you abundant success, a blessed marriage, and a bright future.",
  },
  {
    who: "Chuol",
    text: "Congratulations on your graduation and wedding. May God bless your marriage, grant you wisdom, and lead you to a future filled with happiness, peace, and success.",
  },
  {
    who: "Galam",
    text: "My sincere congratulations on your graduation and wedding. I wish you a successful career, a happy and lasting marriage, and a life filled with God's blessings.",
  },
  {
    who: "Grandmother",
    text: "I am deeply grateful for the patience, perseverance, and determination you have shown throughout your journey. I am incredibly proud of the woman you have become. May God bless your marriage, guide your path, and fill your life with love, joy, and lasting peace.",
  },
];

function Tribute() {
  return (
    <section id="tribute" className="relative px-6 py-24 sm:py-32">
      <SectionHeader
        eyebrow="Two Beautiful Milestones"
        title="Graduation & Wedding Tribute"
        intro="Heartfelt messages from family celebrating both a degree earned and a new chapter begun."
      />

      <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
        <div className="reveal group relative overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-elegant)]">
          <img src={nyagoa} alt="Graduation" className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <p className="font-script text-3xl">🎓 2026</p>
            <p className="font-display text-2xl">Graduation Day</p>
          </div>
        </div>
        <div className="reveal group relative overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-elegant)]">
          <img src={wreath} alt="Wedding celebration" className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <p className="font-script text-3xl">💍 A New Chapter</p>
            <p className="font-display text-2xl">Wedding Celebration</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {MESSAGES.map((m) => (
          <blockquote
            key={m.who}
            className="reveal rounded-2xl border border-border bg-white p-7 shadow-[var(--shadow-soft)]"
          >
            <p className="font-display text-4xl gold-text leading-none">“</p>
            <p className="mt-2 leading-relaxed text-foreground/85 italic">{m.text}</p>
            <footer className="mt-4 text-[11px] uppercase tracking-[0.22em] text-primary">
              — {m.who}
            </footer>
          </blockquote>
        ))}
      </div>

      <div className="reveal mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3">
        {[gallery1, gallery3, gallery3, wreath, gallery1].map((src, i) => (
          <div key={i} className="overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]">
            <img src={src} alt={`Memory ${i + 1}`} className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Legacy & Impact                                                    */
/* ------------------------------------------------------------------ */
const LEGACY = [
  { t: "Inspires young girls", d: "Her story proves that dreams travel farther than circumstance." },
  { t: "Encourages education", d: "A living reminder that learning transforms families." },
  { t: "Promotes resilience", d: "She turns hardship into fuel for the next generation." },
  { t: "The power of faith", d: "Faith and determination carried her through every season." },
  { t: "A lasting legacy", d: "The first of many — a doorway opened for those who follow." },
];

function Legacy() {
  return (
    <section id="legacy" className="relative px-6 py-24 sm:py-32 bg-accent/40">
      <SectionHeader
        eyebrow="Legacy & Impact"
        title="A story that keeps giving"
      />
      <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {LEGACY.map((l) => (
          <article
            key={l.t}
            className="reveal rounded-2xl border border-border bg-white p-7 shadow-[var(--shadow-soft)]"
          >
            <h3 className="font-display text-2xl text-foreground">{l.t}</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">{l.d}</p>
          </article>
        ))}
      </div>

      <div className="reveal mx-auto mt-14 max-w-4xl rounded-3xl border border-primary/40 bg-white p-8 text-center shadow-[var(--shadow-elegant)] sm:p-12">
        <p className="font-display text-3xl gold-text">Family Tree</p>
        <h3 className="mt-2 font-display text-3xl text-foreground sm:text-4xl">
          Rooted in love, growing through generations
        </h3>
        <div className="mt-8 flex flex-col items-center gap-3 text-sm">
          <div className="rounded-full border border-primary/40 bg-accent px-5 py-2 font-display text-lg">
            Grandmother · Nyayiin Mawaii Chuol
          </div>
          <span className="h-6 w-px bg-primary/40" />
          <div className="flex flex-wrap justify-center gap-2">
            {["Chuol Par Tai", "Yak Chuol Tut", "Galam Kai Chuol Tut"].map((n) => (
              <span key={n} className="rounded-full border border-border bg-white px-4 py-1.5">
                {n}
              </span>
            ))}
          </div>
          <span className="h-6 w-px bg-primary/40" />
          <div className="rounded-full bg-primary px-6 py-2.5 font-display text-lg text-primary-foreground">
            Nyatony Kai Tut
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Conclusion                                                         */
/* ------------------------------------------------------------------ */
function Conclusion() {
  return (
    <section id="conclusion" className="relative px-6 py-28 sm:py-36">
      <div className="reveal mx-auto max-w-3xl text-center">
        <p className="font-display text-3xl gold-text sm:text-4xl">In closing</p>
        <h2 className="mt-3 font-display text-4xl leading-tight text-foreground sm:text-5xl">
          The journey continues…
        </h2>
        <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
        <p className="mt-8 leading-relaxed text-foreground/80">
          Nyatony Kai Tut's journey is more than a story of academic success. It is a story
          of faith, perseverance, family, resilience, and hope. From a young girl growing
          up in Wan, Ayod, South Sudan, to becoming the first female university graduate in
          her family and embarking on a new chapter through marriage, she has become a
          symbol of inspiration for future generations.
        </p>
        <p className="mt-4 leading-relaxed text-foreground/80">
          Her legacy reminds us that dreams are achievable through determination,
          education, faith, and unwavering commitment.
        </p>
        <p className="mt-10 font-display text-5xl gold-text">The Journey Continues…</p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */
function Footer() {
  const cols = [
    { title: "Family Gallery", items: ["Childhood", "Family portraits", "Traditions"] },
    { title: "Graduation Gallery", items: ["Ceremony", "Campus life", "Celebrations"] },
    { title: "Wedding Gallery", items: ["Engagement", "Ceremony", "Reception"] },
  ];
  return (
    <footer className="relative border-t border-border bg-accent/40 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="font-display text-3xl gold-text">Nyatony</p>
            <p className="mt-2 font-display text-xl">Kai Tut</p>
            <p className="mt-4 text-sm text-muted-foreground">
              A biography, graduation portfolio, and wedding tribute.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-[11px] uppercase tracking-[0.22em] text-primary">
                {c.title}
              </p>
              <ul className="mt-3 space-y-2 text-sm text-foreground/80">
                {c.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-muted-foreground">
            © 2026 · In honour of Nyatony Kai Tut · Wan, Ayod · Addis Ababa
          </p>
          <div className="flex gap-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            <a href="#" className="hover:text-primary">Instagram</a>
            <a href="#" className="hover:text-primary">Facebook</a>
            <a href="mailto:family@nyatony.example" className="hover:text-primary">Contact</a>
          </div>
        </div>

        <p className="mt-8 text-center font-display text-2xl gold-text">
          "Dreams are achievable through faith, education, and unwavering commitment."
        </p>
      </div>
    </footer>
  );
}
