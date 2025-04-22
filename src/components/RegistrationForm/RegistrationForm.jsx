import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

function RegistrationForm() {
  const dispatch = useDispatch();
  const initialValues = { email: "", password: "", name: "" };

  const handleSubmit = (event, { resetForm }) => {
    const data = {
      email: event.email,
      password: event.password,
      name: event.name,
    };
    dispatch(register(data));
    resetForm();
  };

  return (
    <>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={css.form}>
          <label className={css.label}>
            Name
            <Field className={css.field} type="text" name="name" />
          </label>
          <label className={css.label}>
            Email
            <Field className={css.field} type="email" name="email" />
          </label>
          <label className={css.label}>
            Password
            <Field className={css.field} type="password" name="password" />
          </label>
          <button className={css.btn} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </>
  );
}

export default RegistrationForm;
