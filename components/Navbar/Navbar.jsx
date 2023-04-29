import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import logo from "../../img/Vector.svg";
import styles from "./navbar.module.css";
import { FaStream, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const router = useRouter();

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_main}>
        <Link href="/">
          <div className={styles.logo}>
            <Image
              className={styles.logo_img}
              src={logo}
              alt="Agasef Amircanov"
              style={{ width: 53, height: 47 }}
              height={53}
              width={47}
            />
            <div className="logotext" style={{ marginTop: 11 }}>
              <span>I&apos;m a programmer</span>
            </div>
          </div>
        </Link>

        <div className={styles.menus}>
          <Link href="/">
            <p className={router.path == "/" ? `${styles.active}` : ""}>Home</p>
          </Link>
          <Link href="/about">
            <p className={router.path == "/about" ? `${styles.active}` : ""}>
              About
            </p>
          </Link>
          <Link href="/portfolio">
            <p className={router.path == "/portfolio" ? `${styles.active}` : ""}>
              Portfolio
            </p>
          </Link>
          <Link href="/contact">
            <p className={router.path == "/contact" ? `${styles.active}` : ""}>
              Contact
            </p>
          </Link>
        </div>

        <div className={styles.responsive_navbar}>
          {!toggle && (
            <FaStream onClick={handleToggle} className={styles.toggle_icon} />
          )}
        </div>

        {toggle && (
          <div className={styles.res_nav_menus}>
            <FaTimes className={styles.times_icon} onClick={handleToggle} />
            <div className={styles.res_nav_menu}>
              <Link href="/">
                <p
                  onClick={handleToggle}
                  className={router.pathname === "/" ? `${styles.active}` : ""}
                >
                  Home
                </p>
              </Link>
              <Link href="/about">
                <p
                  onClick={handleToggle}
                  className={
                    router.pathname === "/about" ? `${styles.active}` : ""
                  }
                >
                  About
                </p>
              </Link>
              <Link href="/portfolio">
                <p
                  onClick={handleToggle}
                  className={
                    router.pathname === "/portfolio" ? `${styles.active}` : ""
                  }
                >
                  Portfolio
                </p>
              </Link>
              <Link href="/contact">
                <p
                  onClick={handleToggle}
                  className={
                    router.pathname === "/contact" ? `${styles.active}` : ""
                  }
                >
                  Contacts
                </p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
