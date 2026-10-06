export interface Movie {
  id: string;
  title: string;
  image: string;
  category: string;
  year: number;
  description: string;
  youtubeId: string;
}

export const movies: Movie[] = [
  {
    id: "1",
    title: "Echoes of the Valley",
    image: "/movies/echoes-valley.jpg",
    category: "Featured",
    year: 2024,
    description: "A breathtaking cinematic journey through untouched wilderness, uncovering forgotten legends and timeless secrets buried deep within the misty mountains.",
    youtubeId: "eOrNdBpGMv8",
  },
  {
    id: "2",
    title: "The Last Artisan",
    image: "/movies/last-artisan.jpg",
    category: "Trending Now",
    year: 2023,
    description: "In a rapidly modernizing world, a master craftsman fights with quiet passion to preserve an ancient, delicate art form against all odds.",
    youtubeId: "L_LUpnjgPso",
  },
  {
    id: "3",
    title: "Shadows in Kyoto",
    image: "/movies/shadows-kyoto.jpg",
    category: "Top Rated",
    year: 2024,
    description: "A gripping neo-noir mystery exploring neon-drenched alleyways, hidden loyalties, and centuries-old secrets in the heart of historic Kyoto.",
    youtubeId: "EngW7tLk6R8",
  },
  {
    id: "4",
    title: "Silent Orbit",
    image: "/movies/silent-orbit.jpg",
    category: "New Releases",
    year: 2025,
    description: "An astronaut stranded on a lonely orbital station discovers an enigmatic deep-space transmission that could reshape humanity's destiny.",
    youtubeId: "R6MlUcmOul8",
  },
  {
    id: "5",
    title: "The Solitary Coast",
    image: "/movies/solitary-coast.jpg",
    category: "Award Winners",
    year: 2023,
    description: "A poetic drama capturing solitude, redemption, and unspoken love along the rugged, windswept shores of the Atlantic coastline.",
    youtubeId: "LXb3EKWsInQ",
  },
];

export default movies;
