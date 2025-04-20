import React, { useEffect, useState } from "react";
import { useMovieQuery } from "../../hooks/useMovie";
import style from "./MoviesPage.module.css";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialQuery = searchParams.get("query") || "";
    const [value, setValue] = useState(initialQuery);
    const [submitQuery, setSubmitQuery] = useState(initialQuery);
    const { movies, loading } = useMovieQuery(submitQuery);
    const updateSearchParams = (query) => {
        const updatedParams = new URLSearchParams();
        if (query) {
            updatedParams.set("query", query);
        }
        setSearchParams(updatedParams);
    };
    useEffect(() => {
        if (submitQuery) {
            updateSearchParams(submitQuery);
        }
    }, [submitQuery]);
    const handleSubmit = (event) => {
        event.preventDefault();
        const query = event.target.query.value.trim();
        if (!query) {
            setSubmitQuery("");
            setSearchParams(new URLSearchParams());
            return;
        }
        setSubmitQuery(query);
    };
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    return (
        <section className={style.section}>
            <form className={style.form} onSubmit={handleSubmit}>
                <input name="query" type="text" placeholder="Search movies" value={value} onChange={handleChange} className={style.input} />
                <button className={style.button} type="submit">
                    Search
                </button>
            </form>
            {loading && <Loader />}
            {movies && submitQuery && <MovieList movies={movies} />}
        </section>
    );
};

export default MoviesPage;
