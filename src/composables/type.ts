interface ClassItem {
  name: string;
  url: string;
}

interface MainClass {
  id: number;
  name: string;
}

interface Movie {
  id: number;
  name: string;
  pic: string;
  actor: string;
  director: string;
  duration: string;
  description: string;
}

interface MovieInfo {
  movies: Movie[];
  pgCount: number;
}

interface Category {
  id: number;
  name: string;
  movieNum: string;
}

export type { ClassItem, MainClass, MovieInfo, Movie, Category };
