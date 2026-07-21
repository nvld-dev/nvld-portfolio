"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import useProjectGalleryAnimation from "@/hooks/useProjectGalleryAnimation";
import { ProjectContent } from "@/types/project";

interface ProjectGalleryProps {
  project: ProjectContent;
}

const AUTO_SLIDE_DELAY = 4000;

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useProjectGalleryAnimation(sectionRef);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalSlides = project.gallery.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (totalSlides <= 1 || isPaused) return;

    const interval = setInterval(nextSlide, AUTO_SLIDE_DELAY);

    return () => clearInterval(interval);
  }, [nextSlide, isPaused, totalSlides]);

  if (totalSlides === 0) return null;

  const slide = project.gallery[currentSlide];

  return (
    <section ref={sectionRef} className="project-gallery py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        {/* Heading */}

        <div className="max-w-2xl">
          <span className="gallery-badge inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-cyan-400 uppercase">
            <span className="h-px w-6 bg-cyan-400" />
            Gallery
            <span className="h-px w-6 bg-cyan-400" />
          </span>

          <h2 className="gallery-title mt-3 text-2xl font-bold text-white lg:text-3xl">
            Project Showcase
          </h2>
        </div>

        {/* Slider */}

        <div
          className="gallery-slider relative mt-8 mx-auto max-w-2xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <Image
              key={slide.image}
              src={slide.image}
              alt={slide.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 672px"
              className="object-cover"
            />
          </div>

          {/* Previous */}

          {totalSlides > 1 && (
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur-md transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <ChevronLeft size={16} />
            </button>
          )}

          {/* Next */}

          {totalSlides > 1 && (
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur-md transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <ChevronRight size={16} />
            </button>
          )}
        </div>

        {/* Caption */}

        <div className="gallery-caption mt-5 text-center">
          <h3 className="gallery-caption-title text-lg font-semibold text-white">
            {slide.title}
          </h3>

          <p className="gallery-caption-description mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-400">
            {slide.description}
          </p>
        </div>

        {/* Dots */}

        {totalSlides > 1 && (
          <div className="gallery-dots mt-5 flex justify-center gap-2">
            {project.gallery.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-8 bg-cyan-400"
                    : "w-2.5 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}