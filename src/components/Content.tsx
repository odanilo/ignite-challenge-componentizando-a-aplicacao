import { Header } from "./Header";
import { MovieCard } from "./MovieCard";

interface Movie {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface Genre {
  title: string;
}

interface ContentProps {
  props: {
    movies: Movie[];
    selectedGenre: Genre;
  };
}

export function Content({ props: { movies, selectedGenre } }: ContentProps) {
  return (
    <div className="container">
      <Header selectedGenre={selectedGenre} />

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
