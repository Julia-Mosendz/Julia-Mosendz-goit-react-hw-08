import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router";
import css from "./PrivateRoute.module.css";

function PrivateRoute(props) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? props.component : <Navigate to={props.redirectTo} />;
}

export default PrivateRoute;
