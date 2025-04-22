import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import css from "./ContactsPage.module.css";

function ContactsPage() {
  return (
    <section className={css.section}>
      <ContactForm />
      <ContactList />
    </section>
  );
}

export default ContactsPage;
