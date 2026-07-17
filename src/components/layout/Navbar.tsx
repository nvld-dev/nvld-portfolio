"use client";

import Link from "next/link";
import clsx from "clsx";
import { Menu } from "lucide-react";

import useNavbar from "@/hooks/useNavbar";

const menus = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Experience",
    href: "#journey",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const { scrolled, visible } = useNavbar();

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        visible ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <div
        id="scroll-progress"
        className="absolute left-0 top-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500"
      />
      <div className="container">
        <div
          className={clsx(
            "mt-2 flex h-12 items-center justify-between rounded-2xl px-8 transition-all duration-500",
            scrolled
              ? "border border-white/10 bg-[#030712]/70 backdrop-blur-xl shadow-[0_12px_35px_rgba(0,0,0,.25)]"
              : "border border-white/10 bg-white/[0.03] backdrop-blur-xl",
          )}
        >
          <Link
            href="/"
            className="text-lg font-semibold tracking-[0.2em] transition hover:text-cyan-300"
          >
            NVLD
          </Link>

          <nav className="hidden items-center gap-10 lg:flex">
            {menus.map((menu) => (
              <Link
                key={menu.label}
                href={menu.href}
                className="group relative text-[15px] text-slate-300 transition hover:text-white"
              >
                {menu.label}

                <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <button className="hidden h-9 rounded-xl border border-white/10 bg-white/5 px-5 text-sm transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300 lg:block">
            Resume
          </button>

          <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 transition hover:border-cyan-400 hover:text-cyan-300 lg:hidden">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
