"use client";

import Image from "next/image";
import { Movie } from "@/data/movies";
import { useEffect, useState } from "react";

interface MovieDetailsModalProps {
  movie: Movie | null;
  onClose: () => void;
}

export default function MovieDetailsModal({ movie, onClose }: MovieDetailsModalProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Reset playing state when movie changes
  useEffect(() => {
    setIsPlaying(false);
  }, [movie]);

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
        className="relative max-w-2xl w-full bg-neutral-900 border border-white/15 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close details"
          className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/70 hover:bg-black/90 text-white/80 hover:text-white border border-white/15 backdrop-blur-md transition-colors cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Video Playback / Poster */}
        <div className="relative aspect-video w-full bg-black">
          {isPlaying && movie.youtubeId ? (
            <iframe
              src={`https://www.youtube.com/embed/${movie.youtubeId}?autoplay=1`}
              title={movie.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div className="relative w-full h-full">
              <Image
                src={movie.image}
                alt={movie.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-black/30" />

              {/* Play Button Overlay on Poster */}
              {movie.youtubeId && (
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  aria-label="Play video"
                  className="group absolute inset-0 flex items-center justify-center cursor-pointer"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 hover:bg-white text-black flex items-center justify-center shadow-2xl group-hover:scale-110 active:scale-95 transition-all duration-200">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </button>
              )}
            </div>
          )}
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

          {/* Action Buttons */}
          <div className="pt-2 flex items-center justify-between gap-3">
            {movie.youtubeId && (
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold text-black bg-white hover:bg-neutral-200 active:scale-95 transition-all cursor-pointer shadow-lg"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Play
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors cursor-pointer ml-auto"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
