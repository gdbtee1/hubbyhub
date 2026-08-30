import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  Heart,
  Mail,
  Quote,
  Sparkles,
  Star,
} from "lucide-react";

import Layout from "../components/Layout";
import bookCover from "../assets/bookcover.JPG";

/* =========================================================
   PUBLIC ASSETS

   public/
      hubbyhub-logo.jpg
      hubbyhub-author.jpg

========================================================= */

const logoImage = "/hubbyhub-logo.jpg";
const authorImage = "/hubbyhub-author.jpg";

const buyLink =
  "https://www.barnesandnoble.com/w/how-to-get-your-husband-hubby-hub/1148545199?ean=9798260331149";

const previewLink = "/book";

/* =========================================================
   SNEAK PEEK CONTENT
========================================================= */

const teasers = [
  {
    question: "Why does it feel like he stopped paying attention?",
    label: "Attention",
    answer:
      "Attention often changes before love does. Instead of starting with accusation, start by identifying when connection began to feel different and what each person has been missing.",
  },
  {
    question: "How do I ask for more without sounding demanding?",
    label: "Communication",
    answer:
      "Lead with what you want to build, not only what you believe is wrong. Clear requests tend to create more productive conversations than criticism or guessing games.",
  },
  {
    question: "Can romance return after years together?",
    label: "Romance",
    answer:
      "Romance rarely disappears all at once. It gets buried under routine. Bringing it back often begins with small intentional changes repeated consistently.",
  },
  {
    question: "What if we communicate completely differently?",
    label: "Understanding",
    answer:
      "Different communication styles are not automatically incompatible. The important skill is learning how your partner receives information, affection, reassurance, and conflict.",
  },
  {
    question: "How do I stop overthinking every change in his behavior?",
    label: "Confidence",
    answer:
      "Separate observation from interpretation. Ask what you actually know before building a story around what you fear.",
  },
  {
    question: "How do we feel like a team again?",
    label: "Partnership",
    answer:
      "Teams communicate expectations, check in with each other, solve problems together, and remember that the relationship is not one person versus the other.",
  },
];

/* =========================================================
   BOOK FEATURES
========================================================= */

const bookFeatures = [
  "Practical relationship guidance",
  "Communication frameworks",
  "Real-world relationship scenarios",
  "Reflection prompts",
  "Actionable connection strategies",
  "A straightforward, conversational approach",
];

/* =========================================================
   TESTIMONIALS
========================================================= */

const testimonials = [
  {
    quote:
      "This gave me a completely different way to think about attention and connection in my relationship.",
    name: "Reader Review",
  },
  {
    quote:
      "Simple, honest, and easy to understand. The advice feels practical instead of complicated.",
    name: "Reader Review",
  },
  {
    quote:
      "A reminder that lasting relationships need communication, patience, and intentional love.",
    name: "Reader Review",
  },
  {
    quote:
      "I liked that the message felt direct without making relationships feel hopeless or overly complicated.",
    name: "Reader Review",
  },
];

