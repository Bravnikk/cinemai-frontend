import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MovieRow, { Movie } from "../components/MovieRow";

const ALL_MOVIES: Movie[] = [
  { id: "1", title: "Echoes of the Valley",   image: "/movies/echoes-valley.jpg"  },
  { id: "2", title: "The Last Artisan",        image: "/movies/last-artisan.jpg"   },
  { id: "3", title: "Shadows in Kyoto",        image: "/movies/shadows-kyoto.jpg"  },
  { id: "4", title: "Silent Orbit",            image: "/movies/silent-orbit.jpg"   },
  { id: "5", title: "The Solitary Coast",      image: "/movies/solitary-coast.jpg" },
];

/* Rotate the list so each row starts at a different movie */
function rotated(offset: number): Movie[] {
  return [...ALL_MOVIES.slice(offset), ...ALL_MOVIES.slice(0, offset)];
}

const ROWS = [
  { title: "Featured",          movies: rotated(0) },
  { title: "Trending Now",      movies: rotated(1) },
  { title: "Top Rated",         movies: rotated(2) },
  { title: "New Releases",      movies: rotated(3) },
  { title: "Award Winners",     movies: rotated(4) },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="pb-20">
        {ROWS.map((row) => (
          <MovieRow key={row.title} title={row.title} movies={row.movies} />
        ))}
      </div>
    </>
  );
}
