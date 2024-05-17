// components/OrderForm.js
import styles from './OrderForm.module.css';

const OrderForm = () => {
  return (
    <section className={styles.orderSection}>
      <h1>Order Now</h1>
      <form className={styles.orderForm}>
        <label className={styles.label} htmlFor="name">Name:</label>
        <input className={styles.input} type="text" id="name" name="name" required />

        <label className={styles.label} htmlFor="phonenumber">Phone Number:</label>
        <input className={styles.input} type="phone" id="phonenumber" name="phonenumber" required />
        <label className={styles.label} htmlFor="email">Email:</label>
        <input className={styles.input} type="email" id="email" name="email" required />

        <label className={styles.label} htmlFor="package">Select Package:</label>
        <select className={styles.select} id="package" name="package" required>
          <option value="entry">Entry</option>
          <option value="mid">Mid</option>
          <option value="pro">Pro</option>
          <option value="customer">Customer</option>
        </select>

        <label className={styles.label} htmlFor="message">Message:</label>
        <textarea className={styles.textarea} id="message" name="message" required></textarea>

        <button className={styles.button} type="submit">Submit</button>
      </form>
    </section>
  );
};

export default OrderForm;
