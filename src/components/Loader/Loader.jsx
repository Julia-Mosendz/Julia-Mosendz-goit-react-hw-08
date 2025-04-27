import { FadeLoader } from "react-spinners";
import css from "./Loader.module.css";

function Loader() {
  return <FadeLoader className={css.loader} />;
}

export default Loader;
