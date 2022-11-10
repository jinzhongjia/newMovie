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

interface CategoryInfo {
  movies: Movie[];
  pgCount: number;
}

export type { ClassItem, MainClass, CategoryInfo, Movie };
