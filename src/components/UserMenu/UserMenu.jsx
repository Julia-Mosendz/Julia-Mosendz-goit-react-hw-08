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
    <div>
      <p>Welcome, {userName} </p>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default UserMenu;
