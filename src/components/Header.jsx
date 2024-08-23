import './headerstyle.css';
import './header_gif.mp4'
import { FiAlignJustify } from "react-icons/fi";
import { useState } from 'react';
import { motion } from 'framer-motion';

const Header=()=>{
    const[openmenu,setOpenMenu]=useState(false);
    const openClick=()=>{
        setOpenMenu(!openmenu);
    };
    
    return(
        <section className="Header-grid">
            <div className="header">
                <div className="header_name"><b>Adada Lokesh</b></div> 
                <div className='navbar_section'>
                    <ul className={openmenu ? 'open' : 'close'}>
                        <motion.li whileHover={{scale:1.1}}>
                            <a href='/' >Home</a>
                        </motion.li>
                        <motion.li
                        whileHover={{scale:1.1}}>
                            <a href="#about_container" >About</a>
                        </motion.li>
                        <motion.li
                        whileHover={{scale:1.1}}>
                            <a href='https://drive.google.com/file/d/1tzzAYX7_kDsdaryu_IPiZqu_tcAO4gAQ/view?usp=sharing'>Resume</a>
                        </motion.li>
                        <motion.li
                        whileHover={{scale:1.1}}>
                            <a href='#exp_container' >Experience</a>
                        </motion.li>
                        <motion.li
                        whileHover={{scale:1.1}}>
                            <a href='#project_container' > Projects</a>
                        </motion.li>
                        <motion.li
                        whileHover={{scale:1.1}}>
                            <a href='#contact_container' >Contact</a>
                        </motion.li>
                    </ul>
                </div>
                <div className='open_menu'>
                    <button onClick={openClick}>
                        <FiAlignJustify />
                    </button>
                </div>
            </div>
        </section>
    )
}
export default Header;