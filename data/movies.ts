export interface Movie {
  id: string;
  title: string;
  image: string;
  category: string;
  year: number;
}

export const movies: Movie[] = [
  {
    id: "1",
    title: "Echoes of the Valley",
    image: "/movies/echoes-valley.jpg",
    category: "Featured",
    year: 2024,
  },
  {
    id: "2",
    title: "The Last Artisan",
    image: "/movies/last-artisan.jpg",
    category: "Trending Now",
    year: 2023,
  },
  {
    id: "3",
    title: "Shadows in Kyoto",
    image: "/movies/shadows-kyoto.jpg",
    category: "Top Rated",
    year: 2024,
  },
  {
    id: "4",
    title: "Silent Orbit",
    image: "/movies/silent-orbit.jpg",
    category: "New Releases",
    year: 2025,
  },
  {
    id: "5",
    title: "The Solitary Coast",
    image: "/movies/solitary-coast.jpg",
    category: "Award Winners",
    year: 2023,
  },
];

export default movies;
