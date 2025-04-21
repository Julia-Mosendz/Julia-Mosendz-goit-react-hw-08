
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router";
import css from "./RestrictedRoute.module.css";


function RestrictedRoute(props) {
    const isLoggedIn = useSelector(selectIsLoggedIn)
  return isLoggedIn?<Navigate to={props.redirectTo}/>:props.component
}

export default RestrictedRoute;
