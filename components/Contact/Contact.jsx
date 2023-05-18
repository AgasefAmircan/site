import styles from "./contact.module.scss";
import Head from "../Head/Head";
import { sendContactForm } from "@/lib/api";
import { useState } from "react";
const Contact = () => {
  const [name, setName] = useState("");
  const [surname, setsurName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("Helo.What are you doing 😶");
  const values = { name, surname, email, message };

  const onSubmit = async (e) => {
    e.preventDefault();
    await sendContactForm(values);
    console.log(
      "Name : ",
      name,
      "Surname : ",
      surname,
      "Email :",
      email,
      "Message : ",
      message
    );
  };
  return (
    <div className={styles.contact_sec}>
      <Head title="Get In Touch" />
      <div className={styles.contact_sec_main}>
        <form className={styles.contact_form}>
          <label>First Name :</label>
          <input
            type="text"
            value={name}
            name="message"
            cols="55"
            rows="10"
            placeholder="First Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <label>Last Name :</label>
          <input
            value={surname}
            name="message"
            type="text"
            cols="15"
            rows="10"
            placeholder="Last Name"
            required
            onChange={(e) => setsurName(e.target.value)}
          />
          <label>Email :</label>
          <input
            value={email}
            type="Email"
            name="message"
            cols="15"
            rows="10"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Message :</label>
          <textarea
            value={message}
            name="message"
            cols="55"
            rows="10"
            placeholder="Leave a message.."
            required
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <input
            type="submit"
            value="Send"
            onClick={onSubmit}
            className={styles.submit_btn}
            // disabled={!values.name || values.surname || values.email || values.message}
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
