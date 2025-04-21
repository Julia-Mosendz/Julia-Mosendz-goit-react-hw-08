import { Link } from "react-router";
import css from "./NotFoundPage.module.css";

function NotFoundPage() {
  return <>
  <section>
    <h1>Page is not found</h1>
    <img src="error-404.jpg" alt="Error" />
    <Link to="/">Go to HomePage</Link>
  </section>
  
  </>;
}

export default NotFoundPage;
