import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import style from "./MovieList.module.css";
import { FaFilm } from "react-icons/fa";

const MovieList = ({ movies }) => {
    const location = useLocation();
    useEffect(() => {
        if (movies.length > 0) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    }, [movies]);
    return (
        <ul className={style.list}>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <NavLink state={location} className={style.link} to={`/movies/${movie.id}`}>
                        {movie.poster_path ? <img width={200} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title || movie.title} /> : <FaFilm size={200} />}
                        <span className={style.title}>{movie.title || movie.original_title}</span>
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default MovieList;
