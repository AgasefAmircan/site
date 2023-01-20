import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import styles from './Social.module.css';

const SocialIcon = () => {
  return (
    <div className={styles.social_links}>
        <Link href="https://github.com/agasefamircan" target="_blank">
            <FaGithub className={styles.social_link} />
        </Link>
        <Link href="https://www.linkedin.com/in/agasefamircan/" target="_blank">
            <FaLinkedin className={styles.social_link} />
        </Link>
        <Link href="https://twitter.com/agasefamircan" target="_blank">
            <FaTwitter className={styles.social_link} />
        </Link>
        <Link href="https://web.facebook.com/agasef.amircanov" target="_blank">
            <FaFacebook className={styles.social_link} />
        </Link>
    </div>
  )
}

export default SocialIcon