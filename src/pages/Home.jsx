import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Heart,
  MessageCircle,
  Sparkles,
  BookOpen,
  ArrowRight,
  Star,
  Send,
  Quote,
  PenLine,
} from "lucide-react";

import bookCover from "../assets/bookcover.JPG";

const buyLink =
  "https://www.barnesandnoble.com/w/how-to-get-your-husband-hubby-hub/1148545199?ean=9798260331149";

const reviewFormLink = "https://formspree.io/f/YOUR_FORM_ID";

const heroWoman =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80";

const happyCouple =
  "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1600&q=80";

const coupleReading =
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80";

const smilingWoman =
  "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1200&q=80";

const discoveries = [
  {
    icon: Heart,
    title: "Feel Seen Again",
    text: "Guidance for women who want deeper attention, affection, and emotional closeness.",
  },
  {
    icon: MessageCircle,
    title: "Speak With Soft Power",
    text: "Learn how to communicate without losing your calm, confidence, or self-respect.",
  },
  {
    icon: Sparkles,
    title: "Bring Romance Back",
    text: "Simple relationship wisdom that helps love feel intentional again.",
  },
];

const testimonials = [
  "This gave me a new way to think about connection in my relationship.",
  "Simple, honest, and easy to understand. It felt like real guidance.",
  "A beautiful reminder that love needs attention, patience, and wisdom.",
];

const floatingItems = [
  { icon: Heart, className: "left-[6%] top-[16%]", delay: 0 },
  { icon: Sparkles, className: "right-[8%] top-[18%]", delay: 0.5 },
  { icon: Heart, className: "left-[12%] bottom-[18%]", delay: 1 },
  { icon: Sparkles, className: "right-[18%] bottom-[22%]", delay: 1.5 },
];

function FloatingDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#FADADD]/60 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#D97A8A]/30 blur-3xl" />

      {floatingItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={index}
            className={`absolute hidden rounded-full border border-[#FADADD] bg-white/70 p-3 text-[#B73E5A] shadow-lg backdrop-blur sm:block ${item.className}`}
            animate={{
              y: [0, -22, 0],
              rotate: [0, 10, -8, 0],
              opacity: [0.35, 1, 0.35],
            }}
            transition={{
              duration: 5,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon size={20} fill="currentColor" />
          </motion.div>
        );
      })}
    </div>
  );
}

