import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { business } from "../utils/constants";
import hubbyLogo from "../assets/hubbylogo.JPG";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Book", "/book"],
  ["Shop", "/shop"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#FADADD]/70 bg-white/85 backdrop-blur-xl">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D97A8A] to-transparent" />

      <div className="mx-auto flex h-22 max-w-7xl items-center justify-between px-4 py-3 sm:px-5">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex min-w-0 items-center gap-3"
        >
          <div className="shrink-0 overflow-hidden rounded-full border-2 border-[#FADADD] bg-white shadow-lg shadow-[#7A1F3D]/10">
            <img
              src={hubbyLogo}
              alt="Hubby Hub logo"
              className="h-12 w-12 object-cover sm:h-14 sm:w-14"
            />
          </div>

          <div className="min-w-0">
            <p className="truncate font-serif text-2xl font-bold leading-none text-[#4B2338] sm:text-3xl">
              {business.name}
            </p>

            <p className="mt-1 truncate text-[10px] font-bold uppercase tracking-[0.22em] text-[#B73E5A] sm:text-xs">
              Romance Wisdom
            </p>
          </div>
        </Link>

        <nav className="hidden items-center rounded-full border border-[#FADADD] bg-[#FFF7F2]/80 px-3 py-2 shadow-sm lg:flex">
          {links.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-bold transition ${
                  isActive
                    ? "bg-[#7A1F3D] text-white shadow-md shadow-[#7A1F3D]/20"
                    : "text-[#2B1B20]/80 hover:bg-[#FADADD] hover:text-[#7A1F3D]"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/book"
          className="hidden rounded-full bg-[#7A1F3D] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#7A1F3D]/20 transition hover:bg-[#4B2338] lg:inline-flex"
        >
          Buy The Book
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="shrink-0 rounded-full border border-[#FADADD] bg-[#FFF7F2] p-2 text-[#7A1F3D] shadow-sm lg:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#FADADD] bg-[#FFF7F2] px-4 py-5 shadow-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-3">
            {links.map(([label, path]) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-2xl px-5 py-4 text-base font-bold transition ${
                    isActive
                      ? "bg-[#7A1F3D] text-white"
                      : "bg-white text-[#2B1B20] hover:bg-[#FADADD] hover:text-[#7A1F3D]"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}

            <Link
              to="/book"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[#7A1F3D] px-6 py-4 text-center text-sm font-bold text-white shadow-lg shadow-[#7A1F3D]/20"
            >
              Buy The Book
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}