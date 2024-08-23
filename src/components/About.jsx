import './About.css';
import { motion } from 'framer-motion';
const About=()=>{
    return (
        <section className="about_grid" id="about_container">
             <section className='about_section'>
                <motion.div 
                initial={{opacity:0,x:100}}
                whileInView={{opacity:1,x:0}}
                // animate={{opacity:1,x:0}}
                transition={{duration:0.7,type:'spring',stiffness:220}}
                className='about_content'>
                    <div className='about_content_image'>
                        <img src="java_Fullstack.jpg"></img>
                    </div>
                    <div className='about_me'>
                        <h2>ABOUT ME</h2>
                        <p> I am a passionate full-stack developer with expertise in Front-End like HTML, CSS, JavaScript, React.js and Back-End like Java with Spring Boot framework. Dedicated to bringing ideas to life through web applications, I thrive on turning concepts into robust and scalable solutions that not only meet technical requirements but also exceed user expectations.</p>
                    </div>
                </motion.div>
             </section>
        </section>
    )
}
export default About;