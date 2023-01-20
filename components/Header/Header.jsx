import React from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import headerBg from "../../img/code.png";
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_main}>
        <div className={styles.header_main_left}>
          <p className={styles.name}>Hello, I'm</p>
          <h1>Agasef Amircan.</h1>
          <div className={styles.header_animated_txt}>
            <TypeAnimation
              sequence={[
                "I am a programmer.",
                1000,
                "I am a software developer.",
                1000,
                "I am a frontend expert.",
                1000,
              ]}
              speed={50}
              style={{ fontSize: "4em", color: "#ccd6f6", fontWeight: "bold" }}
              wrapper="span"
              repeat={Infinity}
              className={styles.aimatedTxt}
            />
          </div>

          <p>
            I'm a full-stack developer. I have a solid understanding of both
            front-end and back-end technologies and a good deal of experience
            developing web applications.
          </p>
        </div>
      </div>
      <Image src={headerBg} className={styles.header_bg} style={{'width':660,"height":378}} />
    </div>
  );
};
export default Header;
