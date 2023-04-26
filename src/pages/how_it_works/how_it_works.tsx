import React from 'react';
import styles from "./how_works.module.scss"
import Image from 'next/image';
import leftLeaves from "../../icons/left-leaves.svg"
import rightLeaves from "../../icons/right-leaves.svg"



const How: React.FC = () => {
 

  return (
<div>
<div className={styles.main_header}>
    <div className={styles.header_container}>
    <Image className={styles.left_leaves} src={leftLeaves} alt='left' /> 
    <div  className={styles.header_title}>
    <h3>How it works</h3> 
    <p>Welcome to Cubeseed!  We are thrilled to have you as part of our virtual marketplace for agricultural trade. Our platform is designed to empower farmers and improve agricultural production while providing security for all parties involved. To ensure a seamless onboarding process, we have outlined the following steps: </p>
    </div>
    </div>
    <div className={styles.right_leaves}>
    <Image src={rightLeaves} alt='leaves'/>     
    </div>   
</div>

<div className={styles.how_main_container}>
    <div className={styles.steps_register_container}>
        <p>Step 1</p>
    </div>
    <div className={styles.how_register_container}>
        <h3>Register and create your account </h3>
        <p>To get started, you will need to visit our website and click on the "Sign up" button. You will be prompted to fill in your details and create a unique username and password. </p>
    </div>
    <div className={styles.steps_familiar_container}>
        <p>Step 2</p>
    </div>
    <div className={styles.how_familiar_container}>
        <h3>Familiarize yourself with the platform </h3>
        <p>Once you have registered, take some time to explore our platform and familiarize yourself with its features. We have six user types on our platform, namely farmer, market manager, investor, input manufacturer, service provider, and processor. Each user has a unique dashboard that allows them to perform specific tasks.</p>
    </div>
    <div className={styles.steps_transact_container}>
        <p>Step 3</p>
    </div>
    <div className={styles.how_transact_container}>
        <h3>Connect and transact with other users</h3>
        <ul>
            <li>
            As a farmer, you can connect with buyers, accept purchase orders, and deliver the requested agro-produce. You can also procure and pay for agro-inputs from input manufacturers, receive and pay for services from service providers, and book processing schedules with processors.</li>  
            <li>On the other hand, market managers/buyers can access several farmers, issue purchase orders, and monitor the transaction progress of farmers before delivery. </li>
            <li>Investors can view and pay for resources needed by farmers and monitor the progress of the farm in real-time while input manufacturers can connect with farmers to sell and receive payment for their agro-inputs. </li> 
            <li>Service providers can connect with farmers to render and manage services and issue invoices for payment.</li>  
            <li>Input manufacturers can connect with farmers to render and manage orders and issue invoices for payment.</li>  
            <li>Processors can connect with farmers, view farm schedules for processing, manage inventory in storage, and manage logistics for the delivery of goods.  
            </li>
        </ul>
    </div>
    <div className={styles.steps_management_container}>
        <p>Step 4</p>
    </div>
    <div className={styles.how_management_container}>
        <h3>Utilize our management systems</h3>
        <p>To make the most of our platform, we have management systems designed for each user type. These systems include the Farmer Management System, Market Management System, Investor Management System, Input Management System, Service Provider Management System, and Processor Management System. These systems allow you to perform specific tasks and manage your transactions easily.</p>
    </div>
    <div className={styles.steps_support_container}>
        <p>Step 5</p>
    </div>
    <div className={styles.how_support_container}>
        <h3>Get support when needed </h3>
        <p>We understand that you may have questions or encounter challenges while using our platform. Our support team is available to assist you 24/7. You can reach out to us via email, live chat, or phone call.</p>
    </div>
    <div className={styles.how_main}>
        <p>We hope this onboarding process will help you get started on our platform with ease. We look forward to working with you to improve the agricultural industry. </p>
    <div className={styles.button_waitlist}>
        <button>Join Waitlist</button>
    </div> 
    </div>
</div> 

</div>   
 
      
  );
};

export default How;