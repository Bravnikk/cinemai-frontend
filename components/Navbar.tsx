import Image from "next/image";

const NAV_LINKS = ["Home", "Series", "Movies", "My List"];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[68px] px-6 md:px-10 bg-black/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="group flex items-center gap-2.5 no-underline">
          <Image
            src="/logo.jpg"
            alt="Cinemai logo"
            width={36}
            height={36}
            className="w-9 h-9 rounded-lg object-cover drop-shadow-[0_0_8px_rgba(255,255,255,0.25)] transition-all duration-300 group-hover:drop-shadow-[0_0_14px_rgba(255,255,255,0.55)]"
            priority
          />
          <span className="text-xl font-bold tracking-[0.14em] uppercase bg-gradient-to-br from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent">
            Cinemai
          </span>
        </a>

        {/* Nav links */}
        <ul className="flex items-center gap-1 list-none m-0 p-0">
          {NAV_LINKS.map((label) => (
            <li key={label}>
              <a
                href="#"
                className="group relative block px-4 py-1.5 text-sm font-medium tracking-wide text-white/70 hover:text-white rounded-md hover:bg-white/5 transition-all duration-200"
              >
                {label}
                <span className="absolute bottom-1 left-4 right-4 h-[1.5px] bg-gradient-to-r from-white to-neutral-400 rounded-full scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
