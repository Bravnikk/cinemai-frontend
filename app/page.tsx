import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";
import { movies as ALL_MOVIES, Movie } from "@/data/movies";

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
      <div className="pb-12 sm:pb-16 md:pb-20">
        {ROWS.map((row) => (
          <MovieRow key={row.title} title={row.title} movies={row.movies} />
        ))}
      </div>
    </>
  );
}
