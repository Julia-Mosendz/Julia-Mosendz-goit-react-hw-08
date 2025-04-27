import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import {
  selectContacts,
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contacts/selectors";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import Loader from "../../components/Loader/Loader";
import css from "./ContactsPage.module.css";

function ContactsPage() {
  const dispatch = useDispatch();

  const allContacts = useSelector(selectContacts);
  const visibleContacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  console.log(!(loading || !!error));
  console.log(!!allContacts.length);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section className={css.section}>
      <ContactForm />
      <SearchBox />
      <Suspense fallback={<Loader />}>
        {visibleContacts.length > 0 ? (
          <ContactList />
        ) : (
          !(loading || !!error) &&
          !allContacts.length && (
            <p className={css.notice}>📱 No contacts found...</p>
          )
        )}
        {error && <p>Ops! Use this service later...</p>}
      </Suspense>
      {loading && <Loader />}
    </section>
  );
}

export default ContactsPage;
