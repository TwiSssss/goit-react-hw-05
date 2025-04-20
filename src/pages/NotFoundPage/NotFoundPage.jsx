import { Link } from "react-router-dom";
import style from "./NotFoundPage.module.css";

const NotFoundPage = () => {
    return (
                  <div className={style.NotFoundPage}>
                <h1 className={style.NotFound}>404</h1>
                <Link to="/" className={style.NotFoundButton}>
                    Go home page
                </Link>
            </div>
        );
};

export default NotFoundPage;
