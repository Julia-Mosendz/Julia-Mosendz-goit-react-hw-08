import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/selectors";

function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <>
      {!loading && (
        <ul className={css.list}>
          {visibleContacts.length !== 0 &&
            visibleContacts.map((contact) => {
              return <Contact contact={contact} key={contact.id} />;
            })}
        </ul>
      )}
      {error && <p>Ops! Use this service later...</p>}
    </>
  );
}

export default ContactList;
