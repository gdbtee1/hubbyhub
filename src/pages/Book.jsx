import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Heart,
  MessageCircle,
  Sparkles,
  ArrowRight,
  CheckCircle,
  BookOpen,
  Star,
} from "lucide-react";

import bookCover from "../assets/bookcover.JPG";

const buyLink =
  "https://www.barnesandnoble.com/w/how-to-get-your-husband-hubby-hub/1148545199?ean=9798260331149";

const lessons = [
  "How to better understand emotional attention in a relationship.",
  "How communication can rebuild closeness instead of creating distance.",
  "How to bring softness, romance, and patience back into the home.",
  "How to recognize what may be missing emotionally and respond with wisdom.",
];

const benefits = [
  {
    icon: Heart,
    title: "Reconnect Emotionally",
    text: "Learn how love grows when attention, care, and understanding are rebuilt.",
  },
  {
    icon: MessageCircle,
    title: "Communicate Better",
    text: "Discover practical relationship insight that helps reduce confusion and tension.",
  },
  {
    icon: Sparkles,
    title: "Bring Romance Back",
    text: "A warm guide for women who want more affection, connection, and intention.",
  },
];

const comingSoonBooks = [
  "The Art of Being Loved",
  "Soft Love, Strong Marriage",
  "Romance at Home",
];

export default function Book() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden px-5 py-20 lg:py-28">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#FADADD]/50 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#7A1F3D]/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 rounded-[2rem] bg-[#7A1F3D]/25 blur-3xl" />

              <div className="relative rounded-[2rem] border border-[#FADADD] bg-white p-4 shadow-2xl">
                <img
                  src={bookCover}
                  alt="How to Get Your Husband's Attention book cover"
                  className="aspect-[3/4] w-full rounded-[1.5rem] object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex rounded-full border border-[#FADADD] bg-white/70 px-5 py-2 text-sm font-bold text-[#7A1F3D] shadow-sm">
              Newest Release
            </div>

            <h1 className="font-serif text-5xl font-bold leading-tight text-[#4B2338] md:text-7xl">
              How to Get Your Husband&apos;s Attention
            </h1>

            <p className="mt-6 max-w-xl text-xl font-semibold text-[#B73E5A]">
              A Woman&apos;s Guide to Reconnection, Communication, and Lasting
              Love
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5c4a50]">
              This heartfelt relationship guide is designed for women who want
              to better understand love, emotional connection, communication,
              romance, and the quiet things that help a relationship feel close
              again.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={buyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#7A1F3D] px-8 py-4 font-bold text-white shadow-lg shadow-[#7A1F3D]/20 transition hover:bg-[#4B2338]"
              >
                Buy Now
              </a>

              <a
                href="#description"
                className="rounded-full border border-[#D97A8A] bg-white/70 px-8 py-4 font-bold text-[#7A1F3D] transition hover:bg-[#FADADD]"
              >
                Read Description
              </a>
            </div>

            <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3">
              {["Romance", "Wisdom", "Connection"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#FADADD] bg-white/70 p-4 text-center shadow-sm"
                >
                  <p className="font-bold text-[#4B2338]">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FLOATING DESCRIPTION CARD */}
      <section id="description" className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#4B2338] p-8 text-white shadow-2xl md:p-14">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#FADADD]/20 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8">
                <BookOpen className="mb-6 text-[#FADADD]" size={36} />

                <h2 className="font-serif text-4xl font-bold">
                  About the Book
                </h2>

                <p className="mt-4 text-[#FADADD]">
                  A soft, honest, and practical guide for women seeking deeper
                  attention, affection, and emotional connection.
                </p>
              </div>

              <div>
                <p className="text-lg leading-9 text-[#FFF7F2]">
                  <strong>How to Get Your Husband&apos;s Attention</strong> is
                  more than a relationship book — it is a guide for women who
                  want to understand what creates closeness, what causes
                  distance, and how love can be rebuilt through communication,
                  patience, emotional awareness, and intentional romance.
                </p>

                <p className="mt-6 text-lg leading-9 text-[#FADADD]">
                  Written through the Hubby Hub brand, this book gives readers a
                  warm and thoughtful perspective on marriage, connection, and
                  the emotional needs that often go unspoken inside a
                  relationship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU WILL LEARN */}
      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 font-bold uppercase tracking-[0.2em] text-[#B73E5A]">
              What You&apos;ll Learn
            </p>

            <h2 className="font-serif text-4xl font-bold text-[#4B2338] md:text-5xl">
              Simple wisdom for love, attention, and connection.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#5c4a50]">
              This book is written to feel easy to read, emotionally honest, and
              useful for real relationship moments.
            </p>
          </div>

          <div className="grid gap-5">
            {lessons.map((lesson) => (
              <div
                key={lesson}
                className="flex gap-4 rounded-[1.5rem] border border-[#FADADD] bg-white p-6 shadow-sm"
              >
                <CheckCircle className="mt-1 text-[#7A1F3D]" size={24} />
                <p className="text-lg leading-7 text-[#5c4a50]">{lesson}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 font-bold uppercase tracking-[0.2em] text-[#B73E5A]">
              Why Readers Will Love It
            </p>

            <h2 className="font-serif text-4xl font-bold text-[#4B2338] md:text-5xl">
              Built for women who want love to feel intentional again.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-[#FADADD] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FADADD] text-[#7A1F3D]">
                    <Icon size={26} />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#4B2338]">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-[#5c4a50]">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BUY CTA */}
      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-[2.5rem] bg-[#FFF7F2] md:grid-cols-[1fr_auto]">
          <div className="rounded-[2.5rem] border border-[#FADADD] bg-white p-8 shadow-sm md:p-12">
            <div className="mb-5 flex gap-1 text-[#B73E5A]">
              {[...Array(5)].map((_, index) => (
                <Star key={index} size={18} fill="currentColor" />
              ))}
            </div>

            <h2 className="font-serif text-4xl font-bold text-[#4B2338]">
              Start reading the newest Hubby Hub release.
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#5c4a50]">
              Discover a relationship guide created to help women reconnect,
              reflect, and bring more warmth back into love.
            </p>

            <a
              href={buyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#7A1F3D] px-8 py-4 font-bold text-white transition hover:bg-[#4B2338]"
            >
              Buy Now <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* COMING SOON */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 font-bold uppercase tracking-[0.2em] text-[#B73E5A]">
                Future Releases
              </p>

              <h2 className="font-serif text-4xl font-bold text-[#4B2338] md:text-5xl">
                More Hubby Hub books are coming soon.
              </h2>
            </div>

            <Link
              to="/shop"
              className="inline-flex items-center gap-2 font-bold text-[#7A1F3D]"
            >
              View Shop <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {comingSoonBooks.map((title) => (
              <div
                key={title}
                className="group rounded-[2rem] border border-[#FADADD] bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex aspect-[3/4] items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-[#FADADD] via-[#FFF7F2] to-[#E8A1B3] p-8 text-center">
                  <div>
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#B73E5A]">
                      Coming Soon
                    </p>

                    <h3 className="font-serif text-3xl font-bold text-[#4B2338]">
                      {title}
                    </h3>
                  </div>
                </div>

                <div className="p-4">
                  <p className="font-bold text-[#4B2338]">{title}</p>
                  <p className="mt-2 text-sm text-[#5c4a50]">
                    Future Hubby Hub relationship release.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}