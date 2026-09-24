import MovieCard from "./MovieCard";
import { Movie } from "@/data/movies";

export type { Movie };

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

export default function MovieRow({ title, movies }: MovieRowProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-8">
      <h2 className="text-xl sm:text-2xl font-bold text-white mb-5 tracking-wide">
        {title}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
