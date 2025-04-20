import React, { useRef } from "react";
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { useMovieId } from "../../hooks/useMovie";
import Loader from "../../components/Loader/Loader";
import { FaFilm } from "react-icons/fa";
import style from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const { movies, loading, error } = useMovieId(movieId);
    const location = useLocation();
    const backLink = useRef(location.state ?? "/movies");
    const { poster_path, original_title, title, genres = [], overview, vote_average, vote_count } = movies;
    console.log("movies:", movies);
    const imageUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    if (loading) return <Loader />;
    const positiveReviewsPercentage = vote_average && vote_count ? ((vote_average / 10) * 100).toFixed(0) : null;
    return (
        <section className={style.section}>
            {movies && (
                <div className={style.container}>
                    <Link className={style.btnGoBack} to={backLink.current}>
                        Go Back
                    </Link>
                    {poster_path ? (
                        <img className={style.image} width={250} src={imageUrl} alt={original_title} />
                    ) : (
                        <div className={style.iconFaFilm}>
                            <FaFilm size={250} color="#ccc" />
                        </div>
                    )}
                    <h2 className={style.title}>{title}</h2>
                    {positiveReviewsPercentage !== null && (
                        <p className={style.text}>
                            <strong>User score:</strong> {positiveReviewsPercentage}%
                        </p>
                    )}
                    <p className={style.text}>
                        <strong>Genres:</strong>{" "}
                        {genres.map((genre) => (
                            <span key={genre.id} className={style.span}>
                                {genre.name}
                            </span>
                        ))}
                    </p>
                    {overview && (
                        <p className={style.text}>
                            <strong>Overview:</strong> {overview}
                        </p>
                    )}
                </div>
            )}
            {movies && (
                <div className={style.choice}>
                    <NavLink className={({ isActive }) => `${style.link} ${isActive ? style.active : ""}`} to="cast">
                        Cast
                    </NavLink>
                    <NavLink className={({ isActive }) => `${style.link} ${isActive ? style.active : ""}`} to="reviews">
                        Reviews
                    </NavLink>
                </div>
            )}
            <Outlet />
        </section>
    );
};

export default MovieDetailsPage;
