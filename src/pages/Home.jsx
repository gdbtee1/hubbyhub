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
} from "lucide-react";

import bookCover from "../assets/bookcover.JPG";

const buyLink =
  "https://www.barnesandnoble.com/w/how-to-get-your-husband-hubby-hub/1148545199?ean=9798260331149";

const reviewFormLink = "https://formspree.io/f/YOUR_FORM_ID";

const discoveries = [
  {
    icon: Heart,
    title: "Emotional Connection",
    text: "Understand what creates closeness, attention, and deeper love at home.",
  },
  {
    icon: MessageCircle,
    title: "Better Communication",
    text: "Learn how to approach conversations with clarity, softness, and confidence.",
  },
  {
    icon: Sparkles,
    title: "Romance That Feels Real",
    text: "Bring back affection, attention, and meaningful moments without forcing it.",
  },
];

const testimonials = [
  "This gave me a new way to think about connection in my relationship.",
  "Simple, honest, and easy to understand. It felt like real guidance.",
  "A beautiful reminder that love needs attention, patience, and wisdom.",
];

const floatingDecor = [
  { icon: Heart, className: "left-[6%] top-24", delay: 0 },
  { icon: Sparkles, className: "left-[18%] top-[60%]", delay: 0.7 },
  { icon: Heart, className: "right-[8%] top-32", delay: 1.1 },
  { icon: Sparkles, className: "right-[18%] bottom-28", delay: 1.5 },
  { icon: Heart, className: "left-[45%] bottom-16", delay: 2 },
];

function FloatingRomanceBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {floatingDecor.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={index}
            className={`absolute hidden rounded-full border border-[#FADADD]/70 bg-white/50 p-3 text-[#B73E5A] shadow-lg shadow-[#FADADD]/30 backdrop-blur-sm sm:block ${item.className}`}
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{
              opacity: [0.25, 0.8, 0.25],
              y: [0, -22, 0],
              rotate: [0, 8, -5, 0],
              scale: [0.9, 1.08, 0.9],
            }}
            transition={{
              duration: 6,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon size={18} fill="currentColor" />
          </motion.div>
        );
      })}

      <motion.div
        className="absolute left-1/2 top-10 h-32 w-32 rounded-full bg-[#FADADD]/30 blur-3xl"
        animate={{
          scale: [1, 1.35, 1],
          opacity: [0.4, 0.85, 0.4],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-12 right-1/4 h-40 w-40 rounded-full bg-[#E8A1B3]/25 blur-3xl"
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.35, 0.7, 0.35],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

export default function Home() {
  return (
    <Layout>
      {/* HERO / NEWEST RELEASE */}
      <section className="relative overflow-hidden px-5 py-20 lg:py-28">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#FADADD]/50 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#E8A1B3]/40 blur-3xl" />
        <FloatingRomanceBackground />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="order-1 flex justify-center lg:order-1"
          >
            <motion.div
              className="relative w-full max-w-sm"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="absolute inset-0 rounded-[2rem] bg-[#7A1F3D]/20 blur-3xl" />

              <div className="relative rounded-[2rem] border border-[#FADADD] bg-white p-4 shadow-2xl">
                <img
                  src={bookCover}
                  alt="How to Get Your Husband's Attention book cover"
                  className="aspect-[3/4] w-full rounded-[1.5rem] object-cover"
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-2"
          >
            <motion.div
              className="mb-6 inline-flex rounded-full border border-[#FADADD] bg-white/70 px-5 py-2 text-sm font-bold text-[#7A1F3D] shadow-sm"
              animate={{
                boxShadow: [
                  "0 0 0 rgba(183,62,90,0)",
                  "0 0 28px rgba(183,62,90,0.25)",
                  "0 0 0 rgba(183,62,90,0)",
                ],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Newest Release
            </motion.div>

            <h1 className="font-serif text-5xl font-bold leading-tight text-[#4B2338] md:text-7xl">
              How to Get Your Husband&apos;s Attention
            </h1>

            <p className="mt-6 max-w-xl text-xl font-semibold text-[#B73E5A]">
              A Woman&apos;s Guide to Reconnection, Communication, and Lasting
              Love
            </p>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#5c4a50]">
              Romance, wisdom, and real relationship guidance for women who want
              stronger communication, deeper emotional connection, and more love
              at home.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={buyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#7A1F3D] px-8 py-4 font-semibold text-white shadow-lg shadow-[#7A1F3D]/20 transition hover:bg-[#4B2338]"
              >
                Buy Now
              </a>

              <Link
                to="/book"
                className="inline-flex items-center justify-center rounded-full border border-[#D97A8A] bg-white/70 px-8 py-4 font-semibold text-[#7A1F3D] transition hover:bg-[#FADADD]"
              >
                Description
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3">
              {["Love", "Communication", "Connection"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#FADADD] bg-white/70 p-4 text-center shadow-sm backdrop-blur-sm"
                >
                  <p className="font-bold text-[#4B2338]">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* DISCOVER */}
      <section className="relative overflow-hidden px-5 py-20">
        <FloatingRomanceBackground />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-end gap-8 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-3 font-bold uppercase tracking-[0.2em] text-[#B73E5A]">
                Inside the Message
              </p>

              <h2 className="font-serif text-4xl font-bold text-[#4B2338] md:text-5xl">
                Relationship wisdom that feels honest, warm, and practical.
              </h2>
            </div>

            <p className="text-lg leading-8 text-[#5c4a50]">
              Hubby Hub is built around guidance that helps women reflect,
              reconnect, and move with more confidence in love and marriage.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {discoveries.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className="rounded-[2rem] border border-[#FADADD] bg-white/90 p-8 shadow-sm backdrop-blur-sm transition hover:shadow-xl"
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

      {/* BRAND SECTION */}
      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#4B2338] md:grid-cols-2">
          <div className="p-10 text-white md:p-14">
            <p className="mb-4 font-bold uppercase tracking-[0.2em] text-[#FADADD]">
              Why Hubby Hub Exists
            </p>

            <h2 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
              Every relationship deserves attention, growth, and care.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#FADADD]">
              Hubby Hub is an anonymous romance and relationship writing brand
              created to help women navigate love, communication, and emotional
              connection with wisdom from the heart.
            </p>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#FFF7F2] px-7 py-4 font-bold text-[#7A1F3D]"
            >
              About Hubby Hub <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 bg-[#7A1F3D]/30 p-6">
            {["Romance", "Trust", "Growth", "Wisdom"].map((item, index) => (
              <motion.div
                key={item}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex min-h-40 items-center justify-center rounded-[2rem] border border-white/10 bg-white/10 p-6 text-center"
              >
                <p className="font-serif text-3xl font-bold text-white">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative overflow-hidden px-5 py-20">
        <FloatingRomanceBackground />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 font-bold uppercase tracking-[0.2em] text-[#B73E5A]">
                Reader Response
              </p>

              <h2 className="font-serif text-4xl font-bold text-[#4B2338] md:text-5xl">
                Words from the heart.
              </h2>
            </div>

            <Link
              to="/book"
              className="inline-flex items-center gap-2 font-bold text-[#7A1F3D]"
            >
              View the Book <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((quote) => (
              <motion.div
                key={quote}
                whileHover={{ y: -8 }}
                className="rounded-[2rem] border border-[#FADADD] bg-white/90 p-8 shadow-sm backdrop-blur-sm"
              >
                <div className="mb-5 flex gap-1 text-[#B73E5A]">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={18} fill="currentColor" />
                  ))}
                </div>

                <p className="leading-7 text-[#5c4a50]">“{quote}”</p>

                <p className="mt-6 font-bold text-[#4B2338]">Reader</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SUBMIT REVIEW */}
      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 font-bold uppercase tracking-[0.2em] text-[#B73E5A]">
              Submit Your Review
            </p>

            <h2 className="font-serif text-4xl font-bold text-[#4B2338] md:text-5xl">
              Share what the book meant to you.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#5c4a50]">
              Reader reviews help others discover Hubby Hub. Submit your review
              below and it may be featured on the website after approval.
            </p>

            <motion.div
              className="mt-8 rounded-[2rem] bg-[#FFF7F2] p-6"
              animate={{
                boxShadow: [
                  "0 0 0 rgba(250,218,221,0)",
                  "0 0 30px rgba(250,218,221,0.9)",
                  "0 0 0 rgba(250,218,221,0)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="mb-3 flex gap-1 text-[#B73E5A]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>

              <p className="italic text-[#5c4a50]">
                “The most powerful reviews often come from readers whose lives
                were genuinely impacted.”
              </p>
            </motion.div>
          </div>

          <div className="rounded-[2.5rem] border border-[#FADADD] bg-white p-6 shadow-xl md:p-8">
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

            <p className="mt-5 text-sm leading-6 text-[#5c4a50]">
              Reviews are reviewed before being published to keep the Hubby Hub
              community thoughtful and respectful.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden px-5 py-20">
        <FloatingRomanceBackground />

        <div className="relative mx-auto grid max-w-7xl items-center gap-8 rounded-[2.5rem] border border-[#FADADD] bg-white/90 p-8 shadow-sm backdrop-blur-sm md:grid-cols-[1fr_auto] md:p-12">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#FADADD] px-4 py-2 text-sm font-bold text-[#7A1F3D]">
              <BookOpen size={17} />
              Start with the newest release
            </div>

            <h2 className="font-serif text-4xl font-bold text-[#4B2338]">
              Ready to bring more attention and connection back home?
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#5c4a50]">
              Explore the book and discover relationship insight created to feel
              warm, practical, and easy to apply.
            </p>
          </div>

          <a
            href={buyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#7A1F3D] px-8 py-4 text-center font-bold text-white transition hover:bg-[#4B2338]"
          >
            Buy Now
          </a>
        </div>
      </section>
    </Layout>
  );
}