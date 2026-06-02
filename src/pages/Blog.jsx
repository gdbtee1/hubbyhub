import { useMemo, useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Search,
  Heart,
  MessageCircle,
  Sparkles,
  ArrowRight,
  Clock,
  BookOpen,
  PenLine,
} from "lucide-react";

const posts = [
  {
    title: "How to Rebuild Emotional Connection in a Relationship",
    category: "Connection",
    readTime: "5 min read",
    featured: true,
    description:
      "A thoughtful look at how attention, patience, and emotional awareness can help love feel close again.",
  },
  {
    title: "Why Communication Feels Hard Even When Love Is Still There",
    category: "Communication",
    readTime: "4 min read",
    featured: false,
    description:
      "Sometimes couples are not missing love — they are missing language, timing, and understanding.",
  },
  {
    title: "Small Romantic Habits That Make a Relationship Feel Alive",
    category: "Romance",
    readTime: "3 min read",
    featured: false,
    description:
      "Simple gestures can create warmth, reassurance, and connection when they are done with intention.",
  },
  {
    title: "The Quiet Things That Make a Woman Feel Unseen",
    category: "Reflection",
    readTime: "6 min read",
    featured: false,
    description:
      "A soft reflection on attention, emotional presence, and the desire to feel valued in love.",
  },
  {
    title: "Love Needs Attention Before It Needs Correction",
    category: "Wisdom",
    readTime: "4 min read",
    featured: false,
    description:
      "Before fixing the relationship, sometimes the first step is noticing where love has gone quiet.",
  },
  {
    title: "How to Bring Softness Back Into Difficult Conversations",
    category: "Communication",
    readTime: "5 min read",
    featured: false,
    description:
      "A practical guide to speaking with honesty while still protecting emotional connection.",
  },
];

