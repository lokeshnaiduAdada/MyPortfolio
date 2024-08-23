import './contact.css';
import { motion } from "framer-motion"
const Contact=()=>{
    const clickEvent=()=>{
        return(
            alert("response sended")
        )
    }
    return(
        <motion.section
            initial={{ y: 250, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7,type:'spring',stiffness:220,bounce:'0.6' }}       className="contact_grid" id='contact_container'>
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
                            <form>
                                <div>
                                    <label>Email: </label>
                                    <input type="email" placeholder="example@gmail.com" name="from_name" required="" ></input>
                                </div>
                                <div class="each-input">
                                    <label>Subject: </label>
                                    <input type="text" placeholder="Reaching out regarding..." name="subject" required="" ></input>
                                </div>
                                <div>
                                    <label>Message: </label>
                                    <textarea placeholder="Enter your message" name="message" required="" ></textarea>
                                </div>
                                {/* <button type="submit" onClick={clickEvent()}>Send</button> */}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </motion.section>
    )
}
export default Contact;