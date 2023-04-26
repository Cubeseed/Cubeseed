import React from 'react';
import styles from './about.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import { useEffect} from "react";
import LogoAbout from "../../icons/logoAbout.svg"
import tractor from "../../images/tractor.svg"
import security from "../../icons/security.svg"
import conectivity from "../../icons/conectivity.svg"
import transparency from "../../icons/transparency.svg"
import philosophy from "../../images/philosophy.svg"
import mission from "../../images/mission.svg"
import farmer from "../../images/farmer.svg"
import processor from "../../images/agro-processor.svg"
import investor from "../../images/agro-investor.svg"
import service from "../../images/agro-service.svg"
import producer from "../../images/farm-producer.svg"
import buyer from "../../images/farm-buyer.svg"
import Carousel from 'react-bootstrap/Carousel';
import Caroussel from '@/components/Company_caroussel/caroussel';


const About: React.FC = () => {
    const [isSlideIn, setSlideIn] = React.useState(false);

    const slide = () => {
      setSlideIn(!isSlideIn);
  }
    
      useEffect(() => {
          slide()
      }, []);

 

  return (
  <div>
    <div className={styles.main_about_container}>
      <div className={styles.about_container}>
      <h3>Welcome to</h3>
      <Image src={LogoAbout} alt='logo'/>
      <p>A new way to Farm and invest
           in Agriculture in Africa</p>
      </div>
           <div className={styles.join_link}>
            <div className={styles.join_wait}>
                <h3>Join Waitlist Now</h3>
                <span>for free premium status your first year!</span>
            </div>
           </div>
           <div className={styles.tractor_image}>
           <Image src={tractor}  alt='tractor'/>
           </div>
        </div>
          <div className={styles.offers_main}>
          <div className={styles.offers}>
                    <h2>Our Core Offering</h2>
                    <span>
                Cubeseed is a mobile and web-based application that
                operates on a contract-driven virtual marketplace to facilitate agro-trade and enhance agricultural production,    
                empower farmers, and to providing investment security
            </span>
                            <div className={styles.offers_icons}>
                                  <div>
                                    <Image src={security} alt='security'/>
                                    <p>Security</p>
                                  </div>
                                  <div>
                                    <Image src={conectivity} alt='conectivity'/>
                                    <p>Conectivity</p> 
                                  </div>
                                  <div>
                                      <Image src={transparency} alt='transparency'/>
                                      <p>Transparency</p>
                                  </div>
                            </div>
                        
            </div>
          </div>
          <div className={styles.containers}>
            <div className={styles.our_philosphy_container_main}>
              <div className={styles.our_philosphy_container}>
              <h4>Our Philosophy</h4>
              <p>We are absolutely committed to cutting out middlemen entirely from agro-commerce and ensuring that we do not become a middlemen service. Our unwavering dedication to providing direct access between farmers and markets is at the core of our mission. We are focused on creating a robust infrastructure that not only promotes agricultural production but also ensures food quality, affordability and security while prioritizing environmentally sustainable practices.</p>
            </div>
            <div className={styles.our_philosphy_image}>
              <Image src={philosophy} alt='philosophy'/>
            </div>
            </div>
            <div className={styles.our_philosphy_container_main}>
            <div className={styles.our_mission_image}>
              <Image src={mission} alt='mission'/>
            </div>
            <div className={styles.our_mission_container}>
              <h4>Mission</h4>
              <p>Through technology we create platform that provides secure investment options with measures such as smart contract, insurance and escrow services. The platform connects farmers to agro-input,agro-services, processors, investors and consumers through a digital marketplace, leading to better prices and increased income for farmers.</p>
            </div>
            </div>
          </div>
            <div className={styles.testimonials_main}>
            <div className={styles.testimonials_title}>
                  <h3>Testimonials</h3>
             </div>
            <Carousel indicators={false} interval={null} fade>
           <Carousel.Item>
                    <div className={styles.testimonials_container}>
                          <div className={styles.testimonials_left}>
                              <Image src={farmer}  alt='farmer'/>
                              <h6>ABASI</h6>
                              <p>Farmer</p>
                          </div>
                        <div className={styles.testimonials_text}>
                            <p>Once upon a time, there was a farmer in rural Africa named Abasi. Abasi had always dreamed of becoming a successful farmer and providing for his family through agriculture. However, Abasi struggled with finding reliable markets to sell his crops and livestock, and accessing the necessary resources to improve his yields, most especially finance to increase his capacity to meet an overwhelming demand.</p>
                            <p>Abasi had heard about Cubeseed, a mobile and web-based application that operates on a contract-driven virtual marketplace to facilitate trade and enhance agricultural production by empowering farmers, and safeguarding the interests of investors and stakeholders. Abasi decided to give it a try, and he was pleasantly surprised by what he found.</p>
                          <p> With Cubeseed, Abasi was able to access a secure and transparent platform that connected him directly to buyers, eliminating the need for intermediaries and allowing him to receive fair prices for his crops and livestock. Furthermore, Cubeseed provided Abasi with access to agro-inputs, service providers, market information, experienced farmers network and agricultural e-learning that improved his productivity and efficiency. By improving his profit margin and providing fair remuneration to his staff, he found that Cubeseed  made farming more appealing. As a result Read more</p>
                          </div>     
                        </div> 
                        </Carousel.Item>

                  <Carousel.Item>
                    <div className={styles.testimonials_container} >
                            <div className={styles.testimonials_left}>
                                <Image src={processor}  alt='processor'/>
                                <h6>FATIMA</h6>
                                <p>Agro-processor</p>
                            </div>
                          <div className={styles.testimonials_text}>
                              <p>Fatima is an agro-processor in Nigeria who faces various challenges in her business. These include limited access to reliable suppliers for raw materials, difficulties in market access, and supply chain management issues. However, she found a solution to her problems through Cubeseed, a virtual marketplace that connects her with farmers with large volumes of farm produce within an accessible location. This allowed her to transition from merchandising agricultural products to developing her technical capabilities and capacity to convert farm produce into high-quality semi-finished or finished goods and storage services, thereby reducing post-harvest losses. Cubeseed also provides a secure platform for transactions, offering real-time processing schedules, farm produce offtake, and dispatch information, as well as detailed information on the movement of goods through the supply chain. Fatima makes income from processing and storage fee rather than merchandizing, she is prioritizing quality assurance for agricultural produce by using adopting new technology for processing and storage and promoting environmentally friendly practices and contributing to the development of the agricultural sector in Africa. Thanks to Cubeseed, Fatima has built a successful agro-processing business, which she plans to expand by constructing processing plants in locations with large farm clusters and deficient processing facilities.
                              </p>
                            </div>  
                            </div>
                    </Carousel.Item>
                    
                        <Carousel.Item>
                            <div className={styles.testimonials_containers_slider}  >
                                  <div className={styles.testimonials_left}>
                                      <Image src={investor}  alt='investor'/>
                                      <h6>TUNDE</h6>
                                      <p>Agro-investor</p>
                                  </div>
                                <div className={styles.testimonials_text}>
                                    <p>Tunde, a successful businessman in Ghana, aims to diversify his investment portfolio by exploring the potential of the agricultural sector. However, he faces several challenges, including difficulties in finding reliable information, managing his investments, accessing market opportunities, and ensuring sustainability.
                                        Fortunately, Cubeseed offers a solution that addresses all his concerns. Notably, Cubeseed adopts an insurance policy for all investments made on the platform, which guarantees that Tunde's investments are protected against any possible risks. Tunde can verify the insurance policy, which provides him with peace of mind and reinforces his confidence in the platform.
                                        With Cubeseed's virtual marketplace, Tunde can access a range of agricultural investment opportunities, evaluate the potential returns, and reduce his risk through the financial analysis tools. He can also monitor the entire investment process using his mobile app and access real-time updates on the progress of his investments.
                                        Cubeseed's sustainable investment options further align with Tunde's values and provide him with opportunities to contribute to the development of the agricultural sector in Africa. Through Cubeseed, Tunde can overcome his investment challenges and build a successful investment portfolio with reduced risks.
                                    </p>
                                  </div>  
                                  </div>
                                  </Carousel.Item>

                                  <Carousel.Item>
                                      <div className={styles.testimonials_containers_slider}  >
                                      <div className={styles.testimonials_left}>
                                          <Image src={service}  alt='service'/>
                                          <h6>MUSA</h6>
                                          <p>Agro service provider</p>
                                      </div>
                                    <div className={styles.testimonials_text}>
                                        <p>Musa is an agro-service provider in Ghana who faces challenges in reaching a wider audience, tracking the success of his services, and managing his finances. With limited options for promoting his services and difficulty tracking the impact of his work, Musa turns to Cubeseed, a virtual marketplace that connects him with verified farmers across Africa. With Cubeseed, Musa can promote his services to a wider audience and track the success of his work more effectively, while also having access to secure transactions and financial management tools. By building a more stable and sustainable business, Musa can contribute to the sustainable development of the agricultural sector in Africa.</p>
                                      </div>  
                                      </div>
                                </Carousel.Item>
                                    
                                  <Carousel.Item>
                                      <div className={styles.testimonials_containers_slider}  >
                                      <div className={styles.testimonials_left}>
                                          <Image src={producer}  alt='producer'/>
                                          <h6>KOFI</h6>
                                          <p>Farm producer</p>
                                      </div>
                                    <div className={styles.testimonials_text}>
                                        <p>Kofi is a small-scale agricultural input producer in Ghana, struggling to expand his business and reach more farmers due to challenges with marketing, transparency, and financing. However, he discovers Cubeseed, a digital marketplace that directly connects him with farmers seeking his high-quality agro- inputs. With Cubeseed, Kofi can easily list his products, reach more customers, and build trust through transparent transactions and feedback systems. Additionally, Cubeseed offers financing options, allowing Kofi to invest in his business and take advantage of new opportunities. Thanks to Cubeseed, Kofi can overcome his obstacles and create a more sustainable and prosperous agricultural sector in Ghana</p>
                                      </div>  
                                      </div> 
                                </Carousel.Item>

                                      <Carousel.Item>
                                          <div className={`${styles.testimonials_containers_slider} ${isSlideIn ? `${styles.show}` : null}`} >
                                          <div className={styles.testimonials_left}>
                                              <Image src={buyer}  alt='buyer'/>
                                              <h6>AMAKA</h6>
                                              <p>Farm buyer</p>
                                          </div>
                                        <div className={styles.testimonials_text}>
                                            <p>Amaka is a young entrepreneur in Nigeria who wants to establish a restaurant business focused on selling African cuisine made with fresh farm produce. However, she faces challenges in finding reliable suppliers of high-quality produce and with logistics and transportation. She often has to buy from middlemen and travel long distances to purchase produce, which drives up costs and reduces profit margins, and has limited options for transporting the produce to customers, leading to spoilage and waste.</p>
                                          <p>Thanks to Cubeseed, Amaka can access a digital marketplace that connects her directly with farmers who produce high-quality fruits and vegetables. She can easily search for suppliers, view market price trends, and negotiate fair prices, which helps her save money and increase profit margins. Cubeseed also provides a secure platform for transactions, ensuring the quality of the produce and the fairness of the prices, reducing the risk of fraud or miscommunication.</p>
                                          <p>Moreover, Cubeseed offers logistics and transportation solutions, enabling Amaka to find reliable transport providers and schedule deliveries, reducing waste and saving time. With direct-to-farm procurement, Amaka can manage her inventory more efficiently, connect with reliable suppliers, reduce costs, and increase profit margins. Additionally, she can access a wider farm cluster and reach more farmers, contributing to the development of the agricultural sector in Nigeria as a reliable buyer.
                                            </p>
                                          </div>  
                                          </div>  
                                      </Carousel.Item>
                                </Carousel>              
                          </div>
                      <Caroussel />
              </div>     
 
      
  );
};

export default About;