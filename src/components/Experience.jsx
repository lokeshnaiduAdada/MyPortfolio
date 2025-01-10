import './Experience.css';
import { motion } from 'framer-motion'; 
import { AiFillCaretRight } from "react-icons/ai";
const Experience=()=>{
    return(
        <section className="exp_grid" id="exp_container">
            <div className="exp_section">
                <h2>EXPERIENCE</h2>
                <motion.div 
                initial={{opacity:0,x:-100}}
                whileInView={{opacity:1,x:0}}
                transition={{duration:0.7,type:'spring',stiffness:220}}
                className="exp_content">
                    <div className='exp_company2'>
                        <div>
                            <h2 style={{color:"red",marginBlockStart:"0.50em",marginBlockEnd:"0.50em"}}>Full Stack Internship</h2>
                        </div>
                        <div>
                            <h3 style={{marginBlockStart:"0.50em",marginBlockEnd:"0.50em"}}>CodTech IT solutions, [June, 2024] - [sep, 2024]</h3>
                        </div>
                        <div>
                            <ul style={{ color: 'gray', fontWeight: 500, listStyleType: 'disc', paddingLeft: '20px' }}>
                                <li>Developed and maintained dynamic, high-performance web applications using Java, ReactJS, Spring Boot,Spring Cloud and Hibernate, enhancing user experience and application functionality.</li>
                                <li>Gained hands-on experience in debugging, optimizing, and deploying code to production environments, ensuring reliable and efficient system performance.</li>
                                <li>Acquired Thererical knowledge of microservices architecture, improving understanding of distributed systems and enabling scalable, modular application design.</li>
                                <li>Collaborated with a team of developers to deliver scalable back-end solutions, boosting system performance by 25% through optimization and architectural improvements.</li>
                                <li>Earned certifications in Java Full Stack Development, demonstrating a strong commitment to continuous learning and staying updated with emerging technologies.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='exp_company1'>
                        <div>
                            <h2 style={{color:"red",marginBlockStart:"0.50em",marginBlockEnd:"0.50em"}}>Full Stack Intern</h2>
                        </div>
                        <div>
                            <h3 style={{marginBlockStart:"0.50em",marginBlockEnd:"0.50em"}}>Sathya Technology, [June, 2023] - [Dec, 2023]</h3>
                        </div>
                        <div>
                        <ul style={{ color: 'gray', fontWeight: 500, listStyleType: 'disc', paddingLeft: '20px' }}>
                                <li>Gained hands-on experience in Java Full Stack development, working with technologies such as Java, Spring Framework, Hibernate, JavaScript, HTML/CSS, and SQL.</li>
                                <li>Actively contributed to project development, collaborating with peers to build dynamic web applications, integrating both front-end and back-end components.</li>
                                <li>Focused on enhancing user experience through JavaScript, HTML/CSS, and responsive design, while building robust server-side logic using Spring Boot and Hibernate.</li>
                                <li>Developed expertise in database management and RESTful API integration, improving application functionality and performance.</li>
                                <li>Recognized for dedication to learning and growth, earning certifications in Java Full Stack Development, which showcased my ability to master diverse technologies.</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
export default Experience;