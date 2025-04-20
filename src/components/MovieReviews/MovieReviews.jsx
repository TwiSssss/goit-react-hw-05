import React from "react";
import { useParams } from "react-router-dom";
import { useMovieReviews } from "../../hooks/useMovie";
import style from "./MovieReviews.module.css";
import Loader from "../../components/Loader/Loader";

const MovieReviews = () => {
    const { movieId } = useParams();
    const { movies, loading } = useMovieReviews(movieId);
    const reviews = movies.results;
    const stripHTML = (htmlString) => htmlString.replace(/<[^>]*>/g, "");
    return (
        <div>
            <h2>Reviews</h2>
            {loading && <Loader />}
            {!loading && reviews.length === 0 ? (
                <p className={style.text}>No reviews available for this movie.</p>
            ) : (
                <ul className={style.list}>
                    {reviews?.map((review) => {
                        return (
                            <li className={style.item} key={review.id}>
                                <p className={style.text}>{review.author}</p>
                                <p className={style.text}>
                                    {stripHTML(review.content)}
                                </p>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default MovieReviews;
