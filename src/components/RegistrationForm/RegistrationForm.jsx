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
        <Form>
          <label>
            Name
            <Field type="text" name="name" />
          </label>
          <label>
            Email
            <Field type="email" name="email" />
          </label>
          <label>
            Password
            <Field type="password" name="password" />
          </label>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </>
  );
}

export default RegistrationForm;
