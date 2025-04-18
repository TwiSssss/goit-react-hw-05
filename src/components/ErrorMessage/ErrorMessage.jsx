import style from "./ErrorMessage.module.css";
const ErrorMessage = ({ message }) => <p className={style.error}>{message}</p>;
export default ErrorMessage;

