import style from "./Loader.module.css";
import { PulseLoader } from 'react-spinners';
const Loader = () => <PulseLoader className={style.loader} color="#ff15e4" size={50} />;
export default Loader;