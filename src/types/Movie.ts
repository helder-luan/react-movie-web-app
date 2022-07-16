type MovieProps = {
  adult: boolean;
  backdrop_path: string;
  belong_to_collection: BelongToCollectionProps;
  budget: number;
  genres: Array<GenresProps>;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<ProductionCompaniesProps>;
  production_countries: Array<ProductionCountriesProps>;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Array<SpokenLanguagesProps>;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type GenresProps = {
  id: number;
  name: string;
};

type ProductionCompaniesProps = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

type ProductionCountriesProps = {
  iso_3166_1: string;
  name: string;
};

type SpokenLanguagesProps = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

type BelongToCollectionProps = {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
};

type TypeTopRatedMovies = Array<MovieProps>;

export type { TypeTopRatedMovies, MovieProps };
