import { useState, useEffect } from "react";
import searchMovie from "../api.js";
export const useMovies = (type, query = "", page = 1) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const searchMovies = async () => {
            if ((type === "query" || type === "cast" || type === "reviews") && query.trim() === "") return;
            setLoading(true);
            setError(null);
            try {
                const movieData = await searchMovie(type, query, page);
                if (movieData) {
                    if (type === "id" || type === "cast" || type === "reviews") {
                        setMovies(movieData);
                    } else {
                        setMovies(movieData.results);
                    }
                } else {
                    setError("No data found");
                    setMovies([]);
                }
            } catch (err) {
                setError("Error fetching movies");
                setMovies([]);
            } finally {
                setLoading(false);
            }
        };
        const delay = setTimeout(() => {
            searchMovies();
        }, 500);
        return () => {
            clearTimeout(delay);
        };
    }, [type, query, page]);
    return {
        movies,
        loading,
        error
    };
};

export const useMovieTrending = (page) => useMovies("trending", "", page);
export const useMovieQuery = (query, page) => useMovies("query", query, page);
export const useMovieId = (id) => useMovies("id", id);
export const useMovieCast = (id) => useMovies("cast", id);
export const useMovieReviews = (id) => useMovies("reviews", id);
