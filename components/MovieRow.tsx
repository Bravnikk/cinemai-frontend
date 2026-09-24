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

      <div className="flex overflow-x-auto gap-4 md:gap-6 no-scrollbar py-2 px-1">
        {movies.map((movie) => (
          <div key={movie.id} className="w-[160px] sm:w-[190px] md:w-[220px] shrink-0">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </section>
  );
}
