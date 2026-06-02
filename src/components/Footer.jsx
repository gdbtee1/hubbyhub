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
          <h3 className="mb-4 font-bold">Stay Connected</h3>
          <p className="text-sm leading-6 text-[#FADADD]">
            Join the Hubby Hub community for love, wisdom, relationship insight,
            and updates on new releases.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-[#FADADD]">
        © {new Date().getFullYear()} {business.name}. All rights reserved.
      </div>
    </footer>
  );
}