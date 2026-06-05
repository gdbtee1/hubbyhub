import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Feather,
  Heart,
  BookOpen,
  EyeOff,
  Sparkles,
  ArrowRight,
  Quote,
} from "lucide-react";

const pillars = [
  {
    icon: Heart,
    title: "Love with Understanding",
    text: "Hubby Hub writes for women who want more than surface-level advice. The work is centered on emotional awareness, patience, and real connection.",
  },
  {
    icon: BookOpen,
    title: "Wisdom Through Experience",
    text: "The voice behind Hubby Hub is shaped by observation, reflection, and lived relationship lessons transformed into thoughtful guidance.",
  },
  {
    icon: Sparkles,
    title: "Softness with Strength",
    text: "The message is warm, but not weak. It encourages love, communication, self-respect, and intentional effort inside relationships.",
  },
];

const sparklePositions = [
  "left-[8%] top-[18%]",
  "left-[22%] top-[72%]",
  "left-[44%] top-[12%]",
  "left-[68%] top-[68%]",
  "left-[82%] top-[24%]",
  "left-[92%] top-[82%]",
];

export default function About() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden px-5 py-20 lg:py-28">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#FADADD]/50 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#4B2338]/20 blur-3xl" />

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {sparklePositions.map((position, i) => (
            <motion.div
              key={i}
              className={`absolute ${position} text-[#D97A8A]/50`}
              animate={{
                y: [0, -18, 0],
                opacity: [0.25, 0.9, 0.25],
                scale: [0.9, 1.25, 0.9],
                rotate: [0, 12, 0],
              }}
              transition={{
                duration: 3.5 + i * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles size={18 + i * 2} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="absolute left-1/2 top-24 hidden h-40 w-40 rounded-full bg-[#D97A8A]/20 blur-3xl md:block"
          animate={{
            x: [-20, 20, -20],
            y: [0, 24, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FADADD] bg-white/70 px-5 py-2 text-sm font-bold text-[#7A1F3D] shadow-sm backdrop-blur"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <EyeOff size={17} />
              Anonymous by Design
            </motion.div>

            <h1 className="font-serif text-5xl font-bold leading-tight text-[#4B2338] md:text-7xl">
              The author stays hidden so the message can be seen clearly.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5c4a50]">
              Hubby Hub is an anonymous romance and relationship writing brand
              created from reflection, experience, and a deep desire to help
              women feel wanted, understood, emotionally desired, and more
              confident in love.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/book"
                className="group inline-flex items-center gap-2 rounded-full bg-[#7A1F3D] px-8 py-4 font-bold text-white shadow-lg shadow-[#7A1F3D]/20 transition hover:-translate-y-0.5 hover:bg-[#4B2338] hover:shadow-xl"
              >
                Explore the Book
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/blog"
                className="rounded-full border border-[#D97A8A] bg-white/70 px-8 py-4 font-bold text-[#7A1F3D] transition hover:-translate-y-0.5 hover:bg-[#FADADD]"
              >
                Read the Wisdom
              </Link>
            </div>
          </motion.div>

          {/* MYSTERY CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              className="absolute inset-0 rounded-[2.5rem] bg-[#7A1F3D]/20 blur-3xl"
              animate={{ scale: [1, 1.08, 1], opacity: [0.45, 0.75, 0.45] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              className="relative overflow-hidden rounded-[2.5rem] border border-[#FADADD] bg-[#4B2338] p-8 text-white shadow-2xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#FADADD]/20 blur-3xl" />
              <div className="absolute -bottom-20 left-10 h-40 w-40 rounded-full bg-[#D97A8A]/20 blur-3xl" />

              <div className="relative">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-[#FADADD]">
                  <Feather size={32} />
                </div>

                <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-[#FADADD]">
                  Hubby Hub
                </p>

                <h2 className="font-serif text-4xl font-bold leading-tight">
                  A quiet voice for complicated matters of the heart.
                </h2>

                <p className="mt-6 leading-8 text-[#FADADD]">
                  The identity is private. The intention is not. Hubby Hub was
                  built to share relationship insight without ego, distraction,
                  or performance — just words that help women think, feel, and
                  reconnect.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {["Love", "Desire", "Marriage", "Growth"].map((item) => (
                    <motion.div
                      key={item}
                      whileHover={{ y: -4, scale: 1.03 }}
                      className="rounded-2xl border border-white/10 bg-white/10 p-4 text-center backdrop-blur"
                    >
                      <p className="font-bold">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ORIGIN SECTION */}
      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-3 font-bold uppercase tracking-[0.2em] text-[#B73E5A]">
              The Origin
            </p>

            <h2 className="font-serif text-4xl font-bold text-[#4B2338] md:text-5xl">
              Born from lessons that were felt before they were written.
            </h2>
          </div>

          <div className="space-y-6">
            {[ 
              "Hubby Hub was created for readers who know love is beautiful, but not always simple. Behind the brand is a private authorial voice shaped by observation, experience, and the belief that many relationship problems begin where communication stops and assumptions begin.",
              "Instead of building the brand around a face, Hubby Hub is built around the message: helping women reflect, reconnect, and better understand the emotional layers inside love, marriage, attention, and connection.",
              "The writing is designed to feel intimate, thoughtful, and easy to carry into real life — like a quiet conversation with someone who has watched love closely and learned from what it reveals.",
            ].map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className={`rounded-[2rem] border border-[#FADADD] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
                  index === 1 ? "bg-[#FFF7F2]" : "bg-white"
                }`}
              >
                <p className="text-lg leading-9 text-[#5c4a50]">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE STRIP */}
      <section className="px-5 py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#7A1F3D] p-8 text-white md:p-14"
        >
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#FADADD]/20 blur-3xl" />

          <Quote className="relative mb-6 text-[#FADADD]" size={42} />

          <h2 className="relative max-w-5xl font-serif text-4xl font-bold leading-tight md:text-6xl">
            “Some wisdom is stronger when it does not ask to be recognized —
            only received.”
          </h2>

          <p className="relative mt-8 font-bold text-[#FADADD]">— Hubby Hub</p>
        </motion.div>
      </section>

      {/* PILLARS */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 font-bold uppercase tracking-[0.2em] text-[#B73E5A]">
              The Writing Philosophy
            </p>

            <h2 className="font-serif text-4xl font-bold text-[#4B2338] md:text-5xl">
              The brand is built on emotional truth, not performance.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="rounded-[2rem] border border-[#FADADD] bg-white p-8 shadow-sm transition hover:shadow-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FADADD] text-[#7A1F3D]">
                    <Icon size={26} />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#4B2338]">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-[#5c4a50]">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto grid max-w-7xl items-center gap-8 rounded-[2.5rem] border border-[#FADADD] bg-white p-8 shadow-sm md:grid-cols-[1fr_auto] md:p-12"
        >
          <div>
            <p className="mb-3 font-bold uppercase tracking-[0.2em] text-[#B73E5A]">
              Begin Here
            </p>

            <h2 className="font-serif text-4xl font-bold text-[#4B2338]">
              Start with the newest Hubby Hub release.
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#5c4a50]">
              Discover relationship guidance written with mystery, warmth, and a
              deep respect for the emotional work love requires.
            </p>
          </div>

          <Link
            to="/book"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7A1F3D] px-8 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#4B2338]"
          >
            View the Book <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </Layout>
  );
}