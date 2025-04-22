import { selectUser } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { flushContacts } from "../../redux/contacts/slice";
import { logOut } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUser).name;

  const handleLogout = () => {
    dispatch(flushContacts());
    dispatch(logOut());
  };

  return (
    <div className={css.wrapper}>
      <p className={css.caption}>
        Welcome, <span className={css.userName}>{userName}</span>{" "}
      </p>
      <button className={css.btn} type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default UserMenu;
