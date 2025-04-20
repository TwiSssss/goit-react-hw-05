import React from "react";
import MovieList from "../../components/MovieList/MovieList";
import { useMovieTrending } from "../../hooks/useMovie";
import style from "./HomePage.module.css";

const HomePage = () => {
    const { movies } = useMovieTrending();
    return (
        <section className={style.section}>
            <h1 className={style.title}>Trending today</h1>
            {movies && <MovieList movies={movies} />}
        </section>
    );
};

export default HomePage;
