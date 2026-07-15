"use client";

import { useRef } from "react";
import Image from "next/image";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import useContactAnimation from "@/hooks/useContactAnimation";

const contacts = [
  {
    title: "Email",
    value: "novaldi.dev@gmail.com",
    icon: Mail,
    href: "mailto:novaldi.dev@gmail.com",
  },
  {
    title: "WhatsApp",
    value: "+62 821 1234 5678",
    icon: MessageCircle,
    href: "https://wa.me/6282112345678",
  },
  {
    title: "GitHub",
    value: "github.com/vijjaynovaldi",
    icon: FaGithub,
    href: "https://github.com/vijjaynovaldi",
  }
];

export default function Contact() {
  const contactRef = useRef<HTMLElement>(null);

  useContactAnimation(contactRef);

  return (
    <section
      ref={contactRef}
      id="contact"
      className="relative overflow-hidden py-20"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-[#030712]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(77,142,255,.08),transparent_70%)]" />

      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="contact-header mb-14 text-center">
          <span className="inline-flex items-center gap-3 text-[12px] font-medium tracking-[0.2em] text-cyan-400">
            <span className="h-px w-8 bg-cyan-400" />
            CONTACT
            <span className="h-px w-8 bg-cyan-400" />
          </span>

          <h2 className="mt-5 text-[34px] font-semibold text-white">
            Get In Touch
          </h2>

          <p className="mx-auto mt-5 max-w-[620px] text-[15px] leading-7 text-slate-400">
            I'm always open to discussing new opportunities, collaborations, or
            innovative software projects.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contacts.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card group rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center backdrop-blur-xl transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(93,230,255,.15)]"
              >
                <div className="contact-icon mx-auto mb-5 flex h-15 w-15 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 shadow-[0_0_18px_rgba(93,230,255,.12)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_28px_rgba(93,230,255,.25)]">
                  <Icon size={28} strokeWidth={2} />
                </div>

                <h3 className="text-[16px] font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-1.5 text-[12px] text-slate-400 break-all">
                  {item.value}
                </p>
              </a>
            );
          })}
        </div>

        {/* Location */}
        <div className="contact-location mt-8 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[12px] text-slate-300 backdrop-blur-xl">
            <MapPin size={14} className="text-cyan-400" />
            Pekanbaru, Indonesia
          </div>
        </div>

        {/* Illustration */}
        <div className="contact-illustration relative mx-auto mt-8 max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          <Image
            src="/images/contact/contact-map.webp"
            alt="Contact Illustration"
            width={1200}
            height={500}
            className="h-[170px] w-full object-cover opacity-80 transition-transform duration-700 hover:scale-105"
            priority
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030712]/70 via-transparent to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-cyan-400/5" />
        </div>
      </div>

      {/* Background Glow */}
      <div className="contact-glow pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-[140px]" />

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#030712] to-transparent" />
    </section>
  );
}
