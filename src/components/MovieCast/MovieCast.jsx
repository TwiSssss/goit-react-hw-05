import React from "react";
import { useParams } from "react-router-dom";
import { useMovieCast } from "../../hooks/useMovie";
import Loader from "../../components/Loader/Loader";
import style from "./MovieCast.module.css";
import { FaUserAlt } from "react-icons/fa";

const MovieCast = () => {
    const { movieId } = useParams();
    const { movies, loading } = useMovieCast(movieId);
    const cast = movies?.cast || [];
    return (
        <div>
            <h2>Cast</h2>
            {loading && <Loader />}
            {!loading && cast.length === 0 ? (
                <p className={style.text}>No cast available for this movie.</p>
            ) : (
                <ul className={style.list}>
                    {cast.map((actor) => {
                        const actorPhoto = actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}` : null;
                        return (
                            <li className={style.item} key={actor.cast_id || actor.credit_id}>
                                {actorPhoto ? (
                                    <img className={style.photo} width="100" src={actorPhoto} alt={actor.original_name || "Actor"} />
                                ) : (
                                    <div className={style.iconFaUser}>
                                        <FaUserAlt size={100} color="#ccc" />
                                    </div>
                                )}
                                <p className={style.text}>{actor.original_name}</p>
                                <p className={style.text}>Character: {actor.character}</p>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default MovieCast;
