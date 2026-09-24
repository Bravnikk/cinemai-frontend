import Image from "next/image";
import { Movie } from "@/data/movies";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="relative aspect-[2/3] w-full overflow-hidden rounded-xl bg-neutral-900 border border-white/10">
        <Image
          src={movie.image}
          alt={movie.title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
          className="object-cover"
        />
      </div>
      <h3 className="text-sm font-semibold text-white/90 line-clamp-1">
        {movie.title}
      </h3>
    </div>
  );
}
