import React from 'react';
import styles from './header.module.scss'
import Image from 'next/image';
import leftLeaves from "../../icons/left-leaves.svg"
import rightLeaves from "../../icons/right-leaves.svg"

const Header: React.FC = () => {
  return (
        <div className={styles.main_header}>
            <div className={styles.header_container}>
            <Image className={styles.left_leaves} src={leftLeaves} alt='left' /> 
            <div  className={styles.header_title}>
            <h3>Why Cubeseed</h3> 
            <p>A technology platform that supports the agricultural ecosystem that provide numerous benefits, including improved efficiency, productivity, resource management, market access, sustainability, risk management, collaboration, and transparency.</p>
            </div>
            </div>
            <div className={styles.right_leaves}>
            <Image src={rightLeaves} alt='leaves'/>     
            </div>   
        </div>
  );
};

export default Header;