import axios from "axios";

const searchMovie = async (type, query, page = 1) => {
    const apiToken =
        "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDMwYzUzMDQ4Y2E2MDk1ZjRlNmU0N2ViYzExNGZkMCIsIm5iZiI6MTc0NTA0MjQ4MS41MjQ5OTk5LCJzdWIiOiI2ODAzM2MzMWU1MDZhOGUzYTBhZDY5YjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.zeJ19hgZr6T0BqYFjpP88cdXsgW3w95x2ZSU38FPCuQ";
    const options = {
        headers: {
            Authorization: `Bearer ${apiToken}`,
        },
    };
    let URL = "";
    if (type === "trending") {
        URL = `https://api.themoviedb.org/3/trending/movie/day?language=en-EN&page=${page}`;
    }
    if (type === "query" && query) {
        URL = `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=${page}`;
    }
    if (type === "id" && query) {
        URL = `https://api.themoviedb.org/3/movie/${query}?language=en-EN`;
    }
    if (type === "cast" && query) {
        URL = `https://api.themoviedb.org/3/movie/${query}/credits?language=en-US`;
    }
    if (type === "reviews" && query) {
        URL = `https://api.themoviedb.org/3/movie/${query}/reviews?language=en-US&page=${page}`;
    }
    try {
        const response = await axios.get(URL, options);
        return response.data;
    } catch (error) {
        console.error("Failed to load movies:", error);
        return null;
    }
};
export default searchMovie;