export default function Home() {
  const [openTeaser, setOpenTeaser] = useState(null);

  return (
    <Layout>
      <main className="overflow-hidden bg-[#120B12] text-white">

        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative flex min-h-[82svh] items-center justify-center overflow-hidden px-5 py-24 sm:px-8 lg:min-h-[88vh] lg:px-12">
          {/* BACKGROUND */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(142,24,52,0.42),transparent_40%),radial-gradient(circle_at_80%_40%,rgba(76,32,81,0.32),transparent_36%),linear-gradient(to_bottom,#160D16,#080808)]" />

          {/* SUBTLE GRID */}
          <div className="absolute left-0 top-1/2 h-px w-full bg-white/[0.04]" />
          <div className="absolute left-1/2 top-0 h-full w-px bg-white/[0.04]" />

          {/* HERO CONTENT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative z-10 mx-auto flex w-full max-w-[1500px] flex-col items-center text-center"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#D8AD55] sm:text-xs">
              Books • Relationships • Connection
            </p>

            {/* HUBBY HUB LOGO */}
            <motion.img
              src={logoImage}
              alt="Hubby Hub"
              className="mt-7 w-full max-w-[220px] object-contain sm:max-w-[260px] md:max-w-[300px] lg:max-w-[340px]"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <h1 className="mt-6 max-w-5xl text-[2.65rem] font-medium leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl xl:text-[5.2rem]">
              Better relationships begin with better understanding.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              Practical relationship wisdom for people who want stronger
              communication, deeper connection, and more intentional love.
            </p>

            <div className="mt-10 flex w-full max-w-md flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row">
              <a
                href={buyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#A81842] px-8 py-4 text-xs font-bold uppercase tracking-[0.13em] text-white transition duration-300 hover:bg-[#F05E7C]"
              >
                Buy The Book
                <ArrowRight size={17} />
              </a>

              <a
                href="#library"
                className="inline-flex items-center justify-center border border-[#D8AD55]/40 px-8 py-4 text-xs font-bold uppercase tracking-[0.13em] text-[#F4F0EB] transition duration-300 hover:border-[#D8AD55] hover:bg-[#D8AD55] hover:text-black"
              >
                Explore The Books
              </a>
            </div>
          </motion.div>
        </section>

        {/* =====================================================
            BOOK CATALOG
        ===================================================== */}
        <section
          id="library"
          className="bg-[#F7F2ED] px-5 py-24 text-black sm:px-8 sm:py-28 lg:px-12 lg:py-36"
        >
          <div className="mx-auto max-w-[1500px]">

            {/* CATALOG HEADER */}
            <div className="flex flex-col gap-8 border-b border-black/15 pb-9 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#A81842]">
                  Hubby Hub Library
                </p>

                <h2 className="mt-4 text-4xl font-medium tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                  Explore the books.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-black/45 md:text-right">
                Books and relationship resources built around communication,
                attention, confidence, romance, and lasting connection.
              </p>
            </div>

            {/* BOOKS */}
            <div className="mt-14 grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

              {/* =================================================
                  BOOK ONE
              ================================================= */}
              <motion.article
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to="/book" className="block">
                  <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-[#E9DED7] p-8 sm:p-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(240,94,124,0.2),transparent_57%)]" />

                    <motion.img
                      src={bookCover}
                      alt="How to Get Your Husband's Attention"
                      className="relative z-10 max-h-[90%] w-auto max-w-[76%] shadow-[18px_28px_45px_rgba(0,0,0,0.22)]"
                      whileHover={{
                        y: -10,
                        rotate: -2,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                    />
                  </div>

                  <div className="pt-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F05E7C]">
                      Available Now
                    </p>

                    <h3 className="mt-3 text-2xl font-medium leading-tight tracking-[-0.03em]">
                      How To Get Your Husband&apos;s Attention
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-black/50">
                      Communication, connection, romance, attention, and
                      emotional presence.
                    </p>
                  </div>
                </Link>

                <a
                  href={buyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 border-b border-black pb-1 text-xs font-bold uppercase tracking-[0.14em] transition hover:border-[#A81842] hover:text-[#A81842]"
                >
                  Buy The Book
                  <ArrowRight size={14} />
                </a>
              </motion.article>

              {/* =================================================
                  BOOK TWO
              ================================================= */}
              <motion.article
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                className="group"
              >
                <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-gradient-to-br from-[#4B183A] via-[#7D1D4D] to-[#A81842] p-8 text-center text-white">
                  <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#F05E7C]/30 blur-3xl" />

                  <div className="relative">
                    <BookOpen
                      size={45}
                      strokeWidth={1.2}
                      className="mx-auto text-[#E4B95C]"
                    />

                    <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.25em] text-[#F8CED8]">
                      Coming Soon
                    </p>

                    <h3 className="mt-4 text-3xl font-medium leading-tight">
                      The Next
                      <br />
                      Hubby Hub Book
                    </h3>
                  </div>
                </div>

                <div className="pt-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A81842]">
                    In Development
                  </p>

                  <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em]">
                    A New Relationship Guide
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/50">
                    A new Hubby Hub release focused on practical relationship
                    growth.
                  </p>
                </div>
              </motion.article>

              {/* =================================================
                  BOOK THREE
              ================================================= */}
              <motion.article
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.16 }}
                className="group"
              >
                <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-[#D94C75] p-8 text-center text-white">
                  <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#FF8A99]/40 blur-3xl" />

                  <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#E4B95C]/20 blur-3xl" />

                  <motion.div
                    whileHover={{
                      scale: 1.05,
                    }}
                    className="relative"
                  >
                    <Heart
                      size={45}
                      strokeWidth={1.2}
                      className="mx-auto"
                    />

                    <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.25em] text-white/65">
                      Future Release
                    </p>

                    <h3 className="mt-4 text-3xl font-medium leading-tight">
                      Love,
                      <br />
                      Reimagined
                    </h3>
                  </motion.div>
                </div>

                <div className="pt-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A81842]">
                    Future Release
                  </p>

                  <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em]">
                    More From Hubby Hub
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/50">
                    Future books and relationship resources will be featured
                    here.
                  </p>
                </div>
              </motion.article>

              {/* =================================================
                  RESOURCES
              ================================================= */}
              <motion.article
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.24 }}
                className="group"
              >
                <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-gradient-to-br from-[#F5CDD5] via-[#F7DCE2] to-[#EEC4D7] p-8 text-center">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent,rgba(255,255,255,0.65))]" />

                  <motion.div
                    whileHover={{
                      y: -6,
                    }}
                    className="relative"
                  >
                    <Sparkles
                      size={43}
                      strokeWidth={1.2}
                      className="mx-auto text-[#A81842]"
                    />

                    <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.25em] text-[#A81842]/55">
                      Hubby Hub
                    </p>

                    <h3 className="mt-4 text-3xl font-medium leading-tight text-[#4B183A]">
                      Relationship
                      <br />
                      Resources
                    </h3>
                  </motion.div>
                </div>

                <div className="pt-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A81842]">
                    Resources
                  </p>

                  <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em]">
                    Guides & Extras
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/50">
                    Digital guides, previews, exercises, and bonus relationship
                    content.
                  </p>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* =====================================================
            INTERACTIVE SNEAK PEEK
        ===================================================== */}
        <section
          id="sneak-peek"
          className="bg-[#1A0F1A] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40"
        >
          <div className="mx-auto max-w-[1500px]">
            <div className="grid gap-8 border-b border-[#D8AD55]/15 pb-10 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F05E7C]">
                  Sneak Peek
                </p>
              </div>

              <div>
                <h2 className="max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                  Real relationship questions.
                  <br />
                  Practical answers.
                </h2>

                <p className="mt-6 max-w-2xl leading-7 text-white/45">
                  Select a question to reveal a piece of Hubby Hub wisdom.
                </p>
              </div>
            </div>

            <div className="mt-4 divide-y divide-white/10">
              {teasers.map((teaser, index) => {
                const open = openTeaser === index;

                return (
                  <div key={teaser.question}>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenTeaser(open ? null : index)
                      }
                      className="group grid w-full gap-5 py-8 text-left sm:grid-cols-[150px_1fr_auto] sm:items-center sm:py-10"
                    >
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D8AD55]/55">
                        {teaser.label}
                      </span>

                      <h3 className="max-w-4xl text-xl font-medium leading-snug transition group-hover:text-[#F05E7C] sm:text-2xl lg:text-3xl">
                        {teaser.question}
                      </h3>

                      <ChevronDown
                        size={22}
                        className={`hidden text-white/35 transition duration-300 sm:block ${
                          open ? "rotate-180 text-[#D8AD55]" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.3,
                          }}
                          className="overflow-hidden"
                        >
                          <div className="grid pb-9 sm:grid-cols-[150px_1fr_auto]">
                            <div />

                            <div className="max-w-3xl border-l border-[#F05E7C] pl-5 sm:pl-7">
                              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#D8AD55]">
                                Hubby Hub Wisdom
                              </p>

                              <p className="mt-4 text-lg leading-8 text-white/65">
                                {teaser.answer}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            AUTHOR ORIGIN
        ===================================================== */}
        <section className="bg-[#FFF9F5] text-black">
          <div className="grid lg:min-h-[850px] lg:grid-cols-2">
            {/* IMAGE */}
            <div className="relative min-h-[520px] overflow-hidden bg-[#D9D1CC] sm:min-h-[680px] lg:min-h-full">
              <img
                src={authorImage}
                alt="Hubby Hub author"
                className="absolute inset-0 h-full w-full object-cover object-center"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />

              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#120B12]/45 to-transparent" />

              <div className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.2em] text-white/70">
                Author Portrait
              </div>
            </div>

            {/* STORY */}
            <div className="flex items-center px-6 py-20 sm:px-10 sm:py-28 lg:px-16 xl:px-24">
              <motion.div
                initial={{
                  opacity: 0,
                  x: 25,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                className="max-w-2xl"
              >
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#A81842]">
                  The Storyteller
                </p>

                <h2 className="mt-6 text-4xl font-medium leading-[1.04] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                  I wrote this because relationships deserve more than generic
                  advice.
                </h2>

                <div className="mt-8 space-y-6 text-lg leading-8 text-black/55">
                  <p>
                    I wanted Hubby Hub to feel like the conversation people wish
                    they could have before frustration turns into distance.
                  </p>

                  <p>
                    Relationships can be complicated, but the principles that
                    strengthen them do not always have to be. Communication.
                    Attention. Understanding. Respect. Intentional love.
                  </p>

                  <p>
                    My goal is to take those ideas and make them practical,
                    conversational, and useful in real life.
                  </p>
                </div>

                <div className="mt-12">
                  <p
                    className="text-4xl italic tracking-[-0.03em] text-[#A81842]"
                    style={{
                      fontFamily: "cursive",
                    }}
                  >
                    Hubby Hub
                  </p>

                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#F05E7C]">
                    Author & Creator
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FEATURED BOOK SHOWCASE
        ===================================================== */}
        <section className="relative overflow-hidden bg-[#EFE6DC] px-5 py-24 text-black sm:px-8 sm:py-32 lg:px-12 lg:py-40">
          <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F6CFC3]/40 blur-3xl" />

          <div className="relative mx-auto grid max-w-[1500px] items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">

            {/* BOOK */}
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
                rotate: -2,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: -2,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
              className="relative flex justify-center"
            >
              <div className="absolute bottom-3 h-16 w-[55%] rounded-full bg-[#4B183A]/20 blur-2xl" />

              <img
                src={bookCover}
                alt="How to Get Your Husband's Attention"
                className="relative z-10 max-h-[680px] w-auto max-w-[72%] shadow-[30px_40px_60px_rgba(38,18,67,0.2)] sm:max-w-[58%] lg:max-w-[70%]"
              />
            </motion.div>

            {/* COPY */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#A81842]">
                Featured Release
              </p>

              <h2 className="mt-6 max-w-3xl text-4xl font-medium leading-[1] tracking-[-0.045em] sm:text-5xl lg:text-6xl xl:text-7xl">
                How To Get Your Husband&apos;s Attention
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-black/55">
                A practical relationship guide built to help readers think
                differently about communication, affection, emotional
                connection, confidence, and lasting partnership.
              </p>

              <div className="mt-10 grid gap-x-10 gap-y-5 sm:grid-cols-2">
                {bookFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 border-t border-[#A81842]/15 pt-4"
                  >
                    <Check
                      size={17}
                      className="mt-1 shrink-0 text-[#F05E7C]"
                    />

                    <p className="text-sm leading-6 text-black/65">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex flex-col gap-3 sm:flex-row">
                <a
                  href={buyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#A81842] px-8 py-4 text-xs font-bold uppercase tracking-[0.13em] text-white transition hover:bg-[#F05E7C]"
                >
                  Buy Now
                  <ArrowRight size={17} />
                </a>

                <Link
                  to={previewLink}
                  className="inline-flex items-center justify-center border border-[#4B183A]/25 px-8 py-4 text-xs font-bold uppercase tracking-[0.13em] text-[#4B183A] transition hover:border-[#4B183A] hover:bg-[#4B183A] hover:text-white"
                >
                  Preview The Book
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            READER REVIEWS
        ===================================================== */}
        <section className="bg-[#160D16] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
          <div className="mx-auto max-w-[1500px]">
            <div className="flex flex-col gap-8 border-b border-[#D8AD55]/15 pb-10 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F05E7C]">
                  The Community
                </p>

                <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                  What readers are saying.
                </h2>
              </div>

              <div className="flex gap-1 text-[#D8AD55]">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={17}
                    fill="currentColor"
                  />
                ))}
              </div>
            </div>

            <div className="mt-4 grid md:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <motion.article
                  key={testimonial.quote}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  className={`
                    min-h-[330px]
                    border-[#D8AD55]/10
                    px-0
                    py-10
                    sm:p-10
                    md:border-b
                    ${index % 2 === 0 ? "md:border-r" : ""}
                  `}
                >
                  <Quote
                    size={30}
                    strokeWidth={1.2}
                    className="text-[#F05E7C]/45"
                  />

                  <p className="mt-8 max-w-xl text-2xl leading-[1.45] tracking-[-0.025em] text-white/80 sm:text-3xl">
                    “{testimonial.quote}”
                  </p>

                  <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.22em] text-[#D8AD55]/60">
                    {testimonial.name}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            NEWSLETTER
        ===================================================== */}
        <section className="bg-gradient-to-br from-[#A81842] via-[#8D1C46] to-[#4B183A] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
          <div className="mx-auto max-w-[1300px] text-center">
            <Mail
              size={32}
              strokeWidth={1.4}
              className="mx-auto text-[#D8AD55]"
            />

            <p className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-[#F6CFC3]">
              Stay Connected
            </p>

            <h2 className="mx-auto mt-5 max-w-5xl text-4xl font-medium leading-[1.04] tracking-[-0.045em] sm:text-5xl lg:text-7xl">
              Get relationship wisdom directly to your inbox.
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/60">
              Join the Hubby Hub community for practical ideas on communication,
              connection, romance, confidence, and lasting love.
            </p>

            <form
              onSubmit={(event) => event.preventDefault()}
              className="mx-auto mt-12 flex max-w-2xl flex-col border-b border-[#D8AD55]/55 sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="Enter your email address"
                className="min-w-0 flex-1 bg-transparent px-1 py-5 text-base text-white outline-none placeholder:text-white/35"
              />

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-3 py-5 text-xs font-bold uppercase tracking-[0.17em] text-white transition hover:text-[#D8AD55] sm:px-5"
              >
                Join The Community
                <ArrowRight size={17} />
              </button>
            </form>

            <p className="mt-4 text-[11px] text-white/35">
              Relationship wisdom, book updates, and occasional announcements.
            </p>
          </div>
        </section>

        {/* =====================================================
            END STRIP
        ===================================================== */}
        <section className="bg-[#080608] px-5 py-8 sm:px-8 lg:px-12">
          <div className="mx-auto flex max-w-[1500px] flex-col gap-5 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Hubby Hub
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link
                to="/about"
                className="transition hover:text-[#F05E7C]"
              >
                About
              </Link>

              <Link
                to="/book"
                className="transition hover:text-[#F05E7C]"
              >
                Book
              </Link>

              <a
                href={buyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#D8AD55]"
              >
                Purchase
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}