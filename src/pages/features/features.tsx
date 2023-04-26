import React from 'react';
import styles from './features.module.scss'
import Image from 'next/image';
import land from "../../images/land.svg"
import beans from "../../images/beans.svg"
import resources from "../../images/resource.svg"
import market from "../../images/market.svg"
import sustainability from "../../images/sustainability.svg"
import risk from "../../images/risk.svg"
import collaborations from "../../images/collaborations.svg"
import transparency from "../../images/transparency.svg"
import { motion, AnimatePresence } from "framer-motion";
import { useEffect} from "react";
import Header from '../../components/Header/header';





const Features: React.FC = () => {
    const sliderRef = React.useRef<HTMLDivElement>(null);
    const [isSlideIn, setSlideIn] = React.useState(false);


    const slideInVariants = {
        hidden: { opacity: 0, x: -1000 }, // starting position
        visible: { opacity: 1, x: 0 }, // ending position
      };
    
      useEffect(() => {
        const handleScroll = () => {
            if (sliderRef.current) {
              const rect = sliderRef.current.getBoundingClientRect();
              const isVisible = rect.top < window.innerHeight || rect.bottom >= 0;
              if (isVisible) {
                setSlideIn(true);
              } else {
                setSlideIn(false);
              }
            }
          };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

 

  return (
    <>
    <Header />
        <div className={styles.main_features_container}>
    <AnimatePresence>
    <motion.div  
      initial="hidden"
      animate={isSlideIn ? "visible" : "hidden"}
      variants={slideInVariants}
      transition={{ duration: 0.9 }} 
            className={styles.land_main}>
                <div className={styles.land}>
                    <h4>Increased efficiency</h4>
                    <p>A technology platform can help farmers optimize their operations by providing real-time data on weather, soil moisture, and other factors that can affect crop growth. This can help them make informed decisions on when to plant, fertilize, and harvest crops, leading to increased efficiency.</p>

                </div>
                <div className={styles.land_picture}>
                     <Image src={land} alt='land'/>
                </div>
            </motion.div>
            <motion.div className={styles.beans_main} ref={sliderRef}
                initial="hidden"
                animate={isSlideIn ? "visible" : "hidden"}
                variants={slideInVariants}
                transition={{ duration: 0.9 }}  >
                <div className={styles.beans_picture}>
                    <Image src={beans} alt='beans'/>
                </div>
                <div className={styles.beans}>
                     <h4>Improved productivity</h4>
                    <p>With the help of technology, farmers can monitor crop growth and health, and detect issues such as pest infestations or nutrient deficiencies early on. This can help them take corrective measures quickly, leading to improved crop yields and productivity.</p>
                </div>
            </motion.div>
            <motion.div ref={sliderRef}
                initial="hidden"
                animate={isSlideIn ? "visible" : "hidden"}
                variants={slideInVariants}
                transition={{ duration: 0.9 }}   className={styles.resource_main}>
                <div className={styles.resource}>
                    <h4>Better resource management</h4>
                    <p>A technology platform can help farmers optimize their use of resources such as water, fertilizer, and energy. By using data-driven insights, farmers can reduce waste and improve resource efficiency, leading to cost savings and environmental benefits.</p>

                </div>
                <div className={styles.resource_picture}>
                     <Image src={resources} alt='resource'/>
                </div>
            </motion.div>
            <motion.div ref={sliderRef}
                initial="hidden"
                animate={isSlideIn ? "visible" : "hidden"}
                variants={slideInVariants}
                transition={{ duration: 0.9 }}   className={styles.market_main} >
                <div className={styles.market_picture}>
                    <Image src={market} alt='market'/>
                </div>
                <div className={styles.market}>
                     <h4>Enhanced market access</h4>
                    <p>A technology platform can provide farmers with access to market information, helping them make informed decisions about what crops to grow and when to sell them. This can lead to improved market access and higher profitability.</p>
            </div>
            </motion.div>
            <motion.div ref={sliderRef}
                initial="hidden"
                animate={isSlideIn ? "visible" : "hidden"}
                variants={slideInVariants}
                transition={{ duration: 0.9 }}   className={styles.sustainability_main} >
                <div className={styles.sustainability}>
                    <h4>Improved sustainability</h4>
                    <p>With the help of technology, farmers can adopt sustainable practices such as precision agriculture, which involves using data-driven insights to optimize crop inputs and reduce waste. This can help reduce the environmental impact of agriculture, leading to more sustainable farming practices. </p>
                </div>
                <div className={styles.sustainability_picture}>
                     <Image src={sustainability} alt='sustainability'/>
                </div>
            </motion.div>
            <motion.div ref={sliderRef}
                initial="hidden"
                animate={isSlideIn ? "visible" : "hidden"}
                variants={slideInVariants}
                transition={{ duration: 0.9 }}   className={styles.risk_main} >
                <div className={styles.risk_picture}>
                    <Image src={risk} alt='risk'/>
                </div>
                <div className={styles.risk} >
                     <h4>Better risk management</h4>
                    <p>A technology platform can help farmers manage risks such as weather-related events, pest outbreaks, or market fluctuations.
                    By using data to identify potential risks and taking proactive measures to mitigate them, farmers can improve their resilience
                    and adaptability.</p>
                </div>
            </motion.div>
            <motion.div ref={sliderRef}
                initial="hidden"
                animate={isSlideIn ? "visible" : "hidden"}
                variants={slideInVariants}
                transition={{ duration: 0.9 }}  className={styles.collaborations_main} >
                <div className={styles.collaborations}>
                    <h4>Increased collaboration</h4>
                    <p>A technology platform can facilitate collaboration among farmers, researchers, and other stakeholders in the agricultural ecosystem. This can help share knowledge and best practices, leading to greater innovation and improved outcomes for all participants.</p>

                </div>
                <div className={styles.collaborations_picture}>
                     <Image src={collaborations} alt='collaborations'/>
                </div>
            </motion.div>
            <motion.div  ref={sliderRef}
                initial="hidden"
                animate={isSlideIn ? "visible" : "hidden"}
                variants={slideInVariants}
                transition={{ duration: 0.9 }}  className={styles.transparency_main} >
                <div className={styles.transparency_picture}>
                    <Image src={transparency} alt='transparency'/>
                </div>
                <div className={styles.transparency}>
                     <h4>Enhanced transparency</h4>
                    <p>With the help of technology, farmers can improve transparency in their operations by providing real-time data on their farming practices, crop yields, and environmental impact. This can help build trust with consumers and other stakeholders, leading to improved market access and better overall outcomes for the
                        agricultural ecosystem.</p>
                </div>
            </motion.div> 
        
            </AnimatePresence>
        </div>
    </>
  );
};

export default Features;