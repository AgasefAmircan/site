import styles from "./contact.module.scss";
import Head from "../Head/Head";
const Contact = () => {
  return (
    <div className={styles.contact_sec}>
      <Head title="Get In Touch" />
      <div className={styles.contact_sec_main}>
        <form className={styles.contact_form}>
          <label>Message :</label>
          <textarea
            name="message"
            cols="55"
            rows="10"
            placeholder="Leave a message.."
            required
          ></textarea>
          <input type="submit" value="Send" className={styles.submit_btn} />
        </form>
      </div>
    </div>
  );
};

export default Contact;
