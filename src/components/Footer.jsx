import { Link } from "react-router-dom";
import { business } from "../utils/constants";

export default function Footer() {
  return (
    <footer className="border-t border-[#FADADD] bg-[#4B2338] px-5 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <h2 className="font-serif text-3xl font-bold">{business.name}</h2>
          <p className="mt-3 max-w-sm text-sm leading-6 text-[#FADADD]">
            {business.tagline}
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-bold">Explore</h3>
          <div className="flex flex-col gap-2 text-sm text-[#FADADD]">
            <Link to="/about">About</Link>
            <Link to="/book">Book</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

      <div>
  <h3 className="mb-4 font-bold">Future Releases</h3>

  <p className="mb-5 text-sm leading-6 text-[#FADADD]">
    Subscribe to receive updates on new book releases, relationship insights,
    exclusive writing, and future Hubby Hub content delivered directly to your inbox.
  </p>

  <form
    action="https://formspree.io/f/PLACEHOLDER_ID"
    method="POST"
    className="flex flex-col gap-3 sm:flex-row"
  >
    <input
      type="email"
      name="email"
      required
      placeholder="Enter your email"
      className="w-full rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-[#FADADD]/70 focus:outline-none focus:ring-2 focus:ring-[#D97A8A]"
    />

    <button
      type="submit"
      className="rounded-full bg-[#D97A8A] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#B73E5A]"
    >
      Subscribe
    </button>
  </form>

  <p className="mt-3 text-xs text-[#FADADD]/70">
    No spam. Unsubscribe anytime.
  </p>
</div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-[#FADADD]">
        © {new Date().getFullYear()} {business.name}. All rights reserved.
      </div>
    </footer>
  );
}