const categories = [
  "All",
  "Connection",
  "Communication",
  "Romance",
  "Reflection",
  "Wisdom",
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;

      const matchesSearch =
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.description.toLowerCase().includes(search.toLowerCase()) ||
        post.category.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const featuredPost = posts.find((post) => post.featured);

  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden px-5 py-20 lg:py-28">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#FADADD]/50 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#7A1F3D]/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FADADD] bg-white/70 px-5 py-2 text-sm font-bold text-[#7A1F3D] shadow-sm">
              <PenLine size={17} />
              Hubby Hub Blog
            </div>

            <h1 className="font-serif text-5xl font-bold leading-tight text-[#4B2338] md:text-7xl">
              Love notes, relationship wisdom, and quiet truth.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5c4a50]">
              Read thoughtful articles on romance, communication, marriage,
              emotional connection, and the deeper lessons that help love feel
              understood.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="#articles"
                className="inline-flex items-center justify-center rounded-full bg-[#7A1F3D] px-8 py-4 font-bold text-white shadow-lg shadow-[#7A1F3D]/20 transition hover:bg-[#4B2338]"
              >
                Browse Articles
              </a>

              <Link
                to="/book"
                className="inline-flex items-center justify-center rounded-full border border-[#D97A8A] bg-white/70 px-8 py-4 font-bold text-[#7A1F3D] transition hover:bg-[#FADADD]"
              >
                View the Book
              </Link>
            </div>
          </motion.div>

          {/* FEATURED ARTICLE */}
          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[2.5rem] bg-[#4B2338] p-6 text-white shadow-2xl sm:p-8"
            >
              <div className="absolute -right-12 -top-12 h-52 w-52 rounded-full bg-[#FADADD]/20 blur-3xl" />

              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#FADADD]">
                  <Heart size={28} />
                </div>

                <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#FADADD]">
                  Featured Article
                </p>

                <h2 className="font-serif text-4xl font-bold leading-tight">
                  {featuredPost.title}
                </h2>

                <p className="mt-5 leading-8 text-[#FADADD]">
                  {featuredPost.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-[#FFF7F2]">
                    {featuredPost.category}
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-[#FFF7F2]">
                    <Clock size={15} />
                    {featuredPost.readTime}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* SEARCH / FILTER */}
      <section id="articles" className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="mb-3 font-bold uppercase tracking-[0.2em] text-[#B73E5A]">
                Article Library
              </p>

              <h2 className="font-serif text-4xl font-bold text-[#4B2338] md:text-5xl">
                Browse relationship topics by mood, need, or lesson.
              </h2>
            </div>

            <div className="rounded-[2rem] border border-[#FADADD] bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3 rounded-full bg-[#FFF7F2] px-5 py-4">
                <Search className="shrink-0 text-[#7A1F3D]" size={20} />

                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search love, romance, connection..."
                  className="w-full bg-transparent text-[#2B1B20] outline-none placeholder:text-[#9b7b85]"
                />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`h-11 rounded-full px-4 text-sm font-bold transition ${
                      activeCategory === category
                        ? "bg-[#7A1F3D] text-white"
                        : "bg-[#FADADD] text-[#7A1F3D] hover:bg-[#E8A1B3]"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ARTICLES */}
          <div className="grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredPosts.map((post) => (
              <article
                key={post.title}
                className="group flex h-full flex-col rounded-[2rem] border border-[#FADADD] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-44 items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-[#FADADD] via-[#FFF7F2] to-[#E8A1B3] p-6 text-center">
                  <div>
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#B73E5A]">
                      {post.category}
                    </p>

                    <h3 className="font-serif text-3xl font-bold leading-tight text-[#4B2338]">
                      Hubby Hub
                    </h3>
                  </div>
                </div>

                <div className="mb-4 flex flex-wrap gap-3">
                  <span className="rounded-full bg-[#FADADD] px-4 py-2 text-xs font-bold text-[#7A1F3D]">
                    {post.category}
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF7F2] px-4 py-2 text-xs font-bold text-[#7A1F3D]">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-serif text-3xl font-bold leading-tight text-[#4B2338]">
                  {post.title}
                </h3>

                <p className="mt-4 flex-1 leading-7 text-[#5c4a50]">
                  {post.description}
                </p>

                <button
                  disabled
                  className="mt-6 inline-flex h-12 w-full cursor-not-allowed items-center justify-center gap-2 rounded-full bg-[#FADADD] px-6 font-bold text-[#7A1F3D]"
                >
                  Coming Soon <ArrowRight size={17} />
                </button>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="mt-10 rounded-[2rem] border border-[#FADADD] bg-white p-10 text-center shadow-sm">
              <p className="font-serif text-3xl font-bold text-[#4B2338]">
                No articles found.
              </p>
              <p className="mt-3 text-[#5c4a50]">
                Try searching for romance, connection, communication, or wisdom.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* EDITORIAL NOTE */}
      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#4B2338] md:grid-cols-2">
          <div className="p-10 text-white md:p-14">
            <p className="mb-4 font-bold uppercase tracking-[0.2em] text-[#FADADD]">
              Editorial Voice
            </p>

            <h2 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
              Written for readers who want love to feel understood, not
              complicated.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#FADADD]">
              The Hubby Hub blog will become a home for short, thoughtful
              lessons on connection, attention, emotional presence, and romance.
              These placeholder articles can be replaced with the author&apos;s
              real posts whenever they are ready.
            </p>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#FFF7F2] px-7 py-4 font-bold text-[#7A1F3D]"
            >
              About Hubby Hub <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 bg-[#7A1F3D]/30 p-6">
            {[
              { icon: Heart, label: "Love" },
              { icon: MessageCircle, label: "Talks" },
              { icon: Sparkles, label: "Romance" },
              { icon: BookOpen, label: "Wisdom" },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex min-h-36 flex-col items-center justify-center rounded-[2rem] border border-white/10 bg-white/10 p-5 text-center sm:min-h-40"
                >
                  <Icon className="mb-4 text-[#FADADD]" size={30} />
                  <p className="font-serif text-2xl font-bold text-white sm:text-3xl">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 rounded-[2.5rem] border border-[#FADADD] bg-white p-8 shadow-sm md:grid-cols-[1fr_auto] md:p-12">
          <div>
            <p className="mb-3 font-bold uppercase tracking-[0.2em] text-[#B73E5A]">
              Start Reading
            </p>

            <h2 className="font-serif text-4xl font-bold text-[#4B2338]">
              Begin with the newest Hubby Hub book.
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#5c4a50]">
              The blog gives the wisdom. The book gives the deeper path into
              attention, connection, and love at home.
            </p>
          </div>

          <Link
            to="/book"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7A1F3D] px-8 py-4 font-bold text-white transition hover:bg-[#4B2338]"
          >
            View The Book <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}