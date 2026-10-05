"use client";

import Image from "next/image";
import { Movie } from "@/data/movies";
import { useEffect } from "react";

interface MovieDetailsModalProps {
  movie: Movie | null;
  onClose: () => void;
}

export default function MovieDetailsModal({ movie, onClose }: MovieDetailsModalProps) {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (movie) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [movie, onClose]);

  if (!movie) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      {/* Modal Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-lg w-full bg-neutral-900 border border-white/15 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close details"
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/70 hover:bg-black/90 text-white/80 hover:text-white border border-white/15 backdrop-blur-md transition-colors cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Movie Poster Image */}
        <div className="relative aspect-[16/10] w-full bg-neutral-950">
          <Image
            src={movie.image}
            alt={movie.title}
            fill
            className="object-cover"
            priority
          />
          {/* Subtle bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
        </div>

        {/* Details Content */}
        <div className="p-6 flex flex-col gap-4">
          {/* Category Badge & Year */}
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/10 text-white border border-white/15 backdrop-blur-md">
              {movie.category}
            </span>
            <span className="text-sm font-medium text-white/60">
              {movie.year}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {movie.title}
          </h2>

          {/* Short Description */}
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            {movie.description}
          </p>

          {/* Close Action Button */}
          <div className="pt-2 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
