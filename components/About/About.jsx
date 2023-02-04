import Image from "next/image";
import React from "react";
import style from "./About.module.css";
import profilPic from "../../img/code.png";
import Head from "../Head/Head";
import SocialIcon from "../Social/Social";
const About = ({pt,social}) => {
  return (
    <div className={style.about} style={{ paddingTop: pt ? `${pt}` : "0px" }}>
      <Head title="About Me" />
      <div className={style.about_main}>
        <Image
          src={profilPic}
          className={style.profileImg}
          alt="Software Engineer"
          height={400}
          width={400}
          layout="responsive"
        />
        <div className={style.text}>
          <h2>Hi, I&apos;m Agasef</h2>
          <p>
            Hi. I&apos;m 20 and currently student. I&apos;m open to new innovations and
            love learning new technologies. Highly motivated Front End Developer
            with experience in HTML/CSS,JavaScript, React. Adept at contributing
            to a highly collaborative work environment, finding solutions, and
            determining customer satisfaction.
          </p>
          <p className={style.skill}>Among my areas of expertise are:</p>
          <ul>
            <li>Javascript</li>
            <li>React Js</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>CSS3</li>
            <li>SASS</li>
            <li>HTML5</li>
            <li>Bootstap5</li>
          </ul>
          {social && (
            <div style={{ paddingTop: "5px" }}>
              <p>Socials: </p>
              <SocialIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
