import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

import css from "./ContactList.module.css";

function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);
  return (
    <>
      <ul className={css.list}>
        {visibleContacts.length !== 0 &&
          visibleContacts.map((contact) => {
            return <Contact contact={contact} key={contact.id} />;
          })}
      </ul>
    </>
  );
}

export default ContactList;
