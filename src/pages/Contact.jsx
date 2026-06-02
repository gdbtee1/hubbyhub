
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import {
  Mail,
  Heart,
  MessageCircle,
  ArrowRight,
  PenLine,
} from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden px-5 py-20 lg:py-28">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#FADADD]/50 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#7A1F3D]/20 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FADADD] bg-white px-5 py-2 text-sm font-bold text-[#7A1F3D] shadow-sm">
            <MessageCircle size={16} />
            Contact Hubby Hub
          </div>

          <h1 className="font-serif text-5xl font-bold text-[#4B2338] md:text-7xl">
            Start the Conversation
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#5c4a50]">
            Whether you're a reader, media representative, potential partner,
            or simply want to share your thoughts, Hubby Hub welcomes your
            message.
          </p>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="px-5 pb-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-[#FADADD] bg-white p-8 shadow-sm">
            <Mail className="mb-5 text-[#7A1F3D]" size={30} />

            <h3 className="font-serif text-2xl font-bold text-[#4B2338]">
              Email
            </h3>

            <a
              href="mailto:thehusbandhub@gmail.com"
              className="mt-4 block break-all text-[#7A1F3D] hover:underline"
            >
              thehusbandhub@gmail.com
            </a>
          </div>

          <div className="rounded-[2rem] border border-[#FADADD] bg-white p-8 shadow-sm">
            <Heart className="mb-5 text-[#7A1F3D]" size={30} />

            <h3 className="font-serif text-2xl font-bold text-[#4B2338]">
              Reader Messages
            </h3>

            <p className="mt-4 leading-7 text-[#5c4a50]">
              Questions, feedback, stories, and thoughts from readers are always
              welcome.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#FADADD] bg-white p-8 shadow-sm">
            <PenLine className="mb-5 text-[#7A1F3D]" size={30} />

            <h3 className="font-serif text-2xl font-bold text-[#4B2338]">
              Partnerships
            </h3>

            <p className="mt-4 leading-7 text-[#5c4a50]">
              Media inquiries, interviews, collaborations, and future projects.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="px-5 py-10">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[2.5rem] border border-[#FADADD] bg-white p-8 shadow-xl md:p-12">
            <h2 className="font-serif text-4xl font-bold text-[#4B2338]">
              Send a Message
            </h2>

            <p className="mt-4 text-[#5c4a50]">
              Reach out directly through email or use this contact form design
              for future integration.
            </p>

            <form className="mt-10 space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-2xl border border-[#FADADD] p-4 outline-none focus:border-[#7A1F3D]"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-2xl border border-[#FADADD] p-4 outline-none focus:border-[#7A1F3D]"
              />

              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full rounded-2xl border border-[#FADADD] p-4 outline-none focus:border-[#7A1F3D]"
              />

              <button
                type="button"
                className="rounded-full bg-[#7A1F3D] px-8 py-4 font-bold text-white transition hover:bg-[#4B2338]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* READER PROMISE */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-[#4B2338] p-10 text-center text-white md:p-14">
          <h2 className="font-serif text-4xl font-bold">
            Every message is read with care.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#FADADD]">
            Hubby Hub was created to encourage deeper thought about love,
            communication, and connection. Reader messages remain an important
            part of that mission.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 rounded-[2.5rem] border border-[#FADADD] bg-white p-8 shadow-sm md:grid-cols-[1fr_auto] md:p-12">
          <div>
            <h2 className="font-serif text-4xl font-bold text-[#4B2338]">
              Continue Exploring Hubby Hub
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#5c4a50]">
              Discover the latest book and relationship articles.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              to="/book"
              className="rounded-full bg-[#7A1F3D] px-8 py-4 text-center font-bold text-white"
            >
              View Book
            </Link>

            <Link
              to="/blog"
              className="rounded-full border border-[#D97A8A] px-8 py-4 text-center font-bold text-[#7A1F3D]"
            >
              Read Articles
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

