import Image from "next/image";

const NAV_LINKS = ["Home", "Series", "Movies", "My List"];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">

        {/* Brand */}
        <div className="navbar-brand">
          <Image
            src="/logo.jpg"
            alt="Cinemai logo"
            width={36}
            height={36}
            className="navbar-logo"
            priority
          />
          <span className="navbar-brand-name">Cinemai</span>
        </div>

        {/* Nav links */}
        <ul className="navbar-links">
          {NAV_LINKS.map((label) => (
            <li key={label}>
              <a href="#" className="navbar-link">
                {label}
              </a>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}
