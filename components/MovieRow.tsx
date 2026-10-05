import MovieCard from "./MovieCard";
import { Movie } from "@/data/movies";

export type { Movie };

interface MovieRowProps {
  title: string;
  movies: Movie[];
  onSelectMovie?: (movie: Movie) => void;
}

export default function MovieRow({ title, movies, onSelectMovie }: MovieRowProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-4 sm:py-6 md:py-8">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 md:mb-5 tracking-wide">
        {title}
      </h2>

      <div className="flex overflow-x-auto gap-3 sm:gap-4 md:gap-6 no-scrollbar py-2 px-1 scroll-smooth">
        {movies.map((movie) => (
          <div key={movie.id} className="w-[140px] sm:w-[180px] md:w-[210px] lg:w-[230px] shrink-0">
            <MovieCard movie={movie} onClick={() => onSelectMovie?.(movie)} />
          </div>
        ))}
      </div>
    </section>
  );
}
