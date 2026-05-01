export interface FilmItem {
    id: number;
    vote_average: number;
    poster_path: string;
    title: string;
    favorites: string;
    overview?: string;
    release_date?: string;
    runtime?: number;
    genres?: Genre[];
    production_countries?: ProductionCountries[];
}

export interface DataPopular {
    page: number;
    results: FilmItem[];
    total_pages: number;
    total_results: number;
}

export interface Genre {
    id: number;
    name: string;
}

export interface ProductionCountries {
    iso_3166_1: string;
    name: string;
}
