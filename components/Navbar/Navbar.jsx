import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import logo from "../../img/Vector.svg";
import styles from "./navbar.module.css";
const Navbar = () => {
  const router = useRouter();
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
            <div className="logotext" style={{'marginTop':11}}>
              <span>I&apos;m a programmer</span>
            </div>
          </div>
        </Link>
        <div className={styles.menus}>
          <Link href="/">
            <p className={router.path == "/" ? styles.active : ""}>Home</p>
          </Link>
          <Link href="/">
            <p className={router.path == "/about" ? styles.active : ""}>About</p>
          </Link>
          <Link href="/">
            <p className={router.path == "/" ? styles.active : ""}>Projects</p>
          </Link>
          <Link href="/">
            <p className={router.path == "/contact" ? styles.active : ""}>Contact</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
