import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";

const Navigation = () => {
    return (
        <header>
            <nav className={style.navigation}>
                <NavLink to="/" className={({ isActive }) => `${style.link} ${isActive ? style.active : ""}`}>
                    Home
                </NavLink>
                <NavLink to="/movies" className={({ isActive }) => `${style.link} ${isActive ? style.active : ""}`}>
                    Movies
                </NavLink>
            </nav>
        </header>
    );
};

export default Navigation;