export default function Home() {
  return (
    <Layout>
      <main className="relative overflow-hidden bg-[#FFF7F2]">
        {/* HERO */}
        <section className="relative overflow-hidden px-5 py-16 lg:py-24">
          <FloatingDecor />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative z-10"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FADADD] bg-white/80 px-5 py-2 text-sm font-bold text-[#7A1F3D] shadow-sm backdrop-blur">
                <Sparkles size={16} />
                New Relationship Release
              </div>

              <h1 className="max-w-4xl font-serif text-5xl font-bold leading-[0.95] text-[#4B2338] sm:text-6xl lg:text-8xl">
                Get his attention without losing yourself.
              </h1>

              <p className="mt-6 max-w-2xl text-xl font-semibold leading-8 text-[#B73E5A]">
                A soft but powerful guide for women who want more connection,
                communication, romance, and emotional presence at home.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href={buyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7A1F3D] px-8 py-4 font-bold text-white shadow-xl shadow-[#7A1F3D]/20 transition hover:-translate-y-1 hover:bg-[#4B2338]"
                >
                  Buy the Book <ArrowRight size={18} />
                </a>

                <Link
                  to="/book"
                  className="inline-flex items-center justify-center rounded-full border border-[#D97A8A] bg-white/80 px-8 py-4 font-bold text-[#7A1F3D] transition hover:-translate-y-1 hover:bg-[#FADADD]"
                >
                  Read Description
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto w-full max-w-lg"
            >
              <div className="absolute -inset-6 rounded-[3rem] bg-[#D97A8A]/20 blur-3xl" />

              <img
                src={heroWoman}
                alt="Confident smiling woman"
                className="h-[620px] w-full rounded-[3rem] object-cover shadow-2xl"
              />

              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-t from-[#4B2338]/55 via-transparent to-transparent" />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-3 w-44 rounded-[2rem] bg-white p-3 shadow-2xl sm:-left-10 sm:w-56"
              >
                <img
                  src={bookCover}
                  alt="How to Get Your Husband's Attention book cover"
                  className="w-full rounded-[1.5rem] object-cover"
                />
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-2 top-8 max-w-[12rem] rounded-3xl border border-[#FADADD] bg-white/90 p-4 shadow-xl backdrop-blur sm:-right-8"
              >
                <p className="font-serif text-xl font-bold text-[#4B2338]">
                  Love needs attention.
                </p>
                <p className="mt-1 text-sm text-[#5c4a50]">
                  Not pressure. Understanding.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* IMAGE BANNER */}
        <section className="px-5 py-20">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[3rem] shadow-2xl">
            <img
              src={happyCouple}
              alt="Happy couple together"
              className="h-[620px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#4B2338]/95 via-[#4B2338]/55 to-transparent" />

            <div className="absolute inset-0 flex items-center p-8 sm:p-12">
              <div className="max-w-2xl text-white">
                <p className="font-bold uppercase tracking-[0.2em] text-[#FADADD]">
                  Relationship Wisdom
                </p>

                <h2 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-6xl">
                  Strong relationships are built intentionally.
                </h2>

                <p className="mt-6 text-lg leading-8 text-[#FADADD]">
                  Hubby Hub helps women understand communication, attention,
                  romance, and emotional presence in a way that feels warm,
                  practical, and real.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LOVE NOTES */}
        <section className="px-5 py-14">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
            {discoveries.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -8, rotate: index === 1 ? 1 : -1 }}
                  className="relative overflow-hidden rounded-[2rem] border border-[#FADADD] bg-white p-8 shadow-sm"
                >
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#FADADD]/60 blur-2xl" />
                  <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FADADD] text-[#7A1F3D]">
                    <Icon size={26} fill="currentColor" />
                  </div>

                  <h3 className="relative font-serif text-2xl font-bold text-[#4B2338]">
                    {item.title}
                  </h3>

                  <p className="relative mt-4 leading-7 text-[#5c4a50]">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* WOMAN SECTION */}
        <section className="px-5 py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[3rem] shadow-2xl">
              <img
                src={smilingWoman}
                alt="Happy woman smiling"
                className="h-[650px] w-full object-cover"
              />
            </div>

            <div>
              <p className="font-bold uppercase tracking-[0.2em] text-[#B73E5A]">
                For Women
              </p>

              <h2 className="mt-4 font-serif text-5xl font-bold leading-tight text-[#4B2338]">
                Feel confident in love without losing yourself.
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#5c4a50]">
                This book is for the woman who wants attention, connection, and
                emotional presence — but also wants to move with wisdom,
                softness, and self-respect.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {["Confidence", "Connection", "Communication", "Romance"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-[#FADADD] bg-white p-5 shadow-sm"
                    >
                      <p className="font-serif text-2xl font-bold text-[#4B2338]">
                        {item}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* GRAPHIC SPLIT SECTION */}
        <section className="px-5 py-20">
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[3rem] bg-[#4B2338] shadow-2xl lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[28rem] overflow-hidden p-8 text-white sm:p-12">
              <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#FADADD]/20 blur-3xl" />
              <div className="absolute bottom-10 right-10 h-52 w-52 rounded-full bg-[#D97A8A]/20 blur-3xl" />

              <div className="relative">
                <p className="mb-4 font-bold uppercase tracking-[0.2em] text-[#FADADD]">
                  The Heart of the Book
                </p>

                <h2 className="font-serif text-4xl font-bold leading-tight sm:text-5xl">
                  For the woman who wants to feel loved, chosen, and understood.
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-8 text-[#FADADD]">
                  Hubby Hub turns relationship lessons into soft, practical
                  guidance that helps women move with wisdom instead of worry.
                </p>

                <Link
                  to="/about"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-[#7A1F3D]"
                >
                  About Hubby Hub <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 bg-[#7A1F3D]/40 p-5 sm:gap-4 sm:p-8">
              {["Romance", "Wisdom", "Marriage", "Connection"].map(
                (item, index) => (
                  <motion.div
                    key={item}
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 4 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex min-h-36 items-center justify-center rounded-[2rem] border border-white/10 bg-white/10 p-5 text-center backdrop-blur"
                  >
                    <p className="font-serif text-2xl font-bold text-white sm:text-3xl">
                      {item}
                    </p>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </section>

        {/* IMAGE MOSAIC */}
        <section className="px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <p className="font-bold uppercase tracking-[0.2em] text-[#B73E5A]">
                Love In Real Life
              </p>

              <h2 className="mt-4 font-serif text-5xl font-bold text-[#4B2338]">
                A brand that feels emotional, feminine, and premium.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <img
                src={coupleReading}
                alt="Woman portrait"
                className="h-[520px] w-full rounded-[3rem] object-cover shadow-xl"
              />

              <img
                src={happyCouple}
                alt="Happy couple"
                className="h-[520px] w-full rounded-[3rem] object-cover shadow-xl md:mt-16"
              />

              <img
                src={smilingWoman}
                alt="Smiling woman"
                className="h-[520px] w-full rounded-[3rem] object-cover shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* QUOTE BANNER */}
        <section className="px-5 py-10">
          <div className="mx-auto max-w-7xl rounded-[3rem] border border-[#FADADD] bg-white p-8 shadow-sm sm:p-12">
            <Quote className="mb-5 text-[#B73E5A]" size={42} />
            <h2 className="max-w-5xl font-serif text-4xl font-bold leading-tight text-[#4B2338] sm:text-5xl">
              “Sometimes the attention you want starts with the conversation
              you have been afraid to begin.”
            </h2>
            <p className="mt-6 font-bold text-[#B73E5A]">— Hubby Hub</p>
          </div>
        </section>

        {/* REVIEWS + FORM */}
        <section className="px-5 py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 font-bold uppercase tracking-[0.2em] text-[#B73E5A]">
                Reader Response
              </p>

              <h2 className="font-serif text-4xl font-bold text-[#4B2338] sm:text-5xl">
                Let readers feel the emotion before they buy.
              </h2>

              <div className="mt-8 space-y-5">
                {testimonials.map((quote) => (
                  <div
                    key={quote}
                    className="rounded-[2rem] border border-[#FADADD] bg-white p-6 shadow-sm"
                  >
                    <div className="mb-3 flex gap-1 text-[#B73E5A]">
                      {[...Array(5)].map((_, index) => (
                        <Star key={index} size={17} fill="currentColor" />
                      ))}
                    </div>
                    <p className="leading-7 text-[#5c4a50]">“{quote}”</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[3rem] bg-gradient-to-br from-[#FADADD] via-[#FFF7F2] to-[#D97A8A] p-[2px] shadow-xl">
              <div className="rounded-[2.85rem] bg-white p-6 sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FADADD] text-[#7A1F3D]">
                    <PenLine size={22} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#4B2338]">
                      Submit Your Review
                    </h3>
                    <p className="text-sm text-[#5c4a50]">
                      Reviews may be featured after approval.
                    </p>
                  </div>
                </div>

                <form action={reviewFormLink} method="POST" className="space-y-4">
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Your Name"
                    className="w-full rounded-2xl border border-[#FADADD] p-4 outline-none focus:border-[#7A1F3D]"
                  />

                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Your Email"
                    className="w-full rounded-2xl border border-[#FADADD] p-4 outline-none focus:border-[#7A1F3D]"
                  />

                  <select
                    name="rating"
                    required
                    className="w-full rounded-2xl border border-[#FADADD] p-4 outline-none focus:border-[#7A1F3D]"
                  >
                    <option value="">Choose a Rating</option>
                    <option value="5 Stars">★★★★★ 5 Stars</option>
                    <option value="4 Stars">★★★★ 4 Stars</option>
                    <option value="3 Stars">★★★ 3 Stars</option>
                    <option value="2 Stars">★★ 2 Stars</option>
                    <option value="1 Star">★ 1 Star</option>
                  </select>

                  <textarea
                    name="review"
                    rows={5}
                    required
                    placeholder="Write your review..."
                    className="w-full rounded-2xl border border-[#FADADD] p-4 outline-none focus:border-[#7A1F3D]"
                  />

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#7A1F3D] px-8 py-4 font-bold text-white transition hover:bg-[#4B2338] sm:w-fit"
                  >
                    Submit Review <Send size={17} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative px-5 py-24">
          <img
            src={happyCouple}
            alt="Happy couple"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#4B2338]/85" />

          <div className="relative mx-auto max-w-4xl text-center text-white">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-[#FADADD]">
              <BookOpen size={17} />
              Start with the newest release
            </div>

            <h2 className="font-serif text-5xl font-bold leading-tight sm:text-6xl">
              Start your journey toward deeper connection.
            </h2>

            <p className="mt-6 text-xl leading-8 text-[#FADADD]">
              Discover relationship insight created to help women understand
              communication, attention, and lasting love.
            </p>

            <a
              href={buyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex rounded-full bg-white px-10 py-5 font-bold text-[#7A1F3D] transition hover:bg-[#FADADD]"
            >
              Buy Now
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}