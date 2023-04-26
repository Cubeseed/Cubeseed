import React from 'react';
import styles from './caroussel.module.scss';
import Image from 'next/image'
import naic from "../../company-logo/naic.svg"
import nirsalBank from "../../company-logo/nirsal-bank.svg"
import nirsal from "../../company-logo/nirsal.svg"
import kepro from "../../company-logo/kepro.svg"
import bankIndustry from "../../company-logo/bank-of-industry.svg"
import agrited from "../../company-logo/agrited.svg"

const Caroussel: React.FC = () => {
 

  return (
    <div className={styles.slider}>
    <div className={styles.slides}>
    <div className={styles.slideTrack}>
        <div className={styles.slide}>
            <Image src={naic} alt="asa" />
        </div>
        <div className={styles.slide}>
            <Image src={nirsalBank} alt="da" />
        </div>
        <div className={styles.slide}>
            <Image src={nirsal} alt="DSA" />
        </div>
        <div className={styles.slide}>
            <Image src={kepro} alt="DSA" />
        </div>
        <div className={styles.slide}>
            <Image src={bankIndustry} alt="DSA" />
        </div>
        <div className={styles.slide}>
            <Image src={agrited} alt="SADSA" />
        </div>
    </div>
</div>
</div>
  );
};

export default Caroussel;