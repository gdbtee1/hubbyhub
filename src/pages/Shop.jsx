import { useMemo, useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Search,
  BookOpen,
  Sparkles,
  ArrowRight,
  ShoppingBag,
  MessageCircle,
  Heart,
  Clock,
} from "lucide-react";

import bookCover from "../assets/bookcover.JPG";

const buyLink =
  "https://www.barnesandnoble.com/w/how-to-get-your-husband-hubby-hub/1148545199?ean=9798260331149";

const products = [
  {
    title: "How to Get Your Husband's Attention",
    category: "Books",
    status: "Available Now",
    description:
      "A heartfelt guide for women seeking stronger communication, deeper connection, and more love at home.",
    image: bookCover,
    featured: true,
    link: buyLink,
  },
  {
    title: "The Art of Being Loved",
    category: "Coming Soon",
    status: "Coming Soon",
    description:
      "A future Hubby Hub release centered on receiving love, emotional safety, and healthy affection.",
    image: null,
    featured: false,
    link: "#",
  },
  {
    title: "Soft Love, Strong Marriage",
    category: "Coming Soon",
    status: "Coming Soon",
    description:
      "A future relationship guide about balancing softness, respect, communication, and commitment.",
    image: null,
    featured: false,
    link: "#",
  },
  {
    title: "Romance at Home",
    category: "Coming Soon",
    status: "Coming Soon",
    description:
      "A future book about bringing intention, romance, warmth, and attention back into everyday love.",
    image: null,
    featured: false,
    link: "#",
  },
];

const categories = ["All", "Books", "Coming Soon"];

const floatingDecor = [
  { icon: Heart, className: "left-[5%] top-20", delay: 0 },
  { icon: Sparkles, className: "right-[8%] top-32", delay: 0.8 },
  { icon: Heart, className: "left-[18%] bottom-24", delay: 1.3 },
  { icon: Sparkles, className: "right-[22%] bottom-20", delay: 1.8 },
];

function FloatingRomanceBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(250,218,221,0.32),transparent_32%),radial-gradient(circle_at_85%_15%,rgba(232,161,179,0.22),transparent_28%),radial-gradient(circle_at_50%_90%,rgba(122,31,61,0.08),transparent_35%)]" />

      {floatingDecor.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={index}
            className={`absolute rounded-full border border-[#FADADD]/70 bg-white/60 p-2 text-[#B73E5A] shadow-lg shadow-[#FADADD]/30 backdrop-blur-sm sm:p-3 ${item.className}`}
            animate={{
              opacity: [0.25, 0.9, 0.25],
              y: [0, -22, 0],
              rotate: [0, 10, -6, 0],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 5.5,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon size={16} fill="currentColor" />
          </motion.div>
        );
      })}

      <motion.div
        className="absolute left-1/2 top-10 h-32 w-32 rounded-full bg-[#FADADD]/35 blur-3xl"
        animate={{
          scale: [1, 1.35, 1],
          opacity: [0.4, 0.85, 0.4],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "All" || product.category === activeCategory;

      const matchesSearch =
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <Layout>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none fixed inset-0 z-[1] p-2 sm:p-3">
          <div className="h-full w-full rounded-[1.75rem] border border-[#FADADD]/70 shadow-[inset_0_0_30px_rgba(250,218,221,0.45)] sm:rounded-[2.25rem]" />
        </div>

        <section className="relative overflow-hidden px-5 py-20 lg:py-28">
          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#FADADD]/50 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#7A1F3D]/20 blur-3xl" />
          <FloatingRomanceBackground />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 rounded-[2.5rem] border border-[#FADADD]/70 bg-white/40 p-6 shadow-[0_20px_80px_rgba(122,31,61,0.08)] backdrop-blur-sm sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FADADD] bg-white/80 px-5 py-2 text-sm font-bold text-[#7A1F3D] shadow-sm">
                <ShoppingBag size={17} />
                Hubby Hub Shop
              </div>

              <h1 className="font-serif text-5xl font-bold leading-tight text-[#4B2338] md:text-7xl">
                Books and relationship wisdom for the heart.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5c4a50]">
                Explore Hubby Hub releases, future titles, and relationship
                resources created to help readers reconnect, reflect, and bring
                more love back home.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href={buyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#7A1F3D] px-8 py-4 font-bold text-white shadow-lg shadow-[#7A1F3D]/20 transition hover:bg-[#4B2338]"
                >
                  Buy Newest Release
                </a>

                <a
                  href="#shop"
                  className="inline-flex items-center justify-center rounded-full border border-[#D97A8A] bg-white/70 px-8 py-4 font-bold text-[#7A1F3D] transition hover:bg-[#FADADD]"
                >
                  Browse Shop
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[2.5rem] bg-gradient-to-br from-[#FADADD] via-[#FFF7F2] to-[#D97A8A] p-[2px] shadow-2xl"
            >
              <div className="rounded-[2.35rem] bg-[#4B2338] p-6 text-white sm:p-8">
                <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-[#FADADD]">
                  Featured Product
                </p>

                <div className="grid gap-6 sm:grid-cols-[0.6fr_1fr] sm:items-center">
                  <motion.img
                    src={bookCover}
                    alt="How to Get Your Husband's Attention book cover"
                    className="mx-auto aspect-[3/4] w-full max-w-48 rounded-[1.5rem] border border-white/10 object-cover shadow-xl"
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <div className="flex h-full flex-col justify-center">
                    <h2 className="font-serif text-3xl font-bold">
                      How to Get Your Husband&apos;s Attention
                    </h2>

                    <p className="mt-4 leading-7 text-[#FADADD]">
                      The first Hubby Hub release for women seeking connection,
                      communication, and lasting love.
                    </p>

                    <a
                      href={buyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#FFF7F2] px-6 py-3 font-bold text-[#7A1F3D] sm:w-fit"
                    >
                      Buy Now <ArrowRight size={17} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="shop" className="relative overflow-hidden px-5 py-20">
          <FloatingRomanceBackground />

          <div className="relative mx-auto max-w-7xl">
            <div className="mb-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="mb-3 font-bold uppercase tracking-[0.2em] text-[#B73E5A]">
                  Browse Collection
                </p>

                <h2 className="font-serif text-4xl font-bold text-[#4B2338] md:text-5xl">
                  A growing library of love, romance, and wisdom.
                </h2>
              </div>

              <div className="rounded-[2rem] bg-gradient-to-br from-[#FADADD] via-[#FFF7F2] to-[#D97A8A] p-[2px] shadow-sm">
                <div className="rounded-[1.85rem] bg-white p-4">
                  <div className="flex items-center gap-3 rounded-full bg-[#FFF7F2] px-5 py-4">
                    <Search className="shrink-0 text-[#7A1F3D]" size={20} />

                    <input
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                      placeholder="Search books, romance, communication..."
                      className="w-full bg-transparent text-[#2B1B20] outline-none placeholder:text-[#9b7b85]"
                    />
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`h-11 rounded-full px-5 text-sm font-bold transition ${
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
            </div>

            <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.title}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#FADADD] bg-white/90 shadow-sm backdrop-blur-sm transition hover:shadow-xl"
                >
                  <div className="p-4">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={`${product.title} cover`}
                        className="aspect-[3/4] w-full rounded-[1.5rem] object-cover"
                      />
                    ) : (
                      <div className="flex aspect-[3/4] items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-[#FADADD] via-[#FFF7F2] to-[#E8A1B3] p-8 text-center">
                        <div>
                          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#B73E5A]">
                            Coming Soon
                          </p>

                          <h3 className="font-serif text-3xl font-bold text-[#4B2338]">
                            {product.title}
                          </h3>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-6 pt-2">
                    <div className="mb-4 inline-flex w-fit rounded-full bg-[#FADADD] px-4 py-2 text-xs font-bold text-[#7A1F3D]">
                      {product.status}
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-[#4B2338]">
                      {product.title}
                    </h3>

                    <p className="mt-3 flex-1 leading-7 text-[#5c4a50]">
                      {product.description}
                    </p>

                    <div className="mt-6">
                      {product.featured ? (
                        <a
                          href={product.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#7A1F3D] px-6 font-bold text-white transition hover:bg-[#4B2338]"
                        >
                          Buy Now <ArrowRight size={17} />
                        </a>
                      ) : (
                        <button
                          disabled
                          className="inline-flex h-12 w-full cursor-not-allowed items-center justify-center gap-2 rounded-full bg-[#FADADD] px-6 font-bold text-[#7A1F3D]"
                        >
                          Coming Soon <Clock size={17} />
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="mt-10 rounded-[2rem] border border-[#FADADD] bg-white p-10 text-center shadow-sm">
                <p className="font-serif text-3xl font-bold text-[#4B2338]">
                  No books found.
                </p>
                <p className="mt-3 text-[#5c4a50]">
                  Try searching for love, romance, communication, or connection.
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="px-5 py-20">
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#4B2338] shadow-[0_20px_80px_rgba(75,35,56,0.22)] md:grid-cols-2">
            <div className="p-10 text-white md:p-14">
              <p className="mb-4 font-bold uppercase tracking-[0.2em] text-[#FADADD]">
                More Than Books
              </p>

              <h2 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
                Every release is designed to feel personal, useful, and easy to
                carry into real life.
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#FADADD]">
                Hubby Hub creates relationship resources with a soft but
                powerful purpose: helping readers think deeper, communicate
                better, and love with more intention.
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
                { icon: BookOpen, label: "Books" },
                { icon: Sparkles, label: "Wisdom" },
                { icon: MessageCircle, label: "Guidance" },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 4 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex min-h-36 flex-col items-center justify-center rounded-[2rem] border border-white/10 bg-white/10 p-5 text-center sm:min-h-40"
                  >
                    <Icon className="mb-4 text-[#FADADD]" size={30} />
                    <p className="font-serif text-2xl font-bold text-white sm:text-3xl">
                      {item.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-5 py-20">
          <FloatingRomanceBackground />

          <div className="relative mx-auto rounded-[2.6rem] bg-gradient-to-br from-[#FADADD] via-[#FFF7F2] to-[#D97A8A] p-[2px] shadow-[0_20px_80px_rgba(217,122,138,0.25)]">
            <div className="grid max-w-7xl items-center gap-8 rounded-[2.45rem] bg-white/90 p-8 shadow-sm backdrop-blur-sm md:grid-cols-[1fr_auto] md:p-12">
              <div>
                <p className="mb-3 font-bold uppercase tracking-[0.2em] text-[#B73E5A]">
                  Start Here
                </p>

                <h2 className="font-serif text-4xl font-bold text-[#4B2338]">
                  Begin with the first Hubby Hub release.
                </h2>

                <p className="mt-4 max-w-2xl text-lg leading-8 text-[#5c4a50]">
                  Explore the book created to help women reconnect,
                  communicate, and bring more attention back into love.
                </p>
              </div>

              <a
                href={buyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7A1F3D] px-8 py-4 font-bold text-white transition hover:bg-[#4B2338]"
              >
                Buy Now <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}