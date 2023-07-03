import styles from "./contact.module.scss";
import Head from "../Head/Head";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ser_id, pub_key, ter_id } from "@/env";

const Contact = () => {
  const [name, setName] = useState("");
  const [surname, setsurName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(0);

  const form = useRef();

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setLoading(1);
    emailjs.sendForm(ser_id, ter_id, form.current, pub_key).then(
      (result) => {
        toast.success("Email sent successfully!");
        setLoading(0);
        setName("");
        setsurName("");
        setMessage("");
        setEmail("");
      },
      (error) => {
        toast.error("Failed to send email. Please try again later.");
        setLoading(0);
      }
    );
  };
  return (
    <div className={styles.contact_sec}>
      <Head title="Get In Touch" />
      <div className={styles.contact_sec_main}>
        <form ref={form} onSubmit={sendEmail} className={styles.contact_form}>
          <label>First Name :</label>
          <input
            type="text"
            value={name}
            name="name"
            cols="55"
            rows="10"
            placeholder="First Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <label>Last Name :</label>
          <input
            value={surname}
            name="surname"
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
            type="email"
            name="email"
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
            value={loading ? "Sending..." : "Send"}
            disabled={loading}
            className={styles.submit_btn}
          />
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};
export default Contact;
