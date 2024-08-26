import './contact.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser'
import { motion } from "framer-motion"
const Contact=()=>{

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
      .sendForm('service_3ep98va', 'template_y04j9dj', 
            form.current, {
                publicKey: 'zlzZEb_hjhRQGcOkd',
            }
        )
        .then(
          (result) => {
            alert("Response Sended...");
          },
          (error) => {
            alert('FAILED...', error.text);
          },
        );
    };
    
    return(
        <motion.section
            initial={{ y: 250, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7,type:'spring',stiffness:220,bounce:'0.6' }}       
            className="contact_grid" id='contact_container'>
            <section className="contact_section">
                <div className='contact_content'>    
                    <h1 className='contact_heading'>CONTACT US</h1>
                    <div className="contact_me">
                        <div className="contact_left">
                            <p >
                                Feel free to reach out for job opportunities as I'm a recent graduate looking for oppurtunities, or any inquiries related to my work. I'm excited to connect with fellow professionals in Web Technologies.
                            </p>
                        </div>
                        <div className="contact_right">
                            <form ref={form} onSubmit={sendEmail}>
                                <div>
                                    <label>Email: </label>
                                    <input type="email" placeholder="example@gmail.com" name="user_email" required="" ></input>
                                </div>
                                <div class="each-input">
                                    <label>Subject: </label>
                                    <input type="text" placeholder="Reaching out regarding..." name="user_subject" required="" ></input>
                                </div>
                                <div>
                                    <label>Message: </label>
                                    <textarea placeholder="Enter your message" name="user_message" required="" ></textarea>
                                </div>
                                <div>
                                    <motion.button whileHover={{scale:1.3}}  type="submit" >Send</motion.button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </motion.section>
    )
}
export default Contact;