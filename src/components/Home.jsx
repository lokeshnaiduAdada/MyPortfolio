import react from 'react'
import { FaGithub } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";
import { BsWhatsapp } from "react-icons/bs";
import { motion } from 'framer-motion';
import './homestyle.css';

const Home=()=>{
    return(
        <motion.section 
            initial={{y :-200,opacity:0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            // animate={{opacity: 1, y: 0}}
            transition={{ duration: 0.7,type:'spring',stiffness:220}}
        className="home-grid">
            <div className="home_section">
                <div className='home'>
                    <div className='home_content'>
                        <div className='home_content_left'>
                            <div>
                                <h1 style={{color:'red'}}><b>Java Fullstack Developer</b></h1>
                            </div>
                            <div>
                                <p>Hi..My name is Adada Lokesh.I am passionate on fullstack Developer.</p>
                            </div>
                            <div className='hero_details'>
                            <motion.div whileHover={{scale:1.5}}>
                                <a href='https://www.linkedin.com/in/lokesh-adada-7709a3225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
                                    
                                    <TfiLinkedin style={{fontSize:"30px",color:'black',background:'blue'}}/>
                                </a>
                            </motion.div>
                            <motion.div whileHover={{scale:1.5}}>
                                <a href='https://github.com/lokeshnaiduAdada'>
                                    <FaGithub style={{fontSize:"30px",color:'black'}}/>
                                </a>
                            </motion.div>
                            <motion.div whileHover={{scale:1.5}}>
                                <a href='https://wa.me/8985356566'>
                                    <BsWhatsapp style={{fontSize:"30px",color:'green'}}/>
                                </a>
                            </motion.div>
                        </div>
                        </div>
                        
                        <div className='home_content_right'>
                            <img src="profile.jpg" alt='error' ></img>
                        </div>
                    </div>
                    <div className='tech_stack_container'>
                        <motion.div 
                            initial={{opacity:0,x:-100}}
                            whileInView={{opacity:1,x:0}}
                            // animate={{opacity:1,x:0}}
                            transition={{duration:0.8, type:'spring',stiffness:520}}
                        className='tech_stack_frontend'>
                            <div className='tech_stack_frontend_title'>
                                <b style={{fontSize:'20px',color:"black"}}>Front-End: </b>
                            </div>
                            <div>
                                <img src='html.svg' alt='html_logo' style={{width:35}}></img>
                            </div>
                            <div>
                                <img src='css.svg' alt='css_logo' style={{width:35}}></img>
                            </div>
                            <div>
                                <img src='javascript.svg' alt='javascript_logo' style={{width:35}}></img>
                            </div>
                            <div>
                                <img src='react.svg' alt='react_logo' style={{width:35}}></img>
                            </div><br></br>
                        </motion.div>
                        <motion.div 
                            initial={{opacity:0,x:-100}}
                            whileInView={{opacity:1,x:0}}
                            // animate={{opacity:1,x:0}}
                            transition={{duration:0.8, type:'spring',stiffness:520}} className="tech_stack_backend">
                            <div className='tech_stack_backend_title'>
                                <b style={{fontSize:'20px',color:"black"}}>Back-End: </b>
                            </div>
                            <div>
                                <img src='java.svg' alt='java_logo'style={{width:50,paddingLeft:'20px'}}></img>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}
export default Home;