// components/ContactForm.js
import styles from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <section className={styles.contactSection}>
      <h1>Contact Us</h1>
      <form className={styles.contactForm}>
        <label className={styles.label} htmlFor="name">Name:</label>
        <input className={styles.input} type="text" id="name" name="name" required />

        <label className={styles.label} htmlFor="email">Email:</label>
        <input className={styles.input} type="email" id="email" name="email" required />

        <label className={styles.label} htmlFor="message">Message:</label>
        <textarea className={styles.textarea} id="message" name="message" required></textarea>

        <button className={styles.button} type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
