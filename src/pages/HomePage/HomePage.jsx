import css from "./HomePage.module.css";

function HomePage() {
  return (
    <section className={css.homePage}>
      <h1 className={css.title}>Contact Book App 📱</h1>
      <p>
        Author{" "}
        <a
          href="https://github.com/Julia-Mosendz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Julia Mosendz
        </a>
      </p>
    </section>
  );
}

export default HomePage;
