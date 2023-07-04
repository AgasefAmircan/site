import Link from "next/link";
import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import SocialIcon from "../Social/Social";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer_sec}>
      <div className={styles.footer_main}>
        <div className={styles.footer_main_hr}></div>
        <div className={styles.footer_main_component}>
          <div className={styles.footer_left}>
            <h1>Agasef</h1>
            <p>
              My inbox is always open. Whether you have a question or just want
              to say hi, I’ll try my best to get back to you!
            </p>

            <div className={styles.footer_contact}>
              <Link href="/contact">
                <button className={styles.say_btn}>Say hi</button>
              </Link>
              <SocialIcon />
            </div>
          </div>

          <div className={styles.footer_right}>
            <Link href="/">
              <p>Home</p>
            </Link>
            <Link href="/about">
              <p>About</p>
            </Link>
            <Link href="/portfolio">
              <p>Portfolio</p>
            </Link>
            <Link href="/contact">
              <p>Contact</p>
            </Link>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>
            {" "}
            <AiOutlineCopyright style={{ marginRight: "3px" }} /> Copyrights
            Agasef 2023. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
