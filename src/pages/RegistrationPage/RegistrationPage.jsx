import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegistrationPage.module.css";

function RegistrationPage() {
  return (
    <>
      <section className={css.section}>
        <h1 className={css.title}>Registration</h1>
        <RegistrationForm />
      </section>
    </>
  );
}

export default RegistrationPage;
