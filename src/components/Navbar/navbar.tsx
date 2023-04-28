import React, {useState} from 'react';
import styles from './navbar.module.scss';
import cubeseed from "../../icons/logo.svg"
import Image from 'next/image'
import Link from 'next/link'
import hamburgerIcon from "../../icons/menu-icon.svg"
import xIcon from "../../icons/x-symbol.svg"


const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={styles.navbar}>
      <Image className={styles.hamburger} src={hamburgerIcon} alt='menu' onClick={toggleMenu}/>
      <a className={styles.logo} href="/"><Image src={cubeseed} alt='cubeseed-logo'/></a>
      <ul className={`${styles.navLinks} ${showMenu ? styles.showMenu : ''}`}>
        <div className={styles.close_btn}>
            <Image src={xIcon} alt='x-symbol' onClick={toggleMenu}/>
        </div>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/how">How it works</Link></li>
        <li><Link href="/features">Features</Link></li>
        <li><Link href="/testimonial">Testimonial</Link></li>
      </ul>
      <button className={styles.waitBtn}>Join Waitlist</button>
    </nav>
  );
};

export default Navbar;