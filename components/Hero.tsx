export default function Hero() {
  return (
    <section className="group relative min-h-screen pt-[68px] flex items-center overflow-hidden bg-black">
      {/* Background image with gentle zoom on section hover */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-[7000ms] ease-out group-hover:scale-100"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Bottom gradient fade into page black */}
      <div className="absolute bottom-0 inset-x-0 h-56 bg-gradient-to-b from-transparent to-black pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-10 py-20 flex flex-col gap-7">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 w-fit px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-white/10 border border-white/20 backdrop-blur-md">
          🎬 Now Streaming
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[1.08] tracking-tight text-white max-w-3xl">
          Infinite Stories,
          <br />
          <span className="bg-gradient-to-br from-white via-neutral-300 to-neutral-400 bg-clip-text text-transparent">
            One Screen.
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
          Stream the world&apos;s finest films, series, and exclusives — curated for the true cinema lover.
        </p>

        {/* Actions */}
        <div className="flex items-center gap-4 flex-wrap pt-2">
          <button className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-black font-bold text-base tracking-wide bg-gradient-to-br from-white to-neutral-300 shadow-[0_0_24px_rgba(255,255,255,0.25)] hover:shadow-[0_0_36px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer">
            <span className="text-sm">▶</span>
            Watch Now
          </button>
          <button className="inline-flex items-center px-8 py-3.5 rounded-full text-white font-semibold text-base tracking-wide border border-white/35 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-white/60 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 cursor-pointer">
            Browse Catalogue
          </button>
        </div>

        {/* Stats Row */}
        <div className="flex items-center gap-6 pt-2">
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">10K+</span>
            <span className="text-xs font-medium uppercase tracking-wider text-white/50">Titles</span>
          </div>

          <div className="w-px h-9 bg-white/20" />

          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">4K</span>
            <span className="text-xs font-medium uppercase tracking-wider text-white/50">Ultra HD</span>
          </div>

          <div className="w-px h-9 bg-white/20" />

          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">150+</span>
            <span className="text-xs font-medium uppercase tracking-wider text-white/50">Countries</span>
          </div>
        </div>
      </div>
    </section>
  );
}
