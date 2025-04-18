import style from "./LoadMoreBtn.module.css";
  const LoadMoreBtn = ({ onClick }) => {
    return <button className={style.buttonLoad}  onClick={onClick}>Load more</button>;
  };
  export default LoadMoreBtn;
  