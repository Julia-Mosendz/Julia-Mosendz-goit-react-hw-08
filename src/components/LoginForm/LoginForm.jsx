import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

function LoginForm() {
  const dispatch = useDispatch();
  const initialValues = { email: "", password: "" };
  const handleSubmit = (event, { resetForm }) => {
    const data = { email: event.email, password: event.password };
    dispatch(logIn(data))
    resetForm()
  };
  return (
    <>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <label>
            Email
            <Field type="email" name="email" />
          </label>
          <label>
            Password
            <Field type="password" name="password" />
          </label>
          <button type="submit">Log in</button>
        </Form>
      </Formik>
    </>
  );
}

export default LoginForm;
