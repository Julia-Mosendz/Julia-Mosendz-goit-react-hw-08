import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

function LoginForm() {
  const dispatch = useDispatch();
  const initialValues = { email: "", password: "" };
  const handleSubmit = (event, { resetForm }) => {
    const data = { email: event.email, password: event.password };
    dispatch(logIn(data));
    resetForm();
  };
  return (
    <>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={css.form}>
          <label className={css.label}>
            Email
            <Field className={css.field} type="email" name="email" />
          </label>
          <label className={css.label}>
            Password
            <Field className={css.field} type="password" name="password" />
          </label>
          <button className={css.btn} type="submit">
            Log in
          </button>
        </Form>
      </Formik>
    </>
  );
}

export default LoginForm;
