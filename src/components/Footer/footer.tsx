import React from 'react';
import styles from './footer.module.scss'
import Image from 'next/image';
import instagram from "../../icons/instagram.svg"
import twitter from "../../icons/twitter.svg"
import facebook from "../../icons/facebook.svg"



const Footer: React.FC = () => {
  return (
        <footer className={styles.main_footer}>
            <div className={styles.footer}>
            <div className={styles.footer_left}>
                <h3>Cubeseed</h3>
                <button>Join Waitlist</button>
            </div>
            <div className={styles.footer_right}>
                <div>
                    <ul>
                        <li>
                            <a>About</a>
                        </li>
                        <li>
                            <a>Features</a>
                        </li>
                        <li>
                            <a>Testimonials</a>
                        </li>
                    </ul> 
                </div>
                <div>
                    <p>A new way to Farm and invest in Agriculture in Africa</p>   
                </div>  
            </div>
            <div className={styles.icons}>
            <Image src={instagram} alt="instagram"/>
            <Image src={twitter} alt="twitter"/>
            <Image src={facebook} alt="facebook"/>

            </div>
            </div>
        </footer>
  );
};

export default Footer;