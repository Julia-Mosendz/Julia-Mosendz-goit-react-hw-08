import LoginForm from "../../components/LoginForm/LoginForm";
import css from "./LoginPage.module.css";

function LoginPage() {
  return (
    <section className={css.section}>
      <h1 className={css.title}>Login Page</h1>
      <LoginForm />
    </section>
  );
}

export default LoginPage;
