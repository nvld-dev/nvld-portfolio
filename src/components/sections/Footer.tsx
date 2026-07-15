"use client";

import Link from "next/link";

const menus = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 py-20">
      <div className="absolute inset-0 -z-20 bg-[#030712]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(77,142,255,.08),transparent_75%)]" />

      <div className="mx-auto flex max-w-5xl flex-col justify-between gap-14 px-6 lg:flex-row">
        {/* Left */}
        <div className="max-w-sm">
          <Link
            href="/"
            className="text-[52px] font-bold tracking-tight text-white"
          >
            NVLD<span className="text-cyan-400">.</span>
          </Link>

          <p className="mt-6 text-[15px] leading-8 text-slate-400">
            Building digital solutions that bridge complex engineering with
            modern design and exceptional user experiences.
          </p>
        </div>

        {/* Right */}
        <div>
          <h3 className="mb-6 text-[12px] font-semibold tracking-[0.25em] text-cyan-400">
            EXPLORE
          </h3>

          <nav className="flex flex-col gap-3">
            {menus.map((menu) => (
              <Link
                key={menu.label}
                href={menu.href}
                className="text-[15px] text-slate-400 transition-colors duration-300 hover:text-cyan-300"
              >
                {menu.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto mt-16 max-w-5xl border-t border-white/10" />

      {/* Copyright */}
      <div className="mt-8 text-center text-[13px] text-slate-500">
        © {new Date().getFullYear()} Vijjay Novaldi. All rights reserved.
      </div>

      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-[140px]" />
    </footer>
  );
}